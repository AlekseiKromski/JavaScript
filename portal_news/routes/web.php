<?php



Route::get('/', 'MainController@index');

//API
Route::get('/api/getNews', 'ApiController@getNews');
Route::get('/api/search', 'ApiController@search');
Route::get('/api/getTop3News', 'ApiController@getTop3News');
Route::get('/api/getCategories', 'ApiController@getCategories');
