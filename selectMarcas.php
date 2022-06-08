<?php
include('inc/bbdd.php');

$idUser = $_GET["idUser"];
$idPrueba = $_GET["idPrueba"];

$consulta = "SELECT * FROM marcas WHERE prueba_user IN (SELECT prueba_user FROM prueba_deportista WHERE idUser = '$idUser' AND idPrueba = '$idPrueba');";

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
