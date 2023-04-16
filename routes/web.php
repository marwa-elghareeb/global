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

//Test Controllers 
Route::get('/teleworks', [TeleworksController::class, 'index']);
Route::get('/api', [TeleworksController::class, 'api']);

//Portal Routes:
Route::get('/', function () {
    return view('site.homePages');
   });
   

Route::post('/contactUsForm', [ContactUsSiteController::class, 'contactUsForm']);
Route::get('/news-details/{id}', [NewsSiteController::class, 'newsDetails']);
//Help Center
Route::post('/search', [IndexController::class, 'search']);

//Caption
Route::get('/reload-captcha', [CaptchaServiceController::class, 'reloadCaptcha']);

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


//User
Auth::routes();
//Route::group(['middleware' => ['auth']], function () {
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    Route::get('/allCompanies/{slug}', [TowerSiteController::class, 'companies']);
    Route::get('/reception/{slug}', [TowerSiteController::class, 'reception']);
    Route::get('/department/{slug}', [TowerSiteController::class, 'department']);
    Route::get('/employe/{id}', [TowerSiteController::class, 'employees']);
    Route::post('/searchEmp', [TowerSiteController::class, 'searchEmp']);

//});

//Language


Route::group(['prefix' => '{locale}','where' => ['locale' => '[a-z]{2}'],
'middleware' => 'setLocale'],
 function () {
    Route::get('/homepage', function () {
        return view('site.homePages');
       })->name('/homepage');
    Route::get('/homepage', function () {
    return view('site.homePages');
   })->name('/homepage');
    Route::get('/aboutUs', [AboutUsSiteController::class, 'index'])->name('/aboutUs');
    Route::get('/contactUs', [ContactUsSiteController::class, 'index'])->name('/contactUs');
    Route::get('/media', [MediaSiteController::class, 'index'])->name('/media');
    Route::get('/news', [NewsSiteController::class, 'index'])->name('/news');
//Help Centers
    Route::get('/helpcenter', [IndexController::class, 'help'])->name('/helpcenter');
    Route::get('/question', [IndexController::class, 'question'])->name('/question');
    Route::post('/search', [IndexController::class, 'search'])->name('/search');
    Route::get('/cards', [TowerSiteController::class, 'cards'])->name('/cards');
    Route::get('/allCompanies', [TowerSiteController::class, 'companies'])->name('/allCompanies');
    Route::get('/department/{slug}', [TowerSiteController::class, 'department']);
    Route::get('/footerPages/{slug}', [FooterSiteController::class, 'index']);
    Route::get('/helpcenter/{id}', [IndexController::class, 'helpDetails']);
    Route::get('/ourTeam', [IndexController::class, 'ourTeam'])->name('/ourTeam');
    Route::get('/news-details/{id}', [NewsSiteController::class, 'newsDetails']);

});



//Towers

/*
Route::get('/cards', TowerSiteController::class, 'cards');
Route::get('/towers', [TowerSiteController::class, 'towers']);
Route::get('/allCompanies', [TowerSiteController::class, 'companies']);
Route::get('/reception/{slug}', [TowerSiteController::class, 'reception']);
Route::get('/userLogin/{slug}', [TowerSiteController::class, 'userLogin']);
Route::post('/userLoginForm', [TowerSiteController::class, 'userLoginForm']);
Route::get('/department/{slug}', [TowerSiteController::class, 'department']);
Route::get('/employe/{id}', [TowerSiteController::class, 'employees']);
Route::post('/searchEmp', [TowerSiteController::class, 'searchEmp']);
//Events
Route::get('/allEvents', [TowerSiteController::class, 'events']);
Route::get('/employeesEvent/{id}', [TowerSiteController::class, 'employeesEvent']);*/