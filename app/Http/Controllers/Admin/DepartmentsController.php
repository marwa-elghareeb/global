<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Companies;
use App\Models\Department;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DepartmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $allData = Department::all();
        foreach ($allData as $data) {
            $cData = Companies::where('id', $data->company_id)->first();
            if($cData)
            {$data->companyName = $cData->name_ar;}
            else{
                $data->companyName = '';
            }
            
        }
        return view('admin.department.list')->with('allData', $allData);
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
         return view('admin.department.create')->with('allData', $allData);
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
            'name_ar' => 'required|max:255',
            // 'name_en' => 'required|max:255',

        ]);
        //Store
        $data = new Department();
        $data->name_ar = $request->name_ar;
        $data->name_en = $request->name_en;
        $data->company_id = $request->company_id;
        $data->save();
        //Add to Activity
        $actData = new ActivityLog();
        $actData->user_id = Auth::user()->id;
        $actData->user_name = Auth::user()->name;
        $actData->activity = "تم اضافه قسم جديده";
        $actData->save();
        return redirect()->route('departments.index');
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
        //
        $allData = Companies::all();
        $editData = Department::where('id', $id)->first();
        return view('admin.department.edit')->with(['allData' => $allData, 'editData' => $editData]);
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
            'name_ar' => 'required|max:255',
            // 'name_en' => 'required|max:255',

        ]);

        //Update
        $data = Department::find($id);
        $data->name_ar = $request->name_ar;
        $data->name_en = $request->name_en;
        $data->company_id = $request->company_id;
        $data->save();
        //Add to Activity
        $actData = new ActivityLog();
        $actData->user_id = Auth::user()->id;
        $actData->user_name = Auth::user()->name;
        $actData->activity = "تم تعديل قسم جديده";
        $actData->save();
        return redirect()->route('departments.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Department::find($id);
        
            $getData = Employees::where('department_id', $data->id)->get();
            if (count($getData) > 0) {
                return redirect()->route('departments.index')->with('flash_message', 
                ' لا يمكن مسح القسم لانها تحتوى على موظفين , قم بنقل الموظفين اولا ومن ثم امسح العنصر');
            } else {

                Department::destroy($id);
                //Add to Activity
                $actData = new ActivityLog();
                $actData->user_id = Auth::user()->id;
                $actData->user_name = Auth::user()->name;
                $actData->activity = "تم حذف  قسم ";
                $actData->save();
                return redirect()->route('departments.index')->with('flash_message', 'Item deleted!');
            }

    }
}
