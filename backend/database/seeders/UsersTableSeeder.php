<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create();

        User::create([
            'first_name' => 'Blog',
            'last_name' => 'Admin',
            'email' => 'admin@gmail.com',
            'phone_number' => 'xxxxxxxxxx',
            'company_name' => '360SynergyTech Pvt. Ltd',
            'password' => bcrypt('Password12@'), // Hash the password
            'remember_token' => Str::random(10),
        ]);
    }
}
