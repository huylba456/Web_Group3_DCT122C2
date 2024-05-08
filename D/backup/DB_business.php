<?php
require_once("DB_driver.php");

class DB_business extends DB_driver {
    protected $_table_name = '';

    function __construct()
    {
        parent::connect();
    }

    function setTable($tenBang)
    {
        // Khai báo tên bảng
        $this->_table_name = $tenBang;

    }

    function add_new($data)
    {
        return parent::insert($this->_table_name, $data);
    }
}
