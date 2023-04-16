@extends('layouts.appAdmin')
@section('content')



<!--**********************************
            Content body start
        ***********************************-->
<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>Activity Log</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('activitylog.index') }}">Activity Log</a>
                    </li>
                    <li class="breadcrumb-item active">Show Activity Log</li>
                </ol>
            </div>
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
                                        <th>Employee Name </th>
                                        <th>Activity </th>
                                        <th>Data </th>
                                

                                    </tr>
                                </thead>
                                <tbody>

                                  <?php $i = 1;?>
                                    @foreach($allData as $data)
                                    <tr>
                                        <th>{{ $i ++ }}</th>
                                        <td>{{ $data->user_name }}</td>
                                        <td>{{ $data->activity }}</td>
                                        <td>{{ $data->created_at }}</td>
                                    </tr>
                                    @endforeach

                                <tfoot>
                                    <tr>
                                        <th>#</th>
                                        <th>Employee Name </th>
                                        <th>Activity</th>
                                        <th>Data </th>
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