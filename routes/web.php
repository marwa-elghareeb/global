<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Admin\ListController;
use App\Http\Controllers\Admin\PagesController;
use App\Http\Controllers\Admin\CompaniesController;
use App\Http\Controllers\Admin\EmployeesController;
use App\Http\Controllers\Admin\ActivityController;
use App\Http\Controllers\Admin\FAQController;
use App\Http\Controllers\Admin\DepartmentsController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\EventsController;
use App\Http\Controllers\Admin\AboutusController;
use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\CardsController;
use App\Http\Controllers\Admin\FooterPagesController;
use App\Http\Controllers\Admin\RegistrationAndLoginController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\AdminAuthController;

//WebSite 
use App\Http\Controllers\Site\AboutUsSiteController;
use App\Http\Controllers\Site\ContactUsSiteController;
use App\Http\Controllers\Site\MediaSiteController;
use App\Http\Controllers\Site\FooterSiteController;
use App\Http\Controllers\Site\NewsSiteController;
use App\Http\Controllers\Site\TowerSiteController;
use App\Http\Controllers\Site\IndexController;

//Test Controller 
use App\Http\Controllers\TeleworksController;


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
Route::get('/', function () { return view('site.homePages');});
   
//Admin
Route::group(['prefix' => 'admin'], function () {
    Route::get('/login', [AdminAuthController::class, 'getLogin'])->name('adminLogin');
    Route::post('/login', [AdminAuthController::class, 'postLogin'])->name('adminLoginPost');
    Route::post('/adminLogout', [AdminAuthController::class, 'adminLogout'])->name('adminLogout');
    Route::group(['middleware' => 'adminauth'], function () {
        Route::get('/adminhome', function () {
            return view('admin.adminhome');
        })->name('adminDashboard');
        Route::resource('list', ListController::class);
        Route::resource('pages', PagesController::class);
        Route::resource('companies', CompaniesController::class);
        Route::resource('employees', EmployeesController::class);
        Route::resource('activitylog', ActivityController::class);
        Route::resource('faq', FAQController::class);
        Route::resource('departments', DepartmentsController::class);
        Route::resource('events', EventsController::class);
        Route::resource('about-data', AboutusController::class);
        Route::resource('media-data', MediaController::class);
        Route::resource('news-data', NewsController::class);
        Route::resource('cards-data', CardsController::class);
        Route::resource('contact-data', ContactController::class);
        Route::resource('footer-pages-data', FooterPagesController::class);
        Route::resource('registrationandlogin-data', RegistrationAndLoginController::class);
        Route::resource('role', RoleController::class);
        Route::resource('settings',SettingsController::class);

    });
});

