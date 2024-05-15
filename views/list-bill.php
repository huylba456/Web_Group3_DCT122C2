<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pizza hut</title>

    <meta name="title" content="Luxeaaaastate">
    <meta name="description" content="">
    <meta name="keyword" content="">
    <meta name="autor" content="">

    <!-- Favicon -->
    <!-- <link rel="icon" href="favicon.ico"> -->

    <!-- link css -->
    <!-- font awesome cdn link  -->
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
    <!-- <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"> -->

    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"> -->
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/list-bill.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/components.css">

    <link rel="stylesheet" href="css/font.css">
    <script src="js/nointernet1.js" crossorigin="anonymous"></script>
    <script src="js/nointernet2.js"></script>
    <link rel="stylesheet" href="css/font-awesome-pro-v6-6.2.0/css/all.min.css" />

</head>

<body>
    <div class="loader"></div>
    <div class="wrapperMP">
        <header class="header">
            <div class="header__logo">
                <a href="index.php">
                    <img src="./img/logo-pizza.png" alt="logo">
                </a>
            </div>
            <div class="header__action">
                <!-- <div class="header__action-location" >
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="header__action-bell">
                    <i class="fa-regular fa-bell"></i>
                </div> -->
                <!-- <i class="fa-solid fa-file-invoice"></i> -->
                <div class="header__action-member">
                    <div class="icon"><i class="fa-solid fa-circle-user"></i></div>
                    <p>THÀNH VIÊN</p>
                </div>
            </div>
            <script>
                loadddbill();
function loadddbill() {
    $.ajax({
        url: './controller/ProductsController.php',
        type: 'post',
        dataType: 'json',
        data: {
            request: 'getCurrentUser'
        },
        success: function(data) {
            if(data['result'][0].MaND){
            document.querySelector('.header__action-member').innerHTML=
            ` <div class="icon"><i class="fa-solid fa-circle-user"></i></div>
                    <p>${data['result'][0].Ho+" "+data['result'][0].Ten}</p>`;
        }
        else if(data['result'][0].MaND){
            document.querySelector('.header__action-member').innerHTML=
            ` <div class="icon"><i class="fa-solid fa-circle-user"></i></div>
                    <p>${data['result'][0].MaND}</p>`
        }
    }
    });
}
            </script>
        </header>

        <div class="container">
            <div class="table-responsive">
                <div class="top-title">
                    <i class="fa-solid fa-file-invoice"></i>
                    <h1>LỊCH SỬ ĐƠN HÀNG</h1>
                </div>
                <div class="info">
                    <input type="text" placeholder="Nhập mã đơn hàng">
                    <div>
                        <button id="Search">Tìm kiếm</button>
                    </div>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Mã đơn hàng</th>
                            <th>Ngày đặt</th>
                            <th>Trạng thái</th>
                            <th>Tổng tiền</th>
                            <th>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody class="rowtable">
                        <tr>
                            <td>1</td>
                            <td>DH123456</td>
                            <td>15/03/2024</td>
                            <td style="color: green;">Đã giao hàng</td>
                            <td>1.000.000 VNĐ</td>
                            <td><button class="show-detail">Xem chi tiết</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>DH123457</td>
                            <td>14/03/2024</td>
                            <td style="color: rgb(248, 198, 0);">Đang xử lý</td>
                            <td>500.000 VNĐ</td>
                            <td><button class="show-detail">Xem chi tiết</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>DH123458</td>
                            <td>13/03/2024</td>
                            <td>Đã hủy</td>
                            <td>200.000 VNĐ</td>
                            <td><button class="show-detail">Xem chi tiết</button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>DH123458</td>
                            <td>13/03/2024</td>
                            <td>Đã hủy</td>
                            <td>200.000 VNĐ</td>
                            <td><button class="show-detail">Xem chi tiết</button></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>DH123458</td>
                            <td>13/03/2024</td>
                            <td>Đã hủy</td>
                            <td>200.000 VNĐ</td>
                            <td><button class="show-detail">Xem chi tiết</button></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>DH123458</td>
                            <td>13/03/2024</td>
                            <td>Đã hủy</td>
                            <td>200.000 VNĐ</td>
                            <td><button class="show-detail">Xem chi tiết</button></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>DH123458</td>
                            <td>13/03/2024</td>
                            <td>Đã hủy</td>
                            <td>200.000 VNĐ</td>
                            <td><button class="show-detail">Xem chi tiết</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="dark-overlay hide">
            <div class="container-bill hide">
                <header>
                    <img src="logo1.png" alt="">
                    <i class="fa-solid fa-xmark"></i>
                </header>
                <main>
                    <div class="infor">
                        <section class="thong-tin-don-hang">
                            <h2>Thông tin đơn hàng</h2>
                            <ul>
                                <li>Mã đơn hàng: <span id="ma-don-hang">DH12345</span></li>
                                <li>Ngày đặt hàng: <span id="ngay-dat-hang">14/03/2024</span></li>
                                <li>Trạng thái: <span id="trang-thai">Đang xử lý</span></li>
                            </ul>
                        </section>
                        <section class="thong-tin-khach-hang">
                            <h2>Thông tin khách hàng</h2>
                            <ul>
                                <li>Họ và tên: <span id="ho-ten">Nguyễn Văn A</span></li>
                                <li>Số điện thoại: <span id="so-dien-thoai">0123456789</span></li>
                                <li>Địa chỉ: <span id="dia-chi">Số 1, Đường X, Phường Y, Quận Z, Thành phố T</span></li>
                            </ul>
                        </section>
                    </div>
                    <section class="danh-sach-san-pham">
                        <h2>Danh sách sản phẩm</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody class="detailorderedrows">
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img src="Pizga_Pho_Mai_400x275.jpg" alt="">
                                        
                                        Pizza Phô Mai
                                    </td>
                                    <td>2</td>
                                    <td>200.000 VNĐ</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <img src="Pizza_Hai_San_Nhiet_Doi_400x275.jpg" alt="">
                                        
                                        Pizza Hải Sản
                                    </td>
                                    <td>1</td>
                                    <td>200.000 VNĐ</td>
                                    <td>200.000 VNĐ</td>
                                </tr>
                                <tr>
                                    <td colspan="4">Tổng tiền</td>
                                    <td id="tong-tien">400.000 VNĐ</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        </div>
        <ul class="pagination">
            
        </ul>
    </div>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> -->
    <script src="js/helper.js"></script>
    <script src="js/list-bill.js"></script>
    <script>
        const search = document.getElementById('Search');
        search.addEventListener('click', function() {
   var ma=document.querySelector('.info input').value;
   document.querySelectorAll('.table-bordered tbody tr').forEach(tr => {
    if (tr.querySelector('td:nth-child(1)').textContent.includes(ma)) {
      tr.style.display = 'table-row';
    } else {
      tr.style.display = 'none';
    }
})
})
    </script>
</body>

</html>
 


