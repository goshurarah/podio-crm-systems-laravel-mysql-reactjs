<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FaqsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faqs = [
            [
                'question' => 'Q1: What experience do you have with Podio?',
                'answer' => 'Our team has extensive experience with Podio, having worked with various businesses and organizations to implement and customize their Podio systems. We stay up-to-date with the latest Podio features and best practices.',
            ],
            [
                'question' => 'Q2: Do you offer data migration services?',
                'answer' => 'Yes, we can help you migrate your data from other systems to Podio.',
            ],
            [
                'question' => 'Q3: What security measures do you take to protect my data?',
                'answer' => 'We take data security very seriously and follow industry best practices to protect your data.',
            ],
            [
                'question' => 'Q4: Can you develop custom apps for Podio?',
                'answer' => 'Yes, we can develop custom apps to extend Podio\'s functionality and meet your specific needs.',
            ],
        ];

        Faq::insert($faqs);
    }
}
