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
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/font.css">
    <script src="js/nointernet1.js" crossorigin="anonymous"></script>
    <script src="js/nointernet2.js"></script>
    <link rel="stylesheet" href="css/font-awesome-pro-v6-6.2.0/css/all.min.css" />
</head>

<body>
    <div class=" loading" style="display: none"> đang load oke ? </div>

    <header class="header --shadown">
        <div class="header__logo">
            <a href="index.php">
                <img src="img/logo-pizza.png" alt="logo">
            </a>
        </div>
        <div class="header__action">
            <div class="header__action-location">
                <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="header__action-bell">
                <i class="fa-regular fa-bell"></i>
            </div>
            <div class="header__action-member">
                <div class="icon"><i class="fa-solid fa-circle-user"></i></div>
                <p>Thanh Vien</p>
            </div>
        </div>
    </header>

   <main class="main">
   <div class="scregister">
        <div class="scregister__container">
            <div class="scregister__top">
                <img src="../images//background2.jpg" alt="">
            </div>
            <div class="scregister__title">
                <h2>🍕🍕 ĐĂNG KÍ MUA PIZZA NÀO!!</h2>
                <p>TRỞ THÀNH THÀNH VIÊN CỦA PIZZA HUT <br> VÀ BẮT ĐẦU HÀNH TRÌNH NHẬN ƯU ĐÃI BẠN NHÉ!</p>
            </div>
            <div class="scregister__form">
                <div class="scregister__form-left ">
                    <div class="form-item --register --name ">
                        <label for="">Họ Tên *</label>
                        <input type="text" name="" value="" class="name">
                        <p class="error"></p>
                    </div>
                    <div class="group">
                    <div class="form-item  --register --sexial">
                        <label for="">Giới tính *</label>
                            <select name="" id="cbgioitinh">
                                <option value="Nam">Nam</option>
                                <option vaslue="Nu">Nữ</option>
                            </select>
                    </div>  
                    <div class="form-item  --register --phone">
                        <label for="">Số điện thoại *</label>
                        <input type="text" name="" value="" class="sdt">
                        <p class="error"></p>

                    </div>
               

                    </div>
               
                    <div class="form-item --register --email">
                        <label for="">Email *</label>
                        <input type="text" name="" value="" class="email">
                        <p class="error"></p>

                    </div>
                    <div class="form-item  --register --address">
                        <label for="">Địa chỉ *</label>
                        <input type="text" name="" value="" class="diachi">
                        <p class="error"></p>

                    </div>
                   
                </div>
                <div class="scregister__form-right">
                    <div class="form-item --register --password ">
                        <label for="">Mật khẩu *</label>
                        <input type="password" name="" value="" class="matkhau">
                        <p class="error"></p>

                    </div>
                    <div class="form-item  --register --cfpassword">
                        <label for="">Xác nhận mật khẩu *</label>
                        <input type="password" name="" value="" class="xacnhanmatkhau">
                        <p class="error"></p>
                        
                    </div>
                    <div class="form-item">
                        <label class="title">Mật khẩu ít nhất 3 ký tự và đáp ứng cac điều kiện sau:</label>
                        <p class="warn"><i class="fa-solid fa-circle-exclamation"></i> <span>Các số 0-9.</span></p>
                        <p class="warn"><i class="fa-solid fa-circle-exclamation"></i><span> Các chữ cái thường (nhỏ) a-z. Ví dụ: a, e, r</span></p>
                        <p class="warn"><i class="fa-solid fa-circle-exclamation"></i> <span>Không chứa dấu cách</span></p>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="dongy">
                        <p>Tôi đồng ý nhận thông tin từ Pizza Hut theo thông tin đã đăng ký như trên.</p>
                    </div>
                </div>
            </div>
            <div class="scregister__bottom">
                    <button class="btn dangkybtn" type="submit">ĐĂNG KÝ</button>
            </div>
        </div>
        
    </div>
   
    </div>

    <div class="popupLogin --none">
    <div class="popupLogin__container">
        <div class="popupLogin__img">
            <img src="../images/loginbackground.jpg" alt="">
        </div>
        <div class="popupLogin__form">
            <h2 class="headingLogin">🍕🍕 WELCOME BACK!</h2>
            <p class="heading__desc">NEU BẠN ĐÃ LÀ THÀNH VIÊN PIZZA HUT<br>HAY ĐĂNG NHẬP
                TRƯỚC KHI THANH TOÁN PIZZA NHÉ!</p>
                <div class="form-item --login --error">
                <label for="email">Email *</label>
                <!-- Sửa type và thêm pattern cho trường input email -->
                <input type="email" name="email" id="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$">
                <p class="error">Sai định dạng email</p>
                </div>
                <div class="form-item --login">
                    <label for="email">Mật Khẩu *</label>
                    <input type="Password" name="" id="">
                </div>
               
                <button class="btn">ĐĂNG NHẬP</button>

                <div class="form-error">
                <i class="fa-solid fa-circle-exclamation"></i>
                <p>Email hoặc mật khẩu đăng nhập không hợp lệ. Vui lòng thử lại.</p>
                </div>

                <p class="register">Bạn chưa có tài khoản? <a href="">Đăng ký ngay</a> hoặc tìm hiểu thêm về <a href="">Điều khoản và Quyền lợi Thành viên</a></p>
        </div>

        <button class="btnX">
                <img src="../images/iconClose.png" alt="">
        </button>

    </div>  
</main>
<script>

document.addEventListener("DOMContentLoaded", function() {
  // Lấy phần tử .popupLogin
  var popupLogin = document.querySelector(".popupLogin");
  var button = document.querySelector(".btn");
  // Lấy phần tử .btnX
  var closeButton = document.querySelector(".btnX");

  // Thêm sự kiện click cho .header__action-member
  var headerActionMember = document.querySelector(".header__action-member");
  headerActionMember.addEventListener("click", function() {
    // Loại bỏ class --none từ phần tử .popupLogin
    popupLogin.classList.remove("--none");
  });

  // Thêm sự kiện click cho nút đóng
  closeButton.addEventListener("click", function() {
    // Thêm lại class --none cho .popupLogin
    popupLogin.classList.add("--none");
  });

  // Thêm sự kiện click cho phần tử cha .popupLogin
  popupLogin.addEventListener("click", function(event) {
    // Kiểm tra xem phần tử được nhấp vào có phải là phần tử cha popupLogin không
    if (event.target === popupLogin) {
      // Thêm lại class --none cho .popupLogin
      popupLogin.classList.add("--none");
    }
  });

  button.addEventListener("click", function() {
    // Thêm lại class --none cho .popupLogin
    popupLogin.classList.add("--none");
  });
});

</script>

    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> -->
    <script src="js/register.js"></script>

</body>

</html>