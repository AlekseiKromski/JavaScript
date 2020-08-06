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
                'data' => [15000,20000,150,600,6000,6,66222,66446]
            ])
        ];

    }
}
