<?php
include('inc/bbdd.php');

$idUser = $_GET["idUser"];

$consulta = "SELECT * FROM pruebas WHERE idPrueba IN(SELECT idPrueba FROM prueba_deportista WHERE idUser='$idUser')";

$resultado = $conexion->query($consulta);
$pruebas = array();

if ($resultado->num_rows > 0) {
    while ($row = $resultado->fetch_assoc()) {
        $aux_prueba = new prueba($row['idPrueba'], $row['nombrePrueba']);
        array_push($pruebas, $aux_prueba);
    }
} else {
    return false;
}

echo json_encode($pruebas);
