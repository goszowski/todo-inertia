<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TasksController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegistrationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'auth', 'as' => 'auth.'], function () {
    Route::group(['prefix' => 'login', 'as' => 'login.'], function () {
        Route::get('/', [LoginController::class, 'show'])->name('show')->middleware(['guest']);
        Route::post('/', [LoginController::class, 'signin'])->name('signin')->middleware(['guest']);
        Route::patch('/', [LoginController::class, 'signout'])->name('signout');
    });

    Route::group(['prefix' => 'registration', 'as' => 'registration.', 'middleware' => ['guest']], function () {
        Route::get('/', [RegistrationController::class, 'show'])->name('show');
        Route::post('/', [RegistrationController::class, 'signup'])->name('signup');
    });
});

// Route::resource('tasks', TasksController::class);
// Route::resource('events', EventController::class)->middleware(['auth', 'has-task']);

Route::group(['prefix' => 'tasks', 'as' => 'tasks.'], function () {
    Route::get('/', [TasksController::class, 'index'])->name('index');
    Route::get('/create', [TasksController::class, 'create'])->name('create')->middleware(['auth']);
    Route::post('/', [TasksController::class, 'store'])->name('store')->middleware(['auth']);

    Route::group(['prefix' => '{task}', 'middleware' => ['auth']], function () {
        Route::get('/', [TasksController::class, 'show'])->name('show');

        Route::group(['middleware' => ['is-task-author']], function () {
            Route::get('/edit', [TasksController::class, 'edit'])->name('edit');
            Route::patch('/', [TasksController::class, 'update'])->name('update');
            Route::delete('/', [TasksController::class, 'destroy'])->name('destroy');
        });
    });
});

Route::group(['prefix' => 'events', 'as' => 'events.'], function () {
    Route::get('/', [EventController::class, 'index'])->name('index');
    Route::get('/create', [EventController::class, 'create'])->name('create')->middleware(['auth', 'has-task']);
    Route::post('/', [EventController::class, 'store'])->name('store')->middleware(['auth', 'has-task']);

    Route::group(['prefix' => '{event}', 'middleware' => ['auth']], function () {
        Route::get('/', [EventController::class, 'show'])->name('show');

        Route::group(['middleware' => ['is-event-author']], function () {
            Route::get('/edit', [EventController::class, 'edit'])->name('edit');
            Route::patch('/', [EventController::class, 'update'])->name('update');
            Route::delete('/', [EventController::class, 'destroy'])->name('destroy');
        });
    });
});

Route::fallback(function () {
    return redirect()->route('tasks.index');
});
