@extends('layouts.appAdmin')
@section('content')


<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>Aboutus</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('about-us.index') }}">Aboutus</a>
                    </li>

                    <li class="breadcrumb-item active">Add 
                    </li>
                </ol>
            </div>
        </div>

        <div class="row">

            <div class="col-xl-12">


                <div class="card forms-card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Add New </h4>
                        <div class="basic-form">
                            <form role="form" enctype="multipart/form-data" method="post" action="{{ route('about-us.store') }}">
                                {{ csrf_field() }}


                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> Name (Ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="name_ar" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('name_ar'))
                                        <div class="error">{{ $errors->first('name_ar') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> Name (En)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="name_en" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('name_en'))
                                        <div class="error">{{ $errors->first('name_en') }}</div>
                                        @endif
                                    </div>
                                </div>

                               
                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Title (Ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="title_ar"  id="fname" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('title_ar'))
                                        <div class="error">{{ $errors->first('title_ar') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Title (En)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="title_en" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('title_en'))
                                        <div class="error">{{ $errors->first('title_en') }}</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label text-label">Description (Ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <textarea  class="form-control"  name="desc_ar" rows="6"></textarea>
                                        </div>
                                        @if($errors->has('desc_ar'))
                                        <div class="error">{{ $errors->first('desc_ar') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label text-label">Description (En)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <textarea  class="form-control"  name="desc_en" rows="6"></textarea>
                                        </div>
                                        @if($errors->has('desc_en'))
                                        <div class="error">{{ $errors->first('desc_en') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Upload Image</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="file"  name="image" id="validationDefaultUsername9" aria-describedby="inputGroupPrepend2">
                                        </div>
                                        @if($errors->has('image'))
                                        <div class="error">{{ $errors->first('image') }}</div>
                                        @endif

                                    </div>
                                </div>
                                


                                <div style="float: right;">
                                    <button type="submit" class="btn btn-primary btn-form">Submit</button>
                                    <button type="reset"  class="btn btn-light btn-form"><a href="{{ route('about-us.index') }}">Cancel</a></button>

                                </div>
                            </form>
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