<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Settings;

use Illuminate\Http\Request;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         $allData = Settings::all();
        return view('admin.settings.list')->with(['allData' => $allData]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('admin.Settings.create');
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
            'title_ar' => 'required|max:255',
            'title_en' => 'required|max:255',
            'desc_ar' => 'required',
            'desc_en' => 'required',
            'facebook' => 'required|max:255',
            'twitter' => 'required|max:255',
            'instagram' => 'required|max:255',
            'youtube' => 'required|max:255',
            'image' => 'mimes:jpeg,png,jpg,gif'
        
        ]);
             //Store
             $data = new Settings();
             $data->title_ar = $request->title_ar;
             $data->title_en = $request->title_en;
             $data->desc_ar = $request->desc_ar;
             $data->desc_en = $request->desc_en;
             $data->facebook = $request->facebook;
             $data->twitter = $request->twitter;
             $data->instagram = $request->instagram;
             $data->youtube= $request->youtube;

             if($request->file('image')){
                 $file= $request->file('image');
                 $filename= date('YmdHi').$file->getClientOriginalName();
                 $file-> move(public_path('upload'), $filename);
                // $data['image']= $filename;
                $data->image = $filename;
             }else{
                 $data->image = '';
             }
             $data->save();
             return redirect()->route('settings.index');

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
        $editData = Settings::where('id', $id)->first();
        return view('admin.settings.edit')->with(['editData' => $editData]);
      
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
            'title_ar' => 'required|max:255',
            'title_en' => 'required|max:255',
            'desc_ar' => 'required',
            'desc_en' => 'required',
            'facebook' => 'required|max:255',
            'twitter' => 'required|max:255',
            'instagram' => 'required|max:255',
            'youtube' => 'required|max:255',
            'image' => 'mimes:jpeg,png,jpg,gif'
        
        ]);
           //Update
           $data = Settings::find($id);
           $data->title_ar = $request->title_ar;
           $data->title_en = $request->title_en;
           $data->desc_ar = $request->desc_ar;
           $data->desc_en = $request->desc_en;
           $data->facebook = $request->facebook;
           $data->twitter = $request->twitter;
           $data->instagram = $request->instagram;
           $data->youtube= $request->youtube;
           if($request->file('image')){
               $file= $request->file('image');
               $filename= date('YmdHi').$file->getClientOriginalName();
               $file-> move(public_path('upload'), $filename);
              // $data['image']= $filename;
              $data->image = $filename;
           }else{  
           }
           $data->save();
           return redirect()->route('settings.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        Settings::destroy($id);
        return redirect()->route('settings.index')->with('flash_message', 'Item deleted!');

    }
}
