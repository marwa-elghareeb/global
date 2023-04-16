<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Categories;
use App\Models\Pages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ListController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $allData = Categories::all();
        foreach ($allData as $data) {
            $parentData = Categories::where('id', $data->parent_id)->get();
            if (count($parentData) > 0) {
                $data->parentName = $parentData[0]->name_en;
            } else {
                $data->parentName = '';
            }
        }
        return view('admin.category.list')->with('allData', $allData);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $allData = Categories::all();

        return view('admin.category.create')->with('allData', $allData);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //validation
        $request->validate([
            'name_ar' => 'required|unique:categories|max:255',
            // 'name_en' => 'required|max:255',

        ]);

        //Store
        $data = new Categories();

        $data->name_ar = $request->name_ar;
        $data->name_en = $request->name_en;
        $data->parent_id = $request->parent_id;
        $data->save();
        //Add to Activity
        $actData = new ActivityLog();
        $actData->user_id = Auth::user()->id;
        $actData->user_name = Auth::user()->name;
        $actData->activity = "تم اضافه فئه جديده";
        $actData->save();
        return redirect()->route('list.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $allData = Categories::where('parent_id', '==', 0)->get();
        foreach ($allData as $data) {
            $sub = Categories::where('parent_id', $data->id)->get();
            foreach ($sub as $s) {
                $sub1 = Categories::where('parent_id', $s->id)->get();
                foreach ($sub1 as $ss) {
                    //Pages count
                    $pages1 = Pages::where('category_id', $ss->id)->get();
                    $ss->pagesCount1 = count($pages1);
                }
                $s->subSub = $sub1;
                //Pages count
                $pages = Pages::where('category_id', $s->id)->get();
                $s->pagesCount = count($pages);
                // 
            }
            $data->childs = $sub;
        }
        return view('admin.category.show')->with(['allData' => $allData]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        //
        $allData = Categories::all();
        $editData = Categories::where('id', $id)->first();
        return view('admin.category.edit')->with(['allData' => $allData, 'editData' => $editData]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        //validation
        $request->validate([
            'name_ar' => 'required|max:255',
            // 'name_en' => 'required|max:255',

        ]);

        //Update
        $data = Categories::find($id);

        $data->name_ar = $request->name_ar;
        $data->name_en = $request->name_en;
        $data->parent_id = $request->parent_id;
        $data->save();
        //Add to Activity
        $actData = new ActivityLog();
        $actData->user_id = Auth::user()->id;
        $actData->user_name = Auth::user()->name;
        $actData->activity = "تم تعديل فئه جديده";
        $actData->save();
        return redirect()->route('list.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $data = Categories::find($id);

        if ($data->parent_id == 0) {
            $getData = Categories::where('parent_id', $data->id)->get();
            if (count($getData) > 0) {
                return redirect()->route('list.index')->with('flash_message', ' لا يمكن مسح الفئه الرئيسيه لانها تحتوى على عناصر فرعيه , قم بنقل العناصر الفرعيه اولا ومن ثم امسح العنصر');
            } else {

                Categories::destroy($id);
                //Add to Activity
                $actData = new ActivityLog();
                $actData->user_id = Auth::user()->id;
                $actData->user_name = Auth::user()->name;
                $actData->activity = "تم حذف  فئه ";
                $actData->save();
                return redirect()->route('list.index')->with('flash_message', 'Item deleted!');
            }
        } else {

            Categories::destroy($id);
            //Add to Activity
            $actData = new ActivityLog();
            $actData->user_id = Auth::user()->id;
            $actData->user_name = Auth::user()->name;
            $actData->activity = "تم حذف  فئه ";
            $actData->save();
            return redirect()->route('list.index')->with('flash_message', 'Item deleted!');
        }
    }
}
