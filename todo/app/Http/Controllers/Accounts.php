<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateAccount;
use App\User;

class Accounts extends Controller
{
    public function index() {
        return view('create-account');
    }

    public function store(CreateAccount $request) {
        User::create($request->validated());

        return redirect('/');
    }
}
