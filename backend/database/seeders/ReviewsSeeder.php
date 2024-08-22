<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ReviewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Review::factory(10)->create(); 

         // Clear existing data
         Review::truncate();

         // Insert specific reviews data
         Review::create([
             'user_name' => 'Adam Chodes',
             'profile_pic' => 'https://api.podiocrmsystems.com/adam.png',
             'designation' => 'Atom Property Group',
             'review' => 'I want to thank the whole PodioCRM Systems team from a development stand point and real estate stand point.
             I want to appreciate the effort they have put in and the value they have added to my buisness.
             I would recommend them to anyone looking for CRM devlopment services.',
         ]);
 
         Review::create([
             'user_name' => 'Kristin Watson',
             'profile_pic' => 'https://api.podiocrmsystems.com/kristin_bloom_harvest.png',
             'designation' => 'CEO Bloom & Harvest Floral',
             'review' => "PodioCRM Systems brought a breath of fresh air to our company's technological landscape. As a non-IT focused business, we were initially not familiar with the organisation of data in such way, but this company helped us manage our customer data efficiently.
             ",
         ]);
 
         Review::create([
             'user_name' => 'Alan Turner',
             'profile_pic' => 'https://api.podiocrmsystems.com/artisan_sweets.png',
             'designation' => 'Founder Artisan Sweets',
             'review' => 'We stumbled upon PodioCRM Systems when looking for a tech partner that could adapt to our unique requirements. Their team proved to be highly skilled and catered all our requirements.',
         ]);
 
    }
}
