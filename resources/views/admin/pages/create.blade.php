@extends('layouts.appAdmin')
@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>Pages</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('pages.index') }}">Pages</a>
                    </li>

                    <li class="breadcrumb-item active">Add Page
                    </li>
                </ol>
            </div>
        </div>

        <div class="row">

            <div class="col-xl-12">


                <div class="card forms-card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Add New Item</h4>
                        <div class="basic-form">
                            <form role="form" enctype="multipart/form-data" method="post" 
                            action="{{ route('pages.store') }}">
                                {{ csrf_field() }}


                                <!--ul>
                                    @foreach ($errors->all() as $error)
                                    <div class="alert alert-danger"> {{ $error }}</div>
                                    @endforeach
                                </ul-->

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Select Parent </label>
                                    <div class="col-lg-9">
                                        <select class="form-control" name="parent_id">
                                            <option class="text-muted" value="0"> Select Parent</option>
                                            @foreach($allData as $data)
                                            <option value="{{ $data->id }}">{{ $data->name_ar }}</option>
                                            @endforeach

                                        </select>
                                        @if($errors->has('parent_id'))
                                        <div class="error">{{ $errors->first('parent_id') }}</div>
                                        @endif
                                    
                                    </div>
                                </div>


                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Page Name (Ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="name_ar" onkeyup="myFunction()" id="fname" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('name_ar'))
                                        <div class="error">{{ $errors->first('name_ar') }}</div>
                                        @endif
                                    </div>
                                </div>


                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Page Name (En)</label>
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
                                            <input type="text" class="form-control" name="title_ar" onkeyup="myFunction()" id="fname" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
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
                                <!-- id="ck_editor"-->
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label text-label">Description (Ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <textarea  class="form-control" id="ck_editor" name="description_ar" rows="6"></textarea>
                                        </div>
                                        @if($errors->has('description_ar'))
                                        <div class="error">{{ $errors->first('description_ar') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label text-label">Description (En)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <textarea  class="form-control" name="description_en" rows="6"></textarea>
                                        </div>
                                        @if($errors->has('description_en'))
                                        <div class="error">{{ $errors->first('description_en') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Upload Images</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="file" class="form-control" name="images" id="validationDefaultUsername9" aria-describedby="inputGroupPrepend2">
                                        </div>
                                        @if($errors->has('images'))
                                        <div class="error">{{ $errors->first('images') }}</div>
                                        @endif

                                    </div>
                                </div>

                                <div style="float: right;">
                                    <button type="submit" class="btn btn-primary btn-form">Submit</button>
                                    <button type="reset" class="btn btn-light btn-form">Cancel</button>
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