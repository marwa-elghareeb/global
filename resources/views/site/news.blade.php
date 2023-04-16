@extends('layouts.appPortal')

@section('content')

<!-------------------------------------------------------------------------------->
<div class="breadcrumb">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="breadcrumbs-title">
                    <span>@lang('site.news')</span>
                </h2>
                <ul class="breadcrumb-list">
                    <li><a href="{{ URL :: to ('/')}}">@lang('site.Homepage')</a></li>
                    <li>@lang('site.news')
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-------------------------------------------------------------------------------->
<main>

    <!--? Blog Area Start-->
    <section class="blog_area section-padding">
        <div class="container">

       
            <div class="row">
           
                <div class="col-lg-8 col-md-8 col-sm-12">
                    <div class="row">
                    @foreach($allData as $data)
                        <div class="col-lg-12 col-md-12 col-sm-12 posts-list">
                    <div class="blog_left_sidebar">
                        <article class="blog_item">
                            <div class="blog_item_img">
                                <img class="card-img rounded-0" 
                                src= "{{ URL ::to ('public/upload/'.$data->images)}}" alt="">
                                <a href="#" class="blog_item_date">
                                    <h3>يناير</h3>
                                    <p>2023</p>
                                </a>
                            </div>
                            <div class="blog_details">
                                <a class="d-inline-block" href="#">
                                <h2 class="blog-head" style="color: #2d2d2d;">{{ $data->{'name_'.app()->getLocale()} }}</h2>
                                    <!--<h2 class="blog-head" style="color: 
                                    #2d2d2d;">حضور صاحب السمو الملكي الأمير/ فيصل بن بندر بن عبدالع
                                    زيز آل سعود، أمير منطقة الرياض،
                                     انتخابات مجلس إدارة جمعية 
                                    بن باز الخيرية وذلك عبر #منصة_جهات</h2>-->
                                </a>
                                <ul class="blog-info-link">
                                    <li><a href="#">
                                        <i class="fa fa-comments"></i>  @lang('site.More_details')</a></li>
                                </ul>
                            </div>
                            </div>
                        
                        </article>
                        
                        
                    </div>
                @endforeach
                </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="blog_right_sidebar">
                        <aside class="single_sidebar_widget popular_post_widget">
                            <h3 class="widget_title" style="color: #2d2d2d;"> @lang('site.news_1')</h3>
                            <div class="media post_item">
                           
                                <img src="{{ URL ::to ('public/upload/'.$data->images)}}" alt="post">
                                <div class="media-body">
                                    <a href="#">
                                        <h3>{{ $data->{'name_'.app()->getLocale()} }}</h3>
                                    </a>
                                    <p>{{ $data->news_date }}</p>
                                </div>
                            </div>
                         
                            <!--<div class="media post_item">
                                <img src="{{ asset('public/web-assets/img/post/post_2.png')}}" alt="post">
                                <div class="media-body">
                                    <a href="blog_details.html">
                                        <h3>The Amazing Hubble</h3>
                                    </a>
                                    <p>02 Hours ago</p>
                                </div>
                            </div>
                            <div class="media post_item">
                                <img src="{{ asset('public/web-assets/img/post/post_3.png')}}" alt="post">
                                <div class="media-body">
                                    <a href="blog_details.html">
                                        <h3>Astronomy Or Astrology</h3>
                                    </a>
                                    <p>03 Hours ago</p>
                                </div>
                            </div>
                            <div class="media post_item">
                                <img src="{{ asset('public/web-assets/img/post/post_4.png')}}" alt="post">
                                <div class="media-body">
                                    <a href="blog_details.html">
                                        <h3>Asteroids telescope</h3>
                                    </a>
                                    <p>01 Hours ago</p>
                                    
                                </div>
                            </div>-->
                            
                        </aside>



                    </div>
                </div>
             
            </div>
        </div>
        
    </section>
  
    <!-- Blog Area End -->
    <!--? Want To work 01-->

    <!-- Want To work End -->
</main>







@endsection