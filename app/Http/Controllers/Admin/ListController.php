<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use App\Models\Pages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ListController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $allData = Categories::all();
    
        return view('admin.category.list')->with('allData', $allData);
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
        return view('admin.category.create')->with('allData', $allData);
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
            'name_ar' => 'required|unique:categories|max:255',
            // 'name_en' => 'required|max:255',

        ]);

        //Store
        $data = new Categories();

        $data->name_ar = $request->name_ar;
        $data->name_en = $request->name_en;
        $data->parent_id = $request->parent_id;
        $data->save();

        return redirect()->route('list.index');
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
        $allData = Categories::all();
        $editData = Categories::where('id', $id)->first();
        return view('admin.category.edit')->with(['allData' => $allData, 'editData' => $editData]);
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
        $data = Categories::find($id);

        $data->name_ar = $request->name_ar;
        $data->name_en = $request->name_en;
        $data->parent_id = $request->parent_id;
        $data->save();
    
        return redirect()->route('list.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $data = Categories::find($id);
        return redirect()->route('list.index')->with('flash_message', 'Item deleted!');

    }
}
