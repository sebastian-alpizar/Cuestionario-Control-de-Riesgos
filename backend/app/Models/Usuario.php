<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Authenticatable
{
    use HasFactory;
    use HasApiTokens;
    use Notifiable;

    protected $table = 'usuarios';
    protected $primaryKey = 'usuario_id';
    public $incrementing = false;     
    protected $keyType = 'string';     

    protected $fillable = [
        'empresa',
        'responsable',
        'usuario_id',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function getAuthIdentifierName() {
        return 'usuario_id';
    }

    // **Método para obtener el identificador de autenticación**
    public function getAuthIdentifier()
    {
        return $this->usuario_id;
    }

    // **Método para obtener la contraseña de autenticación**
    public function getAuthPassword()
    {
        return $this->password;
    }

    // **Método para recordar token (opcional pero recomendado)**
    public function getRememberToken()
    {
        return $this->remember_token;
    }

    public function setRememberToken($value)
    {
        $this->remember_token = $value;
    }

    public function getRememberTokenName()
    {
        return 'remember_token';
    }
}