<?php
require_once('BaseController.php');
require_once(__DIR__ . '/../model/SanPhamBUS.php');
require_once(__DIR__ . '/../model/HoaDonBUS.php');
class AdminStatisticController extends BaseController
{
    public function index()
    {
        $this->render('admin_table');
    }

    //doanh thu là sum all hóa đơn

}

if (isset($_POST['request'])) {
    switch ($_POST['request']) {
        case 'getDoanhThu':
            getDoanhThu();          
            break;
        
        case 'getDoanhThu_Ngay':
            getDoanhThu_Ngay();          
            break;
        
        case 'getDoanhThu_Loai_Thang':
            getDoanhThu_Loai_Thang();          
            break;
        
        case 'getDoanhThu_Loai_Ngay':
            getDoanhThu_Loai_Ngay();          
            break;
    }
}

function getDoanhThu(){
    $year= $_POST['year'];
    $result = (new HoaDonBUS())->hoadon_each_month($year);
    if ($result != null) {
        die (json_encode($result));
    }
    die (json_encode("khong tra ve "));
}

function getDoanhThu_Ngay(){
    $start= $_POST['start'];
    $end= $_POST['end'];
    $result = (new HoaDonBUS())->hoadon_each_day($start, $end);
    if ($result != null) {
        die (json_encode($result));
    }
    die (json_encode("khong tra ve "));
}

function getDoanhThu_Loai_Thang(){
    $category_id= $_POST['category_id'];
    $year= $_POST['year'];
    $result = (new HoaDonBUS())->hoadon_category_month($category_id,$year);
    if ($result != null) {
        die (json_encode($result));
    }
    die (json_encode("khong tra ve "));
}

function getDoanhThu_Loai_Ngay(){
    $category_id= $_POST['category_id'];
    $start= $_POST['start'];
    $end= $_POST['end'];
    $result = (new HoaDonBUS())->hoadon_category_day($category_id,$start, $end);
    if ($result != null) {
        die (json_encode($result));
    }
    die (json_encode("khong tra ve "));
}   

