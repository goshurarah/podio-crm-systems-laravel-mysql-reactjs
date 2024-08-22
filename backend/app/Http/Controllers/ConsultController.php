<?php

namespace App\Http\Controllers;

use App\Models\Consult;
use App\Mail\ConsultMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ConsultController extends Controller
{
    public function store(Request $request)
    {
        $consult = Consult::create($request->all());

        // Send email to entered email address
        Mail::to($consult->email)->send(new ConsultMail($consult));

        return response()->json($consult, 201);
    }
}
