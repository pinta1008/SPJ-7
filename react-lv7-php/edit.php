<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    /*header("Content-type: text/json");
    header("Content-type: application/json; charset=utf-8"); */

    require_once "connection.php";
    require_once "classes.php";

        $id = $_POST['Id'];
        $naziv = $_POST['Naziv'];
        $proizvodac = $_POST['Proizvodac'];
        $model = $_POST['Model'];
        $cijena = $_POST['Cijena'];
        $kolicina = $_POST['Kolicina'];

       // $sQuery = "UPDATE artikli SET Naziv='$naziv', Proizvodac='$proizvodac',Model='$model',Cijena='$cijena',Kolicina='$kolicina' WHERE Id='$id'";
        

        $sQuery="UPDATE artikli SET Id = '".$id."', Naziv = '".$_POST['Naziv']."', Proizvodac = '".$_POST['Proizvodac']."', Model = '".$_POST['Model']."', Cijena = '".$_POST['Cijena'] ."', Kolicina = '".$_POST['Kolicina']."' WHERE Id = '".$_POST['Id']."'";
        $oStatement=$oConnection->query($sQuery);

?>