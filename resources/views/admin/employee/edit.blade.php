@extends('layouts.appAdmin')
@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>Employees</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('employees.index') }}">Employees</a>
                    </li>

                    <li class="breadcrumb-item active">Edit Employee
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
                            <form role="form" enctype="multipart/form-data" method="post" action="{{ route('employees.update' , $editData->id) }}">
                                {{ csrf_field() }}
                                {{ method_field('PATCH') }}



                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Select Company Name </label>
                                    <div class="col-lg-9">
                                        <select class="form-control" name="company_id">
                                            <option class="text-muted" value="0"> Select Company</option>
                                            @foreach($allData as $data)
                                            <option @if($editData->company_id == $data->id) selected @endif value="{{ $data->id }}">{{ $data->name_ar }}</option>
                                            @endforeach

                                        </select>
                                        @if($errors->has('company_id'))
                                        <div class="error">{{ $errors->first('company_id') }}</div>
                                        @endif

                                    </div>
                                </div>

                                
                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Select Department Name </label>
                                    <div class="col-lg-9">
                                        <select class="form-control" name="department_id">
                                            <option class="text-muted" value="0"> Select Department</option>
                                            @foreach($allDept as $data)
                                            <option @if($editData->department_id == $data->id) selected @endif value="{{ $data->id }}">{{ $data->name_ar }}</option>
                                            @endforeach

                                        </select>
                                        @if($errors->has('department_id'))
                                        <div class="error">{{ $errors->first('department_id') }}</div>
                                        @endif

                                    </div>
                                </div>

                                
                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Select Event Name </label>
                                    <div class="col-lg-9">
                                        <select class="form-control" name="event_id">
                                            <option class="text-muted" value="0"> Select Event</option>
                                            @foreach($allEvents as $data)
                                            <option @if($editData->event_id == $data->id) selected @endif value="{{ $data->id }}">{{ $data->name_ar }}</option>
                                            @endforeach

                                        </select>
                                        @if($errors->has('event_id'))
                                        <div class="error">{{ $errors->first('event_id') }}</div>
                                        @endif

                                    </div>
                                </div>



                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Employee Name</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" value="{{ $editData->name}}" name="name" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('name'))
                                        <div class="error">{{ $errors->first('name') }}</div>
                                        @endif
                                    </div>
                                </div>


                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Position</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" value="{{ $editData->position}}" name="position" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('position'))
                                        <div class="error">{{ $errors->first('position') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Meeting Link</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" value="{{ $editData->meeting_link}}" name="meeting_link" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('meeting_link'))
                                        <div class="error">{{ $errors->first('meeting_link') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Email</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="email" class="form-control" value="{{ $editData->email}}" name="email" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('email'))
                                        <div class="error">{{ $errors->first('email') }}</div>
                                        @endif
                                    </div>
                                </div>


                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">What's app Number</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="number" class="form-control" value="{{ $editData->whats_app}}" name="whats_app" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('whats_app'))
                                        <div class="error">{{ $errors->first('whats_app') }}</div>
                                        @endif
                                    </div>
                                </div>



                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">Upload Images</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="file" class="form-control" name="images" id="validationDefaultUsername9" aria-describedby="inputGroupPrepend2">
                                        </div>


                                    </div>
                                </div>


                                <div style="float: right;">
                                    <button type="submit" class="btn btn-primary btn-form">Submit</button>
                                    <button type="reset"  class="btn btn-light btn-form"><a href="{{ route('employees.index') }}">Cancel</a></button>
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