@extends('layouts.app')

@section('content')



    <!-- Login 2 start -->
    <div class="login-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="form-section">
                    
                        <div class="logo-2">
                            <a href="{{ URL :: to ('/homepage')}}">
                                <img src="{{ asset('public/login-style/assets/img/logos/logo-2.png')}}" alt="logo">
                            </a>
                        </div>
                        <h3>قم بإدخال بيانات الدخول الخاصة بحسابك</h3>
                        <form enctype="multipart/form-data" method="post"
                            action="{{ route('login') }}">
                            @csrf
                            <div class="form-group form-box">
                                
                                <input type="text" name="email" class="input-text" placeholder=" البريد الالكترونى">
                                @if($errors->has('email'))
                                        <div class="error" style="color:red">{{ $errors->first('email') }}</div>
                                        @endif
                            </div>
                            <div class="form-group form-box">
                               <input type="password" name="password" class="input-text" placeholder="كلمة المرور">
                               @if($errors->has('password'))
                                        <div class="error" style="color:red">{{ $errors->first('password') }}</div>
                                        @endif
                            </div>
                            <div class="form-group mb-0 clearfix">
                               <button type="submit" class="btn-md btn-theme float-left">تسجيل الدخول </button>
                                <a href="{{ route('password.request') }}" class="forgot-password">نسيت كلمة المرور ؟</a>
                            </div>
                            <div class="extra-login clearfix">
                            </div>
                        </form>
                        <p>ليس لديك حساب؟<a href="{{ URL :: to ('/register')}}" class="thembo"> سجل هنا </a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Login 2 end -->



<!--div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div-->
@endsection
