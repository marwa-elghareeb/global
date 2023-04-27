<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Projects;
use App\Models\Categories;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $allData = Projects::all();
        return view('admin.project.list')->with(['allData' => $allData]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $allCat = Categories::all();
        return view('admin.project.create')->with(['allData' => $allCat]);;
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
        $request->validate([
            'name_ar' => 'required',
            'desc_ar' => 'required',
            'image' => 'mimes:jpeg,png,jpg,gif',
           
        ]);
        //Store
        $data = new Projects();
        $data->category_id = $request->category_id;
        $data->name_ar = $request->name_ar;
        $data->name_en = $request->name_en;
        $data->link = $request->link;
        if ($request->file('image')) {
            $file = $request->file('image');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('upload'), $filename);
        }
        $data->image = $filename;
        $data->desc_ar = $request->desc_ar;
        $data->desc_en = $request->desc_en;
        $data->save();
        return redirect()->route('all-projects.index');
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
        $editData = Projects::where('id', $id)->first();
        $allCat = Categories::all();
        return view('admin.project.edit')->with(['editData' => $editData , 'allData' => $allCat]);
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
        $request->validate([
            'name_ar' => 'required|max:255',
    
            'image' => 'mimes:jpeg,png,jpg,gif',
           
            'desc_ar' => 'required',
           
         
        
        ]);
             //Update
             $data = Projects::find($id);
             $data->category_id = $request->category_id;
             $data->name_ar = $request->name_ar;
             $data->name_en = $request->name_en;
             $data->desc_ar = $request->desc_ar;
             $data->desc_en = $request->desc_en;
             $data->link = $request->link;
     
             if($request->file('image')){
                $file= $request->file('image');
                $filename= date('YmdHi').$file->getClientOriginalName();
                $file-> move(public_path('upload'), $filename);
               // $data['image']= $filename;
               $data->image= $filename;
           }else{
               $data->image = '';
           }
           $data->save();
             return redirect()->route('all-projects.index');
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
        
        Projects::destroy($id);
        return redirect()->route('all-projects.index')->with('flash_message', 'Item deleted!');

    }
}
