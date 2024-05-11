var currentqueryz =
  'SELECT distinct sanpham.MaSP, TenSP, Mota, Img, Loai FROM sanpham, chitietsanpham WHERE sanpham.MaSP = chitietsanpham.MaSP and chitietsanpham.gianhap > 0 and sanpham.TrangThai = 1 and chitietsanpham.trangthai = 1';
var currentRowqueryz =
  'SELECT COUNT(distinct sanpham.masp)  FROM sanpham, chitietsanpham WHERE sanpham.MaSP = chitietsanpham.MaSP and chitietsanpham.gianhap > 0 and sanpham.TrangThai = 1 and chitietsanpham.trangthai = 1';
var currentPagez = 1;
const productSection = document.querySelector(".pro-collection");
var html = "";
var listProduct = [];
var perPage = 8;
var curProduct;
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
      console.log(data);
      listProduct = data.result;
      var totalPage = data.countrow / perPage;
      totalPage = Math.ceil(totalPage);
      showProducts();
      renderPag(totalPage);
      document.querySelector(".loader").style.display = "none";
    },
    //fail
    error: function () {
      alert("2sad");
    },
  });
}

function renderPag(totalPage) {
  if (totalPage < 2) totalPage = 0;
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

function toVND(money) {
  let nf = new Intl.NumberFormat("en-US");
  return nf.format(money) + "₫";
}

function ajaxproduct(page, currentpage) {
  currentPagez = page;
  if (currentpage.previousElementSibling) {
    currentpage.previousElementSibling.classList.remove("--active");
  }
  if (currentpage.nextElementSibling) {
    currentpage.nextElementSibling.classList.remove("--active");
  }
  currentpage.classList.add("--active");
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
      console.log(data);
      showProducts();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
      console.log("jqXHR:", jqXHR);
      console.log("textStatus:", textStatus);
      console.log("errorThrown:", errorThrown);
    },
  });
}

function toggleActive(clickedBtn, category) {
  // Xóa tất cả các lớp --active từ các nút
  var allButtons = document.querySelectorAll(".btn__topic");
  allButtons.forEach(function (btn) {
    btn.classList.remove("--active");
  });

  clickedBtn.classList.add("--active");

  if (category == "all") {
    currentqueryz = `SELECT distinct sanpham.MaSP, TenSP, Mota, Img, Loai FROM sanpham, chitietsanpham WHERE sanpham.MaSP = chitietsanpham.MaSP and chitietsanpham.gianhap > 0 and sanpham.TrangThai = 1 and chitietsanpham.trangthai = 1`;
  } else {
    currentqueryz = `SELECT distinct sanpham.MaSP, TenSP, Mota, Img, Loai FROM sanpham, chitietsanpham WHERE sanpham.MaSP = chitietsanpham.MaSP and chitietsanpham.gianhap > 0 and sanpham.TrangThai = 1 and chitietsanpham.trangthai = 1 and sanpham.loai = '${category}'`;
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
      totalPage = Math.ceil(totalPage);
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
      activeloader();
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
          var datatemp = data;
          console.log(data);
          var from = document.querySelector('#min-price').value;
          var to = document.querySelector('#max-price').value;

          if (from && to) {
            data = [];
            console.log(data);
            datatemp.forEach( function(item) {
              if (parseFloat(item.GiaTien) >= from && parseFloat(item.GiaTien) <= to) {
                data.push(item);
              }
         
            })
          }
          console.log(data);
          let setSize = new Set(); 
          let setVien = new Set();
          var sizearray = [];
          var sizevien = [];
          data.forEach(function (item) {
            var obj1 = {
              MaSize: item.MaSize,
              TenSize: item.TenSize,
              DinhLuongSize: item.DinhLuongSize,
            };

            var obj2 = {
              MaVien: item.MaVien,
              TenVien: item.TenVien,
              DinhLuongVien: item.DinhLuongVien,
            };

            if (!setSize.has(item.MaSize)) {
              setSize.add(item.MaSize);
              sizearray.push(obj1);
            }

            if (!setVien.has(item.MaVien)) {
              setVien.add(item.MaVien);
              sizevien.push(obj2);
            }
          });
          console.log(setSize);
          if (data.length == 0) {
            alert("Error");
            return;
          }
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
                        </div>`;
          sizearray.forEach(function (item, index) {
            if (index == 0) html += `<div class="box__item --kt --active">`;
            else html += `<div class="box__item --kt">`;
            html += `<div class="icon ">
                              <img src="./img/checkbox.jpeg" alt="">
                              <div class="line1"></div>
                              <div class="line2"></div>
                              <div class="circle"></div>
                          </div>
                          <p value="${item.MaSize}">${item.TenSize} (${item.DinhLuongSize})</p>
                      </div>`;
          });
          html += `</div>
                    <div class="box">
                        <div class="box__item --none">
                            <p class="title">Loại đế</p>
                        </div>`;
          sizevien.forEach(function (item, index) {
            if (index == 0) html += `<div class="box__item --de --active">`;
            else html += `<div class="box__item --de">`;
            html += `<div class="icon ">
                              <img src="./img/checkbox.jpeg" alt="">
                              <div class="line1"></div>
                              <div class="line2"></div>
                              <div class="circle"></div>
                          </div>
                          <p value="${item.MaVien}">${item.TenVien} (${item.DinhLuongVien})</p>
                      </div>`;
          });

          html += `</div>
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
  console.log("btnClose", btnClose);
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

  boxItemsDE.forEach(function (item) {
    item.addEventListener("click", function () {
      removeActiveBoxDE();
      item.classList.add("--active");
    });
  });

  function removeActiveBoxKT() {
    boxItemsKT.forEach(function (item) {
      item.classList.remove("--active");
    });
  }

  function removeActiveBoxDE() {
    boxItemsDE.forEach(function (item) {
      item.classList.remove("--active");
    });
  }

  var btnAdd = document.querySelector(".popup .btn.--add");

  btnAdd.addEventListener("click", function () {
    popup.classList.add("--none");
  });
}

function addeventchuyensizevade(listDetail) {
  var map = new Map();
  var size = document.querySelectorAll(".box__item.--kt");
  var de = document.querySelectorAll(".box__item.--de");
  // traverse listDetail and add to hashmap with key is listDetail.MaSize + listDetail.MaVien and value is listDetail.Price

  for (i = 0; i < listDetail.length; i++) {
    map.set(
      listDetail[i].TenSize +
        " (" +
        listDetail[i].DinhLuongSize +
        ") " +
        listDetail[i].TenVien +
        " (" +
        listDetail[i].DinhLuongVien +
        ")",
      listDetail[i].GiaTien
    );
    if (i == 0) {
      document.querySelectorAll(".--add p")[1].innerHTML = toVND(
        map.get(
          listDetail[i].TenSize +
            " (" +
            listDetail[i].DinhLuongSize +
            ") " +
            listDetail[i].TenVien +
            " (" +
            listDetail[i].DinhLuongVien +
            ")"
        )
      );
    }
  }

  size.forEach(function (item) {
    item.addEventListener("click", function () {
      document.querySelector(".popup .btn.--add").style.backgroundColor =
        "#0a8020";
      var size = item.querySelector("p").innerText;
      var de = document.querySelector(".box__item.--de.--active p").innerText;
      var price = map.get(size + " " + de);
      // if price is NaN
      if (!price) alert("Price is NaN");
      document.querySelector(".popup .btn.--add p:nth-child(2)").innerText =
        toVND(price);
    });
  });

  de.forEach(function (item) {
    item.addEventListener("click", function () {
      document.querySelector(".popup .btn.--add").style.backgroundColor =
        "#0a8020";
      var de = item.querySelector("p").innerText;
      var size = document.querySelector(".box__item.--kt.--active p").innerText;
      var price = map.get(size + " " + de);
      if (!price) {
        //disable button
        document.querySelector(".popup .btn.--add").style.backgroundColor =
          "#ccc";
        // disabled = true;
        document.querySelector(".popup .btn.--add").disabled = true;
      }
      document.querySelector(".popup .btn.--add p:nth-child(2)").innerText =
        toVND(price);
    });
  });
}

////TÌM KIẾM VÀ TÌM KIẾM NÂNG CAO (AUTHROR: TRUNG HƯNG)
function livesearch(input, category, min, max) {
  // userInput là giá trị được nhập vào từ người dùng

  // Tạo câu truy vấn với biến input
  currentqueryz =
    "SELECT sanpham.MaSP, TenSP, Mota, Img, Loai, MaSize, MaVien, GiaTien FROM `sanpham` left join `chitietsanpham` on `sanpham`.masp=`chitietsanpham`.masp left join `loaisanpham` on chitietsanpham.masp=loaisanpham.masp WHERE sanpham.TenSP LIKE '%" +
    input +
    "%' and (chitietsanpham.MASIZE='S' AND chitietsanpham.MAVIEN='M') ";
  let category_id = 0;

  if (min + max != 0) {
    currentqueryz +=
      "and chitietsanpham.giatien between " + min + "000 and " + max + "000";
  }

  if (category != "Tất cả") {
    switch (category) {
      case "Pizza Bo":
        category_id = 2;
        break;
      case "Pizza Ga":
        category_id = 1;
        break;
      case "Pizza Hai San":
        category_id = 3;
        break;
      case "Món ăn vặt":
        category_id = 4;
        break;
      case "Nước uống":
        category_id = 5;
        break;
    }
    currentqueryz += " and loaisanpham.maloai= " + category_id + "";
  }
  currentPagez = 1;
  console.log(currentPagez, currentqueryz);

  $.ajax({
    url: "./controller/ProductsController.php",
    type: "post",
    method: "POST",
    dataType: "json",
    timeout: 1500,
    data: {
      request: "livesearch",
      currentquery: currentqueryz,
      currentpage: currentPagez,
    },
    success: function (data) {
      if (data && data.result && data.result.length > 0) {
        listProduct = data.result;
        var totalPage = data.countrow / perPage;
        showProducts();
        renderPag(totalPage);
      } else {
        // Hiển thị thông báo không có kết quả
        $(".scproducts__list").html(
          "<h5>Không có sản phẩm nào phù hợp với từ khóa tìm kiếm của bạn.</h5>"
        );
      }
    },
    //fail
    error: function () {
      console.log("onii chan baka");
    },
  });
}

document.querySelector(".search-btn").addEventListener("click", function () {
  var input = $(".form-search-input").val();
  var category = $("#advanced-search-category-select").val();
  var min = $("#min-price").val();
  var max = $("#max-price").val();
  console.log(input, category, min, max);
  livesearch(input, category, min, max);
});
