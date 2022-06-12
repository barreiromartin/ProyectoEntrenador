<?php
include('inc/bbdd.php');

$id = $_GET['id'];
$tabla = $_GET['tabla'];

if($tabla == "marcas"){
    $consulta = "DELETE FROM $tabla WHERE idMarca=$id;";
}

if($tabla == "prueba_deportista"){
    $consulta = "DELETE FROM $tabla WHERE prueba_user=$id;";
}

if($tabla == "deportistas"){
    $consulta = "DELETE FROM $tabla WHERE idUser=$id;";
}


if ($conexion->query($consulta) == TRUE) {
   return true;
} else {
    return false;
}   
