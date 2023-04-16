@extends('layouts.appPortal')

@section('content')

<!-------------------------------------------------------------------------------->
<div class="breadcrumb">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="breadcrumbs-title">@lang('site.about') 
                    <span>@lang('site.us')</span></h2>
                <ul class="breadcrumb-list">
                    <li><a href="{{ URL :: to ('/')}}"> @lang('site.Homepage')</a></li>
                    <li>@lang('site.aboutUs')</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-----------------------------------------------------------------
{{ asset('public/web-assets/img/1m.png')}}
    نحن نسعى من اجل مواكبة الحداثة والتطور ونشر الثقافة الرقمية , وفى
                                            إطار رؤية 2030 ساهمنا بدور فعال فى زيادة الوعي التقنى لدى الجمهور ,
                                            حيث تُتيح المنصة للجهات فتح مكاتب افتراضية لموظفيها وغرف إجتماعات .
                                            كما تُمكن المستفيدين من الوصول للجهات بكل سهولة ويُسر,
                                            فى مختلف المجالات نحن نوظف خبراتنا لنؤمن لعملائنا واقعاً ملموسأ يحقق
                                            رغابتهم بالنمو والإزدهار المستدام
--------------->
<div class="about-page">
    <div class="container">
        <div class="row justify-content-center">
            <div class=" col-xxl-12 col-lg-12 col-md-12 col-12">
                <div class="card">
        
                    <div class="card-wrapper">
                        <div class="card-box align-center">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-6 col-sm-12 my-0">
                                    <div class="about-content">
                                        <div class="section-title">
                                            <h1 class="title">


                                            {{ $allData[0]->{'title_'.app()->getLocale()} }} </h1>
                                        </div>
                                        <p class="description wow fadeInUp">
                                   
                                     
                                        {{ strip_tags( $allData[0]->{'desc_'.app()->getLocale()}  ) }}
                                        </p>
                                        <div class="singiture wow fadeInUp" data-wow-delay="0.5s">
                                            <h2 class="sub-title wow fadeInUp">
                                             {{ $allData[4]->{'title_'.app()->getLocale()} }}</h2>
                                            <h3>     {{ $allData[4]->{'name_'.app()->getLocale()} }}</h3>
                                            <img src="{{ URL ::to ('public/upload/'.$allData[4]->image)}}" class="wow fadeInUp" data-wow-delay="0.6s" alt="sign">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 my-0">
                                    <div class="about-thumb wow pixFadeRight" data-wow-delay="0.6s" style="visibility: visible; animation-delay: 0.6s; animation-name: l;">
                                        <img src=" {{ URL ::to ('public/upload/'.$allData[0]->image)}}" class="img-fluid" alt="about">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class=" our-services text-center ">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4 col-md-6 col-sm-12">
                                    <div class="single-services  h-100mb-30  border border-light rounded-5 text-center">
                                        <div class="services-ion">
                                            <img src="{{ URL ::to ('public/upload/'.$allData[1]->image)}}" alt="">
                                        </div>
                                        <div class="services-cap">
                                            <h3 class="font-weight-bold text-center"> {{ $allData[1]->{'title_'.app()->getLocale()} }}</h5>
                                                <p class=" text-center">{{ strip_tags( $allData[1]->{'desc_'.app()->getLocale()}  ) }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class=" col-lg-4 col-md-6 col-sm-12">
                                    <div class="single-services h-100 mb-30  border border-light rounded-5 text-center">
                                        <div class="services-ion">
                                            <img src=" {{ URL ::to ('public/upload/'.$allData[2]->image)}}  " alt="" style="height: 100px; width: 100px;">
                                        </div>
                                        <div class="services-cap">
                                            <h3 class="font-weight-bold text-center">{{ $allData[2]->{'title_'.app()->getLocale()} }}</h3>
                                            <p class=" text-center">{{ strip_tags( $allData[2]->{'desc_'.app()->getLocale()}  ) }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" col-lg-4 col-md-6 col-sm-12 ">
                                    <div class="single-services h-100 mb-30 text-center border border-light rounded-5">
                                        <div class="services-ion">
                                            <img src=" {{ URL ::to ('public/upload/'.$allData[3]->image)}} " alt="" style="height: 100px; width: 100px;">
                                        </div>
                                        <div class="services-cap">
                                            <h3 class="font-weight-bold text-center">{{ $allData[3]->{'title_'.app()->getLocale()} }}</h3>
                                            <p class=" text-center"> {{ strip_tags( $allData[3]->{'desc_'.app()->getLocale()}  ) }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>

        </div>
    </div>

</div>




@endsection