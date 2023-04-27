@extends('layouts.appAdmin')
@section('content')

<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>Projects</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('all-projects.index') }}">Projects</a>
                    </li>

                    <li class="breadcrumb-item active">Edit Project
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
                            action="{{ route('all-projects.update' , $editData->id) }}">
                                {{ csrf_field() }}
                                {{ method_field('PATCH') }}

                                <!--ul>
                                    @foreach ($errors->all() as $error)
                                    <div class="alert alert-danger"> {{ $error }}</div>
                                    @endforeach

                           
                                </ul-->

                    

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Select Category Name </label>
                                    <div class="col-lg-9">
                                        <select class="form-control" name="category_id">

                                            <option class="text-muted" value="0"> Select Category</option>
                                            @foreach($allData as $data)
                                            <option @if($editData->category_id == $data->id) selected @endif
                                                value="{{ $data->id }}">{{ $data->name_ar }}</option>
                                            @endforeach

                                        </select>
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> Name (Ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control"  id="fname" value="{{ $editData->name_ar}}" name="name_ar" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('name_ar'))
                                        <div class="error">{{ $errors->first('name_ar') }}</div>
                                        @endif
                                    </div>
                                </div>


                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Name (En)</label>
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
                                    <label class="col-sm-3 col-form-label text-label">link</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="link" id="validationDefaultUsername9" aria-describedby="inputGroupPrepend2"  value="{{ $editData->link}}">
                                        </div>
                                      

                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label text-label">Description (Ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <textarea class="form-control" name="desc_ar" rows="6">{{ $editData->desc_ar}}</textarea>
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
                                            <textarea class="form-control" name="desc_en" rows="6">{{ $editData->desc_en}}</textarea>
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
                                    <button type="reset"  class="btn btn-light btn-form"><a href="{{ route('all-projects.index') }}">Cancel</a></button>
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