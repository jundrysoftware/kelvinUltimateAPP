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
    $email=$datos['email'];
    $password=sha1($datos['password']);
    $query = "SELECT * FROM clients where email='$email' and password='$password'";
    execQuery($query);
}

function execQuery($query)
{
	include "./conection/conection.php";
    $consulta = $db->query($query);
    $result = '';
    $array_objts = array();
    if ($row = mysqli_fetch_assoc($consulta)) {
        $objt = array(
                'id' => $row['client_id'],
                'name' => $row['name'],
                'lastname' => $row['last_name'],
                'phone' => $row['phone'],
                'address' => $row['addres'],
                'email' => $row['email']
            );
        array_push($array_objts, $objt);
        imprime($array_objts);
    } else {
        $objt = array(
                'id' => '',
                'name' => '',
                'lastname' => '',
                'phone' => '',
                'address' => '',
                'email' => ''
            );
        array_push($array_objts, $objt);
        imprime($array_objts);
    }
}


function imprime($result){
    echo json_encode($result);
}
?>