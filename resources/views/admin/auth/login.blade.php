<!DOCTYPE html>
<html lang="en" class="h-100" id="login-page1">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title> لوحه التحكم - تسجيل الدخول</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('public/web-assets/img/favicon.png')}}">
    <!-- Custom Stylesheet -->
    <link href="{{ asset('public/admin/css/style.css')}}" rel="stylesheet">

</head>

<body class="h-100" dir="rtl" style="background: url('assets/images/background/login-register.png');">
    <div id="preloader">
        <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />
            </svg>
        </div>
    </div>
    <div class="login-bg h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100">
                <div class="col-xl-6">
                    <div class="form-input-content login-form">
                        <div class="card">
                            <div class="card-body">
                                <div class="logo text-center">
                                    <a href="#">
                                        <img src="{{ asset('public/login-style/assets/img/logos/logo-2.png')}}" alt="">
                                    </a>
                                </div>
                                <h4 class="text-center mt-4">تسجيل الدخول</h4>
                                @if(\Session::get('success'))
                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                    <div class="alert-body">
                                        {{ \Session::get('success') }}
                                    </div>
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                                @endif
                                {{ \Session::forget('success') }}
                                @if(\Session::get('error'))
                                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <div class="alert-body">
                                        {{ \Session::get('error') }}
                                    </div>
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                                @endif
                                <form class="mt-5 mb-5" action="{{route('adminLoginPost')}}" method="post">
                                    @csrf
                                    <div class="form-group">
                                        <label>البريد الالكترونى</label>
                                        <input type="email" class="form-control" placeholder="البريد الالكترونى" id="email" name="email" value="{{old('email') }}" autofocus>
                                        @if ($errors->has('email'))
                                        <span class="help-block font-red-mint">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                        @endif

                                    </div>
                                    <div class="form-group">
                                        <label>كلمه المرور</label>
                                        <input type="password" class="form-control" placeholder="كلمه المرور" id="password" name="password" tabindex="2" />


                                        @if ($errors->has('password'))
                                        <span class="help-block font-red-mint">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                        @endif
                                    </div>

                                    <div class="text-center mb-4 mt-4">
                                        <button type="submit" class="btn btn-primary">تسجيل الدخول </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- #/ container -->
    <!-- Common JS -->
    <script src="{{ asset('public/admin/assets/plugins/common/common.min.js')}}"></script>
    <!-- Custom script -->
    <script src="{{ asset('public/admin/js/custom.min.js')}}"></script>
    <script src="{{ asset('public/admin/js/settings.js')}}"></script>
    <script src="{{ asset('public/admin/js/gleek.js')}}"></script>
</body>

</html>







<!--!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
</head>

<body class="vertical-layout vertical-menu-modern" data-open="click" data-menu="vertical-menu-modern" data-col="" data-framework="laravel">
    <div class="auth-wrapper auth-basic px-2">
        <div class="auth-inner my-2">
          
            @if(\Session::get('success'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <div class="alert-body">
                    {{ \Session::get('success') }}
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            @endif
            {{ \Session::forget('success') }}
            @if(\Session::get('error'))
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <div class="alert-body">
                    {{ \Session::get('error') }}
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            @endif
            <div class="card mb-0">
                <div class="card-body">
                    <h2 class="brand-text text-primary ms-1">Admin Login</h2>

                    <form class="auth-login-form mt-2" action="{{route('adminLoginPost')}}" method="post">
                        @csrf
                        <div class="mb-1">
                            <label for="email" class="form-label">Email</label>
                            <input type="text" class="form-control" 
                            id="email" name="email" value="{{old('email') }}" autofocus />
                            @if ($errors->has('email'))
                            <span class="help-block font-red-mint">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                            @endif
                        </div>

                        <div class="mb-1">
                            <div class="d-flex justify-content-between">
                                <label class="form-label" for="password">Password</label>
                                <a href="{{url('auth/forgot-password-basic')}}">
                                    <small>Forgot Password?</small>
                                </a>
                            </div>
                            <div class="input-group input-group-merge form-password-toggle">
                                <input type="password" class="form-control form-control-merge" 
                                
                            </div>
                            @if ($errors->has('password'))
                            <span class="help-block font-red-mint">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                            @endif
                        </div>
                        <button type="submit" class="btn btn-primary w-100" tabindex="4">Sign in</button>
                    </form>
                </div>
            </div>
          
        </div>
    </div>
</body>

</html-->