<?php
    include 'classes.php';

    $oConnParametar = new Configuration("127.0.0.1","pc_shop","root","");
    //var_dump($oConnParametar);
    try
    {
        $oConnection = new PDO("mysql:host=$oConnParametar->host;dbname=$oConnParametar->dbName",$oConnParametar->username,$oConnParametar->password);
        //echo "Connected to $oConnParametar->dbName at $oConnparametar->host sucessfully";
    }
    catch(PDOException $pe)
    {
        //die("Could not connect to the database $dbName : ".$pe->getMessage());
    }


?>