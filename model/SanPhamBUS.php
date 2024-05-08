<?php
require_once(__DIR__ . '/../BackEnd/DB_business.php');
class SanPhamBUS extends DB_business {
    function __construct()
    {
        $this->setTable("pizza");
    }
    // hàm này chỉ dùng để hiển thị sản phẩm khi trang vừa load lên
    function getProduct() {
        $sql = "SELECT * FROM sanpham WHERE TrangThai = 1";
        $result = $this->get_list($sql);
        return $result;
    }
    
    function getProductbyID($id) {
        $sql = "SELECT * FROM sanpham, chitietsanpham, sizesanpham, viensanpham where sanpham.MaSP = chitietsanpham.MaSP and sanpham.MaSP = '$id' and chitietsanpham.MaSize = sizesanpham.MaSize and chitietsanpham.MaVien = viensanpham.MaVien";
        $result = $this->get_list($sql);
        return $result;
    }

    function getProductDetailID($id, $idsize, $idcrust) {
        $sql = "SELECT * FROM sanpham, chitietsanpham where sanpham.MaSP = chitietsanpham.MaSP and sanpham.MaSP = '$id' and chitietsanpham.MaSize = '$idsize' and chitietsanpham.MaVien = '$idcrust'";
        $result = $this->get_list($sql);
        // get 1 row in resultf
        $row = $result[0];
        return $row;
    }

    function getAllCrust() {
        $sql = "SELECT * FROM viensanpham";
        $result = $this->get_list($sql);
        return $result;
    }

    function getAllIDCrust() {
        $sql = "SELECT MaVien FROM viensanpham";
        $result = $this->get_list($sql);
        return $result;
    }

    function insertProducts($name, $category, $description) {
        $target_dir = "images/pizzaimg/";
        // $data = array(
        //     'MaSP' => 'POIZZA' . rand(1000, 9999),
        //     'TenSP' => $name,
        //     'Loai' => $category,
        //     'Mota' => $description,
        //     'HinhAnh' => $target_dir
        // );
        $sql = "INSERT INTO sanpham(MaSP, TenSP, Mota, Img, Loai) VALUES ('Poz', '$name', '$description', '$target_dir', '$category')";
        $result = $this->insertz($sql);
        return $result;
    }

    function getAllSize() {
        $sql = "SELECT * FROM sizesanpham";
        $result = $this->get_list($sql);
        return $result;
    }

    function getListSizeDeProduct($id) {
        $sql = "SELECT * FROM sanpham, chitietsanpham, sizesanpham, viensanpham WHERE sanpham.MaSP = '$id' AND sanpham.MaSP = chitietsanpham.MaSP AND chitietsanpham.MaSize = sizesanpham.MaSize AND chitietsanpham.MaVien = viensanpham.MaVien";
        $result = $this->get_list($sql);
        return $result;
    }

    function update($sql) {
        $result = $this->updatezzz($sql);
        return $result;
    }

    function getAllCategory() {
        $sql = "SELECT * FROM LoaiSanPham";
        $result = $this->get_list($sql);
        return $result;
    }
}