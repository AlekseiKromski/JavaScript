<?php

namespace App\Http\Controllers;

use App\Events\newMessage;
use Illuminate\Http\Request;
class indexController extends Controller
{
    public function index(){
        return view('welcome');
    }


    public function sendMessage(Request $request){

        event(new \App\Events\newMessage($request->input('message')));

    }
}
