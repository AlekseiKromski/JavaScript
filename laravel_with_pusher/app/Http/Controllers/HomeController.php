<?php

namespace App\Http\Controllers;

use App\Events\Pusher;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        Pusher::dispatch('Get my message');
        return view('home');
    }
}
