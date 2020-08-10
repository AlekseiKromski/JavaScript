<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\newEvent;
class indexController extends Controller
{
    public function index(){
        return view('welcome');
    }

    public function newEvent(Request $request){
        $result = [
            'labels' => ['Март', 'Апрель', 'Май'],
            'datasets' => array([
                'label' => 'Продажи',
                'backgroundColor' => 'red',
                'data' => [100,522,661,6884,44]
            ])
        ];

        if($request->has('label')){
            $result['labels'][] = $request->input('label');
            $result['datasets'][0]['data'][] = (integer)$request->input('sale');

            if($request->has('realtime')){
                if($request->input('realtime') == 'true'){
                    event(new newEvent($result));
                }

            }
        }


        return $result;
    }
}
