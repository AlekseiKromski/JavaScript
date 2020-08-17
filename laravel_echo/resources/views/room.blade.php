@extends('layouts.app')

@section('content')
    <div id="app">
        @if(Auth::check())
            <private-chat :room="{{$room}}" :user="{{Auth::user()}}"></private-chat>
        @endif
    </div>
@endsection
