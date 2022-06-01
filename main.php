<?php
include('inc/bbdd.php');

class deportista
{
    public $id;
    public $nombre;
    public $categoria;
    public $seccion;

    function __construct($id, $nombre, $categoria, $seccion)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->categoria = $categoria;
        $this->seccion = $seccion;
    }
}



$tabla = $_GET["nombre_tabla"];

$consulta = "SELECT * FROM $tabla";
$resultado = $conexion->query($consulta);
$deportistas = array();
if ($resultado->num_rows > 0) {
    while ($row = $resultado->fetch_assoc()) {
        $aux_deportista = new deportista($row['id'], $row['nombre'], $row['categoria'], $row['seccion']);
        array_push($deportistas, $aux_deportista);
    }
} else {
    return false;
}

echo json_encode($deportistas);






