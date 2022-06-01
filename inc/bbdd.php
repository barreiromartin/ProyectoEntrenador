<?php
$nombre_servidor = "localhost";
$usuario = "entrenador";
$contra = "abc123.";
$basededatos = "entrenador";

$conexion = new mysqli($nombre_servidor, $usuario, $contra, $basededatos);
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}




class deportista
{
    public $id;
    public $nombre;
    public $categoria;
    public $seccion;

    function __construct($id, $nombre, $categoria, $seccion)
    {
        $this->idUser = $id;
        $this->nombreUser = $nombre;
        $this->categoria = $categoria;
        $this->seccion = $seccion;
    }
}



class prueba
{
    public $idPrueba;
    public $nombrePrueba;

    function __construct($idPrueba, $nombrePrueba)
    {
        $this->idPrueba = $idPrueba;
        $this->nombrePrueba = $nombrePrueba;
    }
}
