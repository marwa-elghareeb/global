@extends('layouts.appPortal')

@section('content')


<main>
        <!--? slider Area Start-->
        <section class="slider-area slider-area2">
            <div class="slider-active">
                <!-- Single Slider -->
                <div class="single-slider slider-height2">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-8 col-lg-11 col-md-12">
                                <div class="hero__caption hero__caption2 text-center">
                                    <h1 data-animation="bounceIn" data-delay="0.2s">برج جهات الافتراضي للاعمال</h1>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
            </div>
        </section>
        <!--? Blog Area Start-->
        <section class="blog_area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mb-5 mb-lg-0">
                        <div class="blog_left_sidebar">
                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <img class="card-img rounded-0" src=" {{ asset('public/web-assets/img/blog/single_blog_1.png ' ) }}" alt="" style="height: 250px; width: 250px;">
                                    <!--<a href="#" class="blog_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>-->
                                </div>
                                <div class="blog_details">
                                    <a class="d-inline-block" href="blog_details.html">
                                        <h2 class="blog-head" style="color: #2d2d2d;">مجموعة شركات جندلة</h2>
                                    </a>
                                    <p></p>
                                    <ul class="blog-info-link">
                                        <li><a href="{{ URL :: to ('/employe/{id}')}}"><i class="fa fa-user"></i> الموظفين</a></li>
                                        <li><a href="#"><i class="fa fa-comments"></i> التعليقات</a></li>
                                    </ul>
                                </div>
                            </article>
                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <img class="card-img rounded-0" src=" {{ asset('public/web-assets/img/blog/single_blog_2.png  ' ) }}" alt="" style="height: 250px; width: 250px;">
                                   <!-- <a href="#" class="blog_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>>-->
                                    </a>
                                </div>
                                <div class="blog_details">
                                    <a class="d-inline-block" href="">
                                        <h2 class="blog-head" style="color: #2d2d2d;">معرض جهات الافتراضي للمطورين العقاريين</h2>
                                    </a>
                            
                                    <ul class="blog-info-link">
                                        <li><a href="{{ URL :: to ('/employe/{id}')}}"><i class="fa fa-user"></i> الموظفين</a></li>
                                        <li><a href="#"><i class="fa fa-comments"></i> التعليقات</a></li>
                                    </ul>
                                </div>
                            </article>
                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <img class="card-img rounded-0" src="  {{ asset('public/web-assets/img/blog/single_blog_3.png ' ) }}" alt="" style="height: 250px; width: 250px;">
                                    <!--<a href="#" class="blog_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>-->
                                </div>
                                <div class="blog_details">
                                    <a class="d-inline-block" href="blog_details.html">
                                        <h2 class="blog-head" style="color: #2d2d2d;">أضواء للدعاية والإعلان</h2>
                                    </a>
                        
                                    <ul class="blog-info-link">
                                        <li><a href="{{ URL :: to ('/employe/{id}')}}"><i class="fa fa-user"></i> الموظفين</a></li>
                                        <li><a href="#"><i class="fa fa-comments"></i>التعليقات</a></li>
                                    </ul>
                                </div>
                            </article>
                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <img class="card-img rounded-0" src=" {{ asset('public/web-assets/img/blog/single_blog_4.png ' ) }}" alt="" style="height: 250px; width: 250px;">
                                    <!--<a href="#" class="blog_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>-->
                                </div>
                                <div class="blog_details">
                                    <a class="d-inline-block" href="blog_details.html">
                                        <h2 class="blog-head" style="color: #2d2d2d;">شركة أصول للاتصالات</h2>
                                    </a>
                                    
                                    <ul class="blog-info-link">
                                        <li><a href="{{ URL :: to ('/employe/{id}')}}"><i class="fa fa-user"></i> الموظفين</a></li>
                                        <li><a href="#"><i class="fa fa-comments"></i> التعليقات</a></li>
                                    </ul>
                                </div>
                            </article>
                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <img class="card-img rounded-0" src="  {{ asset('public/web-assets/img/blog/single_blog_5.png ' ) }}" alt="" style="height: 250px; width: 250px;">
                                    <!--<a href="#" class="blog_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>-->
                                </div>
                                <div class="blog_details">
                                    <a class="d-inline-block" href="blog_details.html">
                                        <h2 class="blog-head" style="color: #2d2d2d;">القنصلية العامة لجمهورية مصر العربية بالرياض(تجريبي)</h2>
                                    </a>
                                    
                                    <ul class="blog-info-link">
                                        <li><a href="{{ URL :: to ('/employe/{id}')}}"><i class="fa fa-user"></i> الموظفين</a></li>
                                        <li><a href="#"><i class="fa fa-comments"></i> التعليقات</a></li>
                                    </ul>
                                </div>
                            </article>
                            <nav class="blog-pagination justify-content-center d-flex">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a href="#" class="page-link" aria-label="Previous">
                                            <i class="ti-angle-left"></i>
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link">1</a>
                                    </li>
                                    <li class="page-item active">
                                        <a href="#" class="page-link">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link" aria-label="Next">
                                            <i class="ti-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="blog_right_sidebar">
                         <aside class="single_sidebar_widget search_widget">
                          <form action="#">
                           <div class="form-group">
                            <div class="input-group mb-3">
                             <input type="text" class="form-control" placeholder='البحث عن شركة ''
                             onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'">
                             <div class="input-group-append">
                              <button class="btns" type="button"><i class="ti-search"></i></button>
                            </div>
                          </div>
                        </div>
                        <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                        type="submit">بحث</button>
                      </form>
                      </aside>
                      <aside class="single_sidebar_widget post_category_widget">
                        <h4 class="widget_title" style="color: #2d2d2d;">الاقسام</h4>
                        <ul class="list cat-list">
                         <li>
                          <a href="#" class="d-flex">
                           <p>تقنية المعلومات</p>
                           <p>(02)</p>
                         </a>
                       </li>
                       <li>
                        <a href="#" class="d-flex">
                         <p>ادارة الاعمال</p>
                         <p>(05)</p>
                       </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                         <p>الجمعيات</p>
                         <p>(03)</p>
                       </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                         <p>التسويق</p>
                         <p>(04)</p>
                       </a>
                      </li>
                                </ul>
                            </aside>
                           
                           <!-- <aside class="single_sidebar_widget tag_cloud_widget">
                                <h4 class="widget_title" style="color: #2d2d2d;">Tag Clouds</h4>
                                <ul class="list">
                                    <li>
                                        <a href="#">project</a>
                                    </li>
                                    <li>
                                        <a href="#">love</a>
                                    </li>
                                    <li>
                                        <a href="#">technology</a>
                                    </li>
                                    <li>
                                        <a href="#">travel</a>
                                    </li>
                                    <li>
                                        <a href="#">restaurant</a>
                                    </li>
                                    <li>
                                        <a href="#">life style</a>
                                    </li>
                                    <li>
                                        <a href="#">design</a>
                                    </li>
                                    <li>
                                        <a href="#">illustration</a>
                                    </li>
                                </ul>
                            </aside>-->

                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Blog Area End -->
        

@endsection