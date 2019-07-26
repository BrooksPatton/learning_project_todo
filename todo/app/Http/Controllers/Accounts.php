<?php

namespace App\Http\Controllers;
use App\Http\Requests\CreateAccount;
use App\User;
use Illuminate\Support\Facades\Auth;

class Accounts extends Controller
{
    public function index() {
        return view('create-account');
    }

    public function store(CreateAccount $request) {
        $user = $request->validated();

        User::create($user);

        Auth::attempt($user, true);
        return redirect('/');
    }
}
