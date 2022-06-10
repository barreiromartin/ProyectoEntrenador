<?php
include('inc/bbdd.php');

$nombre = $_GET["nombre"];
$categoria = $_GET["categoria"];
$seccion = $_GET["seccion"];

$consulta = "INSERT INTO deportistas(nombreUser, categoria, seccion) VALUES ('$nombre', '$categoria', '$seccion');";


if ($conexion->query($consulta) == TRUE) {
   return "Usuario añadido con exito";
} else {
    return false;
}   
