<?php

require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\IOFactory;
use GuzzleHttp\Client;

$excelFilePath = './fileExel/CHATGPT.xlsx';

if (!file_exists($excelFilePath)) {
    die('Excel file not found.');
}

$spreadsheet = IOFactory::load($excelFilePath);

$worksheet = $spreadsheet->getActiveSheet();

$data = $worksheet->toArray(null, true, true, true);

$json = json_encode($data, JSON_PRETTY_PRINT);

echo 'JSON Data: ' . $json . PHP_EOL;

$openaiApiKey = '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';
$openaiEndpoint = 'https://api.openai.com/v1/files';

$openaiData = [
    'prompt' => $json,
    'max_tokens' => 150,
];

$headers = [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ' . $openaiApiKey,
];

$client = new Client();
$response = $client->post($openaiEndpoint, [
    'headers' => $headers,
    'json' => $openaiData,
]);

$result = json_decode($response->getBody(), true);
$chatGptAnalysis = $result['choices'][0]['text'];

echo 'ChatGPT Analysis: ' . $chatGptAnalysis . PHP_EOL;
