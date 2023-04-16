<?php

namespace App\Http\Controllers\Site;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\news;
//
class NewsSiteController extends Controller
{
    public function index()
    {
        $allData = news::all();
        return view('site.news')->with(['allData' => $allData]);
    }

    public function newsDetails($id)
    {
        $allData = news::where('id', $id)->first();
        return view('site.news-details')->with(['allData' => $allData]);

    }
   

}
