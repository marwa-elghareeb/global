@extends('layouts.appAdmin')
@section('content')

<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>الاعدادات</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('settings.index') }}">الاعدادات</a>
                    </li>

                    <li class="breadcrumb-item active">تعديل 
                    </li>
                </ol>
            </div>
        </div>

        <div class="row">

            <div class="col-xl-12">


                <div class="card forms-card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">تعديل عنصر</h4>
                        <div class="basic-form">
                            <form role="form" enctype="multipart/form-data" method="post" 
                            action="{{ route('settings.update' , $editData->id) }}">
                                {{ csrf_field() }}
                                {{ method_field('PATCH') }}

                                <!--ul>
                                    @foreach ($errors->all() as $error)
                                    <div class="alert alert-danger"> {{ $error }}</div>
                                    @endforeach

                           
                                </ul-->

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">صوره الشعار</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="file"  name="image" id="validationDefaultUsername9" aria-describedby="inputGroupPrepend2">
                                        </div>
                                        

                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> رقم الجوال</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control"  value="{{ $editData->phone}}" name="phone" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('phone'))
                                        <div class="error">{{ $errors->first('phone') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> البريد الالكترونى</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="email" class="form-control"  value="{{ $editData->email}}" name="email" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('email'))
                                        <div class="error">{{ $errors->first('email') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">العنوان (ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" value="{{ $editData->address_ar}}" name="address_ar"  id="fname" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('address_ar'))
                                        <div class="error">{{ $errors->first('address_ar') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">العنوان(en)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="address_en"  value="{{ $editData->address_en}}" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('address_en'))
                                        <div class="error">{{ $errors->first('address_en') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> رابط الخريطه</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="map_link"   value="{{ $editData->map_link}}" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('map_link'))
                                        <div class="error">{{ $errors->first('map_link') }}</div>

                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> facebook</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control"  value="{{ $editData->facebook}}" name="facebook" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('facebook'))
                                        <div class="error">{{ $errors->first('facebook') }}</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> twitter</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control"   value="{{ $editData->twitter}}" name="twitter" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('twitter'))
                                        <div class="error">{{ $errors->first('twitter') }}</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> instagram</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control"   value="{{ $editData->instagram}}" name="instagram" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('instagram'))
                                        <div class="error">{{ $errors->first('instagram') }}</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> youtube</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control"   value="{{ $editData->youtube}}" name="youtube" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('youtube'))
                                        <div class="error">{{ $errors->first('youtube') }}</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label"> Linked In</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control"   value="{{ $editData->linkedin}}" name="linkedin" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('linkedin'))
                                        <div class="error">{{ $errors->first('linkedin') }}</div>
                                        @endif
                                    </div>
                                </div>

                               

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">تعريف مختصر (Ar)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control"  id="fname" value="{{ $editData->title_ar}}" name="title_ar" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('title_ar'))
                                        <div class="error">{{ $errors->first('title_ar') }}</div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-sm-3 col-form-label text-label">تعريف مختصر (En)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" value="{{ $editData->title_en}}" name="title_en" id="validationDefaultUsername1" aria-describedby="validationDefaultUsername1">
                                        </div>
                                        @if($errors->has('title_en'))
                                        <div class="error">{{ $errors->first('title_en') }}</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label text-label">وصف الموقع (Ar)</label>
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
                                    <label class="col-sm-3 col-form-label text-label">وصف الموقع (En)</label>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <textarea class="form-control" name="desc_en" rows="6">{{ $editData->desc_en}}</textarea>
                                        </div>
                                        @if($errors->has('desc_en'))
                                        <div class="error">{{ $errors->first('desc_en') }}</div>
                                        @endif
                                    </div>
                                </div>
                                


                                <div style="float: left;">
                                    <button type="submit" class="btn btn-primary btn-form">حفظ</button>
                                    <button type="reset"  class="btn btn-light btn-form"><a href="{{ route('settings.index') }}">الغاء</a></button>
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