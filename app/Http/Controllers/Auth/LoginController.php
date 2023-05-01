<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function show()
    {
        return Inertia::render('Auth/Login');
    }

    public function signin(LoginRequest $request)
    {
        $user = User::where('email', $request->email)->first();

        if (! $user or ! Hash::check($request->password, $user->password)) {
            return redirect()->route('auth.login.show')->withErrors([
                'email' => 'Хуй',
            ]);
        }

        Auth::login($user);

        return redirect()->route('tasks.index');
    }

    public function signout()
    {
        Auth::logout();

        return redirect()->route('auth.login.show');
    }
}
