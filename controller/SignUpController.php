<?php
require_once('BaseController.php');
require_once(__DIR__ . '/../model/NguoiDungBUS.php');
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
            if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['gioitinh'])  && isset($_POST['sdt'])) {
                signup();
            }
            break;
    }
}

function signup() {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $gioitinh = $_POST['gioitinh'];
    // $diachi = $_POST['data_diachi'];
    $diachi = $_POST['diachi'];
    $sodienthoai = $_POST['sdt'];

    // create array key value
    $data = array(
        'Ho' => $name,
        'Ten' => $name,
        'GioiTinh' => $gioitinh,
        'SDT' => $sodienthoai,
        'Email' => $email,
        'DiaChi' => 1,
        'MatKhau' => $password,
        'DiaChi' => $diachi
    );
    $result = (new NguoiDungBUS())->add_new($data);
    die (json_encode($result));
}