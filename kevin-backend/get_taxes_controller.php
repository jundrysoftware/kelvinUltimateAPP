<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Origin: *");

GetAll();

function GetAll()
{
	require_once('conection/conection.php');
	$array_objts = array();
	$sql=mysqli_query($db, "SELECT * FROM taxes LIMIT 1");
	if($row=mysqli_fetch_assoc($sql)){
		$objt = array(
                'shipping' => (int)$row['shipping'],
                'tax' => (int)$row['tax']
            );
            array_push($array_objts, $objt);
	}
	imprimir($array_objts);
}

function imprimir($array)
{
    echo json_encode($array);
}