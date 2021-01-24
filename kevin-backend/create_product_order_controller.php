<?php
//require_once('conection/conection.php');
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Origin: *");

//seteamos los valores recibidos para la manipulacion
$postdata = file_get_contents("php://input");
$datos = json_decode($postdata, true);

create($datos);

function create($datos)
{
    $orden=$datos['orden'];
    $product=$datos['product'];
    $cant=$datos['cant'];
    $query = "INSERT INTO `orders_products`(`order_id`,`product_id`, `cant`) VALUES ('$orden','$product','$cant')";
    execQuery($query);
}

function execQuery($query)
{
	include "./conection/conection.php";
    $consulta = $db->query($query);
    $result = '';
    if ($consulta) {
        $result=array('code'=>200, 'message'=>'Usuario Registrado con exito');
        imprime($result);
    } else {
        $result=array('code'=>500, 'message'=>'Error no usuario no pudo ser insertado intente nuevamente');
        imprime($result);
    }
}


function imprime($result){
    echo json_encode($result);
}
?>