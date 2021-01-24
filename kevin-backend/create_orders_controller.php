
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
    $price=$datos['price'];
    $cliente=$datos['cliente'];
    $status=$datos['status'];
    $shipping=$datos['shipping'];
    $tax=$datos['tax'];
    $query = "INSERT INTO `orders`(`price`,`status`, `client_id`,`shipping`,`tax`) VALUES ('$price','$status','$cliente',$shipping,'$tax')";
    execQuery($query);
}

function execQuery($query)
{
	include "./conection/conection.php";
    $consulta = $db->query($query);
    $result = '';
    if ($consulta) {
        $result=array('code'=>200, 'message'=>'Orden Registrada con exito', 'orden'=> $db->insert_id);
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