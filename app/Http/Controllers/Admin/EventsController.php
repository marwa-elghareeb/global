<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Events;
use Illuminate\Console\Scheduling\Event;
use Illuminate\Http\Request;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $allData = Events::all();
        return view('admin.event.list')->with('allData', $allData);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('admin.event.create');
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
        'name_ar' => 'required|max:255',
        'name_en' => 'required|max:255',
        'images' => 'required|mimes:jpeg,png,jpg,gif'

    ]);
    //Store
    $data = new Events();
    $data->name_ar = $request->name_ar;
    $data->name_en = $request->name_en;
    if ($request->file('images')) {
        $file = $request->file('images');
        $filename = date('YmdHi') . $file->getClientOriginalName();
        $file->move(public_path('upload'), $filename);
    }
    $data->image = $filename;
    $data->save();
    return redirect()->route('events.index');
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
        $editData = Events::where('id', $id)->first();
        return view('admin.event.edit')->with(['editData' => $editData]);
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
            'name_en' => 'required|max:255',
            'image' => 'mimes:jpeg,png,jpg,gif'

        ]);

        //Update
        $data = Events::find($id);

        $data->name_ar = $request->name_ar;
        $data->name_en = $request->name_en;
        if ($request->file('images')) {
            $file = $request->file('images');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('upload'), $filename);
            $data->image = $filename;
        } else {
        }
        $data->save();
        return redirect()->route('events.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $getData = Events::where('company_id', $id)->get();
        if (count($getData) > 0) {
            return redirect()->route('events.index')->with('flash_message', ' لا يمكن حذف الشركه لانها تحتوى على موظفين');
        } else {

            Events::destroy($id);
            return redirect()->route('events.index')->with('flash_message', 'Item deleted!');
        }
    }
}
