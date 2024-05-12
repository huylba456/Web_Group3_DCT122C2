<?php
require_once('BaseController.php');
require_once(__DIR__ . '/../model/NguoiDungBUS.php');
require_once(__DIR__ . '/../model/NDBUS.php');
session_start();

class SignUpController extends BaseController
{
    public function index()
    {
        $this->render('register');
    }
}

if (isset($_POST['request'])) {
    switch ($_POST['request']) {
        case 'dangky':
            if (isset($_POST['ho']) && isset($_POST['ten']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['gioitinh'])  && isset($_POST['sdt'])&& isset($_POST['diachi'])) {
                signup();
            }
            break;
        case 'themtaikhoan':
            if (isset($_POST['id']) && isset($_POST['ho']) && isset($_POST['ten']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['gioitinh'])  && isset($_POST['sdt'])&& isset($_POST['diachi'])) {
                themtaikhoan();
            }
            break;
        case 'suataikhoan':
            if (isset($_POST['id']) && isset($_POST['ho']) && isset($_POST['ten']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['gioitinh'])  && isset($_POST['sdt'])&& isset($_POST['diachi'])) {
                suataikhoan();
            }
            break;
    }
}

function signup() {
    $ho = $_POST['ho'];
    $ten = $_POST['ten'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $gioitinh = $_POST['gioitinh'];
    // $diachi = $_POST['data_diachi'];
    $diachi = $_POST['diachi'];
    $sodienthoai = $_POST['sdt'];

    // create array key value
    $data = array(
        // 'Ho' => $name,
        // 'Ten' => $name,
        // 'GioiTinh' => $gioitinh,
        // 'SDT' => $sodienthoai,
        'MaND'=> "ND".rand(1000,9999),
        'Ho' => $ho,
        'Ten' => $ten,
        'GioiTinh' => $gioitinh,
        'SDT' => $sodienthoai,
        'Email' => $email,
        'DiaChi' => $diachi
    );
    $result = (new NDBUS())->add_new($data);
    $result = (new NguoiDungBUS())->add_new(array(
            'MaND' => $data['MaND'],
            'TaiKhoan' => $email,
            'MatKhau' => $password,
            'TrangThai'=>1
            // 'Ho' => $name,
            // 'Ten' => $name,
            // 'GioiTinh' => $gioitinh,
            // 'SDT' => $sodienthoai,
            // 'Email' => $email,
            // 'DiaChi' => $diachi
        ));
    die (json_encode($result));
}

function themtaikhoan() {
    $id = $_POST['id'];
    $ho = $_POST['ho'];
    $ten = $_POST['ten'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $gioitinh = $_POST['gioitinh'];
    $diachi = $_POST['diachi'];
    $sodienthoai = $_POST['sdt'];

    // create array key value
    $data = array(
        'MaND'=> $id,
        'Ho' => $ho,
        'Ten' => $ten,
        'GioiTinh' => $gioitinh,
        'SDT' => $sodienthoai,
        'Email' => $email,
        'DiaChi' => $diachi
    );
    $result = (new NDBUS())->add_new($data);
    $result = (new NguoiDungBUS())->add_new(array(
            'MaND' => $data['MaND'],
            'TaiKhoan' => $email,
            'MatKhau' => $password,
            'TrangThai'=>1
        ));
    die (json_encode($result));
}

function suataikhoan(){
    $id = $_POST['id'];
    $ho = $_POST['ho'];
    $ten = $_POST['ten'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $gioitinh = $_POST['gioitinh'];
    $diachi = $_POST['diachi'];
    $sodienthoai = $_POST['sdt'];

    $sql = "UPDATE TaiKhoanNguoiDung SET TaiKhoan='$email', MatKhau='$password' WHERE MaND='$id'";
    $result = (new NguoiDungBUS())->updatezzz($sql);
    $sql = "UPDATE NguoiDung SET Ho='$ho', Ten='$ten', GioiTinh='$gioitinh', SDT='$sodienthoai', Email='$email', DiaChi='$diachi' WHERE MaND='$id'";
    $result = (new NDBUS())->updatezzz($sql);
    if($result != false){
        die (json_encode($result));
    }
    die (json_encode(null));

}
?>