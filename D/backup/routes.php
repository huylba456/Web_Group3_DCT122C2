<?php

// Nhúng file định nghĩa controller vào để có thể dùng được class định nghĩa trong file đó
include_once('controller/' . $controller . '.php');
// Tạo ra tên controller class từ các giá trị lấy được từ URL sau đó gọi ra để hiển thị trả về cho người dùng.

$controller = new $controller();
$controller->$action();