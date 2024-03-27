<?php
// require base controller
require_once('BaseController.php');
require_once(__DIR__ . '/../model/NguoiDungBUS.php');
require_once(__DIR__ . '/../model/SanPhamBUS.php');
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
    }
}

function getAllBill() {
    $id = $_SESSION['currentUser']['result'][0]['MaND'];
    $data = (new HoaDonBUS())->getBill($id);
    die(json_encode($data));
}