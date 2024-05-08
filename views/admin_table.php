<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="admin.css">
    <script src="https://kit.fontawesome.com/3dff50b2d8.js" crossorigin="anonymous"></script>
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/variables.css">
    <!-- <link rel="stylesheet" href="../css/components.css"> -->
    <link rel="stylesheet" href="css/admin_styles1.css">
</head>

<body>

    <div class="container">
        <aside class="sidebar open">
            <!-- <div class="btnSidebar">
                <i class="fa-solid fa-bars"></i>
            </div> -->
            <div class="top-sidebar">
                <a href="#" class="channel-logo"><img src="img/logo-pizza.png" alt="Channel Logo"></a>
                <div class="hidden-sidebar your-channel"><img src="assets/img/admin/vy-food-title.png"
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
            <!-- Thong ke  -->
            <div class="section active">
                <div class="admin-control">
                    <div class="admin-control-left">
                        <select name="the-loai-tk" id="the-loai-tk" onchange="thongKe()" style="width:200px;">
                            <option value="0" name="0">Tất cả</option>
                            <option value="2" name="2">Pizza Bò</option>
                            <option value="1" name="1">Pizza Gà</option>
                            <option value="4" name="4">Pizza Heo</option>
                            <option value="3" name="3">Pizza Hải Sản</option>
                        </select>
                    </div>
                    
                    <div class="admin-control-right ">
                        <select name="chon-khoang-thoigian" id="chon-khoang-thoigian" style="width:200px;" onchange="date_chosen()">
                            <option>Khoản Thời Gian</option>
                            <option>Ngày</option>
                            <option>Tháng</option>
                            
                        </select>
                        <div style="display:flex;">
                        <select name="chon_nam" id="chon-nam" style="display:none;" >
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                        </select>
                        <form action="" class="fillter-date" style="display:none;top:40px;">
                            <div>
                                <label for="time-start">Từ</label>
                                <input type="date" class="form-control-date" id="time-start-tk" >
                            </div>
                            <div>
                                <label for="time-end">Đến</label>
                                <input type="date" class="form-control-date" id="time-end-tk" >
                            </div>
                            <button id="thongke_action">Thống kê</button>
                        </form>
                        </div>
                        <button class="btn-reset-order" onclick="thongKe(1)"><i
                                class="fa-solid fa-arrow-up-short-wide"></i></button>
                        <button class="btn-reset-order" onclick="thongKe(2)"><i
                                class="fa-solid fa-arrow-down-wide-short"></i></button>
                        <button class="btn-reset-order" onclick="thongKe(0)"><i
                                class="fa-solid fa-rotate-right"></i></button>
                    </div>
                </div>
                <div class="order-statistical" id="order-statistical">

                    <div class="order-statistical-item">
                        <div class="order-statistical-item-content">
                            <p class="order-statistical-item-content-desc">Doanh thu</p>
                            <h4 class="order-statistical-item-content-h" id="quantity-sale">46.000.000đ</h4>
                        </div>
                        <div class="order-statistical-item-icon">
                            <i class="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                    </div>
                    
                    <div class="order-statistical-item">
                        <div class="order-statistical-item-content">
                            <p class="order-statistical-item-content-desc">Lợi nhuận</p>
                            <h4 class="order-statistical-item-content-h" id="profit-sale">46.000.000đ</h4>
                        </div>
                        <div class="order-statistical-item-icon">
                            <i class="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                    </div>

                    <div class="order-statistical-item">
                        <div class="order-statistical-item-content">
                            <p class="order-statistical-item-content-desc">Số Lượng Sản Phẩm Bán Được</p>
                            <h4 class="order-statistical-item-content-h" id="products-sale">46.000.000đ</h4>
                        </div>
                        <div class="order-statistical-item-icon">
                            <i class="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                    </div>
                </div>
                    <canvas id="myChart" style="width:100%;max-height:500px"></canvas>
                </div>
            </div>
        </main>
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
    <!-- <script>
    document.addEventListener('DOMContentLoaded', function() {
        var editButtons = document.querySelectorAll('.btn-edit');
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

        const closeBtn = document.querySelectorAll('.section');
        console.log(closeBtn[0])
        for (let i = 0; i < closeBtn.length; i++) {
            closeBtn[i].addEventListener('click', (e) => {
                sidebar.classList.add("open");
            })
        }

        editButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                uploadImg.src = "../img/pizza-1.png";
                modal.classList.add('open');
                titleModal.innerHTML = "CHỈNH SỬA SẢN PHẨM";
            });
        });

        closeButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                modal.classList.remove('open');
                modalDetail.classList.remove('open');
                modalSignup.classList.remove('open');
            });
        });

        updateButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                modal.classList.remove('open');
            });
        });

        addButtons.addEventListener('click', function() {
            uploadImg.src = "../img/upload-image.png";
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

    });
    </script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="js/statistic.js"></script>

</body>

</html>