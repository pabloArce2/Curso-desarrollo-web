<?php 

function obtener_servicios(){
    try {
        require "database.php";
        $sql = "SELECT * FROM services;";
        $query = mysqli_query($db, $sql);

        return $query;
        
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

obtener_servicios();

?>