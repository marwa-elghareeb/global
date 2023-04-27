@extends('layouts.appAdmin')
@section('content')



<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>البانر</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('sliders.index') }}">البانر</a>
                    </li>

                    <li class="breadcrumb-item active">اضافه بانر 
                    </li>
                </ol>
            </div>
        </div>

        <div class="row">

            <div class="col-xl-12">


                <div class="card forms-card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">اضافه عنصر جديد</h4>
                        <div class="basic-form">
                            <form role="form" id="myForm" 
                            enctype="multipart/form-data" method="post" action="{{ route('sliders.store') }}">
                                {{ csrf_field() }}


                            

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> الاسم (Ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="name_ar" onkeyup="myFunction()" id="fname" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('name_ar'))
                                        <div class="error">{{ $errors->first('name_ar') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> الاسم (En)</label>
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
                                    <label class="col-sm-3 col-form-label text-label">الرابط </label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="link" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('link'))
                                        <div class="error">{{ $errors->first('link') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">الصوره</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="file"  name="image" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('image'))
                                        <div class="error">{{ $errors->first('image') }}</div>
                                        @endif
                                    </div>
                                </div>


                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> الوصف (Ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="desc_ar" class="form-control" aria-describedby="validationDefaultUsername1">
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> الوصف (En)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="desc_en" class="form-control" aria-describedby="validationDefaultUsername1">
                                        </div>
                                    </div>
                                </div>


                                <div style="float: left;">
                                    <button type="submit" class="btn btn-primary btn-form">حفظ</button>
                                    <button type="reset"  class="btn btn-light btn-form"><a href="{{ route('sliders.index') }}">الغاء</a></button>
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