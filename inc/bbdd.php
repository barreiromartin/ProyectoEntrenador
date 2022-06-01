<?php
$nombre_servidor = "localhost";
$usuario = "entrenador";
$contra = "abc123.";
$basededatos = "entrenador";

$conexion = new mysqli($nombre_servidor, $usuario, $contra, $basededatos);
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
?>