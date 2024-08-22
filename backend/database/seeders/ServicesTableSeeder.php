<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $servicesData = [
            ['Aweber', 100],
            ['MailChimp', 100],
            ['InvestorCarrot', 100],
            ['SMS/Text Message Communication with Twilio', 100],
            ['SMS/Text Message Communication with CallFire', 50],
            ['SMS/Text Message Communication with SmrtphoneIO', 100],
            ['SMS/Text Message Communication with Ring Central', 75],
            ['SMS/Text Message Communication with ClickSend', 100],
            ['SMS/Text Message Communication with Vumber', 100],
            ['Click to call with CallFire', 75],
            ['Click to call with Twilio', 100],
            ['Click to call with Call Rail', 100],
            ['Click to call with SmrtphoneIO', 50],
            ['Click to call with Ring Central', 100],
            ['Click to call with Vumber', 75],
            ['Ringless VM Slybroadcast, callloop', 75],
            ['Launch Control PUSH TO CRM', 75],
            ['Batch Leads PUSH TO CRM', 75],
            ['Jotform', 100],
            ['Dropbox', 100],
            ['Google drive', 50],
            ['One drive', 50],
            ['Box cloud storage', 75],
            ['Zappier', 75],
            ['Right Signature (2 Pages Price)', 100],
            ['DocuSign (2 Pages Price)', 100],
            ['Leadpropeller', 100],
            ['ZillowProperty', 100],
            ['Mandrill', 75],
            ['itDuzzit', 50],
            ['CallTools - Push to CRM', 50],
        ];

        foreach ($servicesData as $service) {
            DB::table('services')->insert([
                'service_name' => $service[0],
                'price' => $service[1],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
        
    }
}
