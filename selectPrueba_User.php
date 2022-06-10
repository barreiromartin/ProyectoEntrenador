<?php
include('inc/bbdd.php');

$idUser = $_GET["idUser"];
$idPrueba = $_GET["idPrueba"];

$consulta = "SELECT * FROM prueba_deportista WHERE idUser='$idUser' AND idPrueba='$idPrueba'";

$resultado = $conexion->query($consulta);


if ($resultado->num_rows > 0) {
    while ($row = $resultado->fetch_assoc()) {
        $prueba_user = new prueba_user($row['prueba_user'], $row['idPrueba'], $row['idUser']);
    }
} else {
    return false;
}

echo json_encode($prueba_user);;
