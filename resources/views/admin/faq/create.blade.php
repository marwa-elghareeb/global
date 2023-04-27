@extends('layouts.appAdmin')
@section('content')




<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>FAQ</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('faq.index') }}">FAQ</a>
                    </li>

                    <li class="breadcrumb-item active">Add FAQ
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
                            <form role="form" id="myForm" enctype="multipart/form-data" method="post" action="{{ route('faq.store') }}">
                                {{ csrf_field() }}

                                <!--div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Category Name </label>
                                    <div class="col-lg-9">
                                        <select class="form-control" name="category_id">
                                            <option class="text-muted" value="0"> Select Category</option>
                                            @foreach($allData as $data)
                                            <option value="{{ $data->id }}">{{ $data->name_ar }}</option>
                                            @endforeach

                                        </select>
                                    </div>
                                </div-->

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> Question (Ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="question_ar" onkeyup="myFunction()" id="fname" aria-describedby="validationDefaultUsername1">

                                        </div>
                                        @if($errors->has('question_ar'))
                                        <div class="error">{{ $errors->first('question_ar') }}</div>
                                        @endif

                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Question (En)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="question_en" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">


                                        </div>
                                        @if($errors->has('question_en'))
                                        <div class="error">{{ $errors->first('question_en') }}</div>
                                        @endif
                                    </div>
                                </div>


                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Answer (AR)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="answer_ar" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">


                                        </div>
                                        @if($errors->has('answer_ar'))
                                        <div class="error">{{ $errors->first('answer_ar') }}</div>
                                        @endif
                                    </div>
                                </div>


                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Answer (EN)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="answer_en" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">


                                        </div>
                                        @if($errors->has('answer_en'))
                                        <div class="error">{{ $errors->first('answer_en') }}</div>
                                        @endif
                                    </div>
                                </div>




                                <div>
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