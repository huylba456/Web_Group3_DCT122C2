<?php
require_once('BaseController.php');
require_once(__DIR__ . '/../model/SanPhamBUS.php');
require_once(__DIR__ . '/../model/chitiethoadonBUS.php');
class ProductManagementController extends BaseController
{
    public function index()
    {
        $this->render('admin_product');
    }
}
global $bussp;
$bussp = new SanPhamBUS();

if (isset($_POST['request'])) {
    switch ($_POST['request']) {
        case 'loadTableProduct':
            getProducts();
            break;
        case 'uploadProduct':
            uploadProduct();
            break;
        case 'changeProduct':
            changeProduct();
            break;
        case 'deleteProduct':
            deleteProduct();
            break;
        case 'checkproduct':
            checkproduct();
            break;
    }
}


function uploadProduct() {
    $name = $_POST['tensp'];
    
    $category = $_POST['loai'];
    $description = $_POST['mota'];
    $masp = $_POST['masp'];

    
    if (isset($_FILES['up-hinh-anh'])) {
        global $bussp;
        $file = $_FILES['up-hinh-anh'];
        
        $uploadDir = '../images/pizzaimg/';

        // Tạo một tên file duy nhất
        $uploadFile = $uploadDir . basename($file['name']);

        // Di chuyển file đã tải lên vào thư mục tải lên
        if (move_uploaded_file($file['tmp_name'], $uploadFile)) {
            $uploadFile = './images/pizzaimg/' . basename($file['name']);
        } else {
            $uploadFile = './images/pizzaimg/pizza_temp.jpg';
        }

        // them sp vao db
        $sql = "INSERT INTO sanpham(MaSP, TenSP, Mota, Img, Loai) VALUES ('$masp', '$name', '$description', '$uploadFile', '$category')";
        $result = $bussp->insertz($sql);

            // add chitietsanpham
            // convert to arrray $_POST['chitietsanpham'];
            
            $listchitiet = json_decode($_POST['chitietsanpham'], true);
            foreach ($listchitiet as $item) {
                $sql = "INSERT INTO chitietsanpham(MaSP, MaSize, MaVien, GiaNhap, GiaTien, SoLuong) VALUES ('$masp', '{$item['masize']}', '{$item['made']}','0' ,'0', 0)";
                $result = $bussp->insertz($sql);

        if (!$result) {
            die (json_encode(array('status' => 'fail')));
        }
    }
    die (json_encode(array('status' => 'success')));
    }

    die (json_encode(array('status' => 'fail')));
}

function getProducts() {
    global $bussp;
    $query = $_POST['currentquery'];
    // count(*) from query
    $countrow = "SELECT count(*) as total from ($query) as total";
    $rownum = (new DB_driver())->get1row($countrow);
    $currentpage = $_POST['currentpage'];
    // call get_list method from sanphamBUS
    $from = ($currentpage - 1) * 8;
    $to = 8;
    $query = $query . " LIMIT $from, $to";
    $result = $bussp->get_list($query);
    

    // return countrow and result
    if ($result != null) {
        die (json_encode(array('countrow' => $rownum['total'], 'result' => $result)));
    }
    die (json_encode(null));
}

function getprod() {
    global $bussp;
    $sql = "SELECT * FROM sanpham, chitietsanpham where sanpham.MaSP = chitietsanpham.MaSP and chitietsanpham.MaSize = 'S' and chitietsanpham.MaVien = 'V'";
    return $bussp->get_list($sql);
}

function checkproduct(){
   
    $masp = $_POST['masp'];
    $sql = "SELECT * FROM chitiethoadon WHERE MaSP = '$masp'";
    $result = (new chitiethoadonBUS())->get_list($sql);
    if ($result) {
        die (json_encode($result));
    }
    // die (json_encode(array('status' => 'fail')));
        die (json_encode($result));
}

function changeProduct(){
    global $bussp;
    $masp = $_POST['masp'];
    $sql = "SELECT * FROM sanpham WHERE MaSP = '$masp'";
    $result = $bussp->get_list($sql);
    if($result[0]['TrangThai'] == 1){
    $sql = "UPDATE sanpham SET TrangThai = 0 WHERE MaSP = '$masp'";
    }else{
        $sql = "UPDATE sanpham SET TrangThai = 1 WHERE MaSP = '$masp'";
    }
    $result = $bussp->update($sql);
    if ($result) {
        // delete all chitietsanpham
        changechitietsp($masp);
    }
}

function changechitietsp($id){
    global $bussp;
    $sql = "SELECT * FROM chitietsanpham WHERE MaSP = '$id'";
    $result = $bussp->get_list($sql);
    if($result[0]['TrangThai'] == 1){
    $sql = "UPDATE chitietsanpham SET TrangThai = 0 WHERE MaSP = '$id'";
    }else{
        $sql = "UPDATE chitietsanpham SET TrangThai = 1 WHERE MaSP = '$id'";
    }
    $result = $bussp->update($sql);
    if ($result) {
        die (json_encode(array('status' => 'successz1')));
    }
    die (json_encode(array('status' => 'fail')));
}
function deleteProduct() {
    global $bussp;
    $masp = $_POST['masp'];
    $sql = "UPDATE sanpham SET TrangThai = 0 WHERE MaSP = '$masp'";
    $result = $bussp->update($sql);
    if ($result) {
        // delete all chitietsanpham
        deletechitietsp($masp);
    }
    // die (json_encode(array('status' => 'fail')));
    // $masp = $_POST['masp'];
    // $sql = "UPDATE sanpham SET TrangThai = 0 WHERE MaSP = '$masp'";
    // $result = $bussp->update($sql);
    // if ($result) {
    //     // delete all chitietsanpham
        
    // }
    // die (json_encode(array('status' => 'fail')));
}

function deletechitietsp($id) {
    global $bussp;
    $sql = "UPDATE chitietsanpham SET TrangThai = 0 WHERE MaSP = '$id'";
    $result = $bussp->update($sql);
    if ($result) {
        die (json_encode(array('status' => 'successz1')));
    }
    die (json_encode(array('status' => 'fail')));
}