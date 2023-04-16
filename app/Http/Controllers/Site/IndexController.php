<?php
namespace App\Http\Controllers\Site;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
//
use App\Models\Categories;
use App\Models\FAQ;
use App\Models\Pages;
use App\Models\Employees;

class IndexController extends Controller
{
    
    public function ourTeam()
    {
        $allData = Employees::all();
        return view('site.ourTeam')->with([ 'allData' => $allData ]);;
    }
    /*===Help Center==============================*/
    
    public function help()
    {
        $allCaegories = Categories::where('parent_id',0)->get();
        foreach($allCaegories as $data)
        {
            $child = Categories::where('parent_id',$data->id)->get();
            foreach ($child as $s) {
                $sub1 = Categories::where('parent_id', $s->id)->get();
                foreach ($sub1 as $ss) {
                    $pageData = Pages::where('category_id',$ss->id)->first();
                    if(empty($pageData->description_ar))
                    {$ss->pageData = '';}else{
                       // var_dump( $pageData->description_ar);
                        $ss->pageData = $pageData->description_ar;
                    }
                   
                   
                }
                $s->subSub = $sub1;
              
            }
            $data->child = $child;
        }
        
        return view('site.help')->with(['allCat' => $allCaegories]);
    }

    public function helpDetails($id)
    {
        $allCaegories = Categories::where('parent_id',0)->get();
        foreach($allCaegories as $data)
        {
            $child = Categories::where('parent_id',$data->id)->get();
            foreach ($child as $s) {
                $sub1 = Categories::where('parent_id', $s->id)->get();
                $s->subSub = $sub1;
            }
            $data->child = $child;
        }
        $pageData = Pages::where('category_id',$id)->get();
        return view('site.helpDetails')->with(['allCat' => $allCaegories , 'pageData' => $pageData]);
    }


    public function question()
    {
        $allData = FAQ::all();
        $allCaegories = Categories::where('parent_id',0)->get();
        foreach($allCaegories as $data)
        {
            $child = Categories::where('parent_id',$data->id)->get();
            foreach ($child as $s) {
                $sub1 = Categories::where('parent_id', $s->id)->get();
                $s->subSub = $sub1;
            }
            $data->child = $child;
        }
        return view('site.question')->with(['allData' => $allData , 'allCat' => $allCaegories]);
    }


    public function search(Request $request)
    {
        

        $allData = Pages::where('name_ar', 'LIKE', '%' . $request->search . '%')->get();
       // var_dump($allData);

        $allCaegories = Categories::where('parent_id',0)->get();
        foreach($allCaegories as $data)
        {
            $child = Categories::where('parent_id',$data->id)->get();
            foreach ($child as $s) {
                $sub1 = Categories::where('parent_id', $s->id)->get();
                $s->subSub = $sub1;
            }
            $data->child = $child;
        }
        return view('site.search')->with(['allCat' => $allCaegories , 'allData' => $allData]);
    }


    


}
