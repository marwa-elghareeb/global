
@extends('layouts.appAdmin')
@section('content')

<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>Categories</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('list.index') }}">Categories</a>
                    </li>
                    <li class="breadcrumb-item active">Show Categories</li>
                </ol>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Categories</h4>
                        <div class="card-content">
                            <div class="nestable">
                                <div class="dd" id="nestable">
                                    <ol class="dd-list">

                                        @foreach ($allData as $data)
                                        <li class="dd-item" data-id="{{ $data->id}}">
                                            <div class="dd-handle">{{ $data->id}} - {{ $data->name_ar}}
                                            </div>
                                            <ol class="dd-list">
                                                @foreach ($data->sub as $s)
                                                <li class="dd-item" data-id="3">
                                                    <div class="dd-handle">{{ $s->id}} - {{ $s->name_ar}}
                                                    <span style="float:right;" 
                                                    class="badge badge-primary badge-pill">{{ $s->pagesCount }}</span>
                                                    </div>
                                                    <ol class="dd-list">
                                                    @foreach ($s->subSub as $ss)
                                                    <li class="dd-item" data-id="3">
                                                    <div class="dd-handle">{{ $s->id}} - {{ $ss->name_ar}}
                                                    <span style="float:right;" 
                                                    class="badge badge-primary badge-pill">{{ $ss->pagesCount1 }}</span>
                                                    </div>
                                                     </li>
                                                     @endforeach


                                                    </ol>

                                                </li>
                                                @endforeach
                                            </ol>
                                        </li>
                                        @endforeach
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- #/ container -->
</div>




@endsection