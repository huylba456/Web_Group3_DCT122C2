<?php
class DB_driver {
    public $__conn,
    $host = "localhost",
    $DbName = "web2sgu",
    $user = "root",
    $pass = "";
    function __construct() {
        
        $this->connect();
    }

    function connect() {
        if ($this->__conn == null) {
            $this->__conn = mysqli_connect($this->host, $this->user, $this->pass, $this->DbName);
            // kiểm tra xem kết nối thành công không
            if (!$this->__conn) {
                die("Kết nối thất bại: " . mysqli_connect_error());
            }
            mysqli_query($this->__conn, "SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
            mysqli_query($this->__conn, "set names 'utf8'");
            mysqli_set_charset($this->__conn, "utf8");
        }
    }

    function dis_connect() {
        if ($this->__conn) {
            mysqli_close($this->__conn);
        }
    }

    function insert($table, $data) {
        $this->connect();

        $field_list = "";
        $value_list = "";

        foreach($data as $key => $value) {
            $field_list .= ",$key";
            $value_list .= ",'" . mysqli_escape_string($this->__conn, $value) . "'";
        }

        $sql = 'INSERT INTO ' . $table . '(' . trim($field_list, ',') . ') VALUES (' . trim($value_list, ',') . ')';
        $result = mysqli_query($this->__conn, $sql);
        if ($result) {
            return mysqli_insert_id($this->__conn);
        } else {
            return false;
        }
    }

    function get_list($sql) {
        $this->connect();
        $result = mysqli_query($this->__conn, $sql);

        if (!$result) {
            die('sai truy van');
        }
        if ($sql[0] == 'U') {
            die(json_encode(array('status' => 'success')));
        }

        $return = array();

        while($row = mysqli_fetch_assoc($result)) {
            $return[] = $row;
        }
        return $return;
    }

    function get1row($sql)
    {
        $this->connect();
        $result = mysqli_query($this->__conn, $sql);

        if (!$result) {
            die('Câu truy vấn bị sai ' . $sql);
        }

        $row = mysqli_fetch_assoc($result);
        mysqli_free_result($result);

        if ($row) {
            return $row;
        }

        return false;
    }

    function insertz($sql) {
        $this->connect();
        $result = mysqli_query($this->__conn, $sql);
        if ($result) {
            return "success";
        }
        return false;
    }

    function updatezzz($sql) {
        $this->connect();
        $result = mysqli_query($this->__conn, $sql);

        if ($result) {
            return true;
        }
        return false;
    }
   


}