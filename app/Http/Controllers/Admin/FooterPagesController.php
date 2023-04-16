<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FooterPages;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class FooterPagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    $allData = FooterPages::all();
  return view('admin.FooterPages.list')->with(['allData' => $allData]); 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
         return view('admin.FooterPages.create');
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
            //'parent_id' => 'required',
            'name_ar' => 'required|max:255',
            'name_en' => 'required|max:255',
            'title_ar' => 'required|max:255',
            'title_en' => 'required|max:255',
            'desc_ar' => 'required',
            'desc_en' => 'required',
         
        
        ]);
             //Store
             $data = new FooterPages();
             $data->name_ar = $request->name_ar;
             $data->name_en = $request->name_en;
             $data->title_ar = $request->title_ar;
             $data->title_en = $request->title_en;
             $data->desc_ar = $request->desc_ar;
             $data->desc_en = $request->desc_en;
             $data->slug = Str::slug($request->slug);
        
             
             $data->save();
             return redirect()->route('footer-pages-data.index');

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
        $editData = FooterPages::where('id', $id)->first();
        return view('admin.FooterPages.edit')->with(['editData' => $editData]);

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
            'name_en' => 'required|max:255',
            'title_ar' => 'required|max:255',
            'title_en' => 'required|max:255',
            'desc_ar' => 'required',
            'desc_en' => 'required',
            
        
        ]);
           //Update
           $data = FooterPages::find($id);

           $data->name_ar = $request->name_ar;
           $data->name_en = $request->name_en;
           $data->title_ar = $request->title_ar;
           $data->title_en = $request->title_en;
           $data->desc_ar = $request->desc_ar;
           $data->desc_en = $request->desc_en;
           $data->slug = Str::slug($request->slug);
           $data->save();
           return redirect()->route('footer-pages-data.index');

    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        FooterPages::destroy($id);
        return redirect()->route('footer-pages-data.index')->with('flash_message', 'Item deleted!');
    }
}
