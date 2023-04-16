@extends('layouts.appAdmin')
@section('content')

<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>Users Website</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('registrationandlogin-data.index') }}">Users Website</a>
                    </li>

                    <li class="breadcrumb-item active">Edit 
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
                            action="{{ route('registrationandlogin-data.update' , $editData->id) }}">
                                {{ csrf_field() }}
                                {{ method_field('PATCH') }}

                                <!--ul>
                                    @foreach ($errors->all() as $error)
                                    <div class="alert alert-danger"> {{ $error }}</div>
                                    @endforeach

                           
                                </ul-->

                    


                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> fullname (ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" onkeyup="myFunction()" id="fname" value="{{ $editData->fullname_ar}}" name="fullname_ar" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('fullname_ar'))
                                        <div class="error">{{ $errors->first('fullname_ar') }}</div>
                                        @endif
                                    </div>
                                </div>


                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">fullname (En)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" value="{{ $editData->fullname_en}}" name="fullname_en" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('fullname_en'))
                                        <div class="error">{{ $errors->first('fullname_en') }}</div>
                                        @endif
                                    </div>
                                </div>


                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">gender type</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" onkeyup="myFunction()" id="fname" value="{{ $editData->gender_type}}" name="gender_type" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('gender_type'))
                                        <div class="error">{{ $errors->first('gender_type') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">number </label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" value="{{ $editData->number }}" name="number " id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('number '))
                                        <div class="error">{{ $errors->first('number ') }}</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label text-label">nationality</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input class="form-control" name="nationality" value="{{ $editData->nationality}}" >
                                        </div>
                                        @if($errors->has('nationality'))
                                        <div class="error">{{ $errors->first('nationality') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label text-label">identity_number</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input class="form-control" name="identity_number" value="{{ $editData->identity_number}}">
                                        </div>
                                        @if($errors->has('identity_number'))
                                        <div class="error">{{ $errors->first('identity_number') }}</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label text-label">email</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input class="form-control" name="email" value="{{ $editData->email}}" >
                                        </div>
                                        @if($errors->has('email'))
                                        <div class="error">{{ $errors->first('email') }}</div>
                                        @endif
                                    </div>
                                </div>

                               

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Role </label>
                                    <div class="col-lg-9">
                                        <select class="form-control" name="role_id">
                                            <option class="text-muted" value="0"> Select Role</option>
                                            @foreach($allData as $data)
                                            <option value="{{ $data->id }}">{{ $data->name_ar }}</option>
                                            @endforeach

                                        </select>
                                        @if($errors->has('role_id'))
                                        <div class="error">{{ $errors->first('company_id') }}</div>
                                        @endif
                                    
                                    </div>
                                </div>

              


                                <div style="float: right;">
                                    <button type="submit" class="btn btn-primary btn-form">Submit</button>
                                    <button type="reset"  class="btn btn-light btn-form"><a href="{{ route('registrationandlogin-data.index') }}">Cancel</a></button>
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