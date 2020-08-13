<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Room;

class indexController extends Controller
{
    public function room($room){
        $room = json_encode(Room::getRoom($room[0]));

        return view('room', ['room' => $room]);
    }
}
