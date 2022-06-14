<?php
include('inc/bbdd.php');

$prueba_user = $_GET["prueba_user"];
$fecha = $_GET["fecha"];
$marca = $_GET["marca"];

$consulta = "INSERT INTO marcas(prueba_user, fecha, marca) VALUES ('$prueba_user', '$fecha', '$marca');";


if ($conexion->query($consulta) == TRUE) {
   return true;
} else {
    return false;
}   
