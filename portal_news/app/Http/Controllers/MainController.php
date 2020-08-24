<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index(){
        $categories = ApiController::getCategories();
        return view('index', compact('categories'));
    }
}
