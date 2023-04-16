<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Employees;
use App\Models\Companies;
use App\Models\Department;
use App\Models\Events;
use Illuminate\Http\Request;

class EmployeesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $allData = Employees::all();
        return view('admin.employee.list')->with('allData', $allData);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $allData = Companies::all();
        $allDept = Department::all();
        $allEvents = Events::all();
        return view('admin.employee.create')->with([ 'allData'=> $allData ,
        'allDept'=> $allDept ,'allEvents'=> $allEvents ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //validation
        $request->validate([
            'company_id' => 'required',
            'department_id' => 'required',
            'name' => 'required|max:255',
            'position' => 'required|max:255',
            'meeting_link' => 'required',
            'email' => 'required',
            'whats_app' => 'required|numeric',
            'images' => 'required|mimes:jpeg,png,jpg,gif'
        
        ]);

        //Store
        $data = new Employees();
        $data->company_id = $request->company_id;
        $data->department_id = $request->department_id;
        $data->event_id = $request->event_id;
        $data->name = $request->name;
        $data->position = $request->position;
        $data->meeting_link = $request->meeting_link;
        $data->email = $request->email;
        $data->whats_app = $request->whats_app;
        if($request->file('images')){
            $file= $request->file('images');
            $filename= date('YmdHi').$file->getClientOriginalName();
            $file-> move(public_path('upload'), $filename);
        }
        $data->image = $filename;
        $data->save();
        return redirect()->route('employees.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $allData = Companies::all();
        $allDept = Department::all();
        $editData = Employees::where('id',$id)->first();
        $allEvents = Events::all();
        return view('admin.employee.edit')->with(['allData'=> $allData, 
        'editData'=> $editData ,'allDept'=> $allDept ,'allEvents'=> $allEvents]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //validation
        $request->validate([
            'company_id' => 'required',
            'department_id' => 'required',
            'name' => 'required|max:255',
            'position' => 'required|max:255',
            'meeting_link' => 'required',
            'email' => 'required',
            'whats_app' => 'required|numeric'
        
        ]);

        //Update
        $data = Employees::find($id);
        $data->company_id = $request->company_id;
        $data->department_id = $request->department_id;
        $data->event_id = $request->event_id;
        $data->name = $request->name;
        $data->position = $request->position;
        $data->meeting_link = $request->meeting_link;
        $data->email = $request->email;
        $data->whats_app = $request->whats_app;
        if($request->file('images')){
            $file= $request->file('images');
            $filename= date('YmdHi').$file->getClientOriginalName();
            $file-> move(public_path('upload'), $filename);
           $data->image = $filename;
        }else{  
        }
        $data->save();
        return redirect()->route('employees.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Employees::destroy($id);
        return redirect()->route('employees.index')->with('flash_message', 'Item deleted!');
    }
}
