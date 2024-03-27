<?php
require_once(__DIR__ . '/../BackEnd/DB_business.php');
class SanPhamBUS extends DB_business {
    function __construct()
    {
        $this->setTable("pizza");
    }
    // hàm này chỉ dùng để hiển thị sản phẩm khi trang vừa load lên
    function getProduct() {
        $sql = "SELECT * FROM sanpham, chitietsanpham where sanpham.MaSP = chitietsanpham.MaSP and chitietsanpham.MaSize = 'S' and chitietsanpham.MaVien = 'V'";
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
        // get 1 row in result
        $row = $result[0];
        return $row;
    }
}