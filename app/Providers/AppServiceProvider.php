<?php

namespace App\Providers;

use App\Models\FooterPages;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

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
        View::share([ 'footerPages' => $footerPages] );

    }
}
