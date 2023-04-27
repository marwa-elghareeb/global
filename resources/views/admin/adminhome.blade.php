@extends('layouts.appAdmin')
@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>لوحه التحكم0</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">الرئيسيه</a>
                    </li>
                    <li class="breadcrumb-item active">
                        <a href="#">لوحه التحكم</a>
                    </li>
                </ol>
            </div>
        </div>
        <div class="row" id="dragdrop">
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="stat-widget-two">
                            <div class="media">
                                <div class="media-body">
                                    <h2 class="mt-0 mb-1 text-info">0</h2><span class=""> عدد المشاريع</span>
                                </div>
                                <img class="ml-3" src="{{ asset('admin/assets/images/icons/1.png')}}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="stat-widget-two">
                            <div class="media">
                                <div class="media-body">
                                    <h2 class="mt-0 mb-1 text-danger">0</h2><span class=""> عدد الخدمات</span>
                                </div>
                                <img class="ml-3" src="{{ asset('admin/assets/images/icons/2.png')}}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="stat-widget-two">
                            <div class="media">
                                <div class="media-body">
                                    <h2 class="mt-0 mb-1 text-warning">0</h2>
                                    <span class="">عدد الرسائل </span>
                                </div>
                                <img class="ml-3" src="{{ asset('admin/assets/images/icons/3.png')}}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
</div>
@endsection