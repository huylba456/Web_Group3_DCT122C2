<?php
require_once(__DIR__ . "/../BackEnd/DB_business.php");
require_once(__DIR__ . '/../model/chitietnhap.php');
class chitietnhap extends DB_business {
    function __construct()
    {
        $this->setTable("chitietnhap");
        parent::__construct();
    }

    function add_new($data)
    {
       return parent::add_new($data);
    }
    
}