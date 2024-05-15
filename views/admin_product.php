<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <script src="https://kit.fontawesome.com/3dff50b2d8.js" crossorigin="anonymous"></script> -->
    <title>Admin Dashboard</title>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"> -->
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/variables.css">
    <!-- <link rel="stylesheet" href="css/components.css"> -->
    <link rel="stylesheet" href="css/admin_styles1.css">
    <link rel="stylesheet" href="css/loader.css">
    <link rel="stylesheet" href="css/font.css">
    <script src="js/nointernet1.js" crossorigin="anonymous"></script>
    <script src="js/nointernet2.js"></script>
    <link rel="stylesheet" href="css/font-awesome-pro-v6-6.2.0/css/all.min.css" />
</head>

<body>
<div class="loader"></div>
<script src="js/loader.js"></script>
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
            <!-- Product  -->
            <div class="section product-all active ">
                <div class="admin-control">
                    <div class="admin-control-left">
                        <select name="the-loai" id="the-loai">
                            <option>Tất cả</option>
                            <option>BÒ</option>
                            <option>GÀ</option>
                            <option>HẢI SẢN</option>
                            <option>Món Phụ</option>
                            <option>Nước uống</option>
                        </select>
                    </div>
                    <div class="admin-control-center">
                    &nbsp;  <input id="form-search-user" type="text" class="form-search-input"
                            placeholder="Tìm kiếm khách hàng..." oninput="showUser()">
                            &nbsp;<button id="Search1"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div class="admin-control-right">
                        <button class="btn-control-large" id="btn-cancel-product" onclick="resetInput()"><i
                                class="fa-solid fa-rotate-right"></i></i> Làm mới</button>
                        <button class="btn-control-large" id="btn-add-product"><i class="fa-light fa-plus"></i> Thêm món
                            mới</button>
                    </div>
                </div>
                <div id="show-product">
                    <!-- <div class="list">
                        <div class="list-left">
                            <img src="img/pizza-1.png" alt="">
                            <div class="list-info">
                                <h4>Pizza Bò Xốt Demi</h4>
                                <p class="list-note">Bò bằm, hành tây tím, ớt chuông, cà chua, mozzarella, xốt demi
                                    glace.</p>
                                <span class="list-category">Pizza Bò</span>
                            </div>

                            <div class="list-right">
                                <div class="list-price">
                                    <span class="list-current-price">200.000 ₫</span>
                                </div>
                                <div class="list-control">
                                    <div class="list-tool">
                                        <button class="btn-edit"><i class="fa-regular fa-pen-to-square"></i></button>
                                        <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="list">
                        <div class="list-left">
                            <img src="images/pizzaimg/bodemi.jpg" alt="">
                            <div class="list-info">
                                <h4>Pizza Bò Xốt Demi</h4>
                                <p class="list-note">Bò bằm, hành tây tím, ớt chuông, cà chua, mozzarella, xốt demi
                                    glace.</p>
                                <span class="list-category">Pizza Bò</span>
                            </div>

                            <div class="list-right">
                                <div class="list-price">
                                    <span class="list-current-price">200.000 ₫</span>
                                </div>
                                <div class="list-control">
                                    <div class="list-tool">
                                        <button class="btn-edit"><i class="fa-regular fa-pen-to-square"></i></button>
                                        <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="list">
                        <div class="list-left">
                            <img src="img/pizza-1.png" alt="">
                            <div class="list-info">
                                <h4>Pizza Bò Xốt Demi</h4>
                                <p class="list-note">Bò bằm, hành tây tím, ớt chuông, cà chua, mozzarella, xốt demi
                                    glace.</p>
                                <span class="list-category">Pizza Bò</span>
                            </div>

                            <div class="list-right">
                                <div class="list-price">
                                    <span class="list-current-price">200.000 ₫</span>
                                </div>
                                <div class="list-control">
                                    <div class="list-tool">
                                        <button class="btn-edit"><i class="fa-regular fa-pen-to-square"></i></button>
                                        <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="list">
                        <div class="list-left">
                            <img src="img/pizza-1.png" alt="">
                            <div class="list-info">
                                <h4>Pizza Bò Xốt Demi</h4>
                                <p class="list-note">Bò bằm, hành tây tím, ớt chuông, cà chua, mozzarella, xốt demi
                                    glace.</p>
                                <span class="list-category">Pizza Bò</span>
                            </div>

                            <div class="list-right">
                                <div class="list-price">
                                    <span class="list-current-price">200.000 ₫</span>
                                </div>
                                <div class="list-control">
                                    <div class="list-tool">
                                        <button class="btn-edit"><i class="fa-regular fa-pen-to-square"></i></button>
                                        <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="list">
                        <div class="list-left">
                            <img src="img/pizza-1.png" alt="">
                            <div class="list-info">
                                <h4>Pizza Bò Xốt Demi</h4>
                                <p class="list-note">Bò bằm, hành tây tím, ớt chuông, cà chua, mozzarella, xốt demi
                                    glace.</p>
                                <span class="list-category">Pizza Bò</span>
                            </div>

                            <div class="list-right">
                                <div class="list-price">
                                    <span class="list-current-price">200.000 ₫</span>
                                </div>
                                <div class="list-control">
                                    <div class="list-tool">
                                        <button class="btn-edit"><i class="fa-regular fa-pen-to-square"></i></button>
                                        <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="list">
                        <div class="list-left">
                            <img src="img/pizza-1.png" alt="">
                            <div class="list-info">
                                <h4>Pizza Bò Xốt Demi</h4>
                                <p class="list-note">Bò bằm, hành tây tím, ớt chuông, cà chua, mozzarella, xốt demi
                                    glace.</p>
                                <span class="list-category">Pizza Bò</span>
                            </div>

                            <div class="list-right">
                                <div class="list-price">
                                    <span class="list-current-price">200.000 ₫</span>
                                </div>
                                <div class="list-control">
                                    <div class="list-tool">
                                        <button class="btn-edit"><i class="fa-regular fa-pen-to-square"></i></button>
                                        <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> -->
                </div> 
                <div class="page-nav">
                    <ul class="page-nav-list">
                        <li class="page-nav-item active">
                            <a href="#">1</a>
                        </li>
                        <li class="page-nav-item ">
                            <a href="#">2</a>
                        </li>
                        <li class="page-nav-item ">
                            <a href="#">3</a>
                        </li>
                        <li class="page-nav-item ">
                            <a href="#">4</a> 
                        </li>
                        <li class="page-nav-item ">
                            <a href="#">5</a>
                        </li>
                    </ul>
                </div>
            </div>

        </main>
    </div>

    <!-- Modal them hoac chinh sua san pham -->
    <div class="modal add-product">
        <div class="modal-container">
            <h3 class="modal-container-title edit-product-e">CHỈNH SỬA SẢN PHẨM</h3>
            <button class="modal-close product-form"><i class="fa-solid fa-xmark"></i></i></button>
            <div class="modal-content">
                <form action="" class="add-product-form" onsubmit="event.preventDefault();">
                    <div class="modal-content-left">
                        <img src="img/pizza-1.png" alt="" class="upload-image-preview">
                        <div class="form-group file">
                            <label for="up-hinh-anh" class="form-label-file"><i
                                    class="fa-solid fa-cloud-arrow-up"></i>Chọn hình ảnh</label>
                            <input accept="image/jpeg, image/png, image/jpg" id="up-hinh-anh" name="up-hinh-anh"
                                type="file" class="form-control">
                        </div>
                    </div>
                    <div class="modal-content-right">
                        <div class="form-group">
                            <label class="form-label">Mã sản phẩm</label>
                            <input id="masanpham" name="ten-mon" type="text" placeholder="Nhập mã sản phẩm"
                                class="form-control">
                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="ten-mon" class="form-label">Tên món</label>
                            <input id="ten-mon" name="ten-mon" type="text" placeholder="Nhập tên món"
                                class="form-control">
                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="category" class="form-label">Chọn món</label>
                            <select name="category" id="chon-loai">
                                <option>Chọn loại</option>
                                <option>BÒ</option>
                                <option>HẢI SẢN</option>
                                <option>HEO</option>
                                <option>GÀ</option>
                            </select>
                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="attribute" class="form-label">Chọn thuộc tính</label>
                            <select name="attribute" id="chon-tt">
                                
                        </select>
                            <button class="themthuoctinh">Thêm thuộc tính</button>
                            <span class="form-message"></span>
                        </div>
                        <div class="wrapper-form-group">
                            
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Size</td>
                                    <td>Đế</td>
                                </tr>
                            </thead>
                            <tbody class="rowTable">
                            </tobdy>
                        </table>
                        <div class="form-group">
                            <label for="mo-ta" class="form-label">Mô tả</label>
                            <textarea class="product-desc" id="mo-ta" placeholder="Nhập mô tả món ăn..."></textarea>
                            <span class="form-message"></span>
                        </div>
                        <button class="form-submit btn-update-product-form edit-product-e" id="add-product-button">
                            <i class="fa-solid fa-pen"></i>
                            <span>THÊM SẢN PHẨM</span>
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
                    <div class="form-group edit-account-e">
                        <label for="" class="form-label">Trạng thái</label>
                        <input type="checkbox" id="user-status" class="switch-input">
                        <label for="user-status" class="switch"></label>
                    </div>
                    <!-- <button class="form-submit add-account-e" id="signup-button">Đăng ký</button> -->
                    <button class="form-submit edit-account-e" id="btn-update-account"><i
                            class="fa-regular fa-floppy-disk"></i> Lưu thông tin</button>
                </form>
            </div>
        </div>
    </div>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> -->
    <script src="js/helper.js"></script>
    <script src="js/adminproduct.js"></script>
    <script>
    window.onload = function() {

        var closeButtons = document.querySelectorAll('.modal-close');
        var updateButtons = document.querySelectorAll('.btn-update-product-form');
        var addButtons = document.querySelector('#btn-add-product');
        var modalDetail = document.querySelector('.detail-order');
        var titleModal = document.querySelector('.modal-container-title');
        var modal = document.querySelector('.add-product');
        var uploadImg = document.querySelector('.upload-image-preview');
        var detailButtons = document.querySelectorAll('.btn-detail');
        var modalSignup = document.querySelector('.signup');
        var editUserButtons = document.querySelectorAll('#edit-account');
        var addUserButtons = document.querySelectorAll('#btn-add-user');
        var addUser = document.querySelector('#btn-add-user');
        var addUserTitle = document.querySelector('.add-account-e');
        var addSignupButton = document.querySelector('#signup-button');
        var updateSignupButton = document.querySelector('#btn-update-account');
    


        var statusUser = document.querySelectorAll('.form-group edit-account-e');
        // tab for section
        // const sidebars = document.querySelectorAll(".sidebar-list-item.tab-content");
        // const sections = document.querySelectorAll(".section");
        // for (let i = 0; i < sidebars.length; i++) {
        //     sidebars[i].onclick = function() {
        //         document.querySelector(".sidebar-list-item.active").classList.remove("active");
        //         document.querySelector(".section.active").classList.remove("active");
        //         sidebars[i].classList.add("active");
        //         sections[i].classList.add("active");
        //     };
        // }

        const closeBtn = document.querySelectorAll('.section');
        // console.log(closeBtn[0])
        // for (let i = 0; i < closeBtn.length; i++) {
        //     closeBtn[i].addEventListener('click', (e) => {
        //         sidebar.classList.add("open");
        //     })
        // }

        // console.log('editButtons', editButtons)


        

        closeButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                modal.classList.remove('open');
                modalDetail.classList.remove('open');
                modalSignup.classList.remove('open');
                var modalright= document.querySelector('.modal-content-right');
                modalright.querySelector('#ten-mon').value='';
                modalright.querySelector('#chon-loai').value='Chọn loại';
                modalright.querySelector('#chon-tt').value='LD';
                modalright.querySelector('#mo-ta').value='';
                modalright.querySelector('.rowTable').innerHTML='';
                // var rowTable = document.querySelector(".rowTable");
                // rowTable.innerHTML = '';

                console.log(modalright.querySelector('.rowTable').innerHTML);
                modalright.querySelectorAll('.form-group')[0].style.display="block";
            });
        });


        addButtons.addEventListener('click', function() {
            uploadImg.src = "images/pizzaimg/pizza_temp.jpg";
            modal.classList.add('open');
            titleModal.innerHTML = "THÊM MỚI SẢN PHẨM";
        });

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
                modal.classList.remove('open');
                modalSignup.classList.add('open');
            });
        });

        addUserButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                updateSignupButton.innerHTML = ` <i class="fa-solid fa-user-plus"></i>
                                        Thêm khách hàng `;
                addUserTitle.innerHTML = "Thêm khách hàng mới";
                modal.classList.remove('open');
                modalSignup.classList.add('open');
            });
        });

        

    };
    </script>

</body>

</html>