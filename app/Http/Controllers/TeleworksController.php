<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TeleworksController extends Controller
{
    //
    public function index()
    {
        echo "test";
        $response = Http::withHeaders([
            'Sp-Token' => 'd5036cc1d26d53b25eae6487cc4cd3d90eac64f0d6f47bda1c609a64045f31ee0bef878f01757fe8dc50213639e7bc8676f8396ce2b5ed35f649d1904913d041', 
            'Est-Labor-Office-Id' => '1',
            'Est-Sequence-Number' => '319420',
            ])
         //   ->withBody(json_encode($body),'application/json')
            ->post('https://teleworks-uat.espace.ws/sp-report.php', [
                'body' => [
                    'EstLaborOfficeId'=> 1,
                    'EstSequenceNumber'=> 2300219,
                    'IdNumber'=> 1033099159,
                    'ActivityLevel'=> 22,
                    'LoginCount'=> 0,
                    'LogoutCount'=> 0,
                    'AssignedTasks'=> 7,
                    'CompletedTasks'=>2,
                    'TotalWorkTime'=> 0,
               ]
             ]);

            //withBody([ ])->
  
       $jsonData = $response->json();
          
        echo "<pre> status:";
        print_r($response->status());
        echo "<br/> ok:";
        print_r($response->ok());
        echo "<br/> successful:";
        print_r($response->successful());
        echo "<br/> serverError:";
        print_r($response->serverError());
        echo "<br/> clientError:";
        print_r($response->clientError());
        echo "<br/> headers:";
        print_r($response->headers());
        dd($jsonData);

      /*  $response = Http::post('https://teleworks-uat.espace.ws/sp-report.php', [
            'Headers' => 'Content-Type/application/json',
            'Sp-Token' => '28758cf81b45bd2aad332ef0bab12bcea3d9f543f6ef37bae2762fb84957f2e3a0d06469e93872301ca30ba8a5246ede987ec7d1a10f03d08c5f21f3d46b0221',
            'Est-Labor-Office-Id' => '1',
            'Est-Sequence-Number' => '1962462',
            'Body' => '[
                {
                  "EstLaborOfficeId": "1",
                  "EstSequenceNumber": "2300219",
                  "IdNumber": "1033099159",
                  "ActivityLevel": "22",
                  "LoginCount": "0",
                  "LogoutCount": "0",
                  "AssignedTasks": "7",
                  "CompletedTasks": "2",
                  "TotalWorkTime": "0"
                }
              ]',
        ]);
    
        $jsonData = $response->json();
          
        dd($jsonData);*/
    }


    public function api()
    {
        echo "test";
        $response = Http::get('https://api.jehat.sa/api/LoginController/Login?card=28911251203162&password=Marwa123{}@', []);
    
        $jsonData = $response->json();

        echo "<pre> status:";
        print_r($response->status());
        echo "<br/> ok:";
        print_r($response->ok());
        echo "<br/> successful:";
        print_r($response->successful());
        echo "<br/> serverError:";
        print_r($response->serverError());
        echo "<br/> clientError:";
        print_r($response->clientError());
        echo "<br/> headers:";
        print_r($response->headers());
          
        dd($jsonData);
    }
}
