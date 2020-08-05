<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class indexController extends Controller
{
    public function index(){
        $url_data = [
            ['title' => 'Card title', 'url'],
            ['title' => 'Card title', 'url']
        ];

        return view('welcome', compact('url_data'));
    }
}
