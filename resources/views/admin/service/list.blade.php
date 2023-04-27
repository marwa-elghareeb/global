@extends('layouts.appAdmin')
@section('content')


<!--**********************************
            Content body start
        ***********************************-->
<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>Services</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('all-services.index') }}">Services</a>
                    </li>
                    <li class="breadcrumb-item active">Show Services</li>
                </ol>
            </div>
        </div>




        <div class="row">
            <div class="col-lg-12">
                <div class="card button-card">
                    <div class="card-body">
                        <a href="{{ route('all-services.create') }}" 
                        type="button" class="btn btn-rounded btn-info" style="float: right;">
                            <span class="btn-icon-left text-info">
                                <i class="fa fa-plus color-info"></i> </span>Add</a>


                    </div>
                </div>
            </div>
        </div>

        <div class="content-wrapper">
            @if(Session::has('flash_message'))
            <p class="alert alert-info">{{ Session::get('flash_message') }}</p>
            @endif
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="example display" style="min-width: 845px">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name (Ar)</th>
                                        <th>Name (En)</th>
                                
                                        <th>Edit</th>
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    <?php $i = 1; ?>
                                    @foreach($allData as $data)
                                    <tr>
                                        <th>{{ $i ++ }}</th>
                                        <td>{{ $data->name_ar }}</td>
                                        <td>{{ $data->name_en }}</td>

                                    

                                        <td>
                                            <a href="{{ route('all-services.edit', $data->id ) }}" type="button" class="btn btn-rounded btn-secondary">
                                                <i class="fa fa-pencil color-secondary"></i> </a>
                                        </td>

                                        <td>

                                            <form method="POST" action="{{route('all-services.destroy', $data->id) }}">
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-rounded btn-danger">
                                                    <i class="fa fa-close color-danger"></i></button>
                                                @csrf
                                            </form>



                                        </td>

                                    </tr>


                                    @endforeach

                                <tfoot>
                                    <tr>
                                        <th>#</th>
                                        <th>Name (Ar)</th>
                                        <th>Name (En)</th>
                                       
                                        <th>Edit</th>
                                        <th>Delete</th>

                                    </tr>
                                </tfoot>


                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    </div>
    <!-- #/ container -->
</div>
<!--**********************************
            Content body end
        ***********************************-->


@endsection