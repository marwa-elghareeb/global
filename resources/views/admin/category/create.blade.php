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

                    <li class="breadcrumb-item active">Add Category
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
                            <form role="form" id="myForm" enctype="multipart/form-data" method="post" action="{{ route('list.store') }}">
                                {{ csrf_field() }}


                                <ul>
                                    @foreach ($errors->all() as $error)
                                    <div class="alert alert-danger"> {{ $error }}</div>
                                    @endforeach
                                </ul>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Category Name (Ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="name_ar" onkeyup="myFunction()" id="fname" aria-describedby="validationDefaultUsername1">
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Category Name (En)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="name_en" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                    </div>
                                </div>


                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Select Parent </label>
                                    <div class="col-lg-9">
                                        <select class="form-control" name="parent_id">
                                            <option class="text-muted" value="0"> Select Parent</option>
                                            @foreach($allData as $data)
                                            <option value="{{ $data->id }}">{{ $data->name_ar }}</option>
                                            @endforeach

                                        </select>
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