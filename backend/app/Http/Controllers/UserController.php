<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Mail\PasswordReset;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ForgotPasswordRequest;
use Illuminate\Support\Facades\Response;


class UserController extends Controller
{
    public function register(Request $request)
{
    $user = User::create([
        'first_name' => $request->input('first_name'),
        'last_name' => $request->input('last_name'),
        'email' => $request->input('email'),
        'phone_number' => $request->input('phone_number'),
        'company_name' => $request->input('company_name'),
        'password' => Hash::make($request->input('password')),
    ]);

    // Issue a token upon successful registration
    $token = $user->createToken('authToken')->plainTextToken;

    return response()->json(['user' => $user, 'token' => $token]);

    
}
public function login(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|string',
    ]);

    if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
        $user = Auth::user();
        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json(['user' => $user, 'token' => $token], 200);
    } else {
        return response()->json(['error' => 'Invalid credentials'], 401);
    }
}

public function profile()
{
    $user = Auth::user();
    return response()->json(['user' => $user], 200);
}

public function forgotPassword(Request $request)
{
    try {
        $user = User::where('email', $request->email)->first();
        
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $token = Str::random(100);

        DB::table('password_reset_tokens')->insert([
            'email' => $request->email,
            'token' => $token,
            'created_at' => now()
        ]);

        $reset_password_url = env("FRONTEND_BASE_URL") . '/reset-password/' . $token . '/' . $request->email;

        $data = [
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'action_url' => $reset_password_url
        ];

        Mail::to($request->email)->send(new PasswordReset($data));

        $response = ['message' => 'Email sent for password reset!'];

        return response()->json($response, 200);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}

public function resetPassword(Request $request)
    {
        try {
            $user = User::where('email', $request->email)->first();
            $record = DB::table('password_reset_tokens')->where([
                ['email', '=', $request->email],
                ['token', '=', $request->token]
            ])->first();
            if ($record) {
                // Check if the password reset token is older than 24 hours
                $created_at = Carbon::createFromTimeString($record->created_at);
                $now = Carbon::now();
                $hours_diff = $created_at->diffInRealHours($now);
                if ($hours_diff >= 24) {
                    $error = 'Your password reset token has been expired!';
                    // storeApiResponse($request->api_request_id, ['message' => $error], 400, $user->id);
                    return response()->json(['error' => $error]);
                }

                if($request->password !== $request->confirm_password){
                    $error = 'passwords donot match!';
                    // storeApiResponse($request->api_request_id, ['message' => $error], 404, $user->id);
                    return response()->json(['error' => $error]);
                }

                $is_updated = $user->update(['password' => $request->password]);
                if ($is_updated) {
                    DB::table('password_reset_tokens')->where('email', $request->email)->delete();
                    $response = ['message' => 'Your password has been reset!'];
                    // storeApiResponse($request->api_request_id, $response, 200, $user->id);
                    return response()->json(['data' => $response]);
                } else {
                    $error = 'Something went wrong while updating the password!';
                    // storeApiResponse($request->api_request_id, ['message' => $error], 500, $user->id);
                    return response()->json(['error' => $error]);
                }
            } else {
                $error = 'No such record found. Please try again!';
                // storeApiResponse($request->api_request_id, ['message' => $error], 404, $user->id);
                return response()->json(['error' => $error]);
            }
        } catch (\Exception $e) {
            // saveErrorLogs('resetPassword', $e->getMessage(), $e->getLine());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function updateProfilePic(Request $request)
    {
        // Validate the request data
        // $request->validate([
        //     'profile_pic' => 'image|required', // Adjust file types and size as needed
        // ]);
    
        // Get the authenticated user
        $user = $request->user();
    
        // Handle profile picture upload
        if ($request->hasFile('profile_pic')) {
            // Store the profile picture in the 'profile_pics' directory of the 'public' disk
            $profilePicPath = $request->file('profile_pic')->store('profile_pics', 'public');
    
            // Update the user's profile picture path in the database
            $user->update(['profile_pic' => $profilePicPath]);
    
            // Return a JSON response with a success message and the updated user
            return response()->json(['message' => 'Profile picture updated successfully', 'user' => $user]);
        }
    
        // Return a JSON response indicating that no profile picture was provided
        return response()->json(['message' => 'No profile picture provided'], 400);
    }

    
}
