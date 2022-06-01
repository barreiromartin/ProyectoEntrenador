<?php
include('inc/bbdd.php');

$nombre = $_GET["nombre"];
$categoria = $_GET["categoria"];
$seccion = $_GET["seccion"];

$consulta = "INSERT INTO deportistas(idUser, nombreUser, categoria, seccion) VALUES (NULL, '$nombre', '$categoria', '$seccion');";


if ($conexion->query($consulta) == TRUE) {
   return true;
} else {
    return false;
}   
