<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>لوحه التحكم - الرئيسيه</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="#">

    <link href="{{ asset('public/admin/assets/bootstrap/css/bootstrap.rtl.min.css')}}" rel="stylesheet">
    <link href="{{ asset('public/admin/assets/bootstrap-icons/bootstrap-icons.css')}}" rel="stylesheet">
    <link href="{{ asset('public/admin/css/style_ar.css')}}" rel="stylesheet">
    <link href="{{ asset('public/admin/assets/plugins/datatables/css/jquery.dataTables.min.css')}}" rel="stylesheet">

    <!--link href="{{ asset('public/admin/assets/plugins/animate/animate.min.css')}}" rel="stylesheet">
    <link href="{{ asset('public/admin/assets/plugins/bootstrap-select/dist/css/bootstrap-select.min.css')}}" rel="stylesheet">
    <link href="{{ asset('public/admin/assets/plugins/datatables/css/jquery.dataTables.min.css')}}" rel="stylesheet">
    <link href="{{ asset('public/admin/assets/plugins/nestable2/css/jquery.nestable.min.css')}}" rel="stylesheet">
-->
   
    <script>
        function myFunction() {

            var isArabic = /^([\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\ufdf0-\ufdfd]|[ ])*$/g;
            if (isArabic.test($.trim($('#fname').val()))) {
                // console.log('is arabic');
            } else {
                // console.log('not arabic');
                document.getElementById('fname').value = '';
                alert("يقبل حروف عربى فقط");
            }
        }
    </script>

</head>

<body >

    <!--*******************
        Preloader start
    ********************-->
    <div id="preloader">
        <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />
            </svg>
        </div>
    </div>
    <!--*******************
        Preloader end
    ********************-->


    <!--**********************************
        Main wrapper start
    ***********************************-->
    <div id="main-wrapper">

        <!--**********************************
            Nav header start
        ***********************************-->
        <div class="nav-header">
            <div class="brand-logo">
                <a href="#">
                <b><!--img src="{{ asset('public/admin//assets/images/logo.png')}}" alt=""--> 
            </b><span class="brand-title"><img src="../../assets/images/logo-text.png" alt=""></span></a>
            </div>
            <div class="nav-control">
                <div class="hamburger"><span class="line"></span> <span class="line"></span> <span class="line"></span>
                </div>
            </div>
        </div>
        <!--**********************************
            Nav header end
        ***********************************-->

        <!--**********************************
            Header start
        ***********************************-->
        <div class="header">
            <div class="header-content">
                <div class="header-left">
                    <ul>
                        <!--li class="icons position-relative"><a href="javascript:void(0)"><i class="icon-magnifier f-s-16"></i></a>
                            <div class="drop-down animated bounceInDown">
                                <div class="dropdown-content-body">
                                    <div class="header-search" id="header-search">
                                        <form action="#">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Search">
                                                <div class="input-group-append"><span class="input-group-text"><i class="icon-magnifier"></i></span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li-->
                    </ul>
                </div>
                <div class="header-right">
                    <ul>

                        <li class="icons">
                            <a href="javascript:void(0)" class="log-user">
                                <!--img src="{{ asset('public/admin//assets/images/avatar/1.jpg')}}" alt=""-->
                                <span>{{  auth()->guard('admin')->user()->name }}</span>
                                <i class="fa fa-caret-down f-s-14" aria-hidden="true"></i>
                            </a>
                            <div class="drop-down dropdown-profile animated bounceInDown">
                                <div class="dropdown-content-body">
                                    <ul>

                                        <li><a href="{{ route('adminLogout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();"><i class="icon-power"></i> <span>Logout</span></a>

                                            <form id="logout-form" action="{{ route('adminLogout') }}" method="POST" class="d-none">
                                                @csrf
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--**********************************
            Header end
        ***********************************-->

        <!--**********************************
            Sidebar start
        ***********************************-->
        <div class="nk-sidebar">
            <div class="nk-nav-scroll">
                <ul class="metismenu" id="menu">

                    <li class="mega-menu mega-menu-lg">
                        <a class="has-arrow" href="#" aria-expanded="false"
                         style="width: max-content;cursor: pointer;">
                            <i class="mdi mdi-view-dashboard">

                            </i><span class="nav-text">الرئيسيه</span>
                        </a>
                    </li>
            
                   
                    <li><a class="has-arrow" href="{{ route('settings.index') }}"
                    aria-expanded="false"><i class="fa fa-gear"></i> 
                    <span class="nav-text">الاعدادات</span> </a>
                     
                    </li>

                    <!--li><a class="has-arrow" href="{{ route('sliders.index') }}"
                    aria-expanded="false"><i class="fa fa-photo"></i> 
                    <span class="nav-text">البانر</span> </a>
                     
                    </li-->

                    <li><a class="has-arrow" href="{{ route('about-us.index') }}"
                    aria-expanded="false"><i class="mdi mdi-message-draw"></i> 
                    <span class="nav-text">من نحن</span> </a>
                     
                    </li>

                    <li><a class="has-arrow" href="{{ route('all-services.index') }}"
                    aria-expanded="false"><i class="fa fa-diamond"></i> 
                    <span class="nav-text">الخدمات</span> </a>
                     
                    </li>


                    <li><a class="has-arrow" href="{{ route('list.index') }}"
                    aria-expanded="false"><i class="fa fa-list"></i> 
                    <span class="nav-text">فئات المشاريع </span> </a>
                     
                    </li>

                    <li><a class="has-arrow" href="{{ route('all-projects.index') }}"
                    aria-expanded="false"><i class="fa fa-star"></i> 
                    <span class="nav-text">المشاريع</span> </a>
                     
                    </li>


                    <li><a class="has-arrow" href="{{ route('faq.index') }}"
                    aria-expanded="false"><i class="fa fa-question"></i> 
                    <span class="nav-text">الاسئله الشائعه</span> </a>
                     
                    </li>

                    <li><a class="has-arrow" href="{{ route('contact-data.index') }}"
                    aria-expanded="false"><i class="fa fa-envelope"></i> 
                    <span class="nav-text">رسائل تواصل معانا </span> </a>
                     
                    </li>





                </ul>
            </div>
        </div>
        <!--**********************************
            Sidebar end
        ***********************************-->

        <!--**********************************
            Content body start
        ***********************************-->
        @yield('content')
        <!--**********************************
            Content body end
        ***********************************-->


        <!--**********************************
            Footer start
        ***********************************-->
        <div class="footer">
            <div class="copyright">
                <p>جميع الحقوق محفوظه &copy; صمم بواسطه 
                    <a href="#">
                        
                    </a>, تم تطويره <a href="#">
                         تيم</a> 2023</p>
            </div>
        </div>
        <!--**********************************
            Footer end
        ***********************************-->


        <!--**********************************
            Right sidebar start
        ***********************************-->

        <!--**********************************
            Right sidebar end
        ***********************************-->
    </div>
    <!--**********************************
        Main wrapper end
    ***********************************-->

    <!--**********************************
        Scripts
    ***********************************-->
    <script src="{{ asset('public/admin//assets/plugins/common/common.min.js')}}"></script>
    <script src="{{ asset('public/admin//js/custom.min.js')}}"></script>
    <!--script src="{{ asset('public/admin//js/settings.js')}}"></script-->
    <script src="{{ asset('public/admin/js/settings_ar.js')}}"></script>

    <script src="{{ asset('public/admin//js/gleek.js')}}"></script>
    <script src="{{ asset('public/admin//js/styleSwitcher.js')}}"></script>

    <!-- Chartjs chart -->
    <script src="{{ asset('public/admin//assets/plugins/chart.js/Chart.bundle.min.js')}}"></script>
    <script src="{{ asset('public/admin//assets/plugins/d3v3/index.js')}}"></script>
    <script src="{{ asset('public/admin//assets/plugins/topojson/topojson.min.js')}}"></script>
    <script src="{{ asset('public/admin//assets/plugins/datamaps/datamaps.world.min.js')}}"></script>
    <script src="{{ asset('public/admin//js/plugins-init/datamap-world-init.js')}}"></script>
    <script src="{{ asset('public/admin//assets/plugins/datamaps/datamaps.usa.min.js')}}"></script>
    <script src="{{ asset('public/admin//js/dashboard/dashboard-1.js')}}"></script>
    <script src="{{ asset('public/admin//js/plugins-init/datamap-usa-init.js')}}"></script>
    <!-- Data Tables -->
    <script src="{{ asset('public/admin//assets/plugins/datatables/js/jquery.dataTables.min.js')}}"></script>
    <script src="{{ asset('public/admin//js/plugins-init/datatables.init.js')}}"></script>
    <!-- Check Editor -->
    <script src="{{ asset('public/admin//assets/plugins/ckeditor/ckeditor.js')}}"></script>
    <script src="{{ asset('public/admin//js/plugins-init/editor-ck-init.js')}}"></script>
    <!-- Nestable js -->
    <script src="{{ asset('public/admin//assets/plugins/nestable2/js/jquery.nestable.min.js')}}"></script>
    <script src="{{ asset('public/admin//main/js/plugins-init/nestable.init.js')}}"></script>

</body>

</html>