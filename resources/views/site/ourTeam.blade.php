@extends('layouts.appPortal')
@section('content')

<!-------------------------------------------------------------------------------->
<div class="breadcrumb">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="breadcrumbs-title">@lang('site.team')
          <span>@lang('site.work')</span>
        </h2>
        <ul class="breadcrumb-list">
          <li><a href="index.html">@lang('site.Homepage')</a></li>
          <li>@lang('site.ourTeam') </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<!-------------------------------------------------------------------------------->
<div class="team-work">
  <div class="container">
    <div class="card card-container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-blk team-head-text">
          @lang('site.ourTeam')
          </h1>
        </div>
      </div>
      <div class="row">


        @foreach($allData as $data)
        <div class="col-lg-3 col-md-4 col-sm-12 mb-30">
          <div class="card">
            <div class="team-image-wrapper">
              <img src="{{ URL ::to ('public/upload/'.$data->image)}}" class="img-fluid  img-thumbnail rounded-circle" alt="image1">
            </div>
            <p class="text-blk name">{{ $data->name }}
            </p>
            <p class="text-blk position"> {{ $data->position }}
            </p>

            <div class="social-icons">
              <a class="icon" href="mailto:{{ $data->email }}"><i class="fa fa-envelope"></i></a>
              <a class="icon" href="https://wa.me/{{ $data->whats_app }}?text="> <i class="fab fa-whatsapp"></i></a>
              <a class="icon" href="{{ $data->meeting_link }}"> <i class="fa fa-link"></i></a>
            </div>
          </div>
        </div>

        @endforeach

      </div>
    </div>

  </div>
</div>


@endsection