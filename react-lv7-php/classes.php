<?php
class Configuration
{
    public $host = "";
    public $dbName = "";
    public $username ="";
    public $password ="";
    
    public function __construct($host,$dbName,$username,$password)
    {
        $this->host = $host;
        $this->dbName = $dbName;
        $this->username =$username;
        $this->password =$password;
    }
}
class Artikli
{
    public $Id = "";
    public $Naziv="";
    public $Proizvodac="";
    public $Model ="";
    public $Cijena="";
    public $Kolicina="";

    public function __construct($id,$naziv,$proizvodac,$model,$cijena,$kolicina)
    {
        $this->Id =$id;
        $this->Naziv = $naziv;
        $this->Proizvodac = $proizvodac;
        $this->Model =$model;
        $this->Cijena =$cijena;
        $this->Kolicina =$kolicina;
    }
}
?>