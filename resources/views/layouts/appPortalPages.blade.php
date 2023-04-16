<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="مستقبل كل الجهات" name="description">
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1">
	<title> جهات</title>	
	<link rel="preconnect" href="{{ asset(' https://fonts.gstatic.com ') }}">
	<link rel="stylesheet" href=" {{ asset('public/web-assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('public/web-assets/css/owl.carousel.min.css') }}">
    <link rel="stylesheet" href=" {{ asset('public/web-assets/css/slicknav.css') }}">
    <link rel="stylesheet" href=" {{ asset('public/web-assets/assets/css/flaticon.css') }}">
    <link rel="stylesheet" href=" {{ asset('public/web-assets/css/progressbar_barfiller.css') }}">
    <link rel="stylesheet" href="  {{ asset('public/web-assets/css/gijgo.css') }}">
    <link rel="stylesheet" href=" {{ asset('public/web-assets/css/animate.min.css') }}">
    <link rel="stylesheet" href="{{ asset('public/web-assets/css/animated-headline.css') }}">
    <link rel="stylesheet" href="{{ asset('public/web-assets/css/magnific-popup.css ') }}">
    <link rel="stylesheet" href=" {{ asset('public/web-assets/css/fontawesome-all.min.css ') }}">
    <link rel="stylesheet" href=" {{ asset('public/web-assets/css/themify-icons.css ') }}">
    <link rel="stylesheet" href=" {{ asset('public/web-assets/css/slick.css ') }}">
    <link rel="stylesheet" href="{{ asset('public/web-assets/css/nice-select.css ') }}">
	<link rel="stylesheet" href="{{ asset('assets/css/style.css /css/style.css ') }}">

	<style type="text/css">
		
	</style>


</head>





<body id="home-version-1" class="home-version-4" data-style="default">
	<div class="text-center">


		<a href="#main_content" data-type="section-switch" class="return-to-top"><i class="fa fa-chevron-up"></i></a>
		<div class="page-loader">
			<div class="loader">
				<div class="blobs">
					<div class="blob-center"></div>
					<div class="blob"></div>
					<div class="blob"></div>
					<div class="blob"></div>
					<div class="blob"></div>
					<div class="blob"></div>
					<div class="blob"></div>
				</div><svg xmlns="http://www.w3.org/2000/svg" version="1.1">
					<defs>
						<filter id="goo">
							<fegaussianblur in="SourceGraphic" stddeviation="10" result="blur"></fegaussianblur>
							<fecolormatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo">
							</fecolormatrix>
							<feblend in="SourceGraphic" in2="goo"></feblend>
						</filter>
					</defs>
				</svg>
			</div>
		</div>
		<div id="main_content">
			<header class="site-header header-two header_trans-fixed" data-top="992">
				<div class="container">
					<div class="header-inner">
						<div class="site-mobile-logo"><a href="{{ URL :: to ('/')}}" class="logo">
								<img src="{{ asset('public\portal-assets\assets\img\logo-two.png')}}"
								 alt="site logo" class="main-logo"> 
								 <img src="{{ asset('public\portal-assets\assets\img\logo-two.png')}}" 
								 alt="site logo" class="sticky-logo"></a></div>
						<div class="toggle-menu"><span class="bar"></span> <span class="bar"></span> <span class="bar"></span></div>
						<nav class="site-nav nav-two">
							<div class="close-menu"><span>Close</span> <i class="ei ei-icon_close"></i></div>
							<div class="site-logo"><a href="{{ URL :: to ('/')}}" class="logo">
									<img src="{{ asset('public\portal-assets\assets\img\logo-two.png')}}" alt="site logo" class="main-logo"> <img src="{{ asset('public\portal-assets\assets\img\logo-two.png')}}" alt="site logo" class="sticky-logo"></a></div>


							<div class="menu-wrapper" data-top="992" style="padding-top: 0px;">
								<ul class="site-main-menu" dir="rtl">
									<li>
										<a href="{{ URL :: to ('/')}}" style="font-family: cairo" class="current_page">الرئيسية</a>
									</li>
									<li>
										<a href="{{ URL :: to ('/aboutUs')}}" style="font-family: cairo">من نحن</a>
									</li>
									<li class="menu-item-has-children">
										<a href="media/user%20guide.pdf" style="font-family: cairo">دليل الاستخدام</a>
										<ul class="sub-menu">
											<li>
												<a href="{{ URL :: to ('/')}}#blog-grid" style="font-family: cairo">أسئلة شائعة</a>
											</li>
											<li>
												<a href="{{ URL :: to ('/media')}}" style="font-family: cairo">المركز الإعلامي</a>
											</li>
											<li>
												<a href="https://jehat.sa/media/user%20guide.pdf" style="font-family: cairo">دليل المستخدم</a>
											</li>
											<li>
												<a href="https://jehat.sa/media/presentation.pdf" style="font-family: cairo">الية عمل المنصة</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="{{ URL :: to ('/contactUs')}}" style="font-family: cairo">تواصل معنا</a>
									</li>

									
									<li>
										<a href="{{ URL :: to ('/helpcenter')}}" style="font-family: cairo"> مركز المساعده</a>
									</li>
									<li>
										<a href="{{ URL :: to ('/towers')}}" style="font-family: cairo">  الابراج الافتراضيه</a>
									</li>
								</ul>
								<!--div class="dropdown-content">
									&nbsp;&nbsp;
									&nbsp; <a href="#" style="color: #66CCFF; ">
										<img src="{{ asset('portal-assets\united_kingdom_flag_pin_640.png')}}" width="44" height="28" class="pxs-btn banner-btn color-two wow pixFadeUp" data-wow-delay="0.6s" style="border-width: 0px; visibility: visible; animation-delay: 0.6s; animation-name: i;"></a><a href="#" style="color: #66CCFF">&nbsp;&nbsp;&nbsp;&nbsp;
									</a><a href="#" style="color: #66CCFF; ">
										<img src="{{ asset('portal-assets\malaysia_flag_pin_640.png')}}" width="44" height="28" class="pxs-btn banner-btn color-two wow pixFadeUp" data-wow-delay="0.6s" style="border-width: 0px; visibility: visible; animation-delay: 0.6s; animation-name: i;"></a>
									<a href="#" style="color: #66CCFF">
									</a>
								</div><a href="#" style="color: #66CCFF">
									<div class="nav-right">
									</div>
								</a>
							</div-->

						</nav>
					</div>
				</div>
			</header>


			@yield('content')



			<footer id="footer" class="footer-two">
				<div class="container">
					<div class="site-info">
						<div class="copyright">
							<p style="font-family: cairo">© 2021 جميع الحقوق محفوظة
								<a href="https://gtm.easygo.systems" target="_blank" style="font-family: cairo">منصة
									جهات</a>
							</p>
						</div>
						<ul class="site-info-menu">
							<li>
								<a href="https://gtm.sa/aamr/media/terms.pdf" style="font-family: cairo">الإتفاقية وحقوق
									الملكية</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
		<script src="{{ asset('public\portal-assets\dependencies\jquery\jquery.min.js')}}"></script>
		<script src="{{ asset('public\portal-assets\dependencies\bootstrap\js\bootstrap.min.js')}}"></script>
		<script src="{{ asset('public\portal-assets\dependencies\swiper\js\swiper.min.js')}}"></script>
		<script src="{{ asset('public\portal-assets\dependencies\jquery.appear\jquery.appear.js')}}"></script>
		<script src="{{ asset('public\portal-assets\dependencies\wow\js\wow.min.js')}}"></script>
		<script src="{{ asset('public\portal-assets\dependencies\countUp.js\countUp.min.js')}}"></script>
		<script src="{{ asset('public\portal-assets\dependencies\isotope-layout\isotope.pkgd.min.js')}}"></script>
		<script src="{{ asset('public\portal-assets\dependencies\imagesloaded\imagesloaded.pkgd.min.js')}}"></script>
		<script src="{{ asset('public\portal-assets\dependencies\jquery.parallax-scroll\js\jquery.parallax-scroll.js')}}"></script>
		<script src="{{ asset('public\portal-assets\dependencies\magnific-popup\js\jquery.magnific-popup.min.js')}}"></script>
		<script src="{{ asset('public\portal-assets\dependencies\gmap3\js\gmap3.min.js')}}"></script>
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDk2HrmqE4sWSei0XdKGbOMOHN3Mm2Bf-M&ver=2.1.6"></script>
		<script src="{{ asset('public\portal-assets\assets\js\header.js')}}"></script>
		<script src="{{ asset('public\portal-assets\assets\js\app.js')}}"></script>
	</div>

	<script src="{{ asset('public/portal-assets/js/jquery_min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/bootstrap.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/modernizr.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/owl.carousel.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/jquery.dlmenu.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/jquery.sticky.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/jquery.nice-select.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/jquery.magnific-popup.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/jquery.bxslider.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/venobox.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/smothscroll_part1.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/smothscroll_part2.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/jquery.countTo.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/jquery.inview.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/plugin/rs_slider/jquery.themepunch.revolution.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/plugin/rs_slider/jquery.themepunch.tools.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/plugin/rs_slider/revolution.addon.snow.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/plugin/rs_slider/revolution.extension.actions.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/plugin/rs_slider/revolution.extension.carousel.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/plugin/rs_slider/revolution.extension.kenburn.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/plugin/rs_slider/revolution.extension.layeranimation.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/plugin/rs_slider/revolution.extension.migration.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/plugin/rs_slider/revolution.extension.navigation.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/plugin/rs_slider/revolution.extension.parallax.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/plugin/rs_slider/revolution.extension.slideanims.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/plugin/rs_slider/revolution.extension.video.min.js')}}"></script>
	<script src="{{ asset('public/portal-assets/js/custom.js')}}"></script>
</body>

</html>