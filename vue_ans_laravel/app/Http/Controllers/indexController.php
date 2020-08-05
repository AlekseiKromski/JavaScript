<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class indexController extends Controller
{
    public function index(){
        return view('welcome');
    }

    public function json(){
        return [
            ['title' => 'Card title1', 'url'],
            ['title' => 'Card title2', 'url'],
        ];

    }
}
