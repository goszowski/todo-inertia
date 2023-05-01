<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Event extends Model
{
    use HasFactory;

    protected $perPage = 5;

    protected $fillable = [
        'user_id',
        'title',
    ];

    public function toArray()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'user' => $this->user,
            'created_at' => $this->created_at,
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
