<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FooterPages;
class FooterSiteController extends Controller
{
    public function index($slug)
    {
        $allData = FooterPages::where('slug', $slug)->first();
        return view('site.footerPages')->with(['allData' => $allData]); 
    }
}
