<?php 
require_once('BaseController.php');
require_once(__DIR__ . '/../model/HoaDonBUS.php');
class BillManagementController extends BaseController
{
    public function index()
    {
        $this->render('admin_order');
    }
}


if (isset($_POST['request'])) {
    switch ($_POST['request']) {
        case 'loadTableOrder':
            getOrders();
            break;
        case 'loadDetailOrder':
                getDetailOrder();
            break;
        case 'loadDetail_Customer_Order':
                getDetail_Customer_Order();
            break;
            case 'Load_bottom_detail':
                getDetail_HD();
        case 'update_status':
            update_status();
            break;
        case 'find_order':
            getOrders();
            break;
    }
}

function getOrders(){
    $query = $_POST['currentquery'];
    // count(*) from query
    $countrow = "SELECT count(*) as total from ($query) as total";
    $rownum = (new DB_driver())->get1row($countrow);
    $currentpage = $_POST['currentpage'];
    // call get_list method from hoadonBUS
    $from = ($currentpage - 1) * 8;
    $to = 8;
    // $query = $query . " LIMIT $from, $to";
    $result = (new HoaDonBUS())->get_list($query);
    // return countrow and result
    if ($result != null) {
        die (json_encode(array('countrow' => $rownum['total'], 'result' => $result)));
    }
    die (json_encode(null));
}

function getDetailOrder(){

    $mahd = $_POST['mahd'];
    $result = (new HoaDonBUS())->getDetailBill($mahd);
    if ($result != null) {
        die (json_encode($result));
    }
    die (json_encode("khong tra ve "));
}

function getDetail_Customer_Order(){
    
        $mahd = $_POST['mahd'];
        $result = (new HoaDonBUS())->getDetail_Customer_Bill($mahd);
        if ($result != null) {
            die (json_encode($result));
        }
        die (json_encode("khong tra ve "));
}

function getDetail_HD(){
    
    $mahd = $_POST['mahd'];
    $result = (new HoaDonBUS())->getBillbymaHD($mahd);
    if ($result != null) {
        die (json_encode($result));
    }
    die (json_encode("khong tra ve "));
}



function update_status(){
    $mahd = $_POST['mahd'];
    $status = $_POST['trangthai'];
    $result = (new HoaDonBUS())->update_trangthai($mahd, $status);
    if ($result != null) {
        die (json_encode($result));
    }
    die (json_encode("khong tra ve "));
}