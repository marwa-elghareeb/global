<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
//
use App\Models\Settings;
use App\Models\AboutUs;
use App\Models\Services;
use App\Models\Categories;
use App\Models\Projects;
use App\Models\FAQ;
use App\Models\Contact;

class IndexController extends Controller
{
    
     //
     public function Home()
     {
         $settingData = Settings::where('id', 1)->first();
         $aboutusData = AboutUs::all();
         $serviceData = Services::all();
         $allCat = Categories::all();
         $allProject = Projects::all();
         $allFaq = FAQ::all();
         return view('site.home')->with([
             'settingData' => $settingData, 'aboutusData' => $aboutusData,
             'serviceData' => $serviceData, 'allCat' => $allCat, 'allProject' => $allProject,
             'allFaq' => $allFaq,
         ]);
     }


     public function Cards()
     {
        return view('site.cards');
     }



}
