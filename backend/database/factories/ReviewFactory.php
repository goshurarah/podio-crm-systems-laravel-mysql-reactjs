<?php

namespace Database\Factories;

use App\Models\Review;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Review::class;
    public function definition(): array
    {
        return [
            'user_name' => $this->faker->name,
            'profile_pic' => $this->faker->imageUrl(),
            'designation' => $this->faker->jobTitle,
            'review' => $this->faker->paragraph,
        ];
    }
}
