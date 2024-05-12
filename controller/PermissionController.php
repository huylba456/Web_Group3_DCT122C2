<?php
require_once('BaseController.php');
require_once(__DIR__ . '/../model/PhanQuyenBUS.php');
class PermissionController extends BaseController
{
    public function index()
    {
        $this->render('admin_permission');
    }
}
if(isset($_POST['request']))
{
    switch($_POST['request'])
    {
        case 'getpermission':
            getpermission();
            break;
    }
}

function getpermission()
{
    $query = $_POST['currentquery'];
    // count(*) from query
    $countrow = "SELECT count(*) as total from ($query) as total";
    $rownum = (new DB_driver())->get1row($countrow);
   
    $result = (new PhanQuyenBUS())->get_list($query);

    if ($result != null) {
        die (json_encode(array('countrow' => $rownum['total'], 'result' => $result)));
    }
    die (json_encode(null));
}
?>