<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    public function getFaqs()
    {
        $faqs = Faq::all();

        return response()->json($faqs);
    }
}
