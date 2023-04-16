<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Pages;
use App\Models\Categories;
use App\Models\ActivityLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $allData = Pages::all();
        foreach($allData as $data)
        {
            $subData = Categories::where('id',$data->category_id)->get();

           
            if(count($subData) > 0)
            {
                $data->subName = $subData[0]->name_ar;
               
                $sub = Categories::where('id',$subData[0]->id)->get();
               //  if($sub[0]->category_id != 0)
               // {
                $name = Categories::find($sub[0]->parent_id);
                $data->mainName = $name->name_ar;
              // }else{
                    $data->mainCat = 'لا يوجد فئه اساسيه';
               // }
            }
            else
            {
                $data->subName = 'لا يوجد فئه فرعيه';
                
            }
            
        }
        return view('admin.pages.list')->with('allData', $allData);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $allData = Categories::where('parent_id','!=', 0)->get();
        return view('admin.pages.create')->with('allData', $allData);

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
            'parent_id' => 'required',
            'name_ar' => 'required|max:255',
          //  'name_en' => 'required|max:255',
            'title_ar' => 'required|max:255',
         //   'title_en' => 'required|max:255',
            'description_ar' => 'required',
          //  'description_en' => 'required',
            'images' => 'mimes:jpeg,png,jpg,gif'
        
        ]);

        //Store
        $data = new Pages();
        $data->name_ar = $request->name_ar;
        $data->name_en = $request->name_en;
        $data->title_ar = $request->title_ar;
        $data->title_en = $request->title_en;
        $data->description_ar = $request->description_ar;
        $data->description_en = $request->description_en;
        $data->category_id = $request->parent_id;

        if($request->file('images')){
            $file= $request->file('images');
            $filename= date('YmdHi').$file->getClientOriginalName();
            $file-> move(public_path('upload'), $filename);
           // $data['image']= $filename;
           $data->images = $filename;
        }else{
            $data->images = '';
        }
        $data->save();

        //Add to Activity
        $actData = new ActivityLog();
        $actData->user_id = Auth::user()->id;
        $actData->user_name = Auth::user()->name;
        $actData->activity = "تم اضافه صفحه جديده";
        $actData->save();
        return redirect()->route('pages.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        

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
        $allData = Categories::where('parent_id','!=', 0)->get();
        $editData = Pages::where('id',$id)->first();
        return view('admin.pages.edit')->with(['allData'=> $allData, 'editData'=> $editData]);
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
            'parent_id' => 'required',
            'name_ar' => 'required|max:255',
           // 'name_en' => 'required|max:255',
            'title_ar' => 'required|max:255',
            //'title_en' => 'required|max:255',
            'description_ar' => 'required',
          //  'description_en' => 'required',
        
        ]);

        //Update
        $data = Pages::find($id);

        $data->name_ar = $request->name_ar;
        $data->name_en = $request->name_en;
        $data->title_ar = $request->title_ar;
        $data->title_en = $request->title_en;
        $data->description_ar = $request->description_ar;
        $data->description_en = $request->description_en;
        $data->category_id = $request->parent_id;

        if($request->file('images')){
            $file= $request->file('images');
            $filename= date('YmdHi').$file->getClientOriginalName();
            $file-> move(public_path('upload'), $filename);
           // $data['image']= $filename;
           $data->images = $filename;
        }else{  
        }
        $data->save();

        //Add to Activity
        $actData = new ActivityLog();
        $actData->user_id = Auth::user()->id;
        $actData->user_name = Auth::user()->name;
        $actData->activity = "تم تعديل صفحه جديده";
        $actData->save();

        return redirect()->route('pages.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Pages::find($id);
        Pages::destroy($id);
        //Add to Activity
        $actData = new ActivityLog();
        $actData->user_id = Auth::user()->id;
        $actData->user_name = Auth::user()->name;
        $actData->activity = "تم حذف صفحه ";
        $actData->save();
        return redirect()->route('pages.index')->with('flash_message', 'Item deleted!');
    }
}
