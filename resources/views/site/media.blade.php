@extends('layouts.appPortal')

@section('content')

<!-------------------------------------------------------------------------------->
<div class="breadcrumb">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h2 class="breadcrumbs-title">@lang('site.Center') 
					<span>@lang('site.Media') </span>
				</h2>
				<ul class="breadcrumb-list">
					<li><a href="{{ URL :: to ('/')}}">@lang('site.Homepage') </a></li>
					<li>@lang('site.MediaCenter') 
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<!-------------------------------------------------------------------------------->
<main>
	<div class="media-section">
		<div class="container">
			<div class="card card-container">
				<div class="row">
					<div class="col-12">
						<div class="section-tittle">
							<h2>  @lang('site.MediaCenter')</h2>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12">
						<a class="download-pdf" href="{{ asset('public/portal-assets/media/presentation.pdf')}}">
							<h2>
								<img class="pdf" src="{{ asset('public/web-assets/img/icon/pdficon.svg')}} " alt="">
								@lang('site.des_5')

							</h2>
						</a>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12">
                            <a class="download-pdf" href="public/portal-assets/media/user guide.pdf"> 
            
                                <h2><img class="pdf" src="{{ asset('public/web-assets/img/icon/pdficon.svg')}} " alt=""> @lang('site.des_6') </h2></a>
                        </div>


				</div>
<!-------------------------------------------------------------------------------->

				<br>
				<div class="col-12">
                            <h1 class="explain"> @lang('site.des_7') </h1>
                        </div>
				<div class="row">
				<div class="row gallery-item">

						@foreach($allData as $data)
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <a class="popup-video btn-icon"
                                href="{{ URL ::to ($data->link)}}"
                                class="video-wrap position-relative">
                                <img class="single-gallery-image"  src="{{ URL ::to ('public/upload/'.$data->image)}}">
                                <h3>  {{ $data->{'title_'.app()->getLocale()} }}</h3>
                            </a>
                        </div>@endforeach
						</div>
                </div>
        </div>







</main>

<!---------------------------------
<div class="col-lg-4 col-md-4 col-sm-12">
						<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/client_register.mp4" class="video-wrap position-relative">
							<img class="single-gallery-image" src="{{ asset('public/web-assets/img/g5.jpg')}}">
							<h3> الية التسجيل كمستفيد </h3>
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12">
						<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/lang.mp4" class="video-wrap position-relative">
							<img class="single-gallery-image" src="{{ asset('public/web-assets/img/g3.jpg')}}">
							<h3> تغيير لغة العرض </h3>
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12">
						<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/View_Meeting.mp4" class="video-wrap position-relative">
							<img class="single-gallery-image" src="{{ asset('public/web-assets/img/g8.jpg')}}">
							<h3> حضور الاجتماعات والتصويت </h3>
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12">
						<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/Client_Forget_Password.mp4" class="video-wrap position-relative">
							<img class="single-gallery-image" src="{{ asset('public/web-assets/img/g4.jpg')}}">
							<h3> استرجاع كلمه المرور </h3>
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12">
						<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/Edit_Client.mp4" class="video-wrap position-relative">
							<img class="single-gallery-image" src="{{ asset('public/web-assets/img/g2.jpg')}}">
							<h3> تعديل البيانات الشخصيه </h3>
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12">
						<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/add_m.mp4" class="video-wrap position-relative">
							<img class="single-gallery-image" src="{{ asset('public/web-assets/img/g9.jpg')}}">
							<h3> اضافه المفوضين واداره المستندات </h3>
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12">
						<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/add_t.mp4" class="video-wrap position-relative">
							<img class="single-gallery-image" src="{{ asset('public/web-assets/img/g6.jpg')}}">
							<h3> اضافه واداره المواعيد </h3>
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12">
						<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/Add_Transaction.mp4" class="video-wrap position-relative">
							<img class="single-gallery-image" src="{{ asset('public/web-assets/img/g10.jpg')}}">
							<h3> اضافه ومتابعه طلب </h3>
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12">
						<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/convert.mp4" class="video-wrap position-relative">
							<img class="single-gallery-image" src="{{ asset('public/web-assets/img/g7.jpg')}}">
							<h3> الانتقال الى مكتبي </h3>
						</a>
					</div>
				</div>

				<hr/>

				<div class="row">
					<div class="col-12">
						<h3>شرح منصة الموظف</h3>
						<div class="row gallery-item">
							<div class="col-lg-4 col-md-4 col-sm-12">
								<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/Add_dep.mp4" class="video-wrap position-relative">
									<img class="single-gallery-image" src="{{ asset('public/web-assets/img/h1.jpg' ) }}">
									<h3> اضافه وادارة الفواتير الالكترونية</h3>
								</a>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-12">
								<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/client_register.mp4" class="video-wrap position-relative">
									<img class="single-gallery-image" src="{{ asset('public/web-assets/img/h2.jpg' ) }}">
									<h3> اضافه ومتابعه الطلبات </h3>
								</a>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-12">
								<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/lang.mp4" class="video-wrap position-relative">
									<img class="single-gallery-image" src="{{ asset('public/web-assets/img/h3.jpg' ) }}">
									<h3> ادارة الاجتماع اثناء الانعقاد</h3>
								</a>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-12">
								<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/View_Meeting.mp4" class="video-wrap position-relative">
									<img class="single-gallery-image" src="{{ asset('public/web-assets/img/h4.jpg' ) }}">
									<h3>التعليقات وانواع الاسناد</h3>
								</a>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-12">
								<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/Client_Forget_Password.mp4" class="video-wrap position-relative">
									<img class="single-gallery-image" src="{{ asset('public/web-assets/img/h5.jpg' ) }}">
									<h3>ادارة العملاء والاقسام </h3>
								</a>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-12">
								<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/Edit_Client.mp4" class="video-wrap position-relative">
									<img class="single-gallery-image" src="{{ asset('public/web-assets/img/h6.jpg' ) }}">
									<h3> ادارة غرف الفيديو كونفرس</h3>
								</a>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-12">
								<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/add_m.mp4" class="video-wrap position-relative">
									<img class="single-gallery-image" src="{{ asset('public/web-assets/img/h7.jpg' ) }}">
									<h3> الية انشاء الاجتماعات</h3>
								</a>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-12">
								<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/add_t.mp4" class="video-wrap position-relative">
									<img class="single-gallery-image" src="{{ asset('public/web-assets/img/h8.jpg' ) }}">
									<h3> استخدام فلتر بحث المعاملات</h3>
								</a>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-12">
								<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/Add_Transaction.mp4" class="video-wrap position-relative">
									<img class="single-gallery-image" src="{{ asset('public/web-assets/img/h9.jpg' ) }}">
									<h3> ادارة الموظفين </h3>
								</a>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-12">
								<a class="popup-video btn-icon" href="https://www.jehat.sa/media/mp4/convert.mp4" class="video-wrap position-relative">
									<img class="single-gallery-image" src="{{ asset('public/web-assets/img/h10.jpg' ) }}">
									<h3> اضافه واداره المواعيد</h3>
								</a>
							</div>
----------------------------------------------->


@endsection