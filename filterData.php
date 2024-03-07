<?php
require 'vendor/autoload.php'; 

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$serveur = "localhost";
$utilisateur = "root";
$mot_de_passe = "youssef";
$base_de_donnees = "exel";

try {
    $connexion = new PDO("mysql:host=$serveur;dbname=$base_de_donnees", $utilisateur, $mot_de_passe);
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Échec de la connexion à la base de données : " . $e->getMessage());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $date_debut = $_POST["date_debut"];
    $date_fin = $_POST["date_fin"];

    $requete = $connexion->prepare("SELECT * FROM employer WHERE datee BETWEEN :date_debut AND :date_fin");
    $requete->bindParam(':date_debut', $date_debut);
    $requete->bindParam(':date_fin', $date_fin);
    
    $requete->execute();

    $resultat = $requete->fetchAll(PDO::FETCH_ASSOC);
    if($resultat)
    {
        $excelFilePath = 'C:\Users\AdMin\OneDrive\Desktop\youssef\chatgpt\fileExel\CHATGPT.xlsx';

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
    
        $sheet->setCellValue('A1', 'ID');
        $sheet->setCellValue('B1', 'Nom');
        $sheet->setCellValue('C1', 'Adresse');
        $sheet->setCellValue('D1', 'Date');
    
        $lastRow = 2;
    
        foreach ($resultat as $row_data) {
            $sheet->setCellValue('A' . $lastRow, $row_data["id"]);
            $sheet->setCellValue('B' . $lastRow, $row_data["nom_ep"]);
            $sheet->setCellValue('C' . $lastRow, $row_data["adress_ep"]);
            $sheet->setCellValue('D' . $lastRow, $row_data["datee"]);
            $lastRow++;
        }
    
        if (file_exists($excelFilePath)) {
            unlink($excelFilePath); // Delete the existing file
        }
    
        $writer = new Xlsx($spreadsheet);
        $writer->save($excelFilePath);
    
        $requete->closeCursor();

        $connexion = null;
        header("location: index.html");
    }  else{
        echo "not found";
    }
}

?>


