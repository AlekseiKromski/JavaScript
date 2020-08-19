<?php



Route::get('/', 'MainController@index');

//API
Route::get('/api/getNews', 'ApiController@getNews');
Route::get('/api/search', 'ApiController@search');
