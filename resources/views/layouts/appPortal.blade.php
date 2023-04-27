<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="utf-8">
    <title>شركة الانظمة الشاملة</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="{{ asset('public/portal/img/favicon.ico')}}" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="{{ asset('public/portal/lib/animate/animate.min.css')}}" rel="stylesheet">
    <link href="{{ asset('public/portal/lib/owlcarousel/assets/owl.carousel.min.css')}}" rel="stylesheet">
    <link href="{{ asset('public/portal/lib/lightbox/css/lightbox.min.css')}}" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="{{ asset('public/portal/css/bootstrap.rtl.min.css')}}" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="{{ asset('public/portal/css/style.css')}}" rel="stylesheet">
</head>

<body>
    <!-- Spinner Start -->
    <!--div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;"></div>
    </div-->
    <!-- Spinner End -->


    <!-- Topbar Start -->
    <div class="container-fluid bg-primary text-white d-none d-lg-flex">
        <div class="container py-3">
            <div class="d-flex align-items-center">
                <a href="{{ URL :: to ('/')}}">
                    <!--{{ URL ::to ('public/upload/'.$settingData->image)}} -->
                    <img class="w-100" src="{{ asset('public/portal/img/logo1.png')}}" 
                    alt="Image" style="height: 50px;">
                </a>
                <div class="ms-auto d-flex align-items-center">
                    <small class="ms-4"><i class="fa fa-map-marker-alt me-3"></i>  {{ $settingData->address_ar}}  </small>
                    <small class="ms-4"><i class="fa fa-envelope me-3"></i>{{ $settingData->email}}</small>
                    <small class="ms-4"><i class="fa fa-phone-alt me-3"></i>{{ $settingData->phone}}</small>
                    <div class="ms-3 d-flex">
                        <a class="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href="{{ $settingData->facebook}}"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href="{{ $settingData->twitter}}"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href="{{ $settingData->linkedin}}"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->


    <!-- Navbar Start -->
    <div class="container-fluid bg-white sticky-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                <a href="{{ URL :: to ('/')}}" class="navbar-brand d-lg-none">
                    <h1 class="fw-bold m-0">شركه الانظمه الشامله</h1>
                </a>
                <button type="button" class="navbar-toggler me-0" 
                data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="{{ URL :: to ('/')}}" class="nav-item nav-link active">الرئيسية</a>
                        <a href="#" class="nav-item nav-link">من نحن </a>
                        <a href="#" class="nav-item nav-link">خدماتنا</a>
                        <a href="#" class="nav-item nav-link">مشاريعنا</a>
                        <!--  <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">تصفح</a>
                            <div class="dropdown-menu bg-light rounded-0 rounded-bottom m-0"> 
                                <a href="feature.html" class="dropdown-item">رؤيتنا</a>
                                <a href="team.html" class="dropdown-item">فريق العمل</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="quote.html" class="dropdown-item">Quotation</a>
                                <a href="404.html" class="dropdown-item">404 Page</a>
                            </div>
                        </div>-->
                        <a href="#" class="nav-item nav-link">تواصل معنا</a>
                    </div>
                    <!--div class="ms-auto d-none d-lg-block">
                        <a href="" class="btn btn-primary rounded-pill py-2 px-3">انشاء حساب</a>
                    </div-->
                </div>
            </nav>
        </div>
    </div>
    <!-- Navbar End -->

    @yield('content')



    <!-- Footer Start -->
    <div class="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-4">عنوان التواصل</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3">

                    </i>  {{ $settingData->address_ar}} </p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i> {{ $settingData->phone}} </p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i> {{ $settingData->email}} </p>
                    <div class="d-flex pt-3">
                        <a class="btn btn-square btn-light rounded-circle me-2" href="{{ $settingData->twitter}}"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-square btn-light rounded-circle me-2" href="{{ $settingData->facebook}}"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-light rounded-circle me-2" href="{{ $settingData->youtube}}"><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-square btn-light rounded-circle me-2" href="{{ $settingData->linkedin}}"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-4">روابط سريعة</h4>

                    @foreach(  $footerPages as $data)
                    <a class="btn btn-link" href="#"> {{  $data->name_ar}} </a>
                    @endforeach
                  
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-4">ساعات العمل </h4>
                    <p class="mb-1">الخميس - الاحد</p>
                    <h6 class="text-light">م 04:00 - 08:00 ص</h6>
                    <p class="mb-1">الجمعة</p>
                    <h6 class="text-light">مغلق</h6>
                    <p class="mb-1">السبت</p>
                    <h6 class="text-light"> م04:00 - ص 11:00 </h6>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-4">اشترك معنا</h4>
                    <p>تفضل بالإشتراك ليصلك كل ماهو جديد</p>
                    <div class="position-relative w-100">
                        <input required class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                         type="text" placeholder="البريد الالكتروني">
                        <button type="button" 
                        class="btn btn-light py-2 position-absolute top-0 end-0 mt-2 me-2">اشتراك</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->


    <!-- Copyright Start -->
    <div class="container-fluid copyright py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a class="fw-medium text-light" href="#"> 
                        جميع الحقوق محفوظة لشركة الأنظمة الشاملة </a>
                </div>

            </div>
        </div>
    </div>
    <!-- Copyright End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>


    <!-- JavaScript Libraries -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('public/portal/lib/wow/wow.min.js'})}"></script>
    <script src="{{ asset('public/portal/lib/easing/easing.min.js'})}"></script>
    <script src="{{ asset('public/portal/lib/waypoints/waypoints.min.js'})}"></script>
    <script src="{{ asset('public/portal/lib/owlcarousel/owl.carousel.min.js'})}"></script>
    <script src="{{ asset('public/portal/lib/lightbox/js/lightbox.min.js'})}"></script>

    <!-- Template Javascript -->
    <script src="{{ asset('public/portal/js/main.js'})}"></script>
</body>

</html>