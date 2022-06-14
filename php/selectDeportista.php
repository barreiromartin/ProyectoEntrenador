<?php
include('inc/bbdd.php');

$idUser = $_GET["idUser"];

$consulta = "SELECT * FROM deportistas WHERE idUser='$idUser'";
$resultado = $conexion->query($consulta);

if ($resultado->num_rows > 0) {
    while ($row = $resultado->fetch_assoc()) {
        $user = new deportista($row['idUser'], $row['nombreUser'], $row['categoria'], $row['seccion']);
       
    }
} else {
    return false;
}

echo json_encode($user);
