<?php
namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Companies;
use App\Models\Department;
use App\Models\Employees;
use App\Models\Events;
use App\Models\Cards;

class TowerSiteController extends Controller
{
    /*====Tower=============================*/
    public function cards()
    {
        $allData = Cards::all();
        return view('site.cards')->with(['allData' => $allData]);
    }
    public function towers()
    {
        return view('site.towers');
    }

    public function companies($slug)
    {
        $allData = Companies::where('slug', $slug)->get();
        return view('site.companies')->with(['allData' => $allData]);
    }

    public function reception($slug)
    {
        $cData = Companies::where('slug', $slug)->first();
        return view('site.reception')->with(['cData' => $cData]);
    }

    public function userLogin($slug)
    {
        return view('site.userLogin')->with(['slug' => $slug]);
    }
    public function userLoginForm(Request $request)
    {
        $email = $request->email;
        $password = $request->password;
        $slug = $request->slug;
        if ($email == 'admin@admin.com' && $password == '123456') {

            //return redirect()->route('department/'.$slug);
            $cData = Companies::where('slug', $slug)->first();
            $id = $cData->id;
            $allData = Department::where('company_id', $cData->id)->get();
            foreach ($allData as $data) {
                $allE = Employees::where('department_id', $data->id)->get();
                $data->empCount = count($allE);
            }
            $allEmp = Employees::where('company_id', $id)->get();
            return view('site.department')->with([
                'allData' => $allData, 'allEmp' => $allEmp,
                'cData' => $cData
            ]);
            return view('site.department')->with(['slug',  $slug]);
        } else {
            return back()->with('flash_message', 'يوجد خطأ فى البيانات');
        }
    }
    public function department($slug)
    {
        $cData = Companies::where('slug', $slug)->first();
        $id = $cData->id;
        $allData = Department::where('company_id', $id)->get();
    
        foreach ($allData as $data) {
            $allE = Employees::where('department_id', $data->id)->get();
            $data->empCount = count($allE);
        }
        $allEmp = Employees::where('company_id', $id)->get();
        return view('site.department')->with([
            'allData' => $allData, 'allEmp' => $allEmp,
            'cData' => $cData
        ]);
    }


    public function employees($id)
    {
        $DData = Department::where('id', $id)->first();
        $cData = Companies::where('id', $DData->company_id)->first();
        $allData = Employees::where('department_id', $id)->get();
        $allDept = Department::where('company_id', $DData->company_id)->get();
        foreach ($allDept as $data) {
            $allE = Employees::where('department_id', $data->id)->get();
            $data->empCount = count($allE);
        }
        return view('site.employees')->with([
            'allData' => $allData,
            'cData' => $cData, 'DData' => $DData, 'allDept' => $allDept
        ]);
    }

    public function events()
    {
        $allData = Events::all();
        return view('site.events')->with(['allData' => $allData]);
    }

    public function employeesEvent($id)
    {
        // $DData = Department::where('id', $id)->first();
        $cData = Events::where('id', $id)->first();
        $allData = Employees::where('event_id', $id)->get();
        return view('site.employeesEvent')->with([
            'allData' => $allData,
            'cData' => $cData
        ]);
    }

    public function searchEmp(Request $request)
    {

        $allData = Employees::where('name', 'LIKE', '%' . $request->search . '%')->get();
        return view('site.searchEmp')->with(['allData' => $allData]);
    }
}
