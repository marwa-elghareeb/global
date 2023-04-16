<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UsersWebsite;
use App\Models\Cards;
use Cookie;
use Illuminate\Support\Facades\Auth;

class UsersWebsiteController extends Controller
{
    //
    public function index()
    {

        return view('site.userregister');
    }

    public function userForm(Request $request)
    {

        //Add User
        //validation 
        $request->validate([
            'fullname_ar' => 'required|max:255',
            'fullname_en' => 'required|max:255',
            'gender_type' => 'required|max:255',
            'nationality' => 'required|max:255',
            'identity_number' => 'required|max:11|unique:users_websites',
            'email' => 'required|max:255|unique:users_websites',
            'phone' => 'required|unique:users_websites',
           
            'password' => 'min:8',
            'password_confirmation' => 'required_with:password|same:password|min:8'

        ]);
        //Add User
        $data = new UsersWebsite();
        $data->fullname_ar = $request->fullname_ar;
        $data->fullname_en = $request->fullname_en;
        $data->gender_type = $request->gender_type;
        $data->phone = $request->phone;
        $data->nationality = $request->nationality;
        $data->identity_number = $request->identity_number;
        $data->email = $request->email;
        $data->password = $request->password;
        $new = $data->save();
        //User Cookies
        $cookie = setcookie('user_name', $data->fullname_ar, 120);
        dd($cookie['name']);
        //User Cards
        $allData = Cards::all();
        return view('site.cards')->with(['allData' => $allData]);
    }
    public function reloadCaptcha()
    {
        //return response()->json(['captcha'=> captcha_img()]);
    }


    public function userLogin()
    {
        return view('site.userLogin');
    }

    public function loginForm(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
   
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            return redirect()->intended('dashboard')
                        ->withSuccess('Signed in');
        }
  
        return redirect("login")->withSuccess('Login details are not valid');

       // return view('site.userLogin');
    }
    public function forgotPassword()
    {

        return view('site.forgotPassword');
    }
}
