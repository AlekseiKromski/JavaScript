<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    public function getNews(){
        if($news = News::getAllNews()){
            return $news;
        }else{
            return abort(404);
        }

    }

    public function search(Request $request){
        if($result = News::search($request->all())){
            return $result;
        }else{
            return null;
        }
    }

    public function getTop3News(){
        if($result = News::getTop3News()){
            return $result;
        }else{
            return null;
        }
    }

    public static function getCategories(){
        if($result = News::getCategories()){
            return $result;
        }else{
            return null;
        }
    }
}
