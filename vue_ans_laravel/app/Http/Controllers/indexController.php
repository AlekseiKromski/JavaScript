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
            'labels' => ['Март', 'Апрель', 'Май'],
            'datasets' => array([
                'label' => 'Продажи',
                'backgroundColor' => 'red',
                'data' => [rand(0,40000),rand(0,40000),rand(0,40000),rand(0,40000),rand(0,40000),]
            ])
        ];

    }
}
