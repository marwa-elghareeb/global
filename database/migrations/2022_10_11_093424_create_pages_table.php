<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->integer('category_id');
            $table->string('slug_name');
            $table->string('name_ar');
            $table->string('name_en');
            $table->string('title_ar');
            $table->string('title_en');
            $table->longText('description_ar');
            $table->longText('description_en');
            $table->string('link');
            $table->string('images');
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
        Schema::dropIfExists('pages');
    }
}
