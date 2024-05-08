<?php
require_once(__DIR__ . "/../BackEnd/DB_business.php");
require_once(__DIR__ . '/../model/NguoiDungBUS.php');
class NguoiDungBUS extends DB_business {
    function __construct()
    {
        $this->setTable("TaiKhoanNguoiDung");
        parent::__construct();
    }

    function add_new($data)
    {
       return parent::add_new($data);
    }
    
}