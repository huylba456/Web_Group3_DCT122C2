<?php
// require base controller
require_once('BaseController.php');
require_once(__DIR__ . '/../model/NguoiDungBUS.php');
require_once(__DIR__ . '/../model/SanPhamBUS.php');
require_once(__DIR__ . '/../model/HoaDonBUS.php');
session_start();

class HistoryBillController extends BaseController
{
    public function index()
    {
        $this->render('list-bill');
    }
}

if (isset($_POST['request'])) {
    switch ($_POST['request']) {
        case 'getHistoryBill':
            getAllBill();
            break;
        case 'getDetailBill':
            getDetailBill();
            break;
        case 'changePage':
            if(isset($_POST['currentpage']) && isset($_POST['currentquery'])){
                   getRowPagAjax();
            }
            break;
    }
}

function getAllBill() {
    $id = $_SESSION['currentUser']['result'][0]['MaND'];
    $data = (new HoaDonBUS())->getBill($id);
    die(json_encode($data));
}

function getDetailBill() {
    $mahd = $_POST['mahd'];
    $data = (new HoaDonBUS())->getDetailBill($mahd);
    die(json_encode($data));
}

function getRowPagAjax() {
    $query = $_POST['currentquery'];
    $from = ($_POST['currentpage'] - 1) * 4;
    $to = 4;    
    $query = $query . " LIMIT $from, $to";
    $result = (new SanPhamBUS())->get_list($query);
    if ($result != null) {
        die (json_encode($result));
    }
}