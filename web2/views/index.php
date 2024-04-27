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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/loader.css">

</head>

<body>
    <div class="loader"></div>
    <script src="js/loader.js"></script>
    <div class="wrapper">
        <ul class="notifications"></ul>

        <div class="wrapper__left">

            <header class="header --noshadown">
                <div class="header__logo">
                    <a href="index.php">
                        <img src="img/logo-pizza.png" alt="logo">
                    </a>
                </div>

                     <div class="header-middle-center">
                        <form action="" class="form-search">
                        <span class="search-btn" ><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input
                            type="text"
                            class="form-search-input"
                            placeholder="Tìm kiếm món ăn..."

                        />
                        <div class="filter-btn">
                            <i class="fa-solid fa-filter"></i><span>Lọc</span>
                        </div>
                        </form>
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

                <div class="advanced-search">
      <div class="advanced__container">
        <div class="advanced-search-category">
          <span>Phân loại </span>
          <select
            name=""
            id="advanced-search-category-select"
            onchange="searchProducts()"
          >
            <option>Tất cả</option>
            <option>Pizza Bo </option>
            <option>Pizza Ga</option>
            <option>Pizza Hai San</option>
            <option>Món ăn vặt</option>
            <option>Nước uống</option>
          </select>
        </div>
        <div class="advanced-search-price">
          <span>Giá từ</span>
          <input
            type="number"
            placeholder="tối thiểu"
            id="min-price"
            onchange="searchProducts()"
          />
          <span>đến</span>
          <input
            type="number"
            placeholder="tối đa"
            id="max-price"
            onchange="searchProducts()"
          />
          <button id="advanced-search-price-btn">
            <i class="fa-light fa-magnifying-glass-dollar"></i>
          </button>
        </div>
        <div class="advanced-search-control">
          <button id="sort-ascending" onclick="searchProducts(1)">
            <i class="fa-regular fa-arrow-up-short-wide"></i>
          </button>
          <button id="sort-descending" onclick="searchProducts(2)">
            <i class="fa-regular fa-arrow-down-wide-short"></i>
          </button>
          <button id="reset-search" onclick="searchProducts(0)">
            <i class="fa-light fa-arrow-rotate-right"></i>
          </button>
          <button onclick="closeSearchAdvanced()">
            <i class="fa-light fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>

                <div class="topic">
                    <div class="btn__topic --active" onclick="toggleActive(this, 'all')">
                        <span>PIZZA</span>
                    </div>
                    <div class="btn__topic" onclick="toggleActive(this, 'BÒ')">
                        <span>PIZZA BÒ</span>
                    </div>
                    <div class="btn__topic" onclick="toggleActive(this, 'GÀ')">
                        <span>PIZZA GÀ</span>
                    </div>
                    <div class="btn__topic" onclick="toggleActive(this, 'HẢI SẢN')">
                        <span>PIZZA HẢI SẢN</span>
                    </div>
                    <div class="btn__topic" onclick="toggleActive(this)">
                        <span>MÓN KHAI VỊ</span>
                    </div>
                    <div class="btn__topic" onclick="toggleActive(this)">
                        <span>THỨC UỐNG</span>
                    </div>
                </div>

                <main class="main">
                    <div class="scproducts">
                        <div class="a">
                            <div class="scproducts__list">
                                <div class="scproducts__list-item">
                                    <div class="top">
                                        <div class="img">
                                            <img src="img/Pizga_Pho_Mai_400x275.jpg" alt="">
                                        </div>
                                        <p class="title">Pizza Phô Mai</p>
                                    </div>
                                    <div class="content">
                                        <p class="desc">Thưởng thức vị gà Karaage chiên giòn cắt lát trên nền pizza đậm vị,
                                            cùng nấm tươi, hành tây hoà quyện xốt phô mai</p>
                                        <button class="btn__buy">
                                            <p class="chon">CHỌN</p>
                                            <p class="price">119,000 ₫</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="pagnition">1 2</div>
                        </div>
                    </div>
                </main>
            </div>

        <div class="wrapper__right">
            <div class="top">
                <p class="heading">-- Giỏ Hàng --</p>
                <div class="btnCloseAllCart">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>

            
            <div class="list">
                
            </div>


            <div class="payment">
                <div class="payment__info">
                    <div class="payment__info-left">
                        <p>Tổng: </p>
                        <p>Giảm K.mại: </p>
                        <p>Phí Giao Hàng.: </p>
                    </div>
                    <div class="payment__info-rigt">
                        <p>0 ₫</p>
                        <p>0 ₫</p>
                        <p>0 ₫</p>
                    </div>
                </div>
                <a class="payment__btn" href="index.php?controller=PaymentController&action=index">
                    <button class="btn">
                        <p class="text">THANH TOÁN</p>
                        <p class="price">269,000 ₫</p>
                    </button>
                </a>
            </div>
        </div>

        <div class="popup --none">
        </div>

        <div class="popupLogin --none">
    <div class="popupLogin__container">
        <div class="popupLogin__img">
            <img src="./images/loginbackground.jpg" alt="">
        </div>
        <div class="popupLogin__form">
            <h2 class="headingLogin">🍕🍕 WELCOME BACK!</h2>
            <p class="heading__desc">NEU BẠN ĐÃ LÀ THÀNH VIÊN PIZZA HUT<br>HAY ĐĂNG NHẬP
                TRƯỚC KHI THANH TOÁN PIZZA NHÉ!</p>
                <div class="form-item --login ">
                    <label for="email">Email *</label>
                    <input type="text" name="" id="taikhoan">
                    <p id="emailError" class="error"></p>
                </div>
                <div class="form-item --login">
                    <label for="email">Mật Khẩu *</label>
                    <input type="Password" name="" id="matkhau">
                </div>
               
                <button class="btn dangnhapz" onclick="loginz()">ĐĂNG NHẬP</button>

                <div class="form-error">
                <i class="fa-solid fa-circle-exclamation"></i>
                <p>Email hoặc mật khẩu đăng nhập không hợp lệ. Vui lòng thử lại.</p>
                </div>

                <p class="register">Bạn chưa có tài khoản? <a href="index.php?controller=SignUpController&action=index">Đăng ký ngay</a> hoặc tìm hiểu thêm về <a href="">Điều khoản và Quyền lợi Thành viên</a></p>
        </div>

        <button class="btnX">
                <img src="./images/iconClose.png">
        </button>

    </div>  


    </div>

    <script>
        const emailInput = document.getElementById('taikhoan');
        const emailError = document.getElementById('emailError');
        emailInput.addEventListener('click', function(event) { 
        event.preventDefault();
        const emailValue = emailInput.value.trim(); // Trim whitespace from the email
        if (!emailValue) {
            emailError.textContent = 'Hãy nhập email vào';
            emailError.style.display = 'inline';
            emailInput.classList.add('error');
    }   else if (!isValidEmail(emailValue)) {
            emailError.textContent = 'Vui lòng nhập email hợp lệ';
            emailError.style.display = 'inline';
            emailInput.classList.add('error');
    }   else {
            emailError.textContent = '';
            emailInput.classList.remove('error');
    }
    function isValidEmail(email) {
    // Regular expression to match Gmail addresses
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return gmailRegex.test(email);
}
});
        
    </script>

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


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="js/script.js"></script>
    <script src="js/helper.js"></script>
    <script src="js/indexJS.js"></script>
    <script>

    // document.addEventListener("DOMContentLoaded", function() {

    //     var popup = document.querySelector(".popup");
    //     var btnBuy = document.querySelectorAll(".scproducts__list-item .top");
    //     var btnBuy = document.querySelectorAll(".scproducts__list-item .top");
    //     var btnClose = document.querySelector(".btnClose");

    //     btnClose.addEventListener("click", function() {
    //         popup.classList.add("--none");
    //     });


    //     btnBuy.forEach(function(btn) {
    //         btn.addEventListener("click", function() {
    //             popup.classList.remove("--none");
    //         });
    //     });


    //     popup.addEventListener("click", function(event) {
    //         if (event.target === popup) {
    //             if (popup.classList.contains("--none")) {
    //                 popup.classList.remove("--none");
    //             } else {
    //                 popup.classList.add("--none");
    //             }
    //         }
    //     });

    //     //ĐẾ KÍCH THƯỚC
    //     var boxItemsKT = document.querySelectorAll(".box__item.--kt");
    //     var boxItemsDE = document.querySelectorAll(".box__item.--de");
    //     boxItemsKT.forEach(function(item) {
    //         item.addEventListener("click", function() {
    //             removeActiveBoxKT();
    //             item.classList.add("--active");
    //         });
    //     });

    //     function removeActiveBoxKT() {
    //         boxItemsKT.forEach(function(item) {
    //             item.classList.remove("--active");
    //         });
    //     }

    //     boxItemsDE.forEach(function(item) {
    //         item.addEventListener("click", function() {
    //             removeActiveBoxDE();
    //             item.classList.add("--active");
    //         });
    //     });

    //     function removeActiveBoxDE() {
    //         boxItemsDE.forEach(function(item) {
    //             item.classList.remove("--active");
    //         });
    //     }

    //     var btnAdd = document.querySelector(".popup .btn.--add");

    //     btnAdd.addEventListener("click", function() {
    //         popup.classList.add("--none");
    //     });

    // });


// Xuong
document.addEventListener("DOMContentLoaded", function() {
  // Lấy phần tử .filter-btn
  var filterButton = document.querySelector(".filter-btn");

  // Lấy phần tử .advanced-search
  var advancedSearch = document.querySelector(".advanced-search");

  // Thêm sự kiện click cho .filter-btn
  filterButton.addEventListener("click", function() {
    // Kiểm tra xem phần tử .advanced-search đã có class --down chưa
    var isDown = advancedSearch.classList.contains("--down");

    // Nếu đã có class --down, loại bỏ nó; nếu chưa, thêm vào
    if (isDown) {
      advancedSearch.classList.remove("--down");
    } else {
      advancedSearch.classList.add("--down");
    }
  });
});


    </script>

</body>

</html>