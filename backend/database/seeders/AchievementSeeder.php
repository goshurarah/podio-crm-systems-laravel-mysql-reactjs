<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AchievementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('achievements')->insert([
            'count' => 957,
            'description' => 'Automation Running',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('achievements')->insert([
            'count' => 2300,
            'description' => 'Annual Hours Saved By Automation',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('achievements')->insert([
            'count' => 85,
            'description' => 'Platforms Integrated',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('achievements')->insert([
            'count' => 7994,
            'description' => 'Shots of Espresso Per Year',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        
    }
}
