<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', 'LandingController@index');
Route::get('/accounts', 'AccountsController@index');
Route::get('/accounts/login', 'AccountsController@login');
Route::post('/accounts', 'Auth\RegisterController@register');
Route::get('/accounts/logout', 'AccountsController@logout');
Route::get('/dashboard', 'DashboardController@index');