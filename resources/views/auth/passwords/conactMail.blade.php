@extends('layouts.app')

@section('content')


<div class="login-2">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12">
              <h1>{{ $datalis['name'] }}</h1>
              <h2>{{ $datalis['email'] }}</h2>
              <h2>{{ $datalis['phone'] }}</h2>
              <h2>{{ $datalis['message'] }}</h2>
               <p>Thank You</p>
             </div>
        </div>
    </div>
</div>

@endsection