<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    /*header("Content-type: text/json");
    header("Content-type: application/json; charset=utf-8"); */

    require_once "connection.php";
    require_once "classes.php";

    $sQuery="INSERT INTO artikli VALUES (".$_POST['Id'].",'".$_POST['Naziv']."','".$_POST['Proizvodac']."','".$_POST['Model']."',".$_POST['Cijena'].",".$_POST['Kolicina'].")";

    $oStatement=$oConnection->query($sQuery);

    echo $sQuery;


?>