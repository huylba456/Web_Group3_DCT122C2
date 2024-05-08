<?php
require_once('BaseController.php');
require_once(__DIR__ . '/../model/SanPhamBUS.php');
require_once(__DIR__ . '/../model/PhieuNhapBUS.php');
session_start();
class ImportController extends BaseController
{
    public function index()
    {
        $this->render('admin_import');
    }
}

if (isset($_POST['request'])) {
    switch ($_POST['request']) {
        case 'getMaPNnew':
            getMaPNnew();
            break;
        case 'themphieunhap':
            themphieunhap();
            break;
    }
}

function getMaPNnew() {
    $data = (new PhieuNhapBUS())->getMaPNnew();
    die(json_encode($data));
}

function themphieunhap() {
    $MaPN = $_POST['MaPN'];
    $listCTPN = $_POST['listCTPN'];
    $date = $_POST['date'];
    $data = [
        'MaPN' => $MaPN,
        'NgayNhap' => $date,
        'MaNV' => $_SESSION['currentUser']['result'][0]['MaND']
    ];
    return (new PhieuNhapBUS())->add1phieunhap($data, $listCTPN);
}
   