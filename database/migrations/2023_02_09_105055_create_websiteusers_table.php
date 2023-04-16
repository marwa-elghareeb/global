<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebsiteusersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('websiteusers', function (Blueprint $table) {
            $table->id();
            $table->string('fullname_ar');
            $table->string('fullname_en');
            $table->string('gender_type');
            $table->string('nationality');
            $table->string('number');
            $table->string('identity_number')->unique();
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('websiteusers');
    }
}
