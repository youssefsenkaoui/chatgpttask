<?php

require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\IOFactory;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

$excelFilePath = './fileExel/CHATGPT.xlsx';

if (!file_exists($excelFilePath)) {
    die('Excel file not found.');
}

$spreadsheet = IOFactory::load($excelFilePath);

$worksheet = $spreadsheet->getActiveSheet();

$data = $worksheet->toArray(null, true, true, true);

$json = json_encode($data, JSON_PRETTY_PRINT);

echo 'JSON Data: ' . $json . PHP_EOL;

$jsonData = json_encode($json, JSON_PRETTY_PRINT);

$filePath = './jsonfile/data.json';

file_put_contents($filePath, $jsonData);

if (file_exists($filePath)) {
    echo '<br>';
    echo '<br>';
    echo '<br>';
    echo 'JSON file created successfully at ' . $filePath;
} else {
    echo 'Error creating JSON file.';
}

$openaiApiKey = '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';



$jsonFilePath = './jsonfile/data.json';

$jsonData = file_get_contents($jsonFilePath);

$client = new Client();

try {
    $response = $client->post('https://api.openai.com/v1/files', [
        'headers' => [
            'Authorization' => 'Bearer ' . $openaiApiKey,
        ],
        'multipart' => [
            [
                'name' => 'file',
                'contents' => $jsonData,
                'filename' => 'data.json',
            ],
        ],
    ]);

    $body = $response->getBody()->getContents();
    echo $body;
} catch (RequestException $e) {
    echo 'Error: ' . $e->getMessage();
    if ($e->hasResponse()) {
        echo 'Response: ' . $e->getResponse()->getBody()->getContents();
    }
}









// $openaiEndpoint = 'https://api.openai.com/v1/files';

// $openaiData = [
//     'prompt' => $json,
//     'max_tokens' => 150,
// ];

// $headers = [
//     'Content-Type' => 'application/json',
//     'Authorization' => 'Bearer ' . $openaiApiKey,
// ];

// $client = new Client();
// $response = $client->post($openaiEndpoint, [
//     'headers' => $headers,
//     'json' => $openaiData,
// ]);

// $result = json_decode($response->getBody(), true);
// $chatGptAnalysis = $result['choices'][0]['text'];

// echo 'ChatGPT Analysis: ' . $chatGptAnalysis . PHP_EOL;
