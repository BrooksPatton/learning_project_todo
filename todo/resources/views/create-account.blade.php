@extends('layout')

@section('body')
    <create-account csrftoken="{{csrf_token()}}"></create-account>
@endsection