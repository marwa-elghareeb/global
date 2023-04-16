<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Media;

class MediaSiteController extends Controller
{
    public function index()
    {
        $allData = Media::all();
        return view('site.media')->with(['allData' => $allData]);

    }
}
