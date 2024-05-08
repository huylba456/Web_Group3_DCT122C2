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
    <link rel="stylesheet" href="css/notification.css">
</head>

<body>
    <div class="loader"></div>
    <div class="notifications"></div>
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
                        <span class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" class="form-search-input" placeholder="Tìm kiếm món ăn..." />
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
                    <div class="header__action-bell">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div class="header__action-bell">
                        <a href="index.php?controller=HistoryBillController&action=index"><i class="fa-solid fa-file-invoice"></i></a>
                    </div>
                    <div class="header__action-member">
                        <div class="icon"><i class="fa-solid fa-circle-user"></i></div>
                        <p>THÀNH VIÊN</p>
                    </div>
                </div>
            </header>

            <div class="advanced-search">
                <div class="advanced__container">
                    <div class="advanced-search-category">
                        <span>Phân loại </span>
                        <select name="" id="advanced-search-category-select">
                            <option>Tất cả</option>
                            <option>Pizza Bo </option>
                            <option>Pizza Ga</option>
                            <option>Pizza Hai San</option>
                            <option>Món ăn vặt</option>
                            <option>Nước uống</option>
                        </select>
                    </div>
                    <div class="advanced-search-price">
                        <span>Giá từ (đơn vị: nghìn)</span>
                        <input type="number" placeholder="tối thiểu" id="min-price" />
                        <span>đến</span>
                        <input type="number" placeholder="tối đa" id="max-price" />
                        <button id="advanced-search-price-btn">
                            <i class="fa-light fa-magnifying-glass-dollar"></i>
                        </button>
                    </div>
                    <div class="advanced-search-control">
                        <button id="sort-ascending">
                            <i class="fa-regular fa-arrow-up-short-wide"></i>
                        </button>
                        <button id="sort-descending">
                            <i class="fa-regular fa-arrow-down-wide-short"></i>
                        </button>
                        <button id="reset-search">
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
                <div class="btn__topic" onclick="toggleActive(this, 'HEO')">
                    <span>PIZZA HEO</span>
                </div>
            </div>

            <main class="main">
                <div class="scproducts">
                    <div class="a">
                        <div class="scproducts__list">
                            <div class="scproducts__list-item">

                            </div>
                        </div>
                        <div class="pagnition"></div>
                    </div>
                </div>
            </main>
        </div>

        <div class="wrapper__right">
            <div class="top">
                <p class="heading"> GIỎ HÀNG </p>
                <i class="fa-solid fa-xmark close-cart"></i>
            </div>


            <div class="list">

            </div>


            <div class="payment">
                <div class="payment__info">
                    <div class="payment__info-left">
                        <p>Giảm K.mại: </p>
                        <p>Phí Giao Hàng.: </p>
                    </div>
                    <div class="payment__info-rigt">
                        <p>0 ₫</p>
                        <p>0 ₫</p>
                    </div>
                </div>
                <a class="payment__btn" href="index.php?controller=PaymentController&action=index">
                    <button class="btn">
                        <p class="text">THANH TOÁN</p>

                        <p class="totalPrice"></p>

                    </button>
                </a>
                <div class="btnCloseAllCart">
                    <p class="delete-text">HỦY</p>
                </div>
            </div>
        </div>

        <div class="popup --none">
        </div>

        <div class="popupLogin --none">
            <div class="popupLogin__container">
                <div class="popupLogin__img">
                    <img src="./images/loginbackground.jpg" alt="">
                </div>
                <div class="popupLogin__form user">
                    <h2 class="headingLogin">🍕🍕 WELCOME BACK!</h2>
                    <p class="heading__desc">NẾU BẠN CHƯA CÓ TÀI KHOẢN PIZZA HUT<br>HÃY ĐĂNG KÍ
                        TRƯỚC KHI ĐĂNG NHẬP BẠN NHÉ!</p>
                    <!-- <div class="form-item --login --email "> -->
                    <div class="form-item --login">
                        <label for="email">Email *</label>
                        <input type="text" name="" id="taikhoan">
                        <p class="error"></p>
                    </div>
                    <div class="form-item --login --password">
                        <label for="email">Mật Khẩu *</label>
                        <input type="Password" name="" id="matkhau">
                        <p class="error"></p>

                    </div>
                    <!-- onclick="loginz()" -->

                    <button class="btn dangnhapz">ĐĂNG NHẬP</button>

                    <div class="form-error">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <p>Email hoặc mật khẩu đăng nhập không hợp lệ. Vui lòng thử lại.</p>
                    </div>

                    <p class="register">Bạn chưa có tài khoản? <a
                            href="index.php?controller=SignUpController&action=index">Đăng ký ngay</a> hoặc tìm hiểu
                        thêm về <a href="">Điều khoản và Quyền lợi Thành viên</a></p>
                </div>
                <div class="popupLogin__form staff hidden none">
                    <h2 class="headingLogin">🍕🍕 WELCOME BACK!</h2>
                    <p class="heading__desc">ĐÂY LÀ KHU VỰC ĐĂNG NHẬP CHO NHÂN VIÊN<br>XIN HÃY TRỞ VỀ NẾU BẠN KHÔNG PHẢI
                        NHÂN VIÊN</p>
                    <!-- <div class="form-item --login --email "> -->
                    <div class="form-item --logins">
                        <label for="email">Tên đăng nhập *</label>
                        <input type="text" name="" id="taikhoans">
                        <p class="error"></p>
                    </div>
                    <div class="form-item --login --passwords">
                        <label for="email">Mật Khẩu *</label>
                        <input type="Password" name="" id="matkhaus">
                        <p class="error"></p>

                    </div>
                    <!-- onclick="loginz()" -->

                    <button class="btn dangnhaps">ĐĂNG NHẬP</button>

                    <div class="form-error">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <p>Tên đăng nhập hoặc mật khẩu đăng nhập không hợp lệ. Vui lòng thử lại.</p>
                    </div>

                </div>

                <div class="login__switch">Bạn là nhân viên? Ấn đây</div>
                <button class="btnX">
                    <img src="./images/iconClose.png">
                </button>

            </div>


        </div>
        <!-- <a href="index.php?controller=AdminIndexController&action=index">admin</a> -->

        <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Lấy phần tử .popupLogin
            var popupLogin = document.querySelector(".popupLogin");
            var button = document.querySelector(".btn");
            // Lấy phần tử .btnX
            var closeButton = document.querySelector(".btnX");
            // Lấy phần tử switch login
            var loginSwitch = document.querySelector(".login__switch");
            var staffLogin = document.querySelector(".popupLogin__form.staff");
            var userLogin = document.querySelector(".popupLogin__form.user");

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
            // Thêm sự kiện click cho loginSwitch
            loginSwitch.addEventListener("click", function() {
                // Kiểm tra xem phần tử .popupLogin__form.staff có class --none không
                var isNone = staffLogin.classList.contains("none");

                // Nếu có class --none, loại bỏ nó; nếu không, thêm vào
                if (isNone) {
                    userLogin.classList.add("hidden");
                    setTimeout(() => {
                        userLogin.classList.add("none");
                        staffLogin.classList.remove("none");
                    }, 300);
                    setTimeout(() => {
                        staffLogin.classList.remove("hidden");
                    }, 600);
                    loginSwitch.innerHTML = "Bạn là người dùng? Ấn đây";
                    var x= '<div class="icon"><i class="fa-solid fa-circle-user"></i></div><p>NHÂN VIÊN</p>';
                    document.querySelector(".header__action-member").innerHTML = x;
                } else {
                    staffLogin.classList.add("hidden");
                    setTimeout(() => {
                        staffLogin.classList.add("none");
                        userLogin.classList.remove("none");
                    }, 300);
                    setTimeout(() => {
                        userLogin.classList.remove("hidden");
                    }, 600);
                    loginSwitch.innerHTML = "Bạn là nhân viên? Ấn đây";
                    var s= '<div class="icon"><i class="fa-solid fa-circle-user"></i></div><p>THÀNH VIÊN</p>';
                    document.querySelector(".header__action-member").innerHTML =s;
                }
            });

            button.addEventListener("click", function() {
                // Thêm lại class --none cho .popupLogin
                popupLogin.classList.add("--none");
            });
        });


        var dangnhapUserBtn = document.querySelector('.dangnhapz');
        dangnhapUserBtn.addEventListener('click', function() {
            var checkForm = true;
            var formError = document.querySelector(".form-error");
            var username = document.getElementById("taikhoan");
            var usernameFormItem = document.querySelector(".form-item.--login");
            var usernameError = document.querySelector(".form-item.--login .error");
            var usernamePattern = /^.{3,}$/;
            var password = document.getElementById("matkhau");
            var passwordError = document.querySelector(".form-item.--login.--password .error");
            var passwordFormItem = document.querySelector(".form-item.--login.--password");
            var passwordPattern = /^.{3,}$/;


            if (username.value.trim() === "") {
                usernameFormItem.classList.add("--error");
                usernameError.innerHTML = "Vui lòng không để trống";
                checkForm = false;
            } else if (!usernamePattern.test(username.value)) {
                usernameFormItem.classList.add("--error");
                usernameError.innerHTML = "Tên đăng nhập không đúng định dạng";
                checkForm = false;
            } else {
                usernameFormItem.classList.remove("--error");
                usernameError.innerHTML = "";
            }
            username.addEventListener("input", function() {
                if (!usernamePattern.test(username.value)) {
                    usernameFormItem.classList.add("--error");
                    usernameError.innerHTML = "Tên đăng nhập không đúng định dạng";
                    checkForm = false;
                } else {
                    usernameFormItem.classList.remove("--error");
                    usernameError.innerHTML = "";
                }
            });

            if (password.value.trim() === "") {
                passwordFormItem.classList.add("--error");
                passwordError.innerHTML = "Vui lòng không để trống";
                checkForm = false;
            } else if (!passwordPattern.test(password.value)) {
                passwordFormItem.classList.add("--error");
                passwordError.innerHTML = "Mật khẩu phải chứa ít nhất 3 ký tự";
                checkForm = false;
            } else {
                passwordFormItem.classList.remove("--error");
                passwordError.innerHTML = "";
            }
            password.addEventListener("input", function() {
                if (!passwordPattern.test(password.value)) {
                    passwordFormItem.classList.add("--error");
                    passwordError.innerHTML = "Mật khẩu phải chứa ít nhất 3 ký tự";
                    checkForm = false;
                } else {
                    passwordFormItem.classList.remove("--error");
                    passwordError.innerHTML = "";
                }
            });

            if (checkForm) {
                // alert("Đăng nhập thành công!" + email.value + " " + password.value);
                loginz(username.value, password.value);
                formError.style.display = "none";
                // email.value = "";
                // password.value = "";
            } else {
                formError.style.display = "flex";
            }


        })

        var dangnhapStaffBtn = document.querySelector('.dangnhaps');
        dangnhapStaffBtn.addEventListener('click', function() {

            var checkForm = true;
            var formError = document.querySelector(".form-error");
            var username = document.getElementById("taikhoans");
            var usernameFormItem = document.querySelector(".form-item.--logins");
            var usernameError = document.querySelector(".form-item.--logins .error");
            var usernamePattern = /^.{3,}$/;
            var password = document.getElementById("matkhaus");
            var passwordError = document.querySelector(".form-item.--login.--passwords .error");
            var passwordFormItem = document.querySelector(".form-item.--login.--passwords");
            var passwordPattern = /^.{3,}$/;


            if (username.value.trim() === "") {
                usernameFormItem.classList.add("--error");
                usernameError.innerHTML = "Vui lòng không để trống";
                checkForm = false;
            } else if (!usernamePattern.test(username.value)) {
                usernameFormItem.classList.add("--error");
                usernameError.innerHTML = "Tên đăng nhập không đúng định dạng";
                checkForm = false;
            } else {
                usernameFormItem.classList.remove("--error");
                usernameError.innerHTML = "";
            }
            username.addEventListener("input", function() {
                if (!usernamePattern.test(username.value)) {
                    usernameFormItem.classList.add("--error");
                    usernameError.innerHTML = "Tên đăng nhập không đúng định dạng";
                    checkForm = false;
                } else {
                    usernameFormItem.classList.remove("--error");
                    usernameError.innerHTML = "";
                }
            });

            if (password.value.trim() === "") {
                passwordFormItem.classList.add("--error");
                passwordError.innerHTML = "Vui lòng không để trống";
                checkForm = false;
            } else if (!passwordPattern.test(password.value)) {
                passwordFormItem.classList.add("--error");
                passwordError.innerHTML = "Mật khẩu phải chứa ít nhất 3 ký tự";
                checkForm = false;
            } else {
                passwordFormItem.classList.remove("--error");
                passwordError.innerHTML = "";
            }
            password.addEventListener("input", function() {
                if (!passwordPattern.test(password.value)) {
                    passwordFormItem.classList.add("--error");
                    passwordError.innerHTML = "Mật khẩu phải chứa ít nhất 3 ký tự";
                    checkForm = false;
                } else {
                    passwordFormItem.classList.remove("--error");
                    passwordError.innerHTML = "";
                }
            });


            if (checkForm) {
                // alert("Đăng nhập thành công!" + email.value + " " + password.value);
                logins(username.value, password.value);
                var s=` <div class="header__action-location">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div class="header__action-bell">
                        <i class="fa-regular fa-bell"></i>
                    </div>
                    <div class="header__action-bell">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div class="header__action-bell">
                        <a href="index.php?controller=HistoryBillController&action=index"><i class="fa-solid fa-file-invoice"></i></a>
                    </div>
                    <div class="header__action-bell">
                        <a href="index.php?controller=AdminIndexController&action=index"><i class="fa-solid fa-sliders"></i></a>
                    </div>
                    <div class="header__action-member">
                        <div class="icon"><i class="fa-solid fa-circle-user"></i></div>
                        <p>NHÂN VIÊN</p>
                    </div>`
        document.querySelector('.header__action').innerHTML=s;
                formError.style.display = "none";
                // email.value = "";
                // password.value = "";
            } else {
                formError.style.display = "flex";
            }
        });
        </script>


        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="js/notificationEffect.js"></script>
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

        window.onload = function() {
            let cartIcon = document.querySelector('.fa-cart-shopping');
            let closeCartIcon = document.querySelector('.close-cart');
            let wrapperRight = document.querySelector('.wrapper__right');
            let wrapperLeft = document.querySelector('.wrapper__left');
            let scproductsList = document.querySelector('.scproducts__list');
            let items = document.querySelectorAll('.scproducts__list-item');

            cartIcon.addEventListener('click', function(event) {
                event.stopPropagation();
                wrapperRight.style.display = 'block';
                wrapperLeft.style.width = '75%';
                scproductsList.style.padding = '30px 0px';
                scproductsList.style.gap = '5px';
                items.forEach(function(item) {
                    item.style.width = '24.5%';
                });
            });

            closeCartIcon.addEventListener('click', function(event) {
                event.stopPropagation();
                wrapperRight.style.display = 'none';
                wrapperLeft.style.width = '100%';
                scproductsList.style.padding = '';
                scproductsList.style.gap = '';
                items.forEach(function(item) {
                    item.style.width = '';
                });
            });
        }
        </script>

</body>

</html>