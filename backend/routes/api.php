<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ConsultController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AchievementController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// routes/web.php
// Route::group(['middleware' => 'web', 'cors'], function () {
//     Route::get('/csrf-token', function() {
//         return response()->json(['token' => csrf_token()]);
//     });
// });


Route::post('/register', [UserController::class, 'register']);

Route::post('/login', [UserController::class, 'login']);

Route::get('/reviews', [ReviewController::class, 'getReviews']);
Route::get('/faqs', [FaqController::class, 'getFaqs']);
Route::post('/consults', [ConsultController::class, 'store']);
Route::post('forgot-password', [UserController::class, 'forgotPassword']);
Route::post('reset-password', [UserController::class, 'resetPassword']);

Route::middleware('auth:sanctum')->group(function () {
    Route::put('/user/update-profile-pic', [UserController::class, 'updateProfilePic']);

    Route::post('/plans/checkout', [StripeController::class, 'createCheckoutSessionPlans']);

    Route::post('/dashboard/posts', [PostController::class, 'store']);

    Route::post('/services/checkout', [StripeController::class, 'createCheckoutSessionServices']);

    

    Route::resource('posts', PostController::class);

    Route::post('/posts/{postId}/comments', [PostController::class, 'postComment']);

    Route::get('dashboard/posts/{postId}/comments', [CommentController::class, 'getCommentsAndRepliesByPost']);


    Route::delete('dashboard/posts/comments/{commentId}', [CommentController::class, 'deleteComment']);
    Route::post('/posts/{postId}/comments/{commentId}/reply', [CommentController::class, 'replyToComment']);
    Route::put('dashboard/comments/{commentId}/update-approval-status', [CommentController::class, 'updateApprovalStatus']);
    Route::put('dashboard/posts/{postId}/update-comments-status', [CommentController::class, 'isCommentable']);
    Route::put('/dashboard/comments/replies/{reply}', [CommentController::class, 'updateApproval']);
});

// routes/api.php

Route::get('/achievements', [AchievementController::class, 'index']);

Route::get('plans', [PlanController::class, 'index']);

Route::get('/services', [ServiceController::class, 'index']);

Route::get('posts', [PostController::class, 'index']);

Route::resource('/categories', CategoryController::class);

Route::resource('tags', TagController::class);

Route::get('posts/search', [PostController::class, 'searchPosts']);

Route::get('/categories/{categoryId}/posts', [PostController::class, 'searchByCategory']);

Route::get('/tags/{tagId}/posts', [PostController::class, 'searchByTag']);

Route::get('/comments', [CommentController::class, 'index']);

Route::get('/posts/{postId}/comments', [CommentController::class, 'getCommentsAndRepliesByPost']);

Route::get('dashboard/blog-admin/posts', [PostController::class, 'adminPosts']);

Route::get('posts/{id}/related-posts', [PostController::class, 'relatedPosts']);