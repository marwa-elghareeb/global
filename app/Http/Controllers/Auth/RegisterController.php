<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'fullname_ar' => ['required', 'string', 'max:255'],
            'fullname_en' => ['required', 'string', 'max:255'],
            'identity_number' => 'required|max:11|unique:users',
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'phone' => 'required|unique:users',
            'password' => ['required', 'string', 'min:8', 'confirmed'],
             // 'captcha' => 'required|captcha',
           
           
        ]);
      //  dd(request()->all());
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
      //  return($data);
        return User::create([
            'name' => $data['name'],
            'fullname_ar' => $data['fullname_ar'],
            'fullname_en' => $data['fullname_en'],
            'identity_number' => $data['identity_number'],
            'phone' => $data['phone'],
            'gender_type' => $data['gender_type'],
            'nationality' => $data['nationality'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }


}
