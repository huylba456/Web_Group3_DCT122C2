<?php
require_once(__DIR__ . "/../BackEnd/DB_business.php");
require_once(__DIR__ . "/../model/HoaDonBUS.php");
class HoaDonBUS extends DB_business
{
    function __construct()
    {
        $this->setTable("hoadon");
        parent::__construct();
    }

    function add1hoadon($data, $chitietsanpham)
    {   
        $sql = "INSERT INTO hoadon (MaND, MaNV, NgayLap, TongTien, TrangThai) VALUES ('{$data['MaND']}', '0', '{$data['NgayLap']}', '{$data['TongTien']}', '{$data['TrangThai']}')";
        $result = mysqli_query($this->__conn, $sql);

        // GET max id hoadon table
        $sql = "SELECT MAX(MaHD) as maxMaHD FROM hoadon";
        $maxidResult = mysqli_query($this->__conn, $sql);
        $maxidRow = mysqli_fetch_assoc($maxidResult);
        $maxid = $maxidRow['maxMaHD'];

        // add into chitiethoadon table
        foreach ($chitietsanpham as $chitiet) {
            $sanPham = $chitiet['Product'];
            $quantity = $chitiet['Quantity'];

            var_dump($sanPham);
            $sql = "INSERT INTO chitiethoadon (MaHD, MaSP, MaSize, MaVien, Img, SoLuong, GiaTien) VALUES ('{$maxid}','{$sanPham['MaSP']}','{$sanPham['MaSize']}','{$sanPham['MaVien']}', '{$sanPham['Img']}' ,'{$quantity}','" . $sanPham['GiaTien'] * $quantity . "')";
            $result = mysqli_query($this->__conn, $sql);
        }
        return $result;
    }

    function getBill($id)
    {
        $sql = "SELECT * FROM hoadon WHERE MaND = '$id' ORDER BY MaHD DESC";
        $result = mysqli_query($this->__conn, $sql);
        $data = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        return $data;
    }

    function getBillbymaHD($id)
    {
        $sql = "SELECT * FROM hoadon WHERE MaHD = '$id'";
        $result = mysqli_query($this->__conn, $sql);
        $data = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        return $data;
    }

    function getDetailBill($mahd)
    {
        $sql = "SELECT * FROM chitiethoadon, sanpham WHERE MaHD = '$mahd' AND chitiethoadon.MaSP = sanpham.MaSP ";    
        $result = mysqli_query($this->__conn, $sql);
        $data = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        return $data;
    }
    function getDetail_Customer_Bill($mahd)
    {
        $sql="SELECT * 
        FROM hoadon,nguoidung
        WHERE MaHD = '$mahd'
        and hoadon.MaND=nguoidung.MaND";
        $result = mysqli_query($this->__conn, $sql);
        $data = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        return $data;
    }

    function update_trangthai($mahd, $trangthai)
    {
        $sql = "UPDATE hoadon SET TrangThai = '$trangthai' WHERE MaHD = '$mahd'";
        $result = mysqli_query($this->__conn, $sql);
        return $result;
    }
    function hoadon_each_month($year){
        $sql="
        SELECT 
    months.month AS thang,
    COALESCE(SUM(DISTINCT hoadon.tongtien), 0) AS doanhthu,
    COALESCE(SUM( chitietsanpham.GiaNhap), 0) AS chiphi,
    COALESCE(sum(chitiethoadon.SoLuong),0) as soluongbanra
FROM (
    SELECT 1 AS month
    UNION ALL SELECT 2
    UNION ALL SELECT 3
    UNION ALL SELECT 4
    UNION ALL SELECT 5
    UNION ALL SELECT 6
    UNION ALL SELECT 7
    UNION ALL SELECT 8
    UNION ALL SELECT 9
    UNION ALL SELECT 10
    UNION ALL SELECT 11
    UNION ALL SELECT 12
) AS months
LEFT JOIN hoadon ON MONTH(hoadon.NgayLap) = months.month and year(hoadon.NgayLap)= $year
LEFT JOIN chitiethoadon ON hoadon.mahd = chitiethoadon.MaHD
LEFT JOIN chitietsanpham ON chitiethoadon.MaSP = chitietsanpham.MaSP and chitiethoadon.MaSize=chitietsanpham.MaSize and chitiethoadon.MaVien=chitietsanpham.MaVien
GROUP BY months.month
ORDER BY months.month;

        ";
        $result = mysqli_query($this->__conn, $sql);
        $data = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        return $data;
    }


function hoadon_each_day($start, $end){
    $sql="
    
    SELECT 
      dates.date AS ngay, 
      COALESCE(SUM(distinct hoadon.tongtien), 0) AS doanhthu,
      COALESCE(SUM( chitietsanpham.GiaNhap), 0) AS chiphi,
    COALESCE(sum(chitiethoadon.SoLuong),0) as soluongbanra    
    FROM (
      SELECT DATE_ADD('$start', INTERVAL c.number DAY) AS date
      FROM (
        SELECT a.number + b.number * 31 AS number
        FROM (
          SELECT 0 AS number
          UNION ALL SELECT 1
          UNION ALL SELECT 2
          UNION ALL SELECT 3
          UNION ALL SELECT 4
          UNION ALL SELECT 5
          UNION ALL SELECT 6
          UNION ALL SELECT 7
          UNION ALL SELECT 8
          UNION ALL SELECT 9
          UNION ALL SELECT 10
          UNION ALL SELECT 11
          UNION ALL SELECT 12
          UNION ALL SELECT 13
          UNION ALL SELECT 14
          UNION ALL SELECT 15
          UNION ALL SELECT 16
          UNION ALL SELECT 17
          UNION ALL SELECT 18
          UNION ALL SELECT 19
          UNION ALL SELECT 20
          UNION ALL SELECT 21
          UNION ALL SELECT 22
          UNION ALL SELECT 23
          UNION ALL SELECT 24
          UNION ALL SELECT 25
          UNION ALL SELECT 26
          UNION ALL SELECT 27
          UNION ALL SELECT 28
          UNION ALL SELECT 29
          UNION ALL SELECT 30
        ) AS a
        CROSS JOIN (
          SELECT 0 AS number
          UNION ALL SELECT 1
          UNION ALL SELECT 2
          UNION ALL SELECT 3
          UNION ALL SELECT 4
          UNION ALL SELECT 5
          UNION ALL SELECT 6
          UNION ALL SELECT 7
          UNION ALL SELECT 8
          UNION ALL SELECT 9
          UNION ALL SELECT 10
        ) AS b
      ) AS c
      WHERE DATE_ADD('$start', INTERVAL c.number DAY) <= '$end'
    ) AS dates
    LEFT JOIN hoadon ON DATE(hoadon.ngaylap) = dates.date
    LEFT JOIN chitiethoadon ON hoadon.mahd = chitiethoadon.MaHD
    LEFT JOIN chitietsanpham ON chitiethoadon.MaSP = chitietsanpham.MaSP and chitiethoadon.MaSize=chitietsanpham.MaSize and chitiethoadon.MaVien=chitietsanpham.MaVien
    GROUP BY dates.date
    ORDER BY dates.date;
    
    ";
    $result = mysqli_query($this->__conn, $sql);
        $data = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        return $data;
}



function hoadon_category_month($category_id,$year){
    $sql="
                SELECT months.month AS thang,
                COALESCE(SUM(hoadon.giatien), 0) AS doanhthu,
                COALESCE(SUM( hoadon.chiphi), 0) AS chiphi,
                COALESCE(sum(hoadon.soluongbanra),0) as soluongbanra
            FROM (
            SELECT 1 AS month
            UNION ALL SELECT 2
            UNION ALL SELECT 3
            UNION ALL SELECT 4
            UNION ALL SELECT 5
            UNION ALL SELECT 6
            UNION ALL SELECT 7
            UNION ALL SELECT 8
            UNION ALL SELECT 9
            UNION ALL SELECT 10
            UNION ALL SELECT 11
            UNION ALL SELECT 12
            ) AS months
            LEFT JOIN (
            SELECT MONTH(hoadon.NgayLap) AS month, SUM(ChiTietHoaDon.GiaTien) AS GiaTien,
            sum(chitietsanpham.gianhap) as chiphi,
            sum(chitiethoadon.soluong) as soluongbanra
            FROM hoadon
            LEFT JOIN ChiTietHoaDon ON hoadon.MaHD = ChiTietHoaDon.MaHD
            LEFT JOIN SanPham ON ChiTietHoaDon.MaSP = SanPham.MaSP
            LEFT JOIN loaisanpham ON sanpham.MaSP = loaisanpham.MaSP 
            LEFT JOIN chitietsanpham ON chitiethoadon.MaSP = chitietsanpham.MaSP and chitiethoadon.MaSize=chitietsanpham.MaSize and chitiethoadon.MaVien=chitietsanpham.MaVien 
            where  loaisanpham.MaLoai = $category_id and YEAR(hoadon.NgayLap) = $year
            GROUP BY MONTH(hoadon.NgayLap)
            ) AS hoadon ON months.month = hoadon.month
            GROUP BY months.month
            ORDER BY months.month;

    ";
    $result = mysqli_query($this->__conn, $sql);
    $data = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    return $data;

}

function hoadon_category_day($category_id,$start, $end){
    $sql="
    SELECT 
    dates.date AS ngay, 
    COALESCE(SUM(hoadon.giatien), 0) AS doanhthu,
    COALESCE(SUM( hoadon.chiphi), 0) AS chiphi,
    COALESCE(sum(hoadon.soluongbanra),0) as soluongbanra
  FROM (
    SELECT DATE_ADD('$start', INTERVAL c.number DAY) AS date
    FROM (
      SELECT a.number + b.number * 31 AS number
      FROM (
        SELECT 0 AS number
        UNION ALL SELECT 1
        UNION ALL SELECT 2
        UNION ALL SELECT 3
        UNION ALL SELECT 4
        UNION ALL SELECT 5
        UNION ALL SELECT 6
        UNION ALL SELECT 7
        UNION ALL SELECT 8
        UNION ALL SELECT 9
        UNION ALL SELECT 10
        UNION ALL SELECT 11
        UNION ALL SELECT 12
        UNION ALL SELECT 13
        UNION ALL SELECT 14
        UNION ALL SELECT 15
        UNION ALL SELECT 16
        UNION ALL SELECT 17
        UNION ALL SELECT 18
        UNION ALL SELECT 19
        UNION ALL SELECT 20
        UNION ALL SELECT 21
        UNION ALL SELECT 22
        UNION ALL SELECT 23
        UNION ALL SELECT 24
        UNION ALL SELECT 25
        UNION ALL SELECT 26
        UNION ALL SELECT 27
        UNION ALL SELECT 28
        UNION ALL SELECT 29
        UNION ALL SELECT 30
      ) AS a
      CROSS JOIN (
        SELECT 0 AS number
        UNION ALL SELECT 1
        UNION ALL SELECT 2
        UNION ALL SELECT 3
        UNION ALL SELECT 4
        UNION ALL SELECT 5
        UNION ALL SELECT 6
        UNION ALL SELECT 7
        UNION ALL SELECT 8
        UNION ALL SELECT 9
        UNION ALL SELECT 10
      ) AS b
    ) AS c
    WHERE DATE_ADD('$start', INTERVAL c.number DAY) <= '$end'
  ) AS dates
  LEFT JOIN (
      SELECT DATE(hoadon.ngaylap) as date, SUM(ChiTietHoaDon.GiaTien) AS GiaTien,
      sum(chitietsanpham.gianhap) as chiphi,
        sum(chitiethoadon.soluong) as soluongbanra
      FROM hoadon
      LEFT JOIN ChiTietHoaDon ON hoadon.MaHD = ChiTietHoaDon.MaHD
      LEFT JOIN SanPham ON ChiTietHoaDon.MaSP = SanPham.MaSP
      LEFT JOIN loaisanpham ON sanpham.MaSP = loaisanpham.MaSP
        LEFT JOIN chitietsanpham ON chitiethoadon.masp = chitietsanpham.MaSP and chitiethoadon.MaSize=chitietsanpham.MaSize and chitiethoadon.MaVien=chitietsanpham.MaVien 
      where  loaisanpham.MaLoai = $category_id
      GROUP BY date(hoadon.NgayLap)
      ) AS hoadon ON dates.date = hoadon.date
      GROUP BY dates.date
      ORDER BY dates.date;
    ";
    $result = mysqli_query($this->__conn, $sql);
    $data = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    return $data;
    
}

}