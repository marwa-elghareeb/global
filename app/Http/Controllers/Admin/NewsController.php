<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\news;
class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $allData = news::all();
        return view('admin.news.list')->with(['allData' => $allData]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('admin.news.create');
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
            //'parent_id' => 'required',
            'name_ar' => 'required|max:255',
            'name_en' => 'required|max:255',
            'title_ar' => 'required|max:255',
            'title_en' => 'required|max:255',
            'description_ar' => 'required',
            'description_en' => 'required',
            'images' => 'mimes:jpeg,png,jpg,gif',
            'link'=>'required',
            'news_date' =>'date',
        
        ]);
         //Store
         $data = new News();
         $data->name_ar = $request->name_ar;
         $data->name_en = $request->name_en;
         $data->title_ar = $request->title_ar;
         $data->title_en = $request->title_en;
         $data->description_ar = $request->description_ar;
         $data->description_en = $request->description_en;
         $data->link = $request->link;
         $data->news_date = $request->news_date;

         if($request->file('images')){
             $file= $request->file('images');
             $filename= date('YmdHi').$file->getClientOriginalName();
             $file-> move(public_path('upload'), $filename);
            // $data['image']= $filename;
            $data->images = $filename;
        }else{
            $data->image = '';
        }
        $data->save();
        return redirect()->route('news-data.index');
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
        $editData = news::where('id', $id)->first();
        return view('admin.news.edit')->with(['editData' => $editData]);
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
            //'parent_id' => 'required',
            'name_ar' => 'required|max:255',
            'name_en' => 'required|max:255',
            'title_ar' => 'required|max:255',
            'title_en' => 'required|max:255',
            'description_ar' => 'required',
            'description_en' => 'required',
            'images' => 'mimes:jpeg,png,jpg,gif',
            'link'=>'required',
            'news_date' =>'date',
        
        ]);
        //Update
        $data = news::find($id);
         $data->name_ar = $request->name_ar;
         $data->name_en = $request->name_en;
         $data->title_ar = $request->title_ar;
         $data->title_en = $request->title_en;
         $data->description_ar = $request->description_ar;
         $data->description_en = $request->description_en;
         $data->link = $request->link;
         $data->news_date = $request->news_date;

         if($request->file('images')){
             $file= $request->file('images');
             $filename= date('YmdHi').$file->getClientOriginalName();
             $file-> move(public_path('upload'), $filename);
            // $data['image']= $filename;
            $data->images = $filename;
        }else{  
        }
        $data->save();
        return redirect()->route('news-data.index');

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
        news::destroy($id);
        return redirect()->route('news-data.index')->with('flash_message', 'Item deleted!');
    }
}
