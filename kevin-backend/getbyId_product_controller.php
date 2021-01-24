<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Origin: *");



if(isset($_GET['like'])){
	GetAllLike($_GET['like']);
}else if(isset($_GET['id'])){
	GetAllId($_GET['id']);
}else{
	GetAll();
}

function GetAll()
{
	require_once('conection/conection.php');
	$array_objts = array();
	$sql=mysqli_query($db, "SELECT * FROM products where status=1");
	while($row=mysqli_fetch_assoc($sql)){
		$str = $row['colors'];
		$colores = (explode(",",$str));
		$str = $row['sizes'];
		$tamaños = (explode(",",$str));
		$str = $row['images'];
		$imagenes = (explode(",",$str));
		$objt = array(
                'id' => (int)$row['product_id'],
                'name' => $row['name'],
                'description' => $row['description'],
                'price' => $row['price'],
                'discount' => $row['discount'],
                'images' => $imagenes,
                'sizes' => $tamaños,
                'colors' => $colores,
            );
            array_push($array_objts, $objt);
	}
	imprimir($array_objts);
}

function GetAllLike($search)
{
	require_once('conection/conection.php');
	$like = $search;
	$array_objts = array();
	$sql=mysqli_query($db, "SELECT * FROM products where status=1 and name like '%" . $like . "%'");
	while($row=mysqli_fetch_assoc($sql)){
		$str = $row['colors'];
		$colores = (explode(",",$str));
		$str = $row['sizes'];
		$tamaños = (explode(",",$str));
		$str = $row['images'];
		$imagenes = (explode(",",$str));
		$objt = array(
                'id' => (int)$row['product_id'],
                'name' => $row['name'],
                'description' => $row['description'],
                'price' => $row['price'],
                'discount' => $row['discount'],
                'images' => $imagenes,
                'sizes' => $tamaños,
                'colors' => $colores,
            );
            array_push($array_objts, $objt);
	}
	imprimir($array_objts);
}

function GetAllId($idcat)
{
	require_once('conection/conection.php');
	$like = $search;
	$array_objts = array();
	$sql=mysqli_query($db, "SELECT * FROM products where status=1 and category_id='$idcat'");
	while($row=mysqli_fetch_assoc($sql)){
		$str = $row['colors'];
		$colores = (explode(",",$str));
		$str = $row['sizes'];
		$tamaños = (explode(",",$str));
		$str = $row['images'];
		$imagenes = (explode(",",$str));
		$objt = array(
                'id' => (int)$row['product_id'],
                'name' => $row['name'],
                'description' => $row['description'],
                'price' => $row['price'],
                'discount' => $row['discount'],
                'images' => $imagenes,
                'sizes' => $tamaños,
                'colors' => $colores,
            );
            array_push($array_objts, $objt);
	}
	imprimir($array_objts);
}

function imprimir($array)
{
    echo json_encode($array);
}