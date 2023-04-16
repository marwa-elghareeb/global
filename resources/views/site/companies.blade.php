@extends('layouts.appPortal')


@section('content')

<!-------------------------------------------------------------------------------->
<div class="breadcrumb">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="breadcrumbs-title">@lang('site.companies')
                    <span>@lang('site.group')</span>
                </h2>
                <ul class="breadcrumb-list">
                    <li><a href="{{ URL :: to ('/')}}">@lang('site.Homepage')</a></li>
                    <li>@lang('site.Virtual_offices')
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-------------------------------------------------------------------------------->



<div class="libraries">
    <div class="container">
        <div class="card card-container">
            <div class=" row">
                <div class="col-lg-12 col-md-12">
                    <div class="section-title" data-aos="fade-up">
                        <h1>  @lang('site.Virtual_offices')</h1>

                    </div>
                </div>
               
                @foreach($allData as $data)
                <div class="col-lg-4 col-md-6 col-sm-12 mb-30">
                    <div class="card">
                        <div class="view overlay">
                            <img class="card-img" src="{{ URL ::to ('public/upload/'.$data->image)}}">
                        </div>

                        <div class="card-body">
                            <h1 class="card-title"> {{ $data->{'name_'.app()->getLocale()} }}</h1>
                        </div>
                        <div class="button-one ">
                            <a href="{{ URL :: to ('/reception' , $data->slug )}}" class=" " 
                            role="button" aria-pressed="true">
                            <i class="fa fa-user"></i>  @lang('site.departments_employees') </a>
                        </div>

                    </div>
                </div>
                @endforeach
                
                

            </div>
        </div>

    </div>
</div>




@endsection