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
            <div class="section active">
                <h1 class="page-title">Trang quản lý Pizza Hut</h1>
                <div class="cards">
                    <div class="card-single">
                        <div class="box">
                            <h2 id="amount-user">0</h2>
                            <div class="on-box">
                                <img src="img/admin-pizza-1.png" alt="" style=" width: 200px;">
                                <h3>Khách hàng</h3>
                                <p>Sản phẩm là bất cứ cái gì có thể đưa vào thị trường để tạo sự chú ý, mua sắm, sử dụng
                                    hay tiêu dùng nhằm thỏa mãn một nhu cầu hay ước muốn. Nó có thể là những vật thể,
                                    dịch vụ, con người, địa điểm, tổ chức hoặc một ý tưởng.</p>
                            </div>

                        </div>
                    </div>
                    <div class="card-single">
                        <div class="box">
                            <div class="on-box">
                                <img src="img/admin-pizza-1.png" alt="" style=" width: 200px;">

                                <h2 id="amount-product">0</h2>
                                <h3>Sản phẩm</h3>
                                <p>Khách hàng mục tiêu là một nhóm đối tượng khách hàng trong phân khúc thị trường mục
                                    tiêu mà doanh nghiệp bạn đang hướng tới. </p>
                            </div>
                        </div>
                    </div>
                    <div class="card-single">
                        <div class="box">
                            <h2 id="doanh-thu">$5020</h2>
                            <div class="on-box">
                                <img src="img/admin-pizza-1.png" alt="" style=" width: 200px;">

                                <h3>Doanh thu</h3>
                                <p>Doanh thu của doanh nghiệp là toàn bộ số tiền sẽ thu được do tiêu thụ sản phẩm, cung
                                    cấp dịch vụ với sản lượng.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Product  -->
            <div class="section product-all ">
                <div class="admin-control">
                    <div class="admin-control-left">
                        <select name="the-loai" id="the-loai" onchange="showProduct()">
                            <option>Tất cả</option>
                            <option>Pizza Bò</option>
                            <option>Pizza Gà</option>
                            <option>Pizza Hải Sản</option>
                            <option>Pizza Rau Củ</option>
                            <option>Món Phụ</option>
                            <option>Nước uống</option>
                        </select>
                    </div>
                    <div class="admin-control-center">
                        <form action="" class="form-search">
                            <span class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></i></span>
                            <input id="form-search-product" type="text" class="form-search-input"
                                placeholder="Tìm kiếm tên món..." oninput="showProduct()">
                        </form>
                    </div>
                    <div class="admin-control-right">
                        <button class="btn-control-large" id="btn-cancel-product" onclick="cancelSearchProduct()"><i
                                class="fa-solid fa-rotate-right"></i></i> Làm mới</button>
                        <button class="btn-control-large" id="btn-add-product"><i class="fa-light fa-plus"></i> Thêm món
                            mới</button>
                    </div>
                </div>
                <div id="show-product">
                    <div class="list">
                        <div class="list-left">
                            <img src="/img/pizza-1.png" alt="">
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
                            <img src="/images/pizzaimg/bodemi.jpg" alt="">
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
                            <img src="/img/pizza-1.png" alt="">
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
                            <img src="/img/pizza-1.png" alt="">
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
                            <img src="/img/pizza-1.png" alt="">
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
                            <img src="/img/pizza-1.png" alt="">
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
            <!-- Account  -->
            <div class="section">
                <div class="admin-control">
                    <div class="admin-control-left">
                        <select name="tinh-trang-user" id="tinh-trang-user" onchange="showUser()">
                            <option value="2">Tất cả</option>
                            <option value="1">Hoạt động</option>
                            <option value="0">Bị khóa</option>
                        </select>
                    </div>
                    <div class="admin-control-center">
                        <form action="" class="form-search">
                            <span class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></span>
                            <input id="form-search-user" type="text" class="form-search-input"
                                placeholder="Tìm kiếm khách hàng..." oninput="showUser()">
                        </form>
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
                            </div>
                        </form>
                        <button class="btn-reset-order" onclick="cancelSearchUser()"><i
                                class="fa-solid fa-rotate-right"></i></button>
                        <button id="btn-add-user" class="btn-control-large" onclick="openCreateAccount()"><i
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
            <!-- Order  -->
            <div class="section ">
                <div class="admin-control">
                    <div class="admin-control-left">
                        <select name="tinh-trang" id="tinh-trang" onchange="findOrder()">
                            <option value="2">Tất cả</option>
                            <option value="1">Đã xử lý</option>
                            <option value="0">Chưa xử lý</option>
                        </select>
                    </div>
                    <div class="admin-control-center">
                        <form action="" class="form-search">
                            <span class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></span>
                            <input id="form-search-order" type="text" class="form-search-input"
                                placeholder="Tìm kiếm mã đơn, khách hàng..." oninput="findOrder()">
                        </form>
                    </div>
                    <div class="admin-control-right">
                        <form action="" class="fillter-date">
                            <div>
                                <label for="time-start">Từ</label>
                                <input type="date" class="form-control-date" id="time-start" onchange="findOrder()">
                            </div>
                            <div>
                                <label for="time-end">Đến</label>
                                <input type="date" class="form-control-date" id="time-end" onchange="findOrder()">
                            </div>
                        </form>
                        <button class="btn-reset-order" onclick="cancelSearchOrder()"><i
                                class="fa-solid fa-rotate-right"></i></button>
                    </div>
                </div>
                <div class="table">
                    <table width="100%">
                        <thead>
                            <tr>
                                <td>Mã đơn</td>
                                <td>Khách hàng</td>
                                <td>Ngày đặt</td>
                                <td>Tổng tiền</td>
                                <td>Trạng thái</td>
                                <td>Thao tác</td>
                            </tr>
                        </thead>
                        <tbody id="showOrder">
                            <tr>
                                <td>DH1</td>
                                <td>Pham Van Kiet</td>
                                <td>05/03/2024 </td>
                                <td>4.720.000 ₫</td>
                                <td><span class="status-complete">Đã xử lý</span></td>
                                <td class="control">
                                    <button class="btn-detail" id=""><i class="fa-regular fa-eye"></i> Chi tiết</button>
                                </td>
                            </tr>
                            <tr>
                                <td>DH2</td>
                                <td>Pham Van Kiet</td>
                                <td>05/03/2024 </td>
                                <td>4.720.000 ₫</td>
                                <td><span class="status-complete">Đã xử lý</span></td>
                                <td class="control">
                                    <button class="btn-detail" id=""><i class="fa-regular fa-eye"></i> Chi tiết</button>
                                </td>
                            </tr>
                            <tr>
                                <td>DH3</td>
                                <td>Pham Van Kiet</td>
                                <td>05/03/2024 </td>
                                <td>4.720.000 ₫</td>
                                <td><span class="status-complete">Đã xử lý</span></td>
                                <td class="control">
                                    <button class="btn-detail" id=""><i class="fa-regular fa-eye"></i> Chi tiết</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Thong ke  -->
            <div class="section">
                <div class="admin-control">
                    <div class="admin-control-left">
                        <select name="the-loai-tk" id="the-loai-tk" onchange="thongKe()">
                            <option>Tất cả</option>
                            <option>Món chay</option>
                            <option>Pizza Bò</option>
                            <option>Món lẩu</option>
                            <option>Món ăn vặt</option>
                            <option>Món tráng miệng</option>
                            <option>Nước uống</option>
                            <option>Món khác</option>
                        </select>
                    </div>
                    <div class="admin-control-center">
                        <form action="" class="form-search">
                            <span class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></span>
                            <input id="form-search-tk" type="text" class="form-search-input"
                                placeholder="Tìm kiếm tên món..." oninput="thongKe()">
                        </form>
                    </div>
                    <div class="admin-control-right">
                        <form action="" class="fillter-date">
                            <div>
                                <label for="time-start">Từ</label>
                                <input type="date" class="form-control-date" id="time-start-tk" onchange="thongKe()">
                            </div>
                            <div>
                                <label for="time-end">Đến</label>
                                <input type="date" class="form-control-date" id="time-end-tk" onchange="thongKe()">
                            </div>
                        </form>
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
                            <p class="order-statistical-item-content-desc">Sản phẩm được bán ra</p>
                            <h4 class="order-statistical-item-content-h" id="quantity-product">5</h4>
                        </div>
                        <div class="order-statistical-item-icon">
                            <i class="fa-solid fa-pizza-slice"></i>
                        </div>
                    </div>
                    <div class="order-statistical-item">
                        <div class="order-statistical-item-content">
                            <p class="order-statistical-item-content-desc">Số lượng bán ra</p>
                            <h4 class="order-statistical-item-content-h" id="quantity-order">18</h4>
                        </div>
                        <div class="order-statistical-item-icon">
                            <i class="fa-regular fa-file-lines"></i>
                        </div>
                    </div>
                    <div class="order-statistical-item">
                        <div class="order-statistical-item-content">
                            <p class="order-statistical-item-content-desc">Doanh thu</p>
                            <h4 class="order-statistical-item-content-h" id="quantity-sale">46.000.000đ</h4>
                        </div>
                        <div class="order-statistical-item-icon">
                            <i class="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                    </div>
                </div>
                <div class="table">
                    <table width="100%">
                        <thead>
                            <tr>
                                <td>STT</td>
                                <td>Tên món</td>
                                <td>Số lượng bán</td>
                                <td>Doanh thu</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody id="showTk">
                        </tbody>
                    </table>
                </div>
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
                        <img src="/img/pizza-1.png" alt="" class="upload-image-preview">
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
                        <table>
                            <tr>
                                <td>Mã món</td>
                            </tr>
                        </table>
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
                                <img src="/img/pizza-1.png" alt="">
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
                                <img src="/images/pizzaimg/bbq.jpg" alt="">
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
                                <img src="/img/pizza-1.png" alt="">
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
                                <img src="/images/pizzaimg/bbq.jpg" alt="">
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
    <script>
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
    </script>

</body>

</html>