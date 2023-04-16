@extends('layouts.appPortal')
@section('content')


<!-- Owl Carousal
 -->
<div class="main-slider-part owl-slider" id="owl-slider">
  <!-- slide 01 -->
  <div class="slide">
    <div class="owl-slide h-100 background-image-filter" style="background-image: url('public/web-assets/img/hero/test1.JPEG');">
      <div class="owl-text text-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-11 col-md-12">
              <div class="hero__caption text-center">
                <h2 data-animation="bounceIn" data-delay="0.2s">@lang('site.platform')
                  <span>@lang('site.jehat')</span>
                </h2>
                <h2 class="lastchild" data-animation="bounceIn" data-delay="0.2s">@lang('site.des') </h2>
                <p data-animation="fadeInUp" data-delay="0.4s">

                @lang('site.des_1')

                </p>

                <a href="{{ URL :: to ('/register')}}" class="btn hero-btn" data-animation="fadeInUp" data-delay="0.7s">
               @lang('site.jehat_platform')
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- slide 02 -->
  <div class="slide">
    <div class="owl-slide h-100 background-image-filter" style="background-image: url('public/web-assets/img/hero/test2.JPEG') ; ">
      <div class="owl-text text-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-11 col-md-12">
              <div class="hero__caption text-center">
              <h2 data-animation="bounceIn" data-delay="0.2s">@lang('site.platform')
                  <span>@lang('site.jehat')</span>
                </h2>
                <h2 class="lastchild" data-animation="bounceIn" data-delay="0.2s">  @lang('site.des') </h2>
                <p data-animation="fadeInUp" data-delay="0.4s">

                @lang('site.des_1')

                </p>

                <a href="{{ URL :: to ('/register')}}" class="btn hero-btn" data-animation="fadeInUp" data-delay="0.7s">منصة
                  جهات
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- slide 03 -->
  <div class="slide">
    <div class="owl-slide h-100 background-image-filter" style="background-image: url('public/web-assets/img/hero/test3.JPEG');">
      <div class="owl-text text-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-11 col-md-12">
              <div class="hero__caption text-center">
              <h2 data-animation="bounceIn" data-delay="0.2s">@lang('site.platform')
                  <span>@lang('site.jehat')</span>
                </h2>
                <h2 class="lastchild" data-animation="bounceIn" data-delay="0.2s">  @lang('site.des') </h2>

                <p data-animation="fadeInUp" data-delay="0.4s">

                @lang('site.des_1')

                </p>

                <a href="{{ URL :: to ('/register')}}" class="btn hero-btn" data-animation="fadeInUp" data-delay="0.7s">منصة
                  جهات
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="bg-contain-sections section-padding40">
  <!-- Services Section -->
  <!--section id="services" class="services pb-80">
    <div class="container">

      <div class="section-title" data-aos="fade-up">
        <h2>   {{__('site.jehat_platform')}}</h2>
      </div>
      <div class="row">
        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-12 mb-30">
          <div class="icon-box h-100" data-aos="fade-up" data-aos-delay="100">
            <div class="icon"><i class="bx bxl-dribbble"></i></div>
            <h4 class="title"><a href="">الموارد البشرية </a></h4>
            <p class="description">
              تقدم المنصه تقارير واحصائيات
              متعددة قابله للعرض
              وايضا للطباعة</p>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-12 mb-30">
          <div class="icon-box h-100" data-aos="fade-up" data-aos-delay="200">
            <div class="text-center">
              <img src="{{ asset('public/web-assets/img/icon/pi1.png')}}" alt="">
            </div>
            <br>
            <h4 class="title"><a href="">الفواتير</a></h4>
            <p class="description">تقدم المنصه تقارير واحصائيات
              متعددة قابله للعرض
              وايضا للطباعة</p>
          </div>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-12 mb-30">
          <div class="icon-box h-100" data-aos="fade-up" data-aos-delay="300">
            <div class="text-center">
              <img src="{{ asset('public/web-assets/img/icon/ed1.png')}} " alt="">
            </div>
            <br>
            <h4 class="title"><a href="">المحررات </a></h4>
            <p class="description">تقدم المنصه تقارير واحصائيات
              متعددة قابله للعرض
              وايضا للطباعة</p>
          </div>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-12 mb-30">
          <div class="icon-box h-100" data-aos="fade-up" data-aos-delay="400">
            <div class="text-center">
              <img src=" {{ asset('public/web-assets/img/icon/me1.png')}} " alt="">
            </div>
            <br>
            <h4 class="title"><a href="">الأجتماعات </a></h4>
            <p class="description">تقدم المنصه تقارير واحصائيات
              متعددة قابله للعرض
              وايضا للطباعة</p>
          </div>
        </div>
        
        </div>
      </div>

    </div-->
  </section>
  <!------------------------------->
  <section class="section">
    <div class="brand-area">
      <div class="container">

        <div class="row justify-content-center text-center mb-5">
          <div class="col-12" data-aos="fade-up">
            <h2 class="section-heading">@lang('site.des_2')</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 overflow">
            <div class="brand-active brand-border pt-20">
              <div class="single-brand">
                <img src=" {{ asset('public/web-assets/img/gallery/brand1.png')}}" alt="">
              </div>
              <div class="single-brand">
                <img src=" {{ asset('public/web-assets/img/gallery/brand2.png')}}  " alt="">
              </div>
              <div class="single-brand">
                <img src=" {{ asset('public/web-assets/img/gallery/brand3.png')}} " alt="">
              </div>
              <div class="single-brand">
                <img src="{{ asset('public/web-assets/img/gallery/brand4.png')}} " alt="">
              </div>
              <div class="single-brand">
                <img src=" {{ asset('public/web-assets/img/gallery/brand5.png')}} " alt="">
              </div>
              <div class="single-brand">
                <img src=" {{ asset('public/web-assets/img/gallery/brand6.png')}} " alt="">
              </div>

            </div>
          </div>
        </div>


      </div>
    </div>
  </section>
</div>
<!-- Our Services End -->
<!--? About Area  -->
<section class="about-area2 section-padding40 bg-contain-sections">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-0">
        <div class="about-caption mb-50">
          <div class="about-icon">
            <img src=" {{ asset('public/web-assets/img/icon/about.svg')}}" alt="">
          </div>
          <!-- Section Tittle -->
          <div class="section-tittle mb-25">
            <h2>@lang('site.jehat_platform')</h2>
          </div>
          <p class="mb-20">
          @lang('site.des_3')
          </p>
          <a href="https://app.jehat.sa/client_register.aspx" class="all-btn"><button type="button" class="btn btn-outline-secondary  pt-8 btn-sm">@lang('site.signin') </button></a>

        </div>
      </div>

      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-0">
        <div class="ratio ratio-16x9 text-center mt-4 mb-4 ">
        <video class="embed-responsive-item" 
          src="{{ asset('public/web-assets/img/jehat 2.mp4')}}" controls
          style="max-width: 100%;height: 100%;" allowfullscreen>
        </video>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- About Area End -->

<!--? Testimonial Area Start -->
<section class="testimonial-area fix">
  <div class="container">

    <!-- Section Tittle -->
    <div class="row text-center">
      <div class="col-12" data-aos="fade-up">
        <h2 class="section-heading">  @lang('site.des_4')</h2>
      </div>
      <div class="col-12">
        <div class="testimonial-wrapper section-bg2 pt-15">
          <div class="row align-items-center justify-content-center">
            <div class=" col-lg-8 col-md-12 col-sm-9">
              <div class="about-caption">
                <!-- Testimonial Start -->
                <div class="h1-testimonial-active dot-style">
                  <!-- Single Testimonial -->
                  <div class="single-testimonial text-center">
                    <div class="testimonial-caption">
                      <img src=" {{ asset('public/web-assets/img/icon/mm.png')}} " alt="" class="quotes-sign">
                    </div>
                    <!-- founder -->
                    <div class="testimonial-founder d-flex align-items-center justify-content-center">
                      <div class="founder-text">

                      </div>
                    </div>
                  </div>
                  <!-- Single Testimonial -->
                  <div class="single-testimonial text-center">
                    <div class="testimonial-caption">
                      <img src="{{ asset('public/web-assets/img/icon/quotes-sign.png')}}" alt="" class="quotes-sign">
                    </div>
                    <!-- founder -->
                    <div class="testimonial-founder d-flex align-items-center justify-content-center">
                      <div class="founder-text">
                      </div>
                    </div>
                  </div>
                  <div class="single-testimonial text-center">
                    <div class="testimonial-caption">
                      <img src="{{ asset('public/web-assets/img/icon/mn.png')}} " alt="" class="quotes-sign">
                    </div>
                    <!-- founder -->
                    <div class="testimonial-founder d-flex align-items-center justify-content-center">
                      <div class="founder-text">
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Testimonial End -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!--? Testimonial Area End -->



@endsection