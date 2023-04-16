<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class RoleController extends Controller
{
  
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         $allData = role::all();
        return view('admin.role.list')->with(['allData' => $allData]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('admin.role.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
          //validation
          $request->validate([
            //'parent_id' => 'required',
            'name_ar' => 'required|max:255',
            'name_en' => 'required|max:255',
      
        
        ]);
             //Store
             $data = new role();
             $data->name_ar = $request->name_ar;
             $data->name_en = $request->name_en;
             $data->save();
             return redirect()->route('role.index');

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
        $editData = role::where('id', $id)->first();
        return view('admin.role.edit')->with(['editData' => $editData]);
      
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
        //
         //validation
         $request->validate([
            'name_ar' => 'required|max:255',
            'name_en' => 'required|max:255',
         
        
        ]);
           //Update
           $data = role::find($id);

           $data->name_ar = $request->name_ar;
           $data->name_en = $request->name_en;
        
           $data->save();
           return redirect()->route('role.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        role::destroy($id);
        return redirect()->route('role.index')->with('flash_message', 'Item deleted!');

    }
}
