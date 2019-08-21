<?php

namespace App\Http\Controllers;
use App\Http\Requests\CreateAccount;
use App\Http\Requests\ResetPassword;
use App\User;
use Illuminate\Support\Facades\Auth;

class AccountsController extends Controller
{
    public function index() {
        return view('create-account');
    }

    public function login() {
        return view('login');
    }

    public function logout() {
        Auth::logout();

        return redirect('/');
    }

    public function settings()
    {
        return view('settings');
    }

    public function reset_password(ResetPassword $request) {
        $user = [
            'email' => Auth::user()->email,
            'password' => $request->current_password
        ];

        if(Auth::attempt($user))
        {
            User::
        }

        dd($user);
    }
}
