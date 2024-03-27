// updateUI();

// document.querySelector('.fa.fa-user').addEventListener('click', function() {
//     document.querySelector('.container').style.display = 'block';
//     document.querySelector('.black-bg').style.display = 'block';
// })

// document.querySelector('.fa.fa-times').addEventListener('click', function() {
//     document.querySelector('.container').style.display = 'none';
//     document.querySelector('.black-bg').style.display = 'none';
// })
var currentqueryz =
  'SELECT sanpham.MaSP, TenSP, Mota, Img, Loai, MaSize, MaVien, GiaTien FROM `sanpham`, `chitietsanpham` WHERE sanpham.MaSP = chitietsanpham.MaSP AND chitietsanpham.MaSize = "S" AND chitietsanpham.MaVien ="V" ';
var currentRowqueryz =
  'SELECT COUNT(*) FROM `sanpham`, `chitietsanpham` WHERE sanpham.MaSP = chitietsanpham.MaSP AND pizzadetail.MaSize = "S" AND pizzadetail.MaCrust ="V" ';
var currentPagez = 1;
const productSection = document.querySelector(".pro-collection");
var html = "";
var listProduct = [];


loadDefaultProducts();
loadSessionCart();

function loadDefaultProducts() {
  activeloader();
  $.ajax({
    url: "./controller/ProductsController.php",
    type: "post",
    dataType: "json",
    timeout: 1500,
    data: {
      request: "getProducts",
      currentquery: currentqueryz,
      currentpage: currentPagez,
    },
    success: function (data) {
      listProduct = data.result;
      var totalPage = data.countrow / perPage;
      showProducts();
      renderPag(totalPage);
      document.querySelector('.loader').style.display = 'none';
    },
    //fail
    error: function () {
      alert("2sad");
    },
  });
}
function renderPag(totalPage) {
  if (totalPage <= 1) totalPage = 0;
  var html = "";
  for (var i = 1; i <= totalPage; i++) {
    if (i == 1) {
      html += `<li class="page-item --active" onclick="ajaxproduct(${i},this)" ><a  class="page-link">${i}</a></li>`;
    } else {
      html += `<li class="page-item" onclick="ajaxproduct(${i},this)" ><a  class="page-link">${i}</a></li>`;
    }
  }
  document.querySelector(".pagnition").innerHTML = html;
}


function ajaxproduct(page,currentpage) {
  currentPagez = page;
  if(currentpage.previousElementSibling){
    currentpage.previousElementSibling.classList.remove('--active');
  }
  if(currentpage.nextElementSibling){
    currentpage.nextElementSibling.classList.remove('--active');
  }
  currentpage.classList.add('--active');
  $.ajax({
    url: "./controller/ProductsController.php",
    type: "post",
    dataType: "json",
    timeout: 1500,
    data: {
      request: "changePage",
      currentquery: currentqueryz,
      currentpage: currentPagez,
    },
    success: function (data) {
      listProduct = data;
      showProducts();
    },
  });
}

function toggleActive(clickedBtn, category) {
  // Xóa tất cả các lớp --active từ các nút
  var allButtons = document.querySelectorAll(".btn__topic");
  allButtons.forEach(function (btn) {
    btn.classList.remove("--active");
  });

  // Thêm lớp --active vào nút được nhấn
  clickedBtn.classList.add("--active");

  if (category == "all") {
    currentqueryz = `SELECT sanpham.MaSP, TenSP, sanpham.Mota, Img, Loai, MaSize, MaVien, GiaTien
        FROM sanpham, chitietsanpham
        WHERE sanpham.MaSP = chitietsanpham.MaSP 
        AND chitietsanpham.MaSize = 'S' 
        AND chitietsanpham.MaVien = 'M' 
        `;
  } else {
    currentqueryz = `SELECT sanpham.MaSP, TenSP, sanpham.Mota, Img, Loai, MaSize, MaVien, GiaTien
        FROM sanpham, chitietsanpham
        WHERE sanpham.MaSP = chitietsanpham.MaSP 
        AND chitietsanpham.MaSize = 'S' 
        AND chitietsanpham.MaVien = 'M' 
    AND sanpham.Loai = '${category}'
    `;
  }
  currentPagez = 1;
  $.ajax({
    url: "./controller/ProductsController.php",
    type: "post",
    dataType: "json",
    timeout: 1500,
    data: {
      request: "ajaxcategory",
      currentquery: currentqueryz,
      currentpage: currentPagez,
    },
    success: function (data) {
      listProduct = data.result;
      var totalPage = data.countrow / perPage;
      showProducts();
      renderPag(totalPage);
    },
    //fail
    error: function () {
      alert("2sad");
    },
  });
}

function addEventProducts() {
  var products = document.querySelectorAll(".scproducts__list-item");
  products.forEach(function (product) {
    product.addEventListener("click", function () {
      var id = product.getAttribute("value");
      var popup = document.querySelector(".popup");
      // remove --none
      popup.classList.remove("--none");
      // ajax lay thong tin san pham
      $.ajax({
        url: "./controller/ProductsController.php",
        type: "post",
        dataType: "json",
        timeout: 1500,
        data: {
          request: "getProductByID",
          id: id,
        },
        success: function (data) {
          var product = data;
          var html = `
                    <div class="popup__item">
                <div class="popup__item-img">
                    <img src="${data[0].Img}" alt="">
                </div>
                <div class="popup__iten-content">
                    <h3 class="heading --lv2">
                        ${data[0].TenSP}
                    </h3>
                    <p class="desc">
                        ${data[0].Mota}q
                    </p>
                    <div class="box">
                        <div class="box__item --none">
                            <p class="title">Kích thước </p>
                        </div>
                        <div class="box__item --kt --active">
                            <div class="icon ">
                                <img src="./img/checkbox.jpeg" alt="">
                                <div class="line1"></div>
                                <div class="line2"></div>
                                <div class="circle"></div>
                            </div>
                            <p value="S">Nhỏ</p>
                        </div>
                        <div class="box__item --kt">
                            <div class="icon ">
                                <img src="./img/checkbox.jpeg" alt="">
                                <div class="line1"></div>
                                <div class="line2"></div>
                                <div class="circle"></div>
                            </div>
                            <p value="M">Vừa</p>
                        </div>
                        <div class="box__item --kt">
                            <div class="icon ">
                                <img src="./img/checkbox.jpeg" alt="">
                                <div class="line1"></div>
                                <div class="line2"></div>
                                <div class="circle"></div>
                            </div>
                            <p value="L">Lớn</p>
                        </div>

                    </div>
                    <div class="box">
                        <div class="box__item --none">
                            <p class="title">Loại đế</p>
                        </div>
                        <div class="box__item --de ">
                            <div class="icon ">
                                <img src="./img/checkbox.jpeg" alt="">
                                <div class="line1"></div>
                                <div class="line2"></div>
                                <div class="circle"></div>
                            </div>
                            <p value="M">Mỏng</p>
                        </div>
                        <div class="box__item --de --active">
                            <div class="icon ">
                                <img src="./img/checkbox.jpeg" alt="">
                                <div class="line1"></div>
                                <div class="line2"></div>
                                <div class="circle"></div>
                            </div>
                            <p value="V">Vừa</p>
                        </div>
                        <div class="box__item --de">
                            <div class="icon ">
                                <img src="./img/checkbox.jpeg" alt="">
                                <div class="line1"></div>
                                <div class="line2"></div>
                                <div class="circle"></div>
                            </div>
                            <p value="D">Dày</p>
                        </div>
                    </div>
                  <div class="box__bottom">
                  <div class="buttons_added">
                  <input class="minus is-form" type="button" value="-" onclick="decreasingNumber(this, ${data})">
                  <input class="input-qty" max="100" min="1" name="" type="number" value="1">
                  <input class="plus is-form" type="button" value="+" onclick="increasingNumber(this, ${data})">
                  </div>
                  <div class="btn --add" value='${data[0].MaSP}'>
                      <p>Thêm vào giỏ hàng </p>
                      <p> </p>
                  </div>
                  </div>
                </div>
                <div class="btnClose">
                    <img src="img/close-icon.png" alt="">
                </div>
            </div>
                    `;
          popup.innerHTML = html;
          addeventPOPUP();
          addeventchuyensizevade(data);
          addeventbutbtn();
        },
      });
    });
  });
}

function addeventPOPUP() {
  var popup = document.querySelector(".popup");
  var btnBuy = document.querySelectorAll(".scproducts__list-item .top");
  var btnBuy = document.querySelectorAll(".scproducts__list-item .top");
  var btnClose = document.querySelector(".btnClose");
  btnClose.addEventListener("click", function () {
    popup.classList.add("--none");
  });

  btnBuy.forEach(function (btn) {
    btn.addEventListener("click", function () {
      popup.classList.remove("--none");
    });
  });

  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      if (popup.classList.contains("--none")) {
        popup.classList.remove("--none");
      } else {
        popup.classList.add("--none");
      }
    }
  });

  //ĐẾ KÍCH THƯỚC
  var boxItemsKT = document.querySelectorAll(".box__item.--kt");
  var boxItemsDE = document.querySelectorAll(".box__item.--de");
  boxItemsKT.forEach(function (item) {
    item.addEventListener("click", function () {
      removeActiveBoxKT();
      item.classList.add("--active");
    });
  });

  function removeActiveBoxKT() {
    boxItemsKT.forEach(function (item) {
      item.classList.remove("--active");
    });
  }

  boxItemsDE.forEach(function (item) {
    item.addEventListener("click", function () {
      removeActiveBoxDE();
      item.classList.add("--active");
    });
  });

  function removeActiveBoxDE() {
    boxItemsDE.forEach(function (item) {
      item.classList.remove("--active");
    });
  }

  var btnAdd = document.querySelector(".popup .btn.--add");

  btnAdd.addEventListener("click", function () {
    popup.classList.add("--none");
    //f
  });
}

function addeventchuyensizevade(listDetail) {
  var map = new Map();
  var size = document.querySelectorAll(".box__item.--kt");
  var de = document.querySelectorAll(".box__item.--de");
  // traverse listDetail and add to hashmap with key is listDetail.MaSize + listDetail.MaVien and value is listDetail.Price

  for (i = 0; i < listDetail.length; i++) {
    map.set(
      listDetail[i].TenSize + " " + listDetail[i].TenVien,
      listDetail[i].GiaTien
    );
  }
  map.set("default", map.get("Nhỏ Mỏng"));

  size.forEach(function (item) {
    item.addEventListener("click", function () {
      var size = item.querySelector("p").innerText;
      var de = document.querySelector(".box__item.--de.--active p").innerText;
      var price = map.get(size + " " + de);

      document.querySelector(".popup .btn.--add p:nth-child(2)").innerText =
        toVND(price);
    });
  });

  de.forEach(function (item) {
    item.addEventListener("click", function () {
      var de = item.querySelector("p").innerText;
      var size = document.querySelector(".box__item.--kt.--active p").innerText;
      var price = map.get(size + " " + de);
      document.querySelector(".popup .btn.--add p:nth-child(2)").innerText =
        toVND(price);
    });
  });

  document.querySelectorAll(".--add p")[1].innerHTML = toVND(
    map.get("Nhỏ Mỏng")
  );
}
