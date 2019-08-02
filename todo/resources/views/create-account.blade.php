@extends('layout')

@section('body')
<create-account csrftoken="{{csrf_token()}}" errors="{{ $errors }}"></create-account>
@endsection