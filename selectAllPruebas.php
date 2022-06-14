<?php
include('inc/bbdd.php');

$tabla = $_GET["nombre_tabla"];

$consulta = "SELECT * FROM $tabla";
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
