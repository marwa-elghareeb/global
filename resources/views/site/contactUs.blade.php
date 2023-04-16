@extends('layouts.appPortal')

@section('content')

<!-------------------------------------------------------------------------------->
<div class="breadcrumb">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="breadcrumbs-title">@lang('site.contact')
                    <span>@lang('site.with')</span>
                </h2>
                <ul class="breadcrumb-list">
                    <li><a href="{{ URL :: to ('/')}}">@lang('site.Homepage')</a></li>
                    <li>@lang('site.contactUs')</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<!-------------------------------------------------------------------------------->
<div class="contact-us">
    <div class="container">
        <div class="card-container card">
            <div class="row justify-content-center">
                <div class="col-lg-7 col-md-10 col-sm-12">
                    <div class="hero__caption hero__caption2 text-center ">

                        <h1 class="contct" data-animation="bounceIn" data-delay="0.2s"> @lang('site.Contact_Us')    </h1>

                        <p data-animation="fadeInUp" data-delay="0.4s">
                        @lang('site.des_contact')   </p>

                    </div>
                </div>
            </div>
            <div class="row align-items-center">
            @foreach($allData as $data)
            <div class="col-lg-4 col-md-5 col-sm-12 my-0">
                <div class="contact-infos media-body">
                        <div class="contact-info media-body">
                            <h3 class="title" style="overflow: hidden; font-family: cairo"></h3>
                            <br>
                            <div class="media-body">
                                <h3>{{ $data->{'name_'.app()->getLocale()} }} </h3>
                                <p>{{ $data->{'address_'.app()->getLocale()} }} </p>
                                <div class="info phone">
                                    <img alt="" height="50" src="{{ asset('public/web-assets/img/Whatsapp.png')}}" width="52"><span>{{ $data->number }}</span>
                                </div>
                                <p>{{ $data->{'desc_'.app()->getLocale()} }} </p>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="info media-body">
                                <span>{{ $data->email }}
                                </span>
                                <span class="contact-info__icon"><i class="ti-email"></i></span>
                                <p>  @lang('site.hours')</p>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
                <div class="col-lg-8 col-md-7 col-sm-12 my-0">
                <div class="content-wrapper">
            @if(Session::has('flash_message'))
            <p class="alert alert-info">{{ Session::get('flash_message') }}</p>
            @endif
        </div>
                    <div class="form">
                    <form enctype="multipart/form-data" method="post"
                            action="{{ URL :: to ('/contactUsForm')}}">
                            {{ csrf_field() }}
                        <div class="row">
                            <div class="col-lg-6 col-md-12">
                                <div class="form-group mb-30">
                                    <input type="text" name="name" class="form-control" placeholder="        @lang('site.name') ">
                                    @if($errors->has('name'))
                                        <div class="error">{{ $errors->first('name') }}</div>
                                        @endif
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12">
                                <div class="form-group mb-30">
                                    <input type="text" name="phone" class="form-control" placeholder="  @lang('site.phone') ">
                                    @if($errors->has('phone'))
                                        <div class="error">{{ $errors->first('phone') }}</div>
                                        @endif
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="form-group mb-30">
                                    <input type="text" name="email" class="form-control" placeholder="  @lang('site.email')">
                                    @if($errors->has('email'))
                                        <div class="error">{{ $errors->first('email') }}</div>
                                        @endif
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="form-group mb-30">
                                    <input type="text" name="subject" class="form-control" placeholder=" @lang('site.subject')  ">
                                    @if($errors->has('subject'))
                                        <div class="error">{{ $errors->first('subject') }}</div>
                                        @endif
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group mb-30">
                                    <textarea class="form-control" name="message" id="exampleFormControlTextarea1" placeholder="@lang('site.message')  " rows="6"></textarea>
                                    @if($errors->has('message'))
                                        <div class="error">{{ $errors->first('message') }}</div>
                                        @endif
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="send-button"> @lang('site.send')</button>
                            </div>

                        </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="google-map">
                <iframe class="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.09742716265!2d46.69508482545472!3d24.585833656193323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0f65f5d44c21%3A0x21602e9c7844e7dd!2z2YXYrNmF2YjYudipINi02LHZg9in2Kog2KzZhtiv2YTYqQ!5e0!3m2!1sar!2ssa!4v1672146481978!5m2!1sar!2ssa" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</div>



@endsection
