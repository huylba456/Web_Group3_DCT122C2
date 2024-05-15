<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="admin.css"> -->
    <!-- <script src="https://kit.fontawesome.com/3dff50b2d8.js" crossorigin="anonymous"></script> -->
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="../css/reset.css">
    <!-- <link rcáel="stylesheet" href="../css/variables.css"> -->
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/admin_styles.css">
    <link rel="stylesheet" href="css/font.css">
    <script src="js/nointernet1.js" crossorigin="anonymous"></script>
    <script src="js/nointernet2.js"></script>
    <link rel="stylesheet" href="css/font-awesome-pro-v6-6.2.0/css/all.min.css" />
    <!-- <link rel="stylesheet" href="../css/styles.css"> -->
</head>

<body>
    <nav>
        <div class="logo-name">
            <div class="logo-image">
                <img src="logo1.png" alt="">
            </div>

            <span class="logo_name">Admin HP3K</span>
        </div>
        <        <git hub copilot class="menu-items">
 hub copilot class="menu-items">
            <ul class="nav-links">
                <li><a href="admin.html">
                        <i class="fa-solid fa-house"></i>
                        <span class="link-name">Dashboard</span>
                    </a></li>
                <li><a href="#">
                        <i class="fa-solid fa-boxes-stacked"></i>
                        <span class="link-name">Quản lí sản phẩm </span>
                    </a></li>
                <li><a href="#">
                        <i class="fa-solid fa-file-invoice"></i>
                        <span class="link-name">Quản lí đơn hàng</span>
                    </a></li>
                <li><a href="#">
                        <i class="fa-solid fa-users"></i>
                        <span class="link-name">Quản lí người dùng</span>
                    </a></li>
                <li><a href="Import.html">
                        <i class="fa-solid fa-file-import"></i>
                        <span class="link-name">Quản lí nhập hàng</span>
                    </a></li>
                <li><a href="Export.html">
                        <i class="fa-solid fa-file-export"></i>
                        <span class="link-name">Quản lí xuất hàng</span>
                    </a></li>
                <li><a href="#">
                        <i class="fa-solid fa-square-poll-vertical"></i>
                        <span class="link-name">Quản lí doanh thu</span>
                    </a></li>
            </ul>

            <ul class="logout-mode">
                <li><a href="#">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <span class="link-name">Logout</span>
                    </a></li>
            </ul>
        </git>
    </nav>

    <section class="dashboard">
        <div class="top">
            <i class="fa-solid fa-bars sidebar-toggle"></i>

            <div class="search-box">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search here...">
            </div>

            <!--<img src="images/profile.jpg" alt="">-->
        </div>

        <div class="dash-content">
            <div class="import">
                <div class="title">
                    <i class="fa-solid fa-box"></i>
                    <span class="text"> Xuất hàng </span>
                </div>
                <div class="import-function">
                    <div class="add">
                        <i class="fa-solid fa-plus"></i>
                        <span>Nhập thêm</span>
                    </div>
                    <div class="cancel">
                        <i class="fa-solid fa-ban"></i>
                        <span>Hủy</span>
                    </div>
                </div>
            </div>
            <div class="import-container">
                <div class="import-info">
                    <form>
                        <div class="insert">
                            <label for="nha_cung_cap">Khách hàng:</label>
                            <select id="nha_cung_cap" name="nha_cung_cap">
                                <option value="">Chọn khách hàng</option>
                                <option value="1">Khách hàng A</option>
                                <option value="2">Khách hàng B</option>
                                <option value="3">Khách hàng C</option>
                            </select>
                        </div>
                        <br>
                        <div class="insert">
                            <label for="nhan_vien_nhap">Nhân viên xuất:</label>
                            <select id="nhan_vien_nhap" name="nhan_vien_nhap">
                                <option value="">Chọn nhân viên</option>
                                <option value="1">Nguyễn Văn A</option>
                                <option value="2">Trần Thị B</option>
                                <option value="3">Lê Văn C</option>
                            </select>
                        </div>
                        <br>
                        <div class="insert">
                            <label for="ngay_nhap_tu_ngay">Ngày xuất từ ngày:</label>
                            <input type="date" id="ngay_nhap_tu_ngay" name="ngay_nhap_tu_ngay">
                        </div>
                        <br>
                        <div class="insert">
                            <label for="ngay_nhap_den_ngay">Đến ngày:</label>
                            <input type="date" id="ngay_nhap_den_ngay" name="ngay_nhap_den_ngay">
                        </div>
                        <br>
                        <div class="insert">
                            <label for="tong_tien">Tổng tiền: </label>
                            <input type="text" id="tong_tien" name="tong_tien" readonly>
                        </div>
                        <br>
                        <div class="insert">
                            <div class="smtbtn">
                                <button type="submit">Gửi</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="import-detail">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã phiếu xuất</th>
                                <th>Khách hàng</th>
                                <th>Nhân viên nhập</th>
                                <th>Thời gian</th>
                                <th>Tổng tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>ABC123</td>
                                <td>Công ty A</td>
                                <td>Nguyễn Văn A</td>
                                <td>2023-11-14 10:20:00</td>
                                <td>1.000.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>DEF456</td>
                                <td>Công ty B</td>
                                <td>Trần Thị B</td>
                                <td>2023-11-15 11:30:00</td>
                                <td>2.000.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>GHI789</td>
                                <td>Công ty C</td>
                                <td>Lê Văn C</td>
                                <td>2023-11-16 12:40:00</td>
                                <td>3.000.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>JKL101</td>
                                <td>Công ty D</td>
                                <td>Nguyễn Thị D</td>
                                <td>2023-11-17 13:50:00</td>
                                <td>4.000.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>MNO234</td>
                                <td>Công ty E</td>
                                <td>Trần Văn E</td>
                                <td>2023-11-18 14:00:00</td>
                                <td>5.000.000 VNĐ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <script>
        const body = document.querySelector("body"),
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");


let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})
    </script>
</body>

</html>