<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

//Portal Routes
use App\Http\Controllers\Site\IndexController;

//Admin Routes
use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\SlidersController;
use App\Http\Controllers\Admin\AboutusController;
use App\Http\Controllers\Admin\ServicesController;
use App\Http\Controllers\Admin\ProjectsController;
use App\Http\Controllers\Admin\FAQController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\ListController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Portal Routes:
Route::get('/', [IndexController::class, 'Home']);
Route::post('/contactUsForm', [IndexController::class, 'ContactUsForm']);
Route::get('/cards', [IndexController::class, 'Cards']);
//Language
Route::group(['prefix' => '{locale}','where' => ['locale' => '[a-z]{2}'],
'middleware' => 'setLocale'],
 function () {
    Route::get('/',  [IndexController::class, 'Home'])->name('/homepage');

});



//Admin
Auth::routes();
Route::group(['prefix' => 'admin'], function () {
    Route::get('/login', [AdminAuthController::class, 'getLogin'])->name('adminLogin');
    Route::post('/login', [AdminAuthController::class, 'postLogin'])->name('adminLoginPost');
    Route::post('/adminLogout', [AdminAuthController::class, 'adminLogout'])->name('adminLogout');

    Route::group(['middleware' => 'adminauth'], function () {

        Route::get('/adminhome', function () {return view('admin.adminhome'); })->name('adminDashboard');
        Route::resource('settings',SettingsController::class);
        Route::resource('sliders',SlidersController::class);
        Route::resource('about-us',AboutusController::class);
        Route::resource('all-services',ServicesController::class);
        Route::resource('list',ListController::class);
        Route::resource('all-projects',ProjectsController::class);
        Route::resource('faq',FAQController::class);
        Route::resource('contact-data', ContactController::class);
    });
});
