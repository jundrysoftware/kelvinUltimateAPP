<?php
header('Content-Type: application/json');
header('Content-Type: text/html');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Origin: *");



if(isset($_GET['like'])){
    GetAllLike($_GET['like']);
}else if(isset($_GET['id'])){
    GetAllId($_GET['id']);
}else if(isset($_GET['web'])) {
    $pages = $_GET['page'];
    GetAdminAll($_GET['web'], $pages);
}else{
    GetAll();
}

function GetAdminAll($search, $pages){
    require_once('conection/conection.php');
        $page = $pages;
        $request = mysqli_query($db, "SELECT count(*) FROM products where product_id like '%" . $search . "%' or name like '%" . $search . "%'");
        if ($request) {
            $request = mysqli_fetch_row($request) or die(mysqli_error($con));
            $num_items = $request[0];
        } else {
            $num_items = 0;
        }
        $rows_by_page = 10;
        $last_page = ceil($num_items / $rows_by_page);
        $limit = 'LIMIT ' . ($page - 1) * $rows_by_page . ',' . $rows_by_page;
        $request_ac = mysqli_query($db, "SELECT * FROM products where product_id like '%" . $search . "%' or name like '%" . $search . "%'" . $limit);
        $total2 = 0;
        while ($row = mysqli_fetch_array($request_ac)) {
            $str = $row['colors'];
            $colores = (explode(",",$str));
            $str = $row['sizes'];
            $tamaños = (explode(",",$str));
            $str = $row['images'];
            $imagenes = (explode(",",$str));
            $listimgs= '<ul>';
            foreach ($imagenes as $key => $value) {
                $listimgs.='<a href="images/Productos/'.$value.'"> <li>'.$value.'</li> </a>';
            }
            $listimgs.='</ul>';

            $listsizes= '<ul>';
            foreach ($tamaños as $key => $value) {
                $listsizes.='<li>'.$value.'</li>';
            }
            $listsizes.='</ul>';

            $listcolors= '<ul>';
            foreach ($colores as $key => $value) {
                $listcolors.='<li>'.$value.'</li>';
            }
            $listcolors.='</ul>';
            echo '<tr class="tr-shadow">'

                . '<td >' . $row['product_id'] . '</td> '
                . '<td>' . $row['name'] . '</td>'
                . '<td>' . $row['description'] . '</td>'
                . '<td>' . $row['price'] . '</td>'
                . '<td>' . $row['discount'] . '</td>'
                . '<td>' . $listimgs . '</td>'
                . '<td>' . $listsizes . '</td>'
                . '<td>' . $listcolors . '</td>'
                .'  <td>
                                                    <div class="table-data-feature">
                                                      
                                                        <button onclick="redireccion()" class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                            <i class="zmdi zmdi-edit"></i>
                                                        </button>
                                                        <button onclick="redireccion()" class="item" data-toggle="tooltip" data-placement="top" title="Edit Image">
                                                            <i class="zmdi zmdi-book-image"></i>
                                                        </button>
                                                        <button onclick="redireccion()" class="item" data-toggle="tooltip" data-placement="top" title="Edit Sizes">
                                                            <i class="zmdi zmdi-scissors"></i>
                                                        </button>
                                                        <button onclick="redireccion()" class="item" data-toggle="tooltip" data-placement="top" title="Edit Colors">
                                                            <i class="zmdi zmdi-brush"></i>
                                                        </button>
                                                        <button type="button" onclick="borrar('.$row['product_id'].')" id="borrar" class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                            <i class="zmdi zmdi-delete"></i>
                                                        </button>
                                                       
                                                    </div>
                                                </td>';
        }
        echo '<tr><td colspan="7" style="background: #e5e5e5">';
        if ($page > 1) {
            ?>
            <img src="./images/icon/at2.png" onclick="mostrar_line(1)" style="cursor: pointer;">
            <img src="./images/icon/at1.png" onclick="mostrar_line(<?php echo $page - 1; ?>)"
                 style="cursor: pointer;">
            <?php
        } else {
            ?><img src="./images/icon/at2.png"> <img src="./images/icon/at1.png"><?php
        }
        ?>
        (<b>Pagina</b> <input type="text" id="page" value="<?php echo $page; ?>"
                              style="width: 50px; height: 20px;text-align: center;" disabled><b>
            de </b><?php echo ' ' . $last_page; ?>)
        <?php
        if ($page < $last_page) {
            ?>
            <img src="./images/icon/sig1.png" onclick="mostrar_line(<?php echo $page + 1; ?>)"
                 style="cursor: pointer;">
            <img src="./images/icon/sig2.png" onclick="mostrar_line(<?php echo $last_page; ?>)"
                 style="cursor: pointer;">
            <?php
        } else {
            ?><img src="./images/icon/sig1.png"> <img src="./images/icon/sig2.png"> <?php
        }
        echo 'Cantidad de registro ' . $num_items;
        echo '</td></tr>';
        ?>
        </div>
        </div><?php
}
function GetAll()
{
    require_once('conection/conection.php');
    $array_objts = array();
    $sql=mysqli_query($db, "SELECT * FROM products where status=1 order by product_id DESC");
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
    $sql=mysqli_query($db, "SELECT * FROM products where status=1 and name like '%" . $like . "%' order by product_id DESC");
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