<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Plan>
 */
class PlanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'Standard',
            'description' => ['Complete Lead Life Cycle', 'Communication with Lead by Podio Email.', 'Property Details.', 'Communication History (Text/VM).', 'Lead assignment to Accusation Managers using Round Robin.', 'Lead tracking by different statuses.', 'Reminders for Lead owners.', 'Offer calculator with different percentages to get Max Allowable Offer.', 'Tasks for team members.', 'Deal Tracking.', 'Projected Price, ARV, Profit.', 'Drip / Follow UP System inclusive of multiple follow-up sequence templates as well as follow-up message templates with placeholders.', "Daily Reports to track teams’ work.", 'Buyers Database', 'Appointments.', 'Campaigns Tracking.'],
            'price' => '850',
        ];


    }

    public function standardPlus()
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Standard Plus',
                'description' => ['Dispositon Campaign (Text + Email)', 'Lead Indication', 'Website leads integration', 'ESign Documents integration with DocuSign, RightSignature, pandadoc, otloop', 'Marketing tools Push to CRM integration (Text + Calling)', 'Email communication with your domain with 0 setup cost / 50 monthly for 5 emails', 'Zillow integration with 0 setup cost / 30 monthly'],
                'price' => '1450',
            ];
        });
    }

}
