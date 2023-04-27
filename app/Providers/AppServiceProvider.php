<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

use App\Models\FooterPages;
use App\Models\Settings;
use App\Models\Services;
use App\Models\Projects;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //Footer page Data
        $footerPages = FooterPages::all();
        $settingData = Settings::where('id', 1)->first();
        $serviceData = Services::take(4)->get();
        $serviceData1 = Services::take(6)->get();
        $ProjectsData = Projects::take(6)->get();
        View::share([ 'footerPages' => $footerPages , 'settingData' =>  $settingData , 
        'serviceData' =>  $serviceData ,  'serviceData1' =>  $serviceData1 ,
        'ProjectsData' =>  $ProjectsData ,] );

    }
}
