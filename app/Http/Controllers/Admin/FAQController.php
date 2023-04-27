<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FAQ;
use App\Models\Categories;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class FAQController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allData = FAQ::all();
        return view('admin.faq.list')->with('allData', $allData);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $allData = Categories::all();
        return view('admin.faq.create')->with('allData', $allData);
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
            'question_ar' => 'required|max:255',
            'answer_ar' => 'required|max:255',

        ]);

        //Store
        $data = new FAQ();
        $data->question_ar = $request->question_ar;
        $data->question_en = $request->question_en;
        $data->answer_ar = $request->answer_ar;
        $data->answer_en = $request->answer_en;
        $data->category_id = $request->category_id;
        $data->save();
    
        return redirect()->route('faq.index');
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
       $allData = Categories::all();
       $editData =FAQ::where('id', $id)->first();
       return view('admin.faq.edit')->with(['allData' => $allData, 'editData' => $editData]);
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
            'question_ar' => 'required|max:255',
            'answer_ar' => 'required|max:255',

        ]);

        //Update
        $data = FAQ::find($id);
        $data->question_ar = $request->question_ar;
        $data->question_en = $request->question_en;
        $data->answer_ar = $request->answer_ar;
        $data->answer_en = $request->answer_en;
        $data->category_id = $request->category_id;
        $data->save();
   
        return redirect()->route('faq.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = FAQ::find($id);
        FAQ::destroy($id);
        return redirect()->route('faq.index')->with('flash_message', 'Item deleted!');
    }
}
