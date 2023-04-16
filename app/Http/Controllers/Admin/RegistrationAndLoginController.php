<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UsersWebsite;
use App\Models\User;
use App\Models\role;

class RegistrationAndLoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allData = User::where('role_id', 1)->get();
        return view('admin.registrationandlogin.list')->with(['allData' => $allData]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('admin.registrationandlogin.create');
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
        //Add User
        //validation
        $request->validate([
            'fullname_ar' => 'required|max:255',
            'fullname_en' => 'required|max:255',
            'gender_type' => 'required|max:255',
            'nationality' => 'required|max:255',
            'identity_number' => 'required|max:255',
            'number' => 'required',
            'email' => 'required|max:255',
            'password' => 'required|max:255',

        ]);
        //Store
        $data = new UsersWebsite();
        $data->fullname_ar = $request->fullname_ar;
        $data->fullname_en = $request->fullname_en;
        $data->gender_type = $request->gender_type;
        $data->nationality = $request->nationality;
        $data->number = $request->number;
        $data->identity_numbe = $request->identity_numbe;
        $data->email = $request->email;
        $data->password = $request->password;



        $data->save();
        return redirect()->route('registrationandlogin-data.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $editData = UsersWebsite::where('id', $id)->first();
        $allData = role::all();
        return view('admin.registrationandlogin.edit')->with(['editData' => $editData, 'allData' => $allData]);
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
            'fullname_ar' => 'required|max:255',
            'fullname_en' => 'required|max:255',
            'gender_type' => 'required|max:255',
            'nationality' => 'required|max:255',
            'identity_number' => 'required|max:255',
            'number' => 'required',
            'email' => 'required|max:255',
            'password' => 'required|max:255',

        ]);
        //Update
        $data = UsersWebsite::find($id);

        $data->fullname_ar = $request->fullname_ar;
        $data->fullname_en = $request->fullname_en;
        $data->gender_type = $request->gender_type;
        $data->nationality = $request->nationality;
        $data->number = $request->number;
        $data->identity_numbe = $request->identity_numbe;
        $data->email = $request->email;
        $data->password = $request->password;
        $data->role_id = $request->role_id;
        $data->save();
        return redirect()->route('registrationandlogin-data.index');
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

        UsersWebsite::destroy($id);
        return redirect()->route('registrationandlogin-data.index')->with('flash_message', 'Item deleted!');
    }
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
}
