@extends('layout')

@section('body')
    <login csrftoken="{{csrf_token()}}"></login>
@endsection