
<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <!-- Google Tag Manager -->
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
    </script>
    <!-- End Google Tag Manager -->
    <title> منصه جهات  </title>
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
                document.getElementById('arabic').value = '';
                // document.getElementById('fullname_ar').value = 'يقبل حروف عربى فقط';
                // alert("يقبل حروف عربى فقط");
                $("#fullname_ar").html('يقبل حروف عربى فقط');

            }

        }

     

        function validateEnglish() {
            var isEnglish= /^[a-zA-Z'\)\(.-]+$/g;

            if (isEnglish.test($.trim($('#english').val()))) {
                //alert("يقبل الايميل  فقط");

            } else {
                document.getElementById('english').value = '';
                //alert("يقبل الايميل  فقط");
                $("#fullname_en").html('ييقبل حروف بالإنجليزي فقط');

            }


        }
    </script>
</head>

<body id="top">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TAGCODE" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div class="page_loader"></div>


    @yield('content')


    
    <!-- External JS libraries -->
    <script src="{{ asset('public/login-style/assets/js/jquery-2.2.0.min.js')}}"></script>
    <script src="{{ asset('public/login-style/assets/js/popper.min.js')}}"></script>
    <script src="{{ asset('public/login-style/assets/js/bootstrap.min.js')}}"></script>
    <!-- Custom JS Script -->
     <!-- Custom JS Script for caption on register -->
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