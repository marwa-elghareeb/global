@extends('layouts.appPortal')
@section('content')

<!-------------------------------------------------------------------------------->
<div class="breadcrumb">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="breadcrumbs-title"> تسجيل <span> الدخول</span></h2>
        <ul class="breadcrumb-list">
          <li><a href="{{ URL :: to ('/')}}">الرئيسية</a></li>
          <li> تسجيل الدخول </li>
        </ul>
      </div>
    </div>
  </div>
</div>


<section id="services" class="services jehat-stage">
  <div class="container">
    <div class="card">
      <div class="row">
        <div class="col-12">
          <div class="section-title" data-aos="fade-up">
            <h1 data-animation="bounceIn" data-delay="0.2s"> تسجيل الدخول</h1>
            @if(Session::has('flash_message'))
            <p class="alert alert-danger">{{ Session::get('flash_message') }}</p>
            @endif
          </div>
          <form class="text-center" method="post" action="{{ URL :: to ('/userLoginForm')}}">
          {{ csrf_field() }}
        <!-- Email input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example1">البريد الالكترونى</label>
          <input type="email" name="email" id="form2Example1" class="form-control" required />

        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2">كلمه المرور</label>
          <input type="password" name="password" id="form2Example2" class="form-control" required />

        </div>
        <input type="hidden" name="slug" value="{{ $slug }}" />
        <!-- 2 column grid layout for inline styling -->
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <!-- Checkbox -->

          </div>

          <div class="col">
            <!-- Simple link -->

          </div>
        </div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4"> تسجيل الدخول </button>

        <!-- Register buttons -->
        <div class="text-center">

          <!--button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div-->
      </form>

        </div>
      </div>


      



    </div>
  </div>

</section>


@endsection