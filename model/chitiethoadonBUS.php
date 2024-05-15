<?php
require_once(__DIR__ . "/../BackEnd/DB_business.php");
require_once(__DIR__ . '/../model/chitiethoadonBUS.php');
class chitiethoadonBUS extends DB_business {
    function __construct()
    {
        $this->setTable("chitiethoadon");
        parent::__construct();
    }

    function add_new($data)
    {
       return parent::add_new($data);
    }
    
}