<?php
header('Content-Type: application/json');
header('Content-Type: text/html');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Origin: *");

GetAll();

function GetAll()
{
	require_once('conection/conection.php');
	$array_objts = array();
	$sql=mysqli_query($db, "SELECT * FROM category where status=1");
	while($row=mysqli_fetch_assoc($sql)){
		$objt = array(
                'id' => (int)$row['category_id'],
                'name' => $row['name'],
                'image' => $row['image']
            );
            array_push($array_objts, $objt);
	}
	imprimir($array_objts);
}

function imprimir($array)
{
    echo json_encode($array);
}