<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\FaqsSeeder;
use Database\Seeders\PlanSeeder;
use Database\Seeders\ReviewsSeeder;
use Database\Seeders\UsersTableSeeder;
use Database\Seeders\AchievementSeeder;
use Database\Seeders\ServicesTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();
        $this->call(ReviewsSeeder::class);
        $this->call(FaqsSeeder::class);
        $this->call(AchievementSeeder::class);
        $this->call(PlanSeeder::class);
        $this->call(ServicesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
    }
}
