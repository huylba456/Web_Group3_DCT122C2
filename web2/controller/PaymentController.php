<?php
require_once('BaseController.php');
// dir to hoadonbus
require_once(__DIR__ . '/../model/HoaDonBUS.php');

session_start();

class PaymentController extends BaseController
{
    public function index()
    {
        $this->render('payment');
    }
}

if (isset($_POST['request'])) {
    switch ($_POST['request']) {
        case 'dathang':
            dathang();
            break;
    }
}

function dathang() {
    $name = $_POST['name'];
    $phone = $_POST['sdt'];
    $address = $_POST['diachi'];
    $total = $_POST['total'];
    $cart = $_POST['listProduct'];
    $date = $_POST['date'];
    $listProduct = $_POST['listProduct'];

    $data = [
        'MaND' => $_SESSION['currentUser']['result'][0]['MaND'],
        'NgayLap' => $date,
        'TongTien' => $total,
        'TrangThai' => 0
    ];
    return (new HoaDonBUS())->add1hoadon($data, $listProduct);
}