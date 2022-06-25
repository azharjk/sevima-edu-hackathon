<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Http\Resources\TokenResource;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $username = $request->only('username');

        $user = User::where('username', $username)->first();

        if (! $user || $user->password == $request->only('password')) {
            // FIXME: Handle user not found
            return 'FIXME: Handle user not found';
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return new TokenResource($token);
    }
}
