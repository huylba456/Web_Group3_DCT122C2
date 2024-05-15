<?php
require_once('BaseController.php');
// dir to hoadonbus
require_once(__DIR__ . '/../model/HoaDonBUS.php');
require_once(__DIR__ . '/../model/NDBUS.php');
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
        case 'updateee':
            updateee();
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
function updateee() {
    $ho= $_POST['ho'];
    $ten = $_POST['ten'];
    $phone = $_POST['sdt'];
    $address = $_POST['diachi'];
    $email = $_POST['email'];
    $id = $_POST['id'];
     $sql="UPDATE NguoiDung SET Ho='$ho',Ten ='$ten', SDT='$phone', Email='$email', DiaChi='$address' WHERE MaND='$id'";
    return (new NDBUS())->updatezzz($sql);
}