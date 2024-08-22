<?php

namespace App\Http\Controllers;

use Stripe\Price;
use Stripe\Stripe;
use Stripe\Product;
use Stripe\Customer;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;

class StripeController extends Controller
{
    


    public function createCheckoutSessionPlans(Request $request)
    {

        try {
            // Validate and sanitize input
            $productId = $request->input('product_id');

            
            if (empty($productId)) {
                throw new \InvalidArgumentException('Invalid product Id provided.');
            }
    
            Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
    
            $user = $request->user();
    
            // Check if the user has a Stripe customer ID
            if (!$user->stripe_customer_id) {
                // If not, create a new customer in Stripe
                $customer = Customer::create([
                    'email' => $user->email,
                ]);
    
                // Save the customer ID in your database
                $user->update(['stripe_customer_id' => $customer->id]);
            }
    
            // Fetch the products from Stripe
            $products = Product::all(); // Assuming you have a Product model
    
            // Find the selected product by name
            $selectedProduct = null;
            foreach ($products as $product) {
                if ($product->id === $productId) {
                    $selectedProduct = $product;
                    break;
                }
            }
    
            if (!$selectedProduct) {
                throw new \InvalidArgumentException('Product not found.');
            }

            $productId = $selectedProduct->id;
            $productName = $selectedProduct->name;

// Retrieve the Price associated with the Product ID
$prices = Price::all(['product' => $productId]); // Replace 'Price' with your actual model or use the Stripe SDK directly

if (empty($prices->data)) {
    throw new \InvalidArgumentException('Price not found for the product.');
}

$price = $prices->data[0]->unit_amount; // Assuming you want to use the first Price associated with the product

// Proceed to create a Checkout Session
$session = Session::create([
    'payment_method_types' => ['card'],
    'customer' => $user->stripe_customer_id,
    'line_items' => [
        [
            'price_data' => [
                'currency' => 'usd',
                'product_data' => [
                    'name' => $productName
                ],
                'unit_amount' => $price
            ],
            'quantity' => 1,
        ],
    ],
    'mode' => 'payment',
    'success_url' => env('FRONTEND_BASE_URL'),
    'cancel_url' => env('APP_URL') . '/cancel',
]);

            return response()->json(['id' => $session->id]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

       
}




public function createCheckoutSessionServices(Request $request)
    {

        try {
           
            Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
    
            $user = $request->user();
    
            // Check if the user has a Stripe customer ID
            if (!$user->stripe_customer_id) {
                // If not, create a new customer in Stripe
                $customer = Customer::create([
                    'email' => $user->email,
                ]);
    
                // Save the customer ID in your database
                $user->update(['stripe_customer_id' => $customer->id]);
            }
    
           

// Proceed to create a Checkout Session
$session = Session::create([
    'payment_method_types' => ['card'],
    'customer' => $user->stripe_customer_id,
    'line_items' => [
        [
            'price_data' => [
                'currency' => 'usd',
                'product_data' => [
                    'name' => request()->input('services'),
                ],
                'unit_amount' => request()->input('amount') * 100
            ],
            'quantity' => 1,
        ],
    ],
    'mode' => 'payment',
    'success_url' => env('FRONTEND_BASE_URL'),
    'cancel_url' => env('APP_URL') . '/cancel',
]);

            return response()->json(['id' => $session->id]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

       
}



}
