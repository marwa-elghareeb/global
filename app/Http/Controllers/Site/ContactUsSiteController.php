<?php
namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\contact;

class ContactUsSiteController extends Controller
{
    //
    public function index()
    {
        $allData = contact::all();
        return view('site.contactUS')->with(['allData' => $allData]);

    }
    public function ContactUsForm(Request $request)
    {
        //validation
        $request->validate([
            'name' => 'required|max:255',
            'phone' => 'required|max:255',
            'email' => 'required|max:255',
            'subject' => 'required|max:255',
            'message' => 'required',

        ]);
        //send email
       // mail("info@jehat.sa",$request->name,$request->message);
        return back()->with('flash_message','تم ارسال الرساله بنجاح وسيتم التواصل فى اقرب وقت');

    }

}
