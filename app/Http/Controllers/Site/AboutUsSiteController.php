<?php
namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AboutUs;

class AboutUsSiteController extends Controller
{
    //
    public function index()
    {
        $allData = AboutUs::all();
        return view('site.aboutUs')->with(['allData' => $allData]);       

    }
}
