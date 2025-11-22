<?php
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PreguntaController;
use App\Http\Controllers\Api\EvaluacionController;

use Illuminate\Support\Facades\Route;

// Rutas públicas
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);
Route::get('/preguntas', [PreguntaController::class, 'index']);

// Rutas privadas
Route::middleware('auth:sanctum')->group(function() {
    Route::get('/auth/user', [AuthController::class, 'user']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::post('/evaluaciones', [EvaluacionController::class, 'store']);
    Route::get('/evaluaciones', [EvaluacionController::class, 'index']);
});