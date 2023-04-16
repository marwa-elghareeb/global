<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Companies;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CompaniesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $allData = Companies::all();
        return view('admin.company.list')->with('allData', $allData);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('admin.company.create');
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
            'name_en' => 'required|max:255',
            'images' => 'required|mimes:jpeg,png,jpg,gif'

        ]);
        //Store
        $data = new Companies();
        $data->name_ar = $request->name_ar;
        $data->name_en = $request->name_en;
        $data->reception_link = $request->reception_link;
        if ($request->file('images')) {
            $file = $request->file('images');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('upload'), $filename);
        }
        $data->image = $filename;
        $data->slug = Str::slug($request->name_ar);
        $data->save();
        return redirect()->route('companies.index');
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
        $editData = Companies::where('id', $id)->first();
        return view('admin.company.edit')->with(['editData' => $editData]);
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
            'image' => 'mimes:jpeg,png,jpg,gif'

        ]);

        //Update
        $data = Companies::find($id);

        $data->name_ar = $request->name_ar;
        $data->name_en = $request->name_en;
        $data->reception_link = $request->reception_link;
        if ($request->file('images')) {
            $file = $request->file('images');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('upload'), $filename);
            $data->image = $filename;
        } else {
        }
        $data->slug = Str::slug($request->name_ar);
        $data->save();
        return redirect()->route('companies.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $getData = Employees::where('company_id', $id)->get();
        if (count($getData) > 0) {
            return redirect()->route('companies.index')->with('flash_message', ' لا يمكن حذف الشركه لانها تحتوى على موظفين');
        } else {

            Companies::destroy($id);
            return redirect()->route('companies.index')->with('flash_message', 'Item deleted!');
        }
    }
}
