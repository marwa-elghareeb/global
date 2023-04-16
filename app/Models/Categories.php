<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use HasFactory;

    public function childs() {
        return $this->hasMany('App\Categories','parent_id','id') ;
    }
}
