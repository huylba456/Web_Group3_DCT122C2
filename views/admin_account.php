<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="admin.css"> -->
    <script src="https://kit.fontawesome.com/3dff50b2d8.js" crossorigin="anonymous"></script>
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/variables.css">
    <!-- <link rel="stylesheet" href="css/components.css"> -->
    <link rel="stylesheet" href="css/admin_styles1.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>

<body>

    <div class="container">
    <aside class="sidebar open">
            <!-- <div class="btnSidebar">
                <i class="fa-solid fa-bars"></i>
            </div> -->
            <div class="top-sidebar">
                <a href="#" class="channel-logo"><img src="img/logo-pizza.png" alt="Channel Logo"></a>
                <div class="hidden-sidebar your-channel"><img src=""
                        style="height: 30px;" alt="">
                </div>
            </div>
            <div class="middle-sidebar">
                <ul class="sidebar-list">
                    <li class="sidebar-list-item tab-content active">
                        <a href="index.php?controller=AdminIndexController&action=index" class="sidebar-link">
                            <div class="sidebar-icon"><i class="fa-solid fa-house"></i></div>
                            <div class="hidden-sidebar">Trang tổng quan</div>
                        </a>
                    </li>
                    <li class="sidebar-list-item tab-content">
                        <a href="index.php?controller=ProductManagementController&action=index" class="sidebar-link">
                            <div class="sidebar-icon"><i class="fa-solid fa-pizza-slice"></i></i></div>
                            <div class="hidden-sidebar">Sản phẩm</div>
                        </a>
                    </li>
                    <li class="sidebar-list-item tab-content">
                        <a href="index.php?controller=AccountManagementController&action=index" class="sidebar-link">
                            <div class="sidebar-icon"><i class="fa-solid fa-users"></i></i></div>
                            <div class="hidden-sidebar">Tài khoản</div>
                        </a>
                    </li>
                    <li class="sidebar-list-item tab-content">
                        <a href="index.php?controller=BillManagementController&action=index" class="sidebar-link">
                            <div class="sidebar-icon"><i class="fa-solid fa-box-open"></i></div>
                            <div class="hidden-sidebar">Đơn hàng</div>
                        </a>
                    </li>
                    <li class="sidebar-list-item tab-content">
                        <a href="index.php?controller=ImportController&action=index" class="sidebar-link">
                            <div class="sidebar-icon"><i class="fa-solid fa-file-import"></i></div>
                            <div class="hidden-sidebar">Nhập hàng</div>
                        </a>
                    </li>
                    <li class="sidebar-list-item tab-content">
                        <a href="index.php?controller=AdminStatisticController&action=index" class="sidebar-link">
                            <div class="sidebar-icon"><i class="fa-solid fa-chart-simple"></i></div>
                            <div class="hidden-sidebar">Thống kê</div>
                        </a>
                    </li>
                    <li class="sidebar-list-item tab-content">
                        <a href="index.php?controller=PermissionController&action=index" class="sidebar-link">
                            <div class="sidebar-icon"><i class="fa-solid fa-couch"></i></i></div>
                            <div class="hidden-sidebar">Phân quyền</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="bottom-sidebar">
                <ul class="sidebar-list">
                    <li class="sidebar-list-item user-logout">
                        <a href="/" class="sidebar-link">
                            <div class="sidebar-icon"><i class="fa-solid fa-angles-left"></i></div>
                            <div class="hidden-sidebar">Trang chủ</div>
                        </a>
                    </li>
                    <li class="sidebar-list-item user-logout">
                        <a href="#" class="sidebar-link">
                            <div class="sidebar-icon"><i class="fa-regular fa-user"></i></i></div>
                            <div class="hidden-sidebar" id="name-acc">Pham Van Kiet</div>
                        </a>
                    </li>
                    <li class="sidebar-list-item user-logout">
                        <a href="#" class="sidebar-link" id="logout-acc">
                            <div class="sidebar-icon"><i class="fa-solid fa-arrow-right-from-bracket"></i></i></div>
                            <div class="hidden-sidebar">Đăng xuất</div>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <main class="content">
            <!-- Account  -->
            <div class="section active">
                <div class="admin-control">
                    <div class="admin-control-left">
                        <select name="tinh-trang-user" id="tinh-trang-user" onchange="showUser()">
                            <option value="2">Tất cả</option>
                            <option value="1">Hoạt động</option>
                            <option value="0">Bị khóa</option>
                        </select>
                    </div>
                    <div class="admin-control-center">
                            &nbsp;<button id="Search1"><i class="fa-solid fa-magnifying-glass"></i></button>
                            <input id="form-search-user" type="text" class="form-search-input"
                            placeholder="Tìm kiếm khách hàng..." oninput="showUser()">
                    </div>
                    <div class="admin-control-right">
                        <form action="" class="fillter-date">
                            <div>
                                <label for="time-start">Từ</label>
                                <input type="date" class="form-control-date" id="time-start-user" onchange="showUser()">
                            </div>
                            <div>
                                <label for="time-end">Đến</label>
                                <input type="date" class="form-control-date" id="time-end-user" onchange="showUser()">
                            </div>.
                        </form>
                        <button class="btn-reset-order" onclick="cancelSearchUser()"><i
                                class="fa-solid fa-rotate-right"></i></button>
                        <button id="btn-add-user" class="btn-control-large"><i
                                class="fa-light fa-plus"></i> <span>Thêm khách hàng</span></button>
                    </div>
                </div>
                <div class="table">
                    <table width="100%">
                        <thead>
                            <tr>
                                <td>STT</td>
                                <td>Họ và tên</td>
                                <td>Liên hệ</td>
                                <td>Email</td>
                                <td>Dia chi</td>
                                <td>Ngày tham gia</td>
                                <td>Tình trạng</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody id="show-user">
                            <tr>
                                <td>1</td>
                                <td>Pham Van Kiet</td>
                                <td>0976204878</td>
                                <td>kiet@gmail.com</td>
                                <td>273 Đ. An Dương Vương, Phường 3, Quận 5</td>
                                <td>27/03/2024</td>
                                <td><span class="status-complete">Hoạt động</span></td>
                                <td class="control control-table">
                                    <button class="btn-edit" id="edit-account"><i
                                            class="fa-regular fa-pen-to-square"></i></button>
                                    <button class="btn-delete" id="delete-account"><i
                                            class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Pham Van Kiet</td>
                                <td>0976204878</td>
                                <td>kiet@gmail.com</td>
                                <td>273 Đ. An Dương Vương, Phường 3, Quận 5</td>
                                <td>27/03/2024</td>
                                <td><span class="status-complete">Hoạt động</span></td>
                                <td class="control control-table">
                                    <button class="btn-edit" id="edit-account"><i
                                            class="fa-regular fa-pen-to-square"></i></button>
                                    <button class="btn-delete" id="delete-account"><i
                                            class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Pham Van Kiet</td>
                                <td>0976204878</td>
                                <td>kiet@gmail.com</td>
                                <td>273 Đ. An Dương Vương, Phường 3, Quận 5</td>
                                <td>27/03/2024</td>
                                <td><span class="status-complete">Hoạt động</span></td>
                                <td class="control control-table">
                                    <button class="btn-edit" id="edit-account"><i
                                            class="fa-regular fa-pen-to-square"></i></button>
                                    <button class="btn-delete" id="delete-account"><i
                                            class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- </div> -->
            </div>
        </main>
    </div>

    <!-- Modal them hoa chinh sua san pham -->
    <div class="modal add-product">
        <div class="modal-container">
            <h3 class="modal-container-title edit-product-e">CHỈNH SỬA SẢN PHẨM</h3>
            <button class="modal-close product-form"><i class="fa-solid fa-xmark"></i></i></button>
            <div class="modal-content">
                <form action="" class="add-product-form">
                    <div class="modal-content-left">
                        <img src="img/pizza-1.png" alt="" class="upload-image-preview">
                        <div class="form-group file">
                            <label for="up-hinh-anh" class="form-label-file"><i
                                    class="fa-solid fa-cloud-arrow-up"></i>Chọn hình ảnh</label>
                            <input accept="image/jpeg, image/png, image/jpg" id="up-hinh-anh" name="up-hinh-anh"
                                type="file" class="form-control" onchange="uploadImage(this)">
                        </div>
                    </div>
                    <div class="modal-content-right">
                        <div class="form-group">
                            <label for="ten-mon" class="form-label">Tên món</label>
                            <input id="ten-mon" name="ten-mon" type="text" placeholder="Nhập tên món"
                                class="form-control">
                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="category" class="form-label">Chọn món</label>
                            <select name="category" id="chon-mon">
                                <option>Pizza Bò</option>
                                <option>Pizza Gà</option>
                                <option>Pizza Hải Sản</option>
                                <option>Món Phụ</option>
                                <option>Nước uống</option>
                            </select>
                            <span class="form-message"></span>
                        </div>
                        <div class="wrapper-form-group">
                            <div class="form-group">
                                <label for="category" class="form-label">Chọn Đế</label>
                                <select name="category" id="chon-de">
                                    <option>Mỏng</option>
                                    <option>Vừa</option>
                                    <option>Dày</option>
                                </select>
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="category" class="form-label">Chọn Kích Cỡ</label>
                                <select name="category" id="chon-co">
                                    <option>Nhỏ</option>
                                    <option>Vừa</option>
                                    <option>Lớn</option>
                                </select>
                                <span class="form-message"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="gia-moi" class="form-label">Giá bán</label>
                            <input id="gia-moi" name="gia-moi" type="text" placeholder="Nhập giá bán"
                                class="form-control">
                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="so-luong" class="form-label">Số lượng </label>
                            <input id="so-luong" name="so-luong" type="number" placeholder="Nhập số lượng"
                                class="form-control">
                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="mo-ta" class="form-label">Mô tả</label>
                            <textarea class="product-desc" id="mo-ta" placeholder="Nhập mô tả món ăn..."></textarea>
                            <span class="form-message"></span>
                        </div>
                        <button class="form-submit btn-update-product-form edit-product-e" id="update-product-button">
                            <i class="fa-solid fa-pen"></i>
                            <span>LƯU THAY ĐỔI</span>
                        </button>
                    </div>
                </form>
            </div>
            </form>
        </div>
    </div>

    <!-- Modal chi tiet hoa don  -->
    <div class="modal detail-order">
        <div class="modal-container">
            <h3 class="modal-container-title">CHI TIẾT ĐƠN HÀNG</h3>
            <button class="modal-close"><i class="fa-solid fa-xmark"></i></button>
            <div class="modal-detail-order">
                <div class="modal-detail-left">
                    <div class="order-item-group">
                        <div class="order-product">
                            <div class="order-product-left">
                                <img src="img/pizza-1.png" alt="">
                                <div class="order-product-info">
                                    <h4>Bánh lava phô mai nướng</h4>
                                    <p class="order-product-note"><i class="fa-regular fa-pen-to-square"></i> Kich co:
                                        Lon; De: Mong
                                    </p>
                                    <p class="order-product-quantity">SL: 14</p>
                                    <p>
                                    </p>
                                </div>
                            </div>
                            <div class="order-product-right">
                                <div class="order-product-price">
                                    <span class="order-product-current-price">180.000&nbsp;₫</span>
                                </div>
                            </div>
                        </div>
                        <div class="order-product">
                            <div class="order-product-left">
                                <img src="images/pizzaimg/bbq.jpg" alt="">
                                <div class="order-product-info">
                                    <h4>Set lẩu Thái nấm chay</h4>
                                    <p class="order-product-note"><i class="fa-regular fa-pen-to-square"></i> Kich co:
                                        Lon; De: Mong
                                    </p>
                                    <p class="order-product-quantity">SL: 4</p>
                                    <p>
                                    </p>
                                </div>
                            </div>
                            <div class="order-product-right">
                                <div class="order-product-price">
                                    <span class="order-product-current-price">550.000&nbsp;₫</span>
                                </div>
                            </div>
                        </div>
                        <div class="order-product">
                            <div class="order-product-left">
                                <img src="img/pizza-1.png" alt="">
                                <div class="order-product-info">
                                    <h4>Bánh lava phô mai nướng</h4>
                                    <p class="order-product-note"><i class="fa-regular fa-pen-to-square"></i> Kich co:
                                        Lon; De: Mong
                                    </p>
                                    <p class="order-product-quantity">SL: 14</p>
                                    <p>
                                    </p>
                                </div>
                            </div>
                            <div class="order-product-right">
                                <div class="order-product-price">
                                    <span class="order-product-current-price">180.000&nbsp;₫</span>
                                </div>
                            </div>
                        </div>
                        <div class="order-product">
                            <div class="order-product-left">
                                <img src="images/pizzaimg/bbq.jpg" alt="">
                                <div class="order-product-info">
                                    <h4>Set lẩu Thái nấm chay</h4>
                                    <p class="order-product-note"><i class="fa-regular fa-pen-to-square"></i> Kich co:
                                        Lon; De: Mong
                                    </p>
                                    <p class="order-product-quantity">SL: 4</p>
                                    <p>
                                    </p>
                                </div>
                            </div>
                            <div class="order-product-right">
                                <div class="order-product-price">
                                    <span class="order-product-current-price">550.000&nbsp;₫</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-detail-right">
                    <ul class="detail-order-group">
                        <li class="detail-order-item">
                            <span class="detail-order-item-left"><i class="fa-regular fa-calendar"></i> Ngày đặt
                                hàng</span>
                            <span class="detail-order-item-right">05/03/2024</span>
                        </li>

                        <li class="detail-order-item">
                            <span class="detail-order-item-left"><i class="fa-solid fa-person"></i> Người nhận</span>
                            <span class="detail-order-item-right">Pham Van Kiet</span>
                        </li>
                        <li class="detail-order-item">
                            <span class="detail-order-item-left"><i class="fa-solid fa-phone"></i> Số điện thoại</span>
                            <span class="detail-order-item-right">0909090909</span>
                        </li>
                        <li class="detail-order-item tb">
                            <span class="detail-order-item-t"><i class="fa-solid fa-location-dot"></i> Địa chỉ
                                nhận</span>
                            <p class="detail-order-item-b">273 Đ. An Dương Vương, Phường 3, Quận 5, Thành phố Hồ Chí
                                Minh 700000, Vietnam</p>
                        </li>
                        <li class="detail-order-item tb">
                            <span class="detail-order-item-t"><i class="fa-regular fa-note-sticky"></i> Ghi chú</span>
                            <p class="detail-order-item-b">bhbhjb</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="modal-detail-bottom">
                <div class="modal-detail-bottom-left">
                    <div class="price-total">
                        <span class="thanhtien">Thành tiền</span>
                        <span class="price">4.720.000&nbsp;₫</span>
                    </div>
                </div>
                <div class="modal-detail-bottom-right">
                    <button class="modal-detail-btn btn-daxuly"><i class="fa-solid fa-check"></i> Đã xử lý</button>
                </div>
            </div>

            </form>
        </div>
    </div>


    <div class="modal signup">
        <div class="modal-container">
            <h3 class="modal-container-title add-account-e" style="font-weight: 600; font-size:20px">THÊM KHÁCH HÀNG MỚI
            </h3>
            <!-- <h3 class="modal-container-title edit-account-e" style="font-weight: 600; font-size:20px">CHỈNH SỬA THÔNG
                TIN</h3> -->
            <button class="modal-close"><i class="fa-solid fa-xmark"></i></button>
            <div class="form-content sign-up">
                <form action="" class="signup-form">
                    <div class="form-group">
                        <label for="idd" class="form-label">Mã người dùng</label>
                        <input id="idd" name="idd" type="text" placeholder="VD: ND01"
                            class="form-control">
                        <span class="form-message-name form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="fullname" class="form-label">Tên đầy đủ</label>
                        <input id="fullname" name="fullname" type="text" placeholder="VD: Pham Van Kiet"
                            class="form-control">
                        <span class="form-message-name form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="phone" class="form-label">Số điện thoại</label>
                        <input id="phone" name="phone" type="text" placeholder="Nhập số điện thoại"
                            class="form-control">
                        <span class="form-message-phone form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" name="email" type="text" placeholder="Nhập email" class="form-control">
                        <span class="form-message-email form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="address" class="form-label">Địa chỉ</label>
                        <input id="address" name="address" type="text" placeholder="Nhập Địa chỉ" class="form-control">
                        <span class="form-message-email form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="password" class="form-label">Mật khẩu</label>
                        <input id="password" name="password" type="password" placeholder="Nhập mật khẩu"
                            class="form-control">
                        <span class="form-message-password form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="confirm-password" class="form-label">Nhập lai mật khẩu</label>
                        <input id="confirm-password" name="confirm-password" type="password" placeholder="Nhập mật khẩu"
                            class="form-control">
                        <span class="form-message-confirm-password form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="gioitinh" class="form-label">Giới tính</label>
                        <select name="gioitinh" id="gioitinh">
                            <option value="Nam">Nam</option>
                            <option value="Nu">Nữ</option>
                        </select>
                    </div>
                    <!-- <select name="chonquyen" id="chonquyen" onchange="showUser()">
                            <option value="0">Nhan vien</option>
                            <option value="1">Khach hang</option>
                        </select> -->
                    <!-- <div class="form-group edit-account-e">
                        <label for="" class="form-label">Trạng thái</label>
                        <input type="checkbox" id="user-status" class="switch-input">
                        <label for="user-status" class="switch"></label>
                    </div> -->
                    <!-- <button class="form-submit add-account-e" id="signup-button">Đăng ký</button> -->
                    <button class="form-submit edit-account-e" id="btn-update-account"><i
                            class="fa-regular fa-floppy-disk"></i> Lưu thông tin</button>
                </form>
            </div>
        </div>
    </div>
    
    <script>
        var listAccounts=[];
        var listAccountss=[];
        var count =0;
        var currentqueryx =
      'SELECT nguoidung.MaND, Ho, Ten, GioiTinh, SDT, Email,DiaChi FROM nguoidung, taikhoannguoidung WHERE nguoidung.MaND = taikhoannguoidung.MaND ';
      var currentqueryxx =
      'SELECT nguoidung.MaND, TaiKhoan, MatKhau, TrangThai FROM nguoidung, taikhoannguoidung WHERE nguoidung.MaND = taikhoannguoidung.MaND ';
        loaderAccounts();

        loaderAccountss();
        function loaderAccountss() {
        $.ajax({
        url: "./controller/ProductsController.php",
        type: "post",
        dataType: "json",
        timeout: 1500,
        data: {
          request: "getAccountss",
          currentquery: currentqueryxx,
        },
        success: function (data) {
          console.log(data);
          listAccountss= data.result;
        },
        //fail
        error: function (data) {
          console.log(data);
        },
      });
    }
        function loaderAccounts() {
        $.ajax({
        url: "./controller/ProductsController.php",
        type: "post",
        dataType: "json",
        timeout: 1500,
        data: {
          request: "getAccounts",
          currentquery: currentqueryx,
        },
        success: function (data) {
          console.log(data);
          listAccounts= data.result;
          showAccounts();
        },
        //fail
        error: function (data) {
          console.log(data);
        },
      });
    }
function showAccounts() {
            count=listAccounts.length;
            let currentDate = new Date();

// Lấy ngày, tháng và năm hiện tại
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
let year = currentDate.getFullYear();

// Định dạng ngày, tháng và năm thành chuỗi "dd/mm/yyyy"
let formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
      var html = "";
      listAccounts.forEach(function (item) {
        html += `<tr>
                 <td>${item.MaND}</td>
                 <td>${item.Ho} ${item.Ten}</td>   
                 <td>${item.SDT}</td>   
                 <td>${item.Email}</td>
                 <td>${item.DiaChi}</td>
                 <td>${formattedDate}</td>
                 <td><span class="status-complete">Hoạt động</span></td>
                 <td class="control control-table">
                 <button id="edit-account"><i class="fa-regular fa-pen-to-square"></i></button>
                 <button class="btn-delete" id="delete-account"><i class="fa-solid fa-trash"></i></button>             
                 </td>
                 </tr>
        `;
      });
      document.querySelector("#show-user").innerHTML = html;
    }
    

    window.onload = function() {
        // var editButtons = document.querySelectorAll('.btn-edit');
        var closeButtons = document.querySelectorAll('.modal-close');
        var updateButtons = document.querySelectorAll('.btn-update-product-form');
        var addButtons = document.querySelector('#btn-add-product');
        var modalDetail = document.querySelector('.detail-order');
        var titleModal = document.querySelector('.modal-container-title');
        var modal = document.querySelector('.add-product');
        var uploadImg = document.querySelector('.upload-image-preview');
        var detailButtons = document.querySelectorAll('.btn-detail');
        var modalSignup = document.querySelector('.signup');
        var editform=document.querySelector('.signup-form');
        var editUserButtons = document.querySelectorAll('#edit-account');
        var addUserButtons = document.querySelectorAll('#btn-add-user');
        var addUserTitle = document.querySelector('.add-account-e');
        var addSignupButton = document.querySelector('#signup-button');
        var updateSignupButton = document.querySelector('#btn-update-account');
        var status= document.querySelectorAll(".status-complete");
        var nostatus= document.querySelectorAll(".status-no-complete");
        var statusUser = document.querySelectorAll('.form-group edit-account-e');
        var addUser = document.querySelector('#btn-add-user');
        var btndelete = document.querySelectorAll('.btn-delete');
        updateSignupButton.addEventListener('click',function(e){

            if(updateSignupButton.innerHTML==='<i class="fa-regular fa-floppy-disk" aria-hidden="true"></i>Lưu thông tin')
            {
                e.preventDefault();
            window.location.reload();
                var id=document.querySelector('#idd');
                var name = document.querySelector('#fullname');
                var sdt = document.querySelector('#phone');
                var email = document.querySelector('#email');
                var diachi = document.querySelector('#address');
                var password = document.querySelector('#password');
                var cfpassword = document.querySelector('#confirm-password');
                var gioitinh = document.querySelector('#gioitinh').value;
                if (id.value=="" || name.value == "" || sdt.value == "" || email.value == "" || diachi.value == "" || password.value == "" || cfpassword.value == "") {
                    alert("Vui lòng nhập đầy đủ thông tin");
                    return;
                }
                if (password.value != cfpassword.value) {
                    alert("Mật khẩu không khớp");
                    return;
                }
let splitted = name.value.split(' '); // Chia chuỗi thành mảng các từ dựa trên khoảng trắng
let firstPart = splitted.slice(0, -1).join(' '); // Lấy các phần tử từ đầu đến phần tử thứ hai cuối cùng và nối lại thành chuỗi
let secondPart = splitted.slice(-1)[0]; // Lấy phần tử cuối cùng
    $.ajax({
      url: './controller/SignUpController.php',
      type: 'POST',
      dataType: 'json',
      data: {
          request: 'themtaikhoan',
          id: id.value,
          ho: firstPart,
          ten: secondPart,
          email: email.value,
          password: password.value,
          gioitinh: gioitinh,
          sdt: sdt.value,
          diachi: diachi.value
      },
      success: function(data) {
          if(data) {
            console.log(data);
              alert("thành công");
          }
      },
      error: function(data) {
          alert("thất bại");
      }
  });
    id.value = "";
    name.value = "";
    sdt.value = "";
    email.value = "";
    diachi.value = "";
    password.value = "";
    cfpassword.value = "";
            }
            else if(updateSignupButton.innerHTML==='<i class="fa-regular fa-floppy-disk" aria-hidden="true"></i> Lưu thay đổi')
            {
                e.preventDefault();
            window.location.reload();
                var id=document.querySelector('#idd');
                var name = document.querySelector('#fullname');
                var sdt = document.querySelector('#phone');
                var email = document.querySelector('#email');
                var diachi = document.querySelector('#address');
                var password = document.querySelector('#password');
                var cfpassword = document.querySelector('#confirm-password');
                var gioitinh = document.querySelector('#gioitinh').value;
                if (id.value=="" || name.value == "" || sdt.value == "" || email.value == "" || diachi.value == "" || password.value == "" || cfpassword.value == "") {
                    alert("Vui lòng nhập đầy đủ thông tin");
                    return;
                }
                if (password.value != cfpassword.value) {
                    alert("Mật khẩu không khớp");
                    return;
                }
let splitted = name.value.split(' '); // Chia chuỗi thành mảng các từ dựa trên khoảng trắng
let firstPart = splitted.slice(0, -1).join(' '); // Lấy các phần tử từ đầu đến phần tử thứ hai cuối cùng và nối lại thành chuỗi
let secondPart = splitted.slice(-1)[0]; // Lấy phần tử cuối cùng
    $.ajax({
      url: './controller/SignUpController.php',
      type: 'POST',
      dataType: 'json',
      data: {
          request: 'suataikhoan',
          id: id.value,
          ho: firstPart,
          ten: secondPart,
          email: email.value,
          password: password.value,
          gioitinh: gioitinh,
          sdt: sdt.value,
          diachi: diachi.value
      },
      success: function(data) {
          if(data) {
            console.log(data);
              alert("thành công");
          }
      },
      error: function(data) {
          alert("thất bại");
      }
  });
    id.value = "";
    name.value = "";
    sdt.value = "";
    email.value = "";
    diachi.value = "";
    password.value = "";
    cfpassword.value = "";
            }
        });

        btndelete.forEach(function(button) {
            button.addEventListener('click', function() {
                if(confirm("Bạn có chắc chắn muốn xóa không?") == false) {
                    return;
                }
                else {
                var parent = button.parentElement.parentElement;
                var id = parent.querySelector('td').innerHTML;
                $.ajax({
                    url: './controller/ProductsController.php',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        request: 'xoataikhoan',
                        id: id,
                    },
                    success: function(data) {
                        if (data) {
                            alert("Xóa thành công");
                        }
                    },
                    error: function(data) {
                        alert("Xóa thất bại");
                    }
                });
            }
                window.location.reload();
            });
        });

        addUser.addEventListener('click', function() {   
            edittt=modalSignup.querySelector('.signup-form');   
            edittt.querySelector('.form-group').style.display = 'block';
            modalSignup.classList.add('open');
            addUserTitle.innerHTML = "Thêm khách hàng mới";
            updateSignupButton.innerHTML = `<i
                            class="fa-regular fa-floppy-disk"></i>Lưu thông tin`;
        });
        // tab for section
        const sidebars = document.querySelectorAll(".sidebar-list-item.tab-content");
        const sections = document.querySelectorAll(".section");
        for (let i = 0; i < sidebars.length; i++) {
            sidebars[i].onclick = function() {
                document.querySelector(".sidebar-list-item.active").classList.remove("active");
                document.querySelector(".section.active").classList.remove("active");
                sidebars[i].classList.add("active");
                sections[i].classList.add("active");
            };
        }

        // const closeBtn = document.querySelectorAll('.section');
        // console.log(closeBtn[0])
        // for (let i = 0; i < closeBtn.length; i++) {
        //     closeBtn[i].addEventListener('click', (e) => {
        //         sidebar.classList.add("open");
        //     })
        // }

        status.forEach(function(stat){
        stat.addEventListener('click', function() {
          if(stat.innerHTML == "Hoạt động"){
              stat.innerHTML = "Bị khóa";
            stat.style.backgroundColor = "#f04e2e";
            var parent = stat.parentElement.parentElement;
                var len=parent.querySelectorAll('td')[0].innerHTML;
                $.ajax({
                    url: './controller/ProductsController.php',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        request: 'capnhattrangthai',
                        id: len,
                        trangthai: 0,
                    },
                    success: function(data) {
                        if (data) {
                            alert("Cập nhật thành công");
                        }
                    },
                    error: function(data) {
                        alert(data);
                        alert("Cập nhật thất bại");
                    }
                });
       }
         else{
              stat.innerHTML = "Hoạt động";
              stat.style.backgroundColor = "#27ae60";
              var parent = stat.parentElement.parentElement;
                var len=parent.querySelectorAll('td')[0].innerHTML;
                $.ajax({
                    url: './controller/ProductsController.php',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        request: 'capnhattrangthai',
                        id: len,
                        trangthai: 1,
                    },
                    success: function(data) {
                        if (data) {
                            alert("Cập nhật thành công");
                        }
                    },
                    error: function(data) {
                        alert(data);
                        alert("Cập nhật thất bại");
                    }
                });
         }
          });
    });
    
       
        // editButtons.forEach(function(button) {
        //     button.addEventListener('click', function() {

        //         uploadImg.src = "img/pizza-1.png";
        //         modal.classList.add('open');
        //         titleModal.innerHTML = "CHỈNH SỬA SẢN PHẨM";
        //     });
        // });

        closeButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                modal.classList.remove('open');
                modalDetail.classList.remove('open');
                modalSignup.classList.remove('open');
                var inp=editform.querySelectorAll('input');
                for(i=0;i<inp.length;i++)
                        inp[i].value='';

            });
        });

        updateButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                modal.classList.remove('open');
            });
        });

        // addButtons.addEventListener('click', function() {
        //     uploadImg.src = "img/upload-image.png";
        //     modal.classList.add('open');
        //     titleModal.innerHTML = "THÊM MỚI SẢN PHẨM";

        // });

        detailButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                modalDetail.classList.add('open');
            });
        });

        editUserButtons.forEach(function(button) {
            button.addEventListener('click', function() {

                updateSignupButton.innerHTML = `<i
                            class="fa-regular fa-floppy-disk"></i> Lưu thay đổi`;
                
                addUserTitle.innerHTML = "Chinh sửa khách hàng";
                edittt=modalSignup.querySelector('.signup-form');
                edittt.querySelector('.form-group').style.display = 'none';
                // editform.querySelector('.form-group').disabled=true;
                modal.classList.remove('open');
                modalSignup.classList.add('open');
                var parent = button.parentElement.parentElement;
                var len=parent.querySelectorAll('td');
                var inp=editform.querySelectorAll('input');
                for(i=0;i<len.length-1;i++)
                {
                    if(i<5)
                        inp[i].value=len[i].innerHTML;
                    if(i>4)
                    listAccountss.forEach(function(item){
                        if(item.MaND==len[0].innerHTML)
                        {
                            inp[i].value=item.MatKhau;
                            inp[i].value=item.MatKhau;
                        }
                    });
                }
                
            });
        });
    }
    </script>
    <script>
        const search1 = document.getElementById('Search1');
        search1.addEventListener('click', function() {
   var ma=document.querySelector('.admin-control-center input').value;
   document.querySelectorAll('.table tbody tr').forEach(tr => {
    if (tr.querySelector('td:nth-child(2)').textContent.includes(ma)) {
      tr.style.display = 'table-row';
    } else {
      tr.style.display = 'none';
    }
})
})
    </script>
    <script>
        document.getElementById('time-start-user').addEventListener('change', filterByDateRange);
        document.getElementById('time-end-user').addEventListener('change', filterByDateRange);

function filterByDateRange() {
    var startDate = document.getElementById('time-start-user').value;
    var endDate = document.getElementById('time-end-user').value;
    
    // Nếu cả hai ngày đều được đặt, tiến hành lọc
    if (startDate && endDate) {
        var start = new Date(startDate);
        var end = new Date(endDate);
        
        document.querySelectorAll('.table tbody tr').forEach(tr => {
            var dateCell = tr.querySelector('td:nth-child(6)').textContent;
            var dateParts = dateCell.split('/');
            var formattedDateCell = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
            var rowDate = new Date(formattedDateCell);
            
            if (rowDate >= start && rowDate <= end) {
                tr.style.display = 'table-row';
            } else {
                tr.style.display = 'none';
            }
        });
    }
}

    </script>
</body>

</html>