<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Usuario;

use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'empresa' => 'nullable|string|max:255',
            'responsable' => 'nullable|string|max:255',
            'usuario_id' => 'required|string|unique:usuarios,usuario_id',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $usuario = Usuario::create([
            'empresa' => $request->empresa,
            'responsable' => $request->responsable,
            'usuario_id' => $request->usuario_id,
            'password' => Hash::make($request->password),
        ]);

        // ✅ Para Sanctum, NO usar Auth::login() - usar tokens o sesión via sanctum
        Auth::login($usuario); // Esto está bien para sesiones con sanctum

        return response()->json([
            'message' => 'Usuario registrado', 
            'usuario' => $usuario
        ], 201);
    }

    public function login(Request $request)
{
    $credentials = $request->validate([
        'usuario_id' => 'required|string',
        'password' => 'required|string',
    ]);

    Log::info('Login attempt', ['usuario_id' => $credentials['usuario_id']]);

    if (!Auth::attempt($credentials)) {
        Log::warning('Login failed - invalid credentials');
        return response()->json([
            'message' => 'Credenciales inválidas'
        ], 422);
    }

    $usuario = Auth::user();
    $request->session()->regenerate();

    Log::info('Login successful', [
        'user_id' => $usuario->usuario_id,
        'session_id' => $request->session()->getId(),
        'session_data' => $request->session()->all()
    ]);

    return response()->json([
        'message' => 'Authenticated', 
        'usuario' => $usuario
    ]);
}

    public function user(Request $request)
{
    Log::info('=== USER METHOD CALLED ===', [
        'session_id' => $request->session()->getId(),
        'has_user' => $request->user() ? 'YES - ' . $request->user()->usuario_id : 'NO',
        'auth_check' => Auth::check() ? 'YES' : 'NO',
        'auth_user' => Auth::user() ? Auth::user()->usuario_id : 'NO',
        'headers' => [
            'cookie' => $request->header('cookie'),
            'user-agent' => $request->header('user-agent'),
        ]
    ]);

    $user = $request->user();
    
    if (!$user) {
        Log::warning('No user authenticated in sanctum middleware');
        return response()->json([
            'message' => 'No autenticado'
        ], 401);
    }

    return response()->json([
        'usuario' => $user
    ]);
}

    public function logout(Request $request)
    {
        // ✅ Logout estándar para sanctum
        Auth::logout();
        
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }
}