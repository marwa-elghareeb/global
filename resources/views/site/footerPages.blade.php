@extends('layouts.appPortal')
@section('content')

<!-------------------------------------------------------------------------------->
<div class="breadcrumb">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="breadcrumbs-title"> @lang('site.Link') <span> @lang('site.Important')</span></h2>
                <ul class="breadcrumb-list">
                    <li><a href="{{ URL :: to ('/')}}">@lang('site.Homepage')</a></li>
                    <li>  {{ $allData->{'name_'.app()->getLocale()} }}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-------------------------------------------------------------------------------->
<div class="layout-pages">
    <div class="container">
        <div class="row justify-content-center">
            <div class=" col-xxl-12 col-lg-12 col-md-12 col-12">
                <div class="card">
                    <div class="card-wrapper">

                        
                        <div class="card-box align-center">
                            <section class="sample-text-area">
                                <div class="container box_1170" style="text-align : right">

                                    <p class="sample-text">

                                    <h1> {{ $allData->{'name_'.app()->getLocale()} }}</h1>
                                    <br>

                                    <p class="description"> {{ $allData->{'desc_'.app()->getLocale()} }}
                                    </p>
                                </div>
                        </div>
                        </section>
                     



                    </div>

                </div>
            </div>

        </div>
    </div>

</div>




@endsection