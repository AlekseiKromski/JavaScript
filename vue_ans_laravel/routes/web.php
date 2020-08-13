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

Route::get('/', 'indexController@index');
Route::get('/start/socket-chart', 'indexController@newEvent');
Route::get('/start/send-message', 'indexController@sendMessage');
Route::get('/start/send-private-message', 'indexController@sendPrivateMessage');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
