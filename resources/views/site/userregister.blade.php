<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>

    <!-- Google Tag Manager
function checkInputNumber() {
    
    if('/^[A-Za-z]+$/'.test(number)){
        // console.log('is arabic');
    } else {
            // console.log('not arabic');
              document.getElementById('number').value = '';
            alert("يقبل اعداد فقط");
             }
    
} -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-TAGCODE');
        //          يقبل حروف عربى فقط


        function myFunction() {
            var isArabic = /^([\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\ufdf0-\ufdfd]|[ ])*$/g;
            if (isArabic.test($.trim($('#arabic').val()))) {
                // console.log('is arabic');
            } else {
                // console.log('not arabic');
                document.getElementById('arabic').value = '';
                // document.getElementById('fullname_ar').value = 'يقبل حروف عربى فقط';
                // alert("يقبل حروف عربى فقط");
                $("#fullname_ar").html('يقبل حروف عربى فقط');

            }

        }

        function myFunction1() {
            var alphaExp = /^[a-zA-Z]+$/;
            if (alphaExp.test($.trim($('#fullname_en').val()))) {

                // alert("يقبل حروف  فقط");

            } else {
                // console.log('not arabic');
                document.getElementById('alphaExp').value = '';
                // alert("يقبل حروف بالإنجليزي فقط");
                $("#fullname_en").html('يقبل حروف بالإنجليزي فقط');


            }
        }

        function validateEmail() {
            var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

            if (reEmail.test($.trim($('#email').val()))) {
                //alert("يقبل الايميل  فقط");

            } else {
                document.getElementById('reEmail').value = '';
                //alert("يقبل الايميل  فقط");
                $("#email").html('يقبل الايميل فقط');

            }


        }
    </script>
    <!-- End Google Tag Manager -->
    <title>تسجيل مستخدم جديد</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <!-- External CSS libraries -->
    <link type="text/css" rel="stylesheet" href="{{ asset('public/login-style/assets/css/bootstrap.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{ asset('public/login-style/assets/fonts/font-awesome/css/font-awesome.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{ asset('public/login-style/assets/fonts/flaticon/font/flaticon.css')}}">

    <!-- Favicon icon -->
    <link rel="shortcut icon" href="{{ asset('public/web-assets/img/favicon.png')}}" type="image/x-icon">

    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo+Play:wght@200;300;400&family=Cairo:wght@600;800&family=Tajawal:wght@700&display=swap" rel="stylesheet">
    <!-- Custom Stylesheet -->
    <link type="text/css" rel="stylesheet" href="{{ asset('public/login-style/assets/css/style.css')}}">
    <link rel="stylesheet" type="text/css" id="style_sheet" href="{{ asset('public/login-style/assets/css/skins/default.css')}}">

    <style>
        .FormControlSelect1 {
            font-size: 14px;
            outline: none;
            background: #e8e8e8;
            color: #717171;
            border-radius: 100px;
            border: 1px solid #e8e8e8;

        }
    </style>
</head>

<body id="top">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TAGCODE" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div class="page_loader"></div>

    <!-- Login 2 start -->
    <div class="login-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="form-section">
                        <div class="logo-2">
                            <a href="#">
                                <img src="{{ asset('public/login-style/assets/img/logos/logo-2.png')}}" alt="logo">
                            </a>
                        </div>
                        <h3>تسجيل مستخدم جديد</h3>
                        <form enctype="multipart/form-data" method="post" action="{{ URL :: to ('/user-register-form')}}">
                            {{ csrf_field() }}
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
                                <input type="text" name="fullname_en" value="{{ old('fullname_en') }}"  id="alphaExp" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1" class="input-text" placeholder=" الإسم الثلاثي بالإنجليزي ">
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
                            <!--div class="form-group form-box">
                                <input type="text" name="gender_type" 
                                value="{{ old('gender_type') }}" 
                                class="input-text" placeholder=" النوع">
                                @if($errors->has('gender_type'))
                                <div class="error" style="color:red">{{ $errors->first('gender_type') }}</div>
                                @endif
                            </div-->

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
                                <input type="email" name="email" value="{{ old('email') }}"  id="reEmail" id="validationDefaultUsername1" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1" class="input-text" placeholder="البريد الإلكتروني">
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

                            <!--div class="form-group form-box">
                                <input type="text" name="captcha" 
                                class="input-text" placeholder=" Caption">
                            </div-->

                            <div class="form-group ">
                                <div class="captcha">
                                    <span>{!! captcha_img() !!}</span>
                                    <!--button type="button" class="btn btn-danger" class="reload" id="reload">
                        &#x21bb;
                    </button-->
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

                        <p>لديك حساب؟<a href="{{ URL :: to ('/')}}" class="thembo"> تسجيل الدخول من هنا </a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Login 2 end -->

    <!-- External JS libraries -->
    <script src="{{ asset('public/login-style/assets/js/jquery-2.2.0.min.js')}}"></script>
    <script src="{{ asset('public/login-style/assets/js/popper.min.js')}}"></script>
    <script src="{{ asset('public/login-style/assets/js/bootstrap.min.js')}}"></script>
    <!-- Custom JS Script -->
    <script type="text/javascript">
        $('#reload').click(function() {
            $.ajax({
                type: 'GET',
                url: 'reload-captcha',
                success: function(data) {
                    $(".captcha span").html(data.captcha);
                }
            });
        });
    </script>
</body>

</html>