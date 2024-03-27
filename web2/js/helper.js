var categoryz = [];
var currentPage = 1;
var listProduct = null;
var perPage = 4;

function loginz() {
  var a = document.querySelector('#taikhoan').value;
  var b = document.querySelector('#matkhau').value;

  $.ajax({
    url: "./controller/ProductsController.php",
    type: "post",
    dataType: "json",
    timeout: 1500,
    data: {
      request: "dangnhap",
      data_username: a,
      data_pass: b,
    },
    success: function (result) {
      if (result != null) {
        alert("Đăng nhập thành công!");
        document.querySelector('.popupLogin').classList.add('--none');
        return 1;
      } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        return 0;
      }
    },
  });

}

function login(e, a = document.getElementById("username").value, b = document.getElementById("passlogin").value) {
  // e.preventDefault();
  if (a == null || b == null) {
    var a = document.getElementById("username").value;
    var b = document.getElementById("passlogin").value;
  }
  $.ajax({
    url: "./controller/ProductsController.php",
    type: "post",
    dataType: "json",
    timeout: 1500,
    data: {
      request: "dangnhap",
      data_username: a,
      data_pass: b,
    },
    success: function (result) {
      if (result != null) {
        createToast("success");
        document.querySelector(".container").style.display = "none";
        document.querySelector(".black-bg").style.display = "none";
        updateUI();

        return 1;
      } else {
        createToast("error");
        return 0;
      }
    },
  });
}

function updateUI() {
  getCurrentUser((data) => {
    if (data) {
      document.querySelector(".xinchao").innerHTML =
        "Xin chào" + data[0]["Ten"];
      createToastWithMes(
        "fa-face-smile",
        "Chào mừng quay trở lại, " + data[0]["Ho"] + " " + data[0]["Ten"] + "!",
        "info"
      );
      document.querySelector(".fa.fa-user").style.display = "none";
      document.querySelector(".fa.fa-sign-out").style.display = "block";
      initlize();
    } else {
      document.querySelector(".fa.fa-user").style.display = "block";
      document.querySelector(".fa.fa-sign-out").style.display = "none";
      document.querySelector(".xinchao").innerHTML = "";
    }
  });
}
function getCurrentUser(callbackFunc) {
  $.ajax({
    type: "POST",
    url: "controller/ProductsController.php",
    dataType: "json",
    timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
    data: {
      request: "getCurrentUser",
    },
    success: function (data) {
      if (callbackFunc) callbackFunc(data);
    },
  });
}

function initlize() {
  document.querySelector(".fa.fa-sign-out").addEventListener("click", function () {
      $.ajax({
        type: "POST",
        url: "controller/ProductsController.php",
        dataType: "json",
        timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
          request: "logout",
        },
        success: function (data) {
          if (data) {
            createToastWithMes("fa-face-sad-cry", "Hẹn gặp lại bạn!", "error");
            updateUI();
          }
        },
      });
    });
}

function signup(e) {
  e.preventDefault();
  $.ajax({
    url: "controller/ProductsController.php",
    type: "post",
    dataType: "json",
    timeout: 1500,
    data: {
      request: "dangky",
      data_ho: document.getElementById("lastName").value,
      data_ten: document.getElementById("firstName").value,
      data_sdt: document.getElementById("phone").value,
      data_email: document.getElementById("email").value,
      data_diachi: document.getElementById("address").value,
      data_newUser: document.getElementById("name").value,
      data_newPass: document.getElementById("pass").value,
      data_gioitinh: document.getElementById("sexial").value
    },
    success: function (kq) {
      if (kq != null) {
        login(e, document.getElementById("name").value, document.getElementById("pass").value);
      }
    },
  });
}

function FormValidate(e){
    var name = document.getElementById('name').value;

    var errorName = document.getElementById('errorName');
    var regexName = /^KH(\d{3})$/;

    var phone = document.getElementById('phone').value;
    var errorPhone = document.getElementById('errorPhone');
    var regexPhone = /^0(\d{9}|9\d{8})$/;

    var email = document.getElementById('email').value;
    var errorEmail = document.getElementById('errorEmail');
    var reGexEmail = /\S+@\S+\.\S+/;;

    var passW = document.getElementById('pass').value;
    var errorPass = document.getElementById('errorPass');
    var reGexPass = /.{8,}/;
    

    var ConPass = document.getElementById('passw').value;
    var errorConPass = document.getElementById('errorConPass');
    

    var lastName = document.getElementById('lastName').value;
    var errorLastName = document.getElementById('errorLastName');

    var firstName = document.getElementById('firstName').value;
    var errorFirstName = document.getElementById('errorFirstName');

    var address = document.getElementById('address').value;
    var errorAddress = document.getElementById('errorAddress');

    var sexial = document.getElementById('sexial').value;
    var errorSexial = document.getElementById('errorSexial');

    //xét thành rỗng lúc đầu    errorLastName.innerHTML = '';
    errorFirstName.innerHTML = '';
    errorAddress.innerHTML = '';
    errorName.innerHTML = '';
    errorPhone.innerHTML = '';
    errorEmail.innerHTML = '';
    errorPass.innerHTML = '';
    errorConPass.innerHTML = '';
    errorSexial.innerHTML = '';

    if (lastName == '' || lastName == null) {
        errorLastName.innerHTML = "Họ không được để trống!";
        document.getElementById('lastName').focus();
    } else {
        errorLastName.innerHTML = '';
    }

    if (firstName == '' || firstName == null) {
        errorFirstName.innerHTML = "Tên không được để trống!";
        document.getElementById('firstName').focus();
    } else {
        errorFirstName.innerHTML = '';
    }

    if (address == '' || address == null) {
        errorAddress.innerHTML = "Địa chỉ không được để trống!";
        document.getElementById('address').focus();
    } else {
        errorAddress.innerHTML = '';
    }

    if (name == '' || name == null) {
        errorName.innerHTML = "Tên tài khoản không được để trống!";
        document.getElementById('name').focus();
    }else if(!regexName.test(name)){
        errorName.innerHTML = "Tên tài khoản bắt đầu bằng kí tư KH và 3 chữ số (Vd: KH001)!";
        // return false;
    }else{
        errorName.innerHTML = '';
    }

    if (phone == '' || phone == null) {
        errorPhone.innerHTML = "Số điện thoại không được để trống!";
    }else if(!regexPhone.test(phone)){
        errorPhone.innerHTML = "Số điện thoại không hợp lệ!";
        // return false;
    }else{
        errorPhone.innerHTML = '';
    }

    if (email == '' || email == null) {
        errorEmail.innerHTML = "Email không được để trống!";
    }else if(!reGexEmail.test(email)){
        errorEmail.innerHTML = "Email không hợp lệ!";
        email = '';
    }else{
        errorEmail.innerHTML = '';
    }

    if (passW == '' || passW == null) {
        errorPass.innerHTML = "Mật khẩu vui lòng không để trống!";
    }
    else if(!reGexPass.test(passW)){
        errorPass.innerHTML = "Pass tối thiểu 8 kí tự!";
        // return false;
    }
    else{
        errorPass.innerHTML = "";
    }

    if (ConPass == '' || ConPass == null) {
        errorConPass.innerHTML = "Xác nhận mật khẩu vui lòng không để trống!";
    } else if (ConPass != passW) {
        errorConPass.innerHTML = "Xác nhận mật khẩu không trùng khớp!";
    }else{
        errorConPass.innerHTML = "";
    }

    if (sexial == '' || sexial == null) {
        errorSexial.innerHTML = "Giới tính không được để trống!";
        document.getElementById('sexial').focus();
    } else if (!(sexial.toLowerCase() === 'nam' || sexial.toLowerCase() === 'nu')) {
        errorSexial.innerHTML = 'Giới tính vui lòng nhập "Nam" hoặc "Nu"';
        document.getElementById('sexial').focus();
        return false;
    }

    if (name && phone && email && ConPass && passW && passW == ConPass && firstName && lastName && sexial && address) {
        // Người dùng đã nhập đúng thông tin
        //xét thành rỗng lúc đầu   
        errorLastName.innerHTML = '';
        errorFirstName.innerHTML = '';
        errorAddress.innerHTML = '';
        errorName.innerHTML = '';
        errorPhone.innerHTML = '';
        errorEmail.innerHTML = '';
        errorPass.innerHTML = '';
        errorConPass.innerHTML = '';
        errorSexial.innerHTML = '';
        signup(e);
        return true; 
    }else{
    }
    
    return false;
}

function filterCategory(category) {
  categoryz.push(category);
  $.ajax({
    url: "./controller/ProductsController.php",
    type: "post",
    dataType: "json",
    timeout: 1500,
    data: {
      request: "getProductByFilters",
      category: category,
    },
    success: function (result) {
      listProduct = result;
      currentPage = 1;
      showProducts(); 
    },

  });
}


function showProducts() {
  var html = "";
  listProduct.forEach(function (item) {
     html += `<div class="scproducts__list-item" value="${item.MaSP}">
     <div class="top">
         <div class="img">
             <img src="${item.Img}">
         </div>
         <p class="title">${item.TenSP}</p>
     </div>
     <div class="content">
         <p class="desc">${item.Mota}</p>
         <button class="btn__buy">
             <p class="chon">CHỌN</p>
             <p class="price">${toVND(item.GiaTien)}</p>
         </button>
     </div>
 </div>`
  })
  document.querySelector(".scproducts__list").innerHTML = html;
  addEventProducts();
}

function addeventbutbtn() {
  var btn = document.querySelector(".btn.--add");
  var curProduct = null;
  $.ajax({
    type: "POST",
    url: "controller/ProductsController.php",
    dataType: "json",
    timeout: 1500, 
    data: {
      request: "getProductDetailID",
      id: document.querySelector(".btn.--add").getAttribute("value"),
      idsize: document.querySelector(".box__item.--kt.--active p").getAttribute("value"),
      idcrust: document.querySelector(".box__item.--de.--active p").getAttribute("value"),  
    },

    success: function (data) {
      curProduct = data;
    }
  });

  btn.addEventListener("click", function () {
    // show load icon
    // ajax get current product
    $.ajax({
      type: "POST",
      url: "controller/ProductsController.php",
      dataType: "json",
      timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
      data: {
        request: "getCurrentUser",
      },
      // data se bao gom user hientai va gio hang hientai
      success: function (data) {
        // hide load icon
        var html = '';
        var cartdiv = document.querySelector(".list");
        if (data) {
          data['cart'] == null ? data['cart'] = [] : data['cart'];
          // check current product in cart
          if (findProductInCart(data['cart'], curProduct)) { 
            // increase quantity
            data['cart'].forEach(function (item) {
              if (item['Product'].MaSP == curProduct.MaSP) {
                item['Quantity'] = parseInt(item['Quantity']) + 1;
              }
            });
          } else {
            // create arrray with 1 product and quantity
            var cart = { 'Product': curProduct, 'Quantity': 1 };
            data['cart'].push(cart);
          }
          data['cart'].forEach(function (item) {
            html += `<div class="list__item">
            <div class="img">
                <img src="${item['Product'].Img}" alt="">
            </div>
            <div class="content">
                <p class="title">${item['Product'].TenSP}</p>
                <p class="desc">Size Nho, De Mong</p>
                <p class="price">79,000₫</p>
            </div>
            
            <div class="buttons_added">
            <input class="minus is-form" type="button" value="-" onclick="decreasingNumber(this)">
            <input class="input-qty" max="100" min="1" name="" type="number" value="${item['Quantity']}">
            <input class="plus is-form" type="button" value="+" onclick="increasingNumber(this)">
            </div>
            <div class="btnClose">
            <img src="img/close-icon.png" alt="">
            </div>
          </div>`
          })
          cartdiv.innerHTML = html;
          saveSessionCart(data['cart']);
        }
        else {
          alert("Vui lòng đăng nhập để thêm vào giỏ hàng!");
        }
      },
    });
  });
}

function saveSessionCart(value) {
  $.ajax({
    type: "POST",
    url: "controller/ProductsController.php",
    dataType: "json",
    timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
    data: {
      request: "saveSessionCart",
      cart: value,
    },
    success: function (data) {
      console.log(data);
    },
  });
}

function loadSessionCart() {
  $.ajax({
    type: "POST",
    url: "controller/ProductsController.php",
    dataType: "json",
    timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
    data: {
      request: "getCurrentUser",
    },
    // data se bao gom user hientai va gio hang hientai
    success: function (data) {
      console.log(data);
      // hide load icon
      if (data === null || data['result'] === null) return;
        
        data['cart'] == null ? data['cart'] = [] : data['cart'];
        
        var cartdiv = document.querySelector(".list");
        var html = '';
        console.log(data['cart']);
        data['cart'].forEach(function (item) {
          html += `<div class="list__item">
          <div class="img">
              <img src="${item['Product'].Img}" alt="">
          </div>
          <div class="content">
              <p class="title">${item['Product'].TenSP}</p>
              <p class="desc">Size Nho, De Mong</p>
              <p class="price">${toVND(item['Product'].GiaTien)}</p>
          </div>
          <div class="buttons_added">
            <input class="minus is-form" type="button" value="-" onclick="decreasingNumber(this)">
            <input class="input-qty" readonly max="100" min="1" name="" type="text" value="${item['Quantity']}">
            <input class="plus is-form" type="button" value="+" onclick="increasingNumber(this, ${data}})">
            </div>
            <div class="btnClose">
            <img src="img/close-icon.png" alt="">
            </div>
      </div>`
        })
        cartdiv.innerHTML = html;
        // add event delete all cart
        document.querySelector('.btnCloseAllCart').addEventListener('click', function () {
          data['cart'] = [];
          saveSessionCart(data['cart']);
          cartdiv.innerHTML = '';
        });
        removeloader();
    },
  });
}

function findProductInCart(listCart, curProduct) {
  var result = false;
  listCart.forEach(function (item) {
    if (item['Product'].MaSP == curProduct.MaSP) {
      result = true;
    }
  });
  return result;
}

function increasingNumber(e, data) {
  data['Quantity']++;
  let qty = e.parentNode.querySelector('.input-qty');
  if (parseInt(qty.value) < qty.max) {
      qty.value = parseInt(qty.value) + 1;
  } else {
      qty.value = qty.max;
  }
  saveSessionCart(data);
  }

function decreasingNumber(e) {
  let qty = e.parentNode.querySelector('.input-qty');
  if (qty.value > qty.min) {
      qty.value = parseInt(qty.value) - 1;
  } else {
      qty.value = qty.min;
  }
}

function toVND(money) {
  let nf = new Intl.NumberFormat("en-US");
  return nf.format(money) + "₫";
}


function activeloader() {
  const loader = document.querySelector(".loader"); 
  loader.classList.add("loader-hidden");
}

function removeloader(toast) {
  const loader = document.querySelector(".loader"); 
  loader.classList.remove("loader-hidden");
}