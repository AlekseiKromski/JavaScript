<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Room extends Model
{

    protected $guarded = [];

    public function users(){
        return $this->belongsToMany(User::class);

    }

    public static function getRoom($id){
        $room = DB::select("SELECT * FROM rooms WHERE id = $id");
        return $room[0];
    }
}
