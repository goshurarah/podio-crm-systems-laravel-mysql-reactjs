<?php

namespace Database\Factories;

use App\Models\Faq;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Faq>
 */
class FaqFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Faq::class;

    public function definition()
    {
        $faqs = [
            [
                'question' => "What experience do you have with Podio?",
                'answer' => "Our team has extensive experience with Podio, having worked with various businesses and organizations to implement and customize their Podio systems. We stay up-to-date with the latest Podio features and best practices.",
            ],
            [
                'question' => "Do you offer data migration services?",
                'answer' => "Yes, we can help you migrate your data from other systems to Podio.",
            ],
            [
                'question' => "What security measures do you take to protect my data?",
                'answer' => "We take data security very seriously and follow industry best practices to protect your data.",
            ],
            [
                'question' => "Can you develop custom apps for Podio?",
                'answer' => "Yes, we can develop custom apps to extend Podio's functionality and meet your specific needs.",
            ],
        ];

        // Use array_shift to pop the first FAQ from the list each time the factory is called
        $faq = array_shift($faqs);

        return [
            'question' => $faq['question'],
            'answer' => $faq['answer'],
        ];
    }
}
