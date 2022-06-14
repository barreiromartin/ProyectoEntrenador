<?php
include('inc/bbdd.php');

$tabla = $_GET["nombre_tabla"];

$consulta = "SELECT * FROM $tabla";
$resultado = $conexion->query($consulta);
$deportistas = array();
if ($resultado->num_rows > 0) {
    while ($row = $resultado->fetch_assoc()) {
        $aux_deportista = new deportista($row['idUser'], $row['nombreUser'], $row['categoria'], $row['seccion']);
        array_push($deportistas, $aux_deportista);
    }
} else {
    return false;
}

echo json_encode($deportistas);






