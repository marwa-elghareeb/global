@extends('layouts.appPortal')

@section('content')


<!-------------------------------------------------------------------------------->
<div class="breadcrumb">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="breadcrumbs-title">@lang('site.HelpCenter')</h2>
        <ul class="breadcrumb-list">
          <li><a href="{{ URL :: to ('/')}}">@lang('site.Homepage') </a></li>
          <li> @lang('site.HelpCenter')
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<!-------------------------------------------------------------------------------->
<main>

  <div class="common-question">
    <div class="container">
      <div class="card card-container">

        @foreach($allCat as $data)
        <div class="row">


          <div class="col-12">
            <div class="section-tittle">
              <h2>  {{ $data->{'name_'.app()->getLocale()} }} </h2>
            </div>
          </div>
          <div class="col-12">
            <div class="collapse-wrapper">

              @foreach($data->child as $child)
              <div class="accordion" id="accordionExample_{{ $child->id}}">
                <div class=" d-block">
                  <div class="accordion" id="accordionExample_{{ $child->id}}">


                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne_{{ $child->id}}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne_{{ $child->id}}" aria-expanded="true" aria-controls="collapseOne_{{ $child->id}}">
                           {{  $child->{'name_'.app()->getLocale()} }}
                        </button>
                      </h2>
                      <div id="collapseOne_{{ $child->id}}" class="accordion-collapse collapse show" aria-labelledby="headingOne_{{ $child->id}}" data-bs-parent="#accordionExample_{{ $child->id}}">
                        <div class="accordion-body">
                          @foreach ($child->subSub as $ss)
                          <strong>   {{  $ss->{'name_'.app()->getLocale()} }}</strong>
                          <br>
                          <p>
                            <?php echo strip_tags($ss->pageData); ?>

                          </p>
                          <hr />
                          @endforeach

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <br>
              @endforeach
              <br>

            </div>
          </div>


        </div>
        @endforeach


      </div>

    </div>
  </div>


</main>


@endsection