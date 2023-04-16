@extends('layouts.appPortal')

@section('content')

<!-------------------------------------------------------------------------------->
<div class="breadcrumb">
  <div class="container">
      <div class="row">
          <div class="col-12">
              <h2 class="breadcrumbs-title">@lang('site.platform') 
                <span>@lang('site.jehat') </span></h2>
              <ul class="breadcrumb-list">
                  <li><a href="{{ URL :: to ('/')}}">@lang('site.Homepage')</a></li>
                  <li>@lang('site.jehat_platform') 
                  </li>
              </ul>
          </div>
      </div>
  </div>
</div>
<!-------------------------------------------------------------------------------->
<section id="services" class="services jehat-stage">
  <div class="container">
    <div class="card">
      <div class="row">
        <div class="col-12">
          <div class="section-title" data-aos="fade-up">
            <h1 data-animation="bounceIn" data-delay="0.2s">@lang('site.jehat_platform')   </h1>
          
        </div>
        </div>
      </div>
      <div class="row">


      @foreach($allData as $data)
        <div class="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div class="icon-box h-100" data-aos="fade-up" data-aos-delay="100">
            <div class="box-img-item  text-center">
              <img src="{{ URL ::to ('public/upload/'.$data->image)}} " alt="">
            </div>
            <h4 class="title"><a href=""> {{ $data->{'name_'.app()->getLocale()} }}</a></h4>
            <p class="description">يتم عرض جميع الشركات الموجوده فى المنصه وكذلك الاقسام الخاصه بها وايضا
              الموظفين
            
            </p>
            <a href="{{ $data->link }}" target="_blank" class="btn btn-outline-secondary  btn-sm pt-8 ">@lang('site.More') </a>
          </div>
        </div>
        @endforeach


        
        <!--div class="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div class="icon-box h-100" data-aos="fade-up" data-aos-delay="200">
            <div class="box-img-item  text-center">
              <img src="{{ asset('public/web-assets/img/icon/icons8-office-1001.png')}} " alt="">
            </div>
            <h4 class="title"><a href="#">مكتبى </a></h4>
            <p class="description">عرض جميع المعارض الموجود فى المنصه وتفاصيل كل معرض</p>
            <a href="https://app.jehat.sa/client_login.aspx"
              class="btn btn-outline-secondary  pt-8 btn-sm">المزيد</a>
    
          </div>
        </div>
    
        <div class="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div class="icon-box h-100" data-aos="fade-up" data-aos-delay="300">
            <div class="box-img-item text-center">
              <img src=" {{ asset('public/web-assets/img/icon/icons8-shop-100.png')}} " alt="">
            </div>
            <h4 class="title"><a href="#">المتاجر الالكترونيه</a></h4>
            <p class="description">يتم العمل عليها فى الوقت الحالى وسيتم رفعها قريبا</p>
            <button type="button" class="btn btn-outline-secondary  pt-8 btn-sm">المزيد</button>
    
          </div>
        </div>
    
        <div class="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div class="icon-box h-100" data-aos="fade-up" data-aos-delay="400">
            <div class="box-img-item text-center">
              <img src=" {{ asset('public/web-assets/img/icon/icons8-office-100.png')}} " alt="">
            </div>
            <h4 class="title"><a href="#">المعارض الافتراضيه</a></h4>
            <p class="description">يتم عرض جميع الشركات الموجوده فى المنصه وكذلك الاقسام الخاصه بها وايضا
              الموظفين</p>
            <button type="button" class="btn btn-outline-secondary  pt-8 btn-sm">المزيد</button>
    
          </div>
        </div-->
        
        
      </div>
    </div>
  </div>
      
</section>


@endsection