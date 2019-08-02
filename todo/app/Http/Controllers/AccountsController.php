<?php

namespace App\Http\Controllers;
use App\Http\Requests\CreateAccount;
use App\User;
use Illuminate\Support\Facades\Auth;

class AccountsController extends Controller
{
    public function index() {
        return view('create-account');
    }
}
