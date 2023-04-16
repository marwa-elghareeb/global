<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $allData = Contact::all();
        return view('admin.contact.list')->with(['allData' => $allData]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('admin.contact.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)

    {

        $request->validate([
            //'parent_id' => 'required',
            'name_ar' => 'required',
            'name_en' => 'required',
            'desc_ar' => 'required',
            'desc_en' => 'required',
            'address_ar' => 'required',
            'address_en' => 'required',
            'email' => 'required',
            'number' => 'required',
            'map' => 'required',
            'link' => 'required',

        ]);
        //store
        $data = new contact();
        $data->name_ar = $request->name_ar;
        $data->name_en = $request->name_en;
        $data->desc_ar = $request->desc_ar;
        $data->desc_en = $request->desc_en;
        $data->address_ar = $request->address_ar;
        $data->address_en = $request->address_en;
        $data->email = $request->email;
        $data->number = $request->number;
        $data->map = $request->map;
        $data->link = $request->link;
        $data->save();
        //var_dump( $data);
        return redirect()->route('contact-data.index');
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
        $editData = contact::where('id', $id)->first();
        return view('admin.contact.edit')->with(['editData' => $editData]);
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
            'name_ar' => 'required',
            'name_en' => 'required',
            'desc_ar' => 'required',
            'desc_en' => 'required',
            'address_ar' => 'required',
            'address_en' => 'required',
            'email' => 'required',
            'number' => 'required',
            'map' => 'required',
            'link' => 'required',
        ]);
        //Update
        $data = contact::find($id);

        $data->name_ar = $request->name_ar;
        $data->name_en = $request->name_en;
        $data->desc_ar = $request->desc_ar;
        $data->desc_en = $request->desc_en;
        $data->address_ar = $request->address_ar;
        $data->address_en = $request->address_en;
        $data->email = $request->email;
        $data->number = $request->number;
        $data->map = $request->map;
        $data->link = $request->link;
        $data->save();
        //var_dump( $data);
        return redirect()->route('contact-data.index');
    }



    


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
                //        $data = contact::find($id);
        contact::destroy($id);
        return redirect()->route('contact-data.index')->with('flash_message', 'Item deleted!');
    }
}

