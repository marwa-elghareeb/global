<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Pages;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Cards;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $users = User::all();
        $categories = Categories::all();
        $pages = Pages::all();
        
        $allData = Cards::all(['id', 'title_' . $locale,'desc_' . $locale,'name_' . $locale,'address_' . $locale,'question_' . $locale,'answer_' . $locale,]);

        return view('home')->with(['userCount'=> count($users) , 
        'catCount'=> count($categories) , 'pagesCount'=> count($pages) ,'allData' => $allData]);
    }
   
}
