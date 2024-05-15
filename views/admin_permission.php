<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/admin_styles.css">
    <!-- <script src="https://kit.fontawesome.com/3dff50b2d8.js" crossorigin="anonymous"></script> -->
    <title>Admin Dashboard</title>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"> -->
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/variables.css">
    <!-- <link rel="stylesheet" href="css/components.css"> -->
    <link rel="stylesheet" href="css/admin_styles1.css">
    <link rel="stylesheet" href="css/font.css">
    <script src="js/nointernet1.js" crossorigin="anonymous"></script>
    <script src="js/nointernet2.js"></script>
    <link rel="stylesheet" href="css/font-awesome-pro-v6-6.2.0/css/all.min.css" />
</head>

<body>

    <div class="container">
        <aside class="sidebar open">
            <!-- <div class="btnSidebar">
                <i class="fa-solid fa-bars"></i>
            </div> -->
            <div class="top-sidebar">
                <a href="#" class="channel-logo"><img src="img/logo-pizza.png" alt="Channel Logo"></a>
                <div class="hidden-sidebar your-channel"><img src="" style="height: 30px;" alt="">
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
                <div class="admin-control1">
                    <span><i class="fa-solid fa-user-secret"></i>DANH SÁCH NHÓM QUYỀN</span>
                    <div class="import-role">
                        <div class="add">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                <div class="table">
                    <table width="100%">
                        <thead>
                            <tr>
                                <td>Mã quyền</td>
                                <td>Tên nhóm quyền</td>
                                <td>Thao tác</td>
                            </tr>
                        </thead>
                        <tbody id="show-user">
                            <tr>
                                <td>1</td>
                                <td>Thao tác toàn diện</td>
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
            </div>
        </main>
    </div>
    <div class="dark-overlay">
        <div class="role-modal" id="roleModal">
            <div class="modal-content">
                <div class="r-left">
                    <img src="img/role.jpg" alt="role" class="role-img">
                </div>
                <div class="r-right">
                    <div class="modal-header">
                        <h2>PHÂN QUYỀN</h2>
                        <div class="import-role">
                            <span class="close">&times;</span>
                        </div>
                    </div>
                    <div class="role-name">
                        <span>Tên nhóm quyền: </span>
                        <input type="text" name="role-name" id="role-name">
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th id="title-role">Danh mục các chức năng</th>
                                    <th>Xem</th>
                                    <th>Thêm</th>
                                    <th>Sửa</th>
                                    <th>Xóa/Khóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td id="title-role">Quản lí sản phẩm</td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                </tr>
                                <tr>
                                    <td id="title-role">Quản lí tài khoản</td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                </tr>
                                <tr>
                                    <td id="title-role">Quản lí đơn hàng</td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                </tr>
                                <tr>
                                    <td id="title-role">Quản lí nhập hàng</td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                </tr>
                                <tr>
                                    <td id="title-role">Phân quyền</td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                </tr>
                                <tr>
                                    <td id="title-role">Thống kê</td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                    <td><input type="checkbox"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        var editButtons = document.querySelectorAll('.btn-edit, .add');
        editButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                document.getElementById('roleModal').style.display = 'block';
                document.querySelector('.dark-overlay').style.display = 'block';
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        var closeButton = document.querySelector('.close');
        closeButton.addEventListener('click', function() {
            document.getElementById('roleModal').style.display = 'none';
            document.querySelector('.dark-overlay').style.display = 'none';
        });
    });

    var showuser=document.getElementById('show-user');
    var listphanquyen=[];
    var currentqueryxxx="select * from phanquyen";
    phanquyen();
        function phanquyen() {
        $.ajax({
        url: "./controller/PermissionController.php",
        type: "post",
        dataType: "json",
        timeout: 1500,
        data: {
          request: "getpermission",
          currentquery: currentqueryxxx,
        },
        success: function (data) {
          console.log(data);
          listphanquyen= data.result;
          showpermission();
        },
        //fail
        error: function (data) {
          console.log(data);
        },
      });
    }

    function showpermission(){
        var html=``;
        listphanquyen.forEach(function (item){
            html+=`<tr>
            <td>${item.MaQuyen}</td>
            <td>${item.ChiTietQuyen}</td>
            <td class="control control-table">
                <button class="btn-edit" id="edit-account"><i
                        class="fa-regular fa-pen-to-square"></i></button>
                <button class="btn-delete" id="delete-account"><i
                        class="fa-solid fa-trash"></i></button>
            </td>
        </tr>`;
        })
        showuser.innerHTML=html;

        
    }
    </script>
</body>

</html>