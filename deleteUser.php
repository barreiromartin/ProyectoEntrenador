<?php
include('inc/bbdd.php');

$idUser = $_GET['idUser'];

$consulta = "DELETE FROM deportistas WHERE idUser=$idUser;";


if ($conexion->query($consulta) == TRUE) {
   return true;
} else {
    return false;
}   
