@extends('layouts.app')

@section('content')

<!-- Login 2 start -->
<div class="login-2">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="form-section">
                    <div class="logo-2">
                        <a href="{{ URL :: to ('/homepage')}}">
                            <img src="{{ asset('public/login-style/assets/img/logos/logo-2.png')}}" alt="logo">
                        </a>
                    </div>


                    <h3>تسجيل مستخدم جديد</h3>
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group form-box">
                            <!--label>لإسم الثلاثي بالعربية </label-->
                            <input type="text" name="name" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1" value="{{ old('name') }}" class="input-text" placeholder="   اسم المستخدم ">
                            <div class="error" style="color:red">
                                <label id="name"></label>
                            </div>
                            @if($errors->has('name'))
                            <div class="error" style="color:red">{{ $errors->first('name') }}</div>
                            @endif

                        </div>
                        <div class="form-group form-box">
                            <!--label>لإسم الثلاثي بالعربية </label-->
                            <input type="text" name="fullname_ar" onkeyup="myFunction()" id="arabic" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1" value="{{ old('fullname_ar') }}" class="input-text" placeholder=" الإسم الثلاثي بالعربية ">
                            <div class="error" style="color:red">
                                <label id="fullname_ar"></label>
                            </div>
                            @if($errors->has('fullname_ar'))
                            <div class="error" style="color:red">{{ $errors->first('fullname_ar') }}</div>
                            @endif

                        </div>
                        <div class="form-group form-box">
                            <input type="text" name="fullname_en" onkeyup="validateEnglish()" value="{{ old('fullname_en') }}" id="english" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1" class="input-text" placeholder=" الإسم الثلاثي بالإنجليزي ">
                            <div class="error" style="color:red">
                                <label id="fullname_en"></label>
                            </div>
                            @if($errors->has('fullname_en'))
                            <div class="error" style="color:red">{{ $errors->first('fullname_en') }}</div>
                            @endif


                        </div>
                        <div class="form-group form-box">
                            <input name="identity_number" maxlength="11" value="{{ old('identity_number') }}" inputmode="numeric" oninput="this.value = this.value.replace(/\D+/g, '')" class="input-text" placeholder=" الهوية (هوية وطنية / إقامة / جواز سفر)">
                            @if($errors->has('identity_number'))
                            <div class="error" style="color:red">{{ $errors->first('identity_number') }}</div>
                            @endif
                        </div>
                        <div class="form-group">
                            <!--label for="exampleFormControlSelect1">Example select</label-->
                            <select name="gender_type" class="form-control FormControlSelect1" id="exampleFormControlSelect1">
                                <option>النوع </option>
                                <option value="1">ذكر</option>
                                <option value="2">انثى</option>

                            </select>
                        </div>


                        <div class="form-group ">
                            <select name="nationality" value="{{ old('nationality') }}" class="form-control FormControlSelect1" id="exampleFormControlSelect1">
                                <option>الجنسية </option>
                                <option value="1">سعودي</option>
                                <option value="2">غير سعودي</option>
                            </select>
                            @if($errors->has('nationality'))
                            <div class="error" style="color:red">{{ $errors->first('nationality') }}</div>
                            @endif
                        </div>
                        <div class="form-group form-box">
                            <input name="phone" value="{{ old('phone') }}" maxlength="11" class="input-text" inputmode="numeric" oninput="this.value = this.value.replace(/\D+/g, '')" placeholder=" رقم الجوال">
                            @if($errors->has('phone'))
                            <div class="error" style="color:red">{{ $errors->first('phone') }}</div>
                            @endif
                        </div>

                        <div class="form-group form-box">
                            <input type="email" name="email" value="{{ old('email') }}" id="validationDefaultUsername1" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1" class="input-text" placeholder="البريد الإلكتروني">
                            <div class="error" style="color:red">
                                <label id="email"></label>
                            </div>
                            @if($errors->has('email'))
                            <div class="error" style="color:red">{{ $errors->first('email') }}</div>
                            @endif
                        </div>
                        <div class="form-group form-box">
                            <input type="password" name="password" class="input-text" placeholder="الرقم السري">
                            @if($errors->has('password'))
                            <div class="error" style="color:red">{{ $errors->first('password') }}</div>
                            @endif
                        </div>

                        <div class="form-group form-box">
                            <input type="password" name="password_confirmation" class="input-text" placeholder=" تأكيد الرقم السرى">
                            @if($errors->has('password_confirmation'))
                            <div class="error" style="color:red">{{ $errors->first('password_confirmation') }}</div>
                            @endif
                        </div>



                        <div class="form-group ">
                            <div class="captcha">
                                <span>{!! captcha_img() !!}</span>
                                <button type="button" class="btn btn-danger" class="reload" id="reload">
                                    &#x21bb;
                                </button>
                            </div>
                        </div>
                        <div class="form-group mb-4">
                            <input id="captcha" type="text" class="form-control" placeholder="ادخل الرقم" name="captcha">
                            @if($errors->has('captcha'))
                            <div class="error" style="color:red">{{ $errors->first('captcha') }}</div>
                            @endif
                        </div>


                        <div class="form-group mb-0 clearfix">
                            <button type="submit" class="btn-md btn-theme btn-block">تسجيل</button>
                        </div>
                        <div class="extra-login clearfix">
                        </div>

                    </form>

                    <p>لديك حساب؟<a href="{{ URL :: to ('/login')}}" class="thembo"> تسجيل الدخول من هنا </a></p>
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
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

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
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-end">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div-->

@endsection