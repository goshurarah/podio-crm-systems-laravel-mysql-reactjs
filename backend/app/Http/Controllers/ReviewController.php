<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function getReviews()
    {
        $reviews = Review::all();

        return response()->json($reviews);
    }
}
