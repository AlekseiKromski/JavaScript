<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
class News extends Model
{
    public static function getAllNews(){
        if($news = DB::table('news')->orderBy('id', 'desc')->get()){
            return self::getNormalArr($news);
        }else{
            return false;
        }
    }

    public static function search($data){
        if (!empty($title = $data['title'])){
            if($result = DB::select("SELECT title FROM news WHERE title LIKE '%$title%' ORDER BY id DESC ")){
                return $result;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    public static function getTop3News(){
        if($news = DB::table('news')->take(3)->orderBy('id', 'desc')->get()){
            $news = self::getNormalArr($news);
            $news = json_decode(json_encode($news),true);
            $count = 0;
            foreach ($news as $k => $v){
                if($count === 0){
                    $news[$k]['show'] = true;
                }else{
                    $news[$k]['show'] = false;
                }
                if($news[$k]['img'] === null){
                    $news[$k]['img'] = 'img/no_slider_image.jpg';
                }
                $count++;
            }
            $news = json_encode($news);
            return $news;
        }else{
            return false;
        }
    }

    public static function getCategories(){
        if($news = DB::table('categories')->get()){
            return self::getNormalArr($news);
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
