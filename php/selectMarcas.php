<?php
include('inc/bbdd.php');

$prueba_user = $_GET['prueba_user'];

$consulta = "SELECT * FROM marcas WHERE prueba_user=$prueba_user";

$resultado = $conexion->query($consulta);
$marcas = array();

if ($resultado->num_rows > 0) {
    while ($row = $resultado->fetch_assoc()) {
        $aux_marca = new marca($row['idMarca'], $row['prueba_user'], $row['fecha'], $row['marca']);
        array_push($marcas, $aux_marca);
    }
} else {
    return false;
}

echo json_encode($marcas);;
