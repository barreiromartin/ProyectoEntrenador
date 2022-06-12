<?php
include('inc/bbdd.php');

$idUser = $_GET["idUser"];
$idPrueba = $_GET["idPrueba"];

$consulta = "INSERT INTO prueba_deportista(idPrueba, idUser) VALUES ('$idPrueba', '$idUser');";


if ($conexion->query($consulta) == TRUE) {
   return true;
} else {
    return false;
}   
