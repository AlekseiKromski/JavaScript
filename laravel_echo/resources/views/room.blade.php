@extends('layouts.app')

@section('content')
    <div id="app">
        <private-chat :room="{{$room}}"></private-chat>
    </div>
@endsection
