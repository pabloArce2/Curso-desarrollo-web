<?php

$db = mysqli_connect("localhost", "root", "", "ejercicio1");

if (!$db) {
    echo "Error: No se pudo conectar a MySQL.";
    echo "errno de depuración: " . mysqli_connect_errno();
    exit;
}
else {
    //echo "Conexión exitosa a la base de datos";
}

?>