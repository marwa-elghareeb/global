@extends('layouts.appPortal')
@section('content')

<!-------------------------------------------------------------------------------->
<div class="breadcrumb">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="breadcrumbs-title"> مكتب <span> الاستقبال</span></h2>
                <ul class="breadcrumb-list">
                    <li><a href="{{ URL :: to ('/')}}">الرئيسية</a></li>
                    <li> مكتب الاستقبال </li>
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
                        <h1 data-animation="bounceIn" data-delay="0.2s"> {{ $cData->name_ar}} </h1>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-2 col-md-6 col-sm-12 mb-30"></div>

                <div class="col-lg-4 col-md-6 col-sm-12 mb-30">
                    <div class="icon-box h-100" data-aos="fade-up" data-aos-delay="100">
                        <div class="box-img-item  text-center">
                            <img src="{{ asset('public/web-assets/img/icon/icons8-office-100.png')}} " alt="">
                        </div>
                        <h4 class="title"><a href=""> مكتب الاستقبال</a></h4>
                        <p class="description">يتم عرض جميع الشركات الموجوده فى المنصه وكذلك الاقسام الخاصه بها
                            وايضا
                            الموظفين</p>
                        <a href="{{ $cData->reception_link}}"  target="_blank"
                        class="btn btn-outline-secondary  btn-sm pt-8 ">الدخول</a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12 mb-30">
                    <div class="icon-box h-100" data-aos="fade-up" data-aos-delay="200">
                        <div class="box-img-item  text-center">
                            <img src="{{ asset('public/web-assets/img/icon/icons8-office-1001.png')}} " alt="">
                        </div>
                        <h4 class="title"><a href="companies.html">الاقسام والموظفين </a></h4>
                        <p class="description">عرض جميع المعارض الموجود فى المنصه وتفاصيل كل معرض</p>
                        <a href="{{ URL :: to ('/department/'.$cData->slug)}}" class="btn btn-outline-secondary  pt-8 btn-sm">الدخول</a>

                    </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-12 mb-30"></div>


            </div>
        </div>
    </div>

</section>




@endsection