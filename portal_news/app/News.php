<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
class News extends Model
{
    public static function getAllNews(){
        if($news = DB::table('news')->get()){
            return self::getNormalArr($news);
        }else{
            return false;
        }
    }

    public static function search($data){
        if (!empty($title = $data['title'])){
            if($result = DB::select("SELECT title FROM news WHERE title LIKE '%$title%'")){
                return $result;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    private static function getNormalArr($arr){
        $new_arr = [];
        foreach ($arr as $k => $v){
            $new_arr[] = $arr[$k];
        }
        return $new_arr;
    }
}
