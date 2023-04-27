<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AboutUs;

class AboutusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         $allData = AboutUs::all();
        return view('admin.aboutus.list')->with(['allData' => $allData]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('admin.aboutus.create');
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
            'name_ar' => 'required|max:255',
            'title_ar' => 'required|max:255',
           
        
        ]);
             //Store
             $data = new AboutUs();
             $data->name_ar = $request->name_ar;
             $data->name_en = $request->name_en;
             $data->title_ar = $request->title_ar;
             $data->title_en = $request->title_en;
             $data->desc_ar = $request->desc_ar;
             $data->desc_en = $request->desc_en;
     
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
             return redirect()->route('about-us.index');

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
        $editData = AboutUs::where('id', $id)->first();
        return view('admin.aboutus.edit')->with(['editData' => $editData]);
      
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
            'title_ar' => 'required|max:255',
    
        
        ]);
           //Update
           $data = AboutUs::find($id);

           $data->name_ar = $request->name_ar;
           $data->name_en = $request->name_en;
           $data->title_ar = $request->title_ar;
           $data->title_en = $request->title_en;
           $data->desc_ar = $request->desc_ar;
           $data->desc_en = $request->desc_en;
   
           if($request->file('image')){
               $file= $request->file('image');
               $filename= date('YmdHi').$file->getClientOriginalName();
               $file-> move(public_path('upload'), $filename);
              // $data['image']= $filename;
              $data->image = $filename;
           }else{  
           }
           $data->save();
           return redirect()->route('about-us.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //        $data = AboutUs::find($id);

        AboutUs::destroy($id);
        return redirect()->route('about-us.index')->with('flash_message', 'Item deleted!');

    }
}
