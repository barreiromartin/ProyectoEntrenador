<?php
include('inc/bbdd.php');

class deportista
{
    public $id;
    public $nombre;
    public $categoria;

    function __construct($id, $nombre, $categoria)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->categoria = $categoria;
    }
}


$nombre = $_GET["nombre"];
$categoria = $_GET["categoria"];
$seccion = $_GET["seccion"];

$consulta = "INSERT INTO deportistas(id, nombre, categoria, seccion) VALUES (NULL, '$nombre', '$categoria', '$seccion');";


if ($conexion->query($consulta) == TRUE) {
   return true;
} else {
    return false;
}   
