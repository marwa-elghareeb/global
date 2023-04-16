@extends('layouts.appAdmin')
@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>Media</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('media-data.index') }}">Media</a>
                    </li>

                    <li class="breadcrumb-item active">Edit Media
                    </li>
                </ol>
            </div>
        </div>

        <div class="row">

            <div class="col-xl-12">


                <div class="card forms-card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Edit Item</h4>
                        <div class="basic-form">
                            <form role="form" enctype="multipart/form-data" method="post" 
                            action="{{ route('media-data.update' , $editData->id) }}">
                                {{ csrf_field() }}
                                {{ method_field('PATCH') }}

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> Title(Ar)</label>
                                    <div class="col-sm-9">
                                    <div class="input-group">
                                            <input type="text" class="form-control" onkeyup="myFunction()" id="fname" value="{{ $editData->title_ar}}" name="title_ar" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('title_ar'))
                                        <div class="error">{{ $errors->first('titel_ar') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> Title(En)</label>
                                    <div class="col-sm-9">
                                    <div class="input-group">
                                            <input type="text" class="form-control" value="{{ $editData->title_en}}" name="title_en" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
    
                                        @if($errors->has('title_en'))
                                        <div class="error">{{ $errors->first('titel_en') }}</div>
                                        @endif
                                    </div>
                                </div>                        

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">name (Ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" value="{{ $editData->name_ar}}" name="name_ar" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('name_ar'))
                                        <div class="error">{{ $errors->first('name_ar') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">name (En)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" value="{{ $editData->name_en}}" name="name_en" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('name_en'))
                                        <div class="error">{{ $errors->first('name_en') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> desc(Ar)</label>
                                    <div class="col-sm-9">
                                    <div class="input-group">
                                            <textarea class="form-control" name="desc_ar" rows="6">{{ $editData->desc_ar}}</textarea>
                                        </div>
                                        @if($errors->has('desc_ar'))
                                        <div class="error">{{ $errors->first('desc_ar') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> desc(En)</label>
                                    <div class="col-sm-9">
                                    <div class="input-group">
                                            <textarea class="form-control" name="desc_en" rows="6">{{ $editData->desc_en}}</textarea>
                                        </div>
                                        @if($errors->has('desc_en'))
                                        <div class="error">{{ $errors->first('desc_en') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">link</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" value="{{ $editData->link}}" name="link" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                       
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Image</label>
                                    <div class="col-sm-9">
                                    <div class="input-group">
                                            <input type="file"  name="image" id="validationDefaultUsername9"  value="{{ $editData->image}}"  aria-describedby="inputGroupPrepend2">
                                        </div>
                                        
                                        @if($errors->has('image'))
                                        <div class="error">{{ $errors->first('image') }}</div>
                                        @endif

                                    </div>
                                </div>

                                <div style="float: right;">
                                    <button type="submit" class="btn btn-primary btn-form">Submit</button>
                                    <button type="reset"  class="btn btn-light btn-form"><a href="{{ route('media-data.index') }}">Cancel</a></button>
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