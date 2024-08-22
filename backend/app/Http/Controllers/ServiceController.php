<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ServiceController extends Controller
{

    public function index(): JsonResponse
    {
        $services = Service::all();

        return response()->json(['services' => $services], 200);
    }
}
