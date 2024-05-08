<?php
require_once(__DIR__ . "/../BackEnd/DB_business.php");

class GioHangBUS extends DB_business {
    function __construct()
    {
        $this->setTable("giohang");
        parent::__construct();
    }


}

