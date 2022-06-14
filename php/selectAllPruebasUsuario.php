<?php
include('inc/bbdd.php');

$idUser = $_GET["idUser"];

$consulta = "SELECT a.prueba_user, a.idUser, a.idPrueba, b.nombrePrueba FROM prueba_deportista a, pruebas b WHERE a.idPrueba=b.idPrueba AND A.idUser=$idUser;";

$resultado = $conexion->query($consulta);
$pruebas = array();

if ($resultado->num_rows > 0) {
    while ($row = $resultado->fetch_assoc()) {
        $aux_prueba = new pruebas_por_user($row['prueba_user'], $row['idUser'], $row['idPrueba'], $row['nombrePrueba']);
        array_push($pruebas, $aux_prueba,);
    }
} else {
    return false;
}

echo json_encode($pruebas);
