<?php
include('inc/bbdd.php');

$idUser = $_GET["idUser"];
$idPrueba = $_GET["idPrueba"];

$consulta = "INSERT INTO prueba_deportista(preuba_user, idPrueba, idUser) VALUES (NULL, '$idUser', '$idPrueba');";


if ($conexion->query($consulta) == TRUE) {
   return true;
} else {
    return false;
}   
