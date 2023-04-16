@extends('layouts.appPortal')


@section('content')

<link rel="stylesheet" href="{{ asset('public\tower\event.css')}}">

<section class="wrapper">
    <div class="container-fostrap">
        <div>
            <!--img src="https://4.bp.blogspot.com/-7OHSFmygfYQ/VtLSb1xe8kI/AAAAAAAABjI/FxaRp5xW2JQ/s320/logo.png" class="fostrap-logo"/-->
            <h1 class="heading" style="text-decoration:underline;">
               المعارض الافتراضيه
            </h1>
        </div>
        <div class="content">
            <div class="container">
                <div class="row">


                @foreach($allData as $data)
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="#">
                            <img src="{{ URL ::to ('public/upload/'.$data->image)}}" />
                          </a>
                            <div class="card-content" style="text-align: center ;">
                                <h4 class="card-title">
                                    <a href="{{ URL :: to ('/employeesEvent' , $data->id )}}" > 
                                        {{ $data->name_ar }}
                                  </a>
                                </h4>
                                <p class="">
                                    يمكنك مشاهده المزيد من تفاصيل المعرض الافتراضى من خلال الضغط على المزيد ...
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="{{ URL :: to ('/employeesEvent' , $data->id )}}" class="btn btn-link btn-block">
                                    المزيد
                                </a>
                            </div>
                        </div>
                    </div>
                    @endforeach
                    
                </div>
            </div>
        </div>
    </div>
</section>



@endsection