<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Http\Resources\TokenResource;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        // FIXME: Handle already created username
        $user = User::create($request->only('username', 'password'));
        $token = $user->createToken('token-auth')->plainTextToken;
        return new TokenResource($token);
    }
}
