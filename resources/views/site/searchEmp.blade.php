@extends('layouts.appPortal')
@section('content')

<!-------------------------------------------------------------------------------->
<div class="breadcrumb">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="breadcrumbs-title"> البحث<span></span></h2>
                <ul class="breadcrumb-list">
                    <li><a href="{{ URL :: to ('/')}}">الرئيسية</a></li>
                    <li> البحث</li>

                </ul>
            </div>
        </div>
    </div>
</div>
<!-------------------------------------------------------------------------------->

<main>


    <section class=" blog_area single-post-area section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-11 col-md-12">
                    <div class="hero__caption hero__caption2 text-center mb-50">
                        <h1 data-animation="bounceIn" data-delay="0.2s">
                            <a href="{{ URL :: to ('/cards')}}"> الاقسام والموظفين</a>

                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">

            <div class="row d-flex">

                <div class="col-lg-8 col-md-8 col-sm-12">
                    <div class="row">

                        @if(count($allData) >0)


                        @foreach($allData as $data)

                        <div class="col-lg-6 col-md-12 col-sm-12 posts-list">
                            <div class="blog-author">
                                <div class="card">
                                    <img src="{{ URL ::to ('public/upload/'.$data->image)}}" alt="" class="img-fluid team-member-image  img-thumbnail rounded-circle" alt="image1">
                                    <div class="media-body">
                                        <a href="#">
                                            <h4 class="text-blk">{{ $data->name }}</h4>
                                        </a>
                                        <p class="text-blk position">{{ $data->position }}</p>
                                        <div class="icon-block">
                                            <a class="icon" href="mailto:{{ $data->email }}"><i class="fa fa-envelope"></i></a>
                                            <a class="icon" href="https://wa.me/{{ $data->whats_app }}?text="> <i class="fab fa-whatsapp"></i></a>
                                            <a class="icon" href="{{ $data->meeting_link }}"> <i class="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        @endforeach


                        @else

                        <div class="alert alert-primary">
                            لا يوجد بيانات بهذا الاسم.
                        </div>

                        @endif




                    </div>
                </div>



                <div class="col-lg-4 col-md-4 col-sm-12 posts-list">
                    <div class="blog_right_sidebar">
                        <aside class="single_sidebar_widget search_widget">
                            <form action="{{ URL :: to ('/searchEmp')}}" method="post">
                                {{ csrf_field() }}
                                <div class="form-group">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder='البحث عن موظف' name="search" required>
                                        <div class="input-group-append">
                                            <button class="btns" type="button">
                                                <i class="ti-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                                @if($errors->has('search'))
                                <div class="error">{{ $errors->first('search') }}</div>
                                @endif
                                <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">بحث</button>
                            </form>
                        </aside>
                        <!--aside class="single_sidebar_widget post_category_widget  text-center">
                            <h4 class="widget_title">الاقسام</h4>
                            <ul class="list cat-list text-center">




                            </ul>
                        </aside-->
                    </div>
                </div>


            </div>
        </div>
    </section>
</main>

@endsection