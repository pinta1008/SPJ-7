<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: *");
 header("Access-Control-Allow-Methods: *");
 /*header("Content-type: text/json");
 header("Content-type: application/json; charset=utf-8"); */

 require_once "connection.php";
 require_once "classes.php";

    $sQuery = "DELETE FROM artikli WHERE Id='".$_POST['Id']."'";
    $oStatement=$oConnection->query($sQuery);
?>