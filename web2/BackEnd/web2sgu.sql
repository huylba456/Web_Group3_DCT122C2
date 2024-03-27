SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";



CREATE TABLE `PhanQuyen` (
  `MaQuyen` int(11) NOT NULL,
  `ChiTietQuyen` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  primary key (MaQuyen)
);

INSERT INTO `PhanQuyen` (`MaQuyen`, `ChiTietQuyen`) VALUES
(1, 'Admin'),
(2, 'Nhân viên'),
(3, 'Khách hàng');

CREATE TABLE `TrangThai` (
  `MaTT` int(11) NOT NULL,
  `ChiTietTT` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  primary key (MaTT)
);
INSERT INTO `TrangThai` (`MaTT`, `ChiTietTT`) VALUES
(1, 'Đã xác nhận'),
(2, 'Đang giao hàng'),
(3, 'Đã giao hàng'),
(4, 'Đã hủy');

CREATE TABLE `TaiKhoan` (
  `MaTK` int(11) NOT NULL,
  `TaiKhoan` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `MatKhau` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `MaQuyen` int(11) NOT NULL,
  `MaTT` int(11) NOT NULL,
  primary key (MaTK)
);

INSERT INTO `TaiKhoan` (`MaTK`, `TaiKhoan`, `MatKhau`, `MaQuyen`, `MaTT`) VALUES
(1, 'admin', 'admin', 1, 1),
(2, 'nhanvien', 'nhanvien', 2, 1),
(3, 'khachhang', 'khachhang', 3, 1);




-- USER DATABASE
CREATE TABLE `NguoiDung` (
  `MaND` int(11) NOT NULL AUTO_INCREMENT,
  `Ho` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Ten` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `GioiTinh` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `SDT` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `DiaChi` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `MatKhau` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (MaND)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `NguoiDung` (`MaND`, `Ho`, `Ten`, `GioiTinh`, `SDT`, `Email`, `DiaChi`, `MatKhau`) VALUES
(1, 'Nguyen The', 'Kiet', 'Nam', '0123456789', 'trungky@gmail.com', 'Dak Lag', '123456');


CREATE TABLE `NhanVien` ( 
  `MaNV` int(11) NOT NULL,
  `Ho` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Ten` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `GioiTinh` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `SDT` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `DiaChi` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  primary key (MaNV)
);

INSERT INTO `NhanVien` (`MaNV`, `Ho`, `Ten`, `GioiTinh`, `SDT`, `Email`, `DiaChi`) VALUES
(1, 'Nguyen The', 'Kiet', 'Nam', '0123456789', 'trungki@gmail.com', 'Dak Lak');


CREATE TABLE `HoaDon` (
  `MaHD` int(11) NOT NULL AUTO_INCREMENT,
  `MaND` int(11) NOT NULL,
  `MaNV` int(11) NOT NULL,
  `NgayLap` date NOT NULL,
  `TongTien` decimal(10,2) NOT NULL,
  `TrangThai` int(11) NOT NULL,
  primary key (MaHD)
);

INSERT INTO `HoaDon` (`MaHD`, `MaND`, `MaNv`, `NgayLap`, `TongTien`, `TrangThai`) VALUES
(1, 1, 2, '2020-12-12', '100000', 1);

CREATE TABLE `ChiTietHoaDon` (
  `MaHD` int(11) NOT NULL,
  `MaSP` varchar(100) NOT NULL,
  `MaSize` varchar(100) NOT NULL,
  `MaVien` varchar(100) NOT NULL,
  `Img` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `SoLuong` int(11) NOT NULL,
  `GiaTien` decimal(10,2) NOT NULL,
  primary key (MaHD, MaSP, MaSize, MaVien)
);

INSERT INTO `ChiTietHoaDon` (`MaHD`, `MaSP`, `MaSize`, `MaVien`, `Img`, `SoLuong`, `GiaTien`) VALUES
(1, 1, 1, 1, '100000', 1, '100000');




CREATE TABLE `DanhGia` (
  `MaSP` int(11) NOT NULL,
  `MaND` int(11) NOT NULL,
  `SoSao` int(11) NOT NULL,
  `BinhLuan` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `NgayDG` date NOT NULL,
  primary key (MaSP, MaND)
);

INSERT INTO `DanhGia` (`MaSP`, `MaND`, `SoSao`, `BinhLuan`, `NgayDG`) VALUES
(1, 1, 5, 'Rất ngon', '2020-12-12');



-- COUPON AND MEMBERSHIP DATABASE

CREATE TABLE `KhuyenMai` (
  `MaKM` int(11) NOT NULL,
  `TenKM` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `SoTienGiam` decimal(10,2) NOT NULL,
  `DieuKien` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  primary key (MaKM)
);

INSERT INTO `KhuyenMai` (`MaKM`, `TenKM`, `SoTienGiam`, `DieuKien`) VALUES
(1, 'Giảm 10%', '10000', 'Kien Dep Trai');


CREATE TABLE `Membership` (
  `MaND` int(11) NOT NULL,
  `SoDiemTichLuy` decimal(10,2) NOT NULL,
  primary key (MaND)
);

INSERT INTO `Membership` (`MaND`, `SoDiemTichLuy`) VALUES
(1, 1000);







-- PIZZA DATABASE

CREATE TABLE `SanPham` (
  `MaSP` varchar(100) NOT NULL,
  `TenSP` varchar(100) NOT NULL,
  `Mota` varchar(100) NOT NULL,
  `Img` varchar(100) NOT NULL,
  `Loai` varchar(100) NOT NULL,
  primary key (MaSP)
);

INSERT INTO `SanPham` (`MaSP`, `TenSP`, `Mota`, `Img`, `Loai`) VALUES
('PBBQ', 'PIZZA GÀ BBQ', 'Xốt cà chua, gà, mozzarella, hành tây tím, ba rọi xông khói, xốt BBQ.', './images/pizzaimg/bbq.jpg', 'GÀ'),
('PBD', 'PIZZA BÒ XỐT DEMI', 'Bò bằm, hành tây tím, ớt chuông, cà chua, mozzarella, xốt demi glace.', './images/pizzaimg/bodemi.jpg', 'BÒ'),
('PCH', 'PIZZA HẢI SẢN PESTO', 'Xốt ranch, mozzarella, hành tây tím, xốt pesto, tôm, mực, thanh cua.', './images/pizzaimg/cahoi.jpg', 'HẢI SẢN'),
('PPR', 'PIZZA DOUBLE PEPPERONI', 'Xốt cà chua, mozzarella, xúc xích Ý (pepperoni).', './images/pizzaimg/peppe.jpg', 'HEO'),
('PHS', 'PIZZA HẢI SẢN DODO', 'Xốt ranch, mozzarella, hành tây tím, tôm, mực, thanh cua, mè, nori', './images/pizzaimg/haisandodo.jpg', 'HẢI SẢN'),
('PGM', 'PIZZA GÀ PHÔ MAI XANH', 'Xốt kem, gà bơ tỏi, mozzarella, hành tây tím, cà chua Đà Lạt, phô mai xanh.', './images/pizzaimg/gaphomaixanh.jpg', 'GÀ'),
('PTC', 'PIZZA TÔM CAY', 'Xốt kem, mozzarella, tôm, dứa, ớt chuông Đà lạt, xốt sriracha.', './images/pizzaimg/pizzatomcay.jpg', 'HẢI SẢN'),
('PCHP', 'PIZZA CÁ HỒI PESTO', 'Xốt kem, mozzarella, Xốt pesto, cà chua, cá hồi', './images/pizzaimg/cahoi.jpg', 'HẢI SẢN'),
('PCB', 'PIZZA CHEESEBURGER', 'Xốt phô mai, bò bằm, hành tây tím, cà chua, dưa leo muối, mozzarella emborg', './images/pizzaimg/cbg.webp', 'BÒ');


CREATE TABLE `SizeSanPham`(
  `MaSize` varchar(100) NOT NULL,
  `TenSize` varchar(100) NOT NULL,
  primary key (MaSize)
);

INSERT INTO `SizeSanPham` (`MaSize`, `TenSize`) VALUES
('S', 'Nhỏ'),
('M', 'Vừa'),
('L', 'Lớn');

CREATE TABLE `VienSanPham`(
  `MaVien` varchar(100) NOT NULL,
  `TenVien` varchar(100) NOT NULL,
  primary key (MaVien)
);

INSERT INTO `VienSanPham` (`MaVien`, `TenVien`) VALUES
('M', 'Mỏng'),
('D', 'Dày'),
('V', 'Vừa');


CREATE TABLE `LoaiSanPham`(
  `MaSP` varchar(100) NOT NULL,
  `MaLoai` int(11) NOT NULL,
  `TenLoai` varchar(100) not null,
  primary key (MaSP)
);

INSERT INTO `LoaiSanPham` (`MaSP`, `MaLoai`, `TenLoai`) VALUES
('PBBQ', '01', 'GÀ'),
('PBD', '02', 'BÒ'),
('PCH', '03', 'HẢI SẢN'),
('PPR', '04', 'HEO'),
('PHS', '03', 'HẢI SẢN'),
('PGM', '01', 'GÀ'),
('PTC', '03', 'HẢI SẢN'),
('PCHP', '03', 'HẢI SẢN'),
('PCB', '02', 'BÒ');



CREATE TABLE `ChiTietSanPham`(
  `MaSP` varchar(100) NOT NULL,
  `MaSize` varchar(100) NOT NULL,
  `MaVien` varchar(100) NOT NULL,
  `GiaTien` DECIMAL(10, 2) NOT NULL,
  `SoLuong` int(11) NOT NULL,
  primary key (MaSP, MaSize, MaVien)
);

INSERT INTO `ChiTietSanPham` (`MaSP`, `MaSize`, `MaVien`, `GiaTien`) VALUES
('PBBQ', 'S', 'M', '119000'),
('PBBQ', 'M', 'M', '129000'),
('PBBQ', 'L', 'M', '139000'),
('PBBQ', 'S', 'D', '119000'),
('PBBQ', 'M', 'D', '129000'),
('PBBQ', 'L', 'D', '139000'),
('PBBQ', 'S', 'V', '119000'),
('PBBQ', 'M', 'V', '129000'),
('PBBQ', 'L', 'V', '139000'),
('PBD', 'S', 'M', '119000'),
('PBD', 'M', 'M', '129000'),
('PBD', 'L', 'M', '139000'),
('PBD', 'S', 'D', '119000'),
('PBD', 'M', 'D', '129000'),
('PBD', 'L', 'D', '139000'),
('PBD', 'S', 'V', '119000'),
('PBD', 'M', 'V', '129000'),
('PBD', 'L', 'V', '139000'),
('PCH', 'S', 'M', '119000'),
('PCH', 'M', 'M', '129000'),
('PCH', 'L', 'M', '139000'),
('PCH', 'S', 'D', '119000'),
('PCH', 'M', 'D', '129000'),
('PCH', 'L', 'D', '139000'),
('PCH', 'S', 'V', '119000'),
('PCH', 'M', 'V', '129000'),
('PCH', 'L', 'V', '139000'),
('PPR', 'S', 'M', '119000'),
('PPR', 'M', 'M', '129000'),
('PPR', 'L', 'M', '139000'),
('PPR', 'S', 'D', '119000'),
('PPR', 'M', 'D', '129000'),
('PPR', 'L', 'D', '139000'),
('PPR', 'S', 'V', '119000'),
('PPR', 'M', 'V', '129000'),
('PPR', 'L', 'V', '139000'),
('PHS', 'S', 'M', '119000'),
('PHS', 'M', 'M', '129000'),
('PHS', 'L', 'M', '139000'),
('PHS', 'S', 'D', '119000'),
('PHS', 'M', 'D', '129000'),
('PHS', 'L', 'D', '139000'),
('PHS', 'S', 'V', '119000'),
('PHS', 'M', 'V', '129000'),
('PHS', 'L', 'V', '139000'),
('PGM', 'S', 'M', '119000'),
('PGM', 'M', 'M', '129000'),
('PGM', 'L', 'M', '139000'),
('PGM', 'S', 'D', '119000'),
('PGM', 'M', 'D', '129000'),
('PGM', 'L', 'D', '139000'),
('PGM', 'S', 'V', '119000'),
('PGM', 'M', 'V', '129000'),
('PGM', 'L', 'V', '139000'),
('PTC', 'S', 'M', '119000'),
('PTC', 'M', 'M', '129000'),
('PTC', 'L', 'M', '139000'),
('PTC', 'S', 'D', '119000'),
('PTC', 'M', 'D', '129000'),
('PTC', 'L', 'D', '139000'),
('PTC', 'S', 'V', '119000'),
('PTC', 'M', 'V', '129000'),
('PTC', 'L', 'V', '139000'),
('PCHP', 'S', 'M', '119000'),
('PCHP', 'M', 'M', '129000'),
('PCHP', 'L', 'M', '139000'),
('PCHP', 'S', 'D', '119000'),
('PCHP', 'M', 'D', '129000'),
('PCHP', 'L', 'D', '139000'),
('PCHP', 'S', 'V', '119000'),
('PCHP', 'M', 'V', '129000'),
('PCHP', 'L', 'V', '139000'),
('PCB', 'S', 'M', '119000'),
('PCB', 'M', 'M', '129000'),
('PCB', 'L', 'M', '139000'),
('PCB', 'S', 'D', '119000'),
('PCB', 'M', 'D', '129000'),
('PCB', 'L', 'D', '139000'),
('PCB', 'S', 'V', '119000'),
('PCB', 'M', 'V', '129000'),
('PCB', 'L', 'V', '139000');


CREATE TABLE `NhapSanPham` (
  `MaPN` int(11) NOT NULL,
  `MaNV` int(11) NOT NULL,
  `NgayNhap` date NOT NULL,
  primary key (MaPN)
);

INSERT INTO `NhapSanPham` (`MaPN`, `MaNV`, `NgayNhap`) VALUES
(1, 1, '2020-12-12');

CREATE TABLE `ChiTietNhap` (
  `MaPN` int(11) NOT NULL,
  `MaSP` varchar(100) NOT NULL,
  `MaSize` varchar(100) NOT NULL,
  `MaVien` varchar(100) NOT NULL,
  `SoLuong` int(11) NOT NULL,
  primary key (MaPN, MaSP, MaSize, MaVien)
);

INSERT INTO `ChiTietNhap` (`MaPN`, `MaSP`, `MaSize`, `MaVien`, `SoLuong`) VALUES
(1, 'PBBQ', 'S', 'M', 10),
(1, 'PBBQ', 'M', 'M', 10),
(1, 'PBBQ', 'L', 'M', 10),
(1, 'PBBQ', 'S', 'D', 10),
(1, 'PBBQ', 'M', 'D', 10),
(1, 'PBBQ', 'L', 'D', 10),
(1, 'PBBQ', 'S', 'V', 10),
(1, 'PBBQ', 'M', 'V', 10),
(1, 'PBBQ', 'L', 'V', 10),
(1, 'PBD', 'S', 'M', 10),
(1, 'PBD', 'M', 'M', 10),
(1, 'PBD', 'L', 'M', 10),
(1, 'PBD', 'S', 'D', 10),
(1, 'PBD', 'M', 'D', 10);

CREATE TABLE `XuatSanPham` (
  `MaPX` int(11) NOT NULL,
  `MaNV` int(11) NOT NULL,
  `NgayXuat` date NOT NULL,
  primary key (MaPX)
);

INSERT INTO `XuatSanPham` (`MaPX`, `MaNV`, `NgayXuat`) VALUES
(1, 1, '2020-12-12');

CREATE TABLE `ChiTietXuat` (
  `MaPX` int(11) NOT NULL,
  `MaSP` varchar(100) NOT NULL,
  `MaSize` varchar(100) NOT NULL,
  `MaVien` varchar(100) NOT NULL,
  `SoLuong` int(11) NOT NULL,
  primary key (MaPX, MaSP, MaSize, MaVien)
);

INSERT INTO `ChiTietXuat` (`MaPX`, `MaSP`, `MaSize`, `MaVien`, `SoLuong`) VALUES
(1, 'PBBQ', 'S', 'M', 10),
(1, 'PBBQ', 'M', 'M', 10),
(1, 'PBBQ', 'L', 'M', 10),
(1, 'PBBQ', 'S', 'D', 10),
(1, 'PBBQ', 'M', 'D', 10),
(1, 'PBBQ', 'L', 'D', 10),
(1, 'PBBQ', 'S', 'V', 10),
(1, 'PBBQ', 'M', 'V', 10),
(1, 'PBBQ', 'L', 'V', 10),
(1, 'PBD', 'S', 'M', 10),
(1, 'PBD', 'M', 'M', 10),
(1, 'PBD', 'L', 'M', 10),
(1, 'PBD', 'S', 'D', 10),
(1, 'PBD', 'M', 'D', 10);

COMMIT;