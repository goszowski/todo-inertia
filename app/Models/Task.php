<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $perPage = 5;

    protected $fillable = [
        'user_id',
        'title',
        'description',
    ];

    public function toArray()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'user' => $this->user,
            'created_at' => $this->created_at,
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
