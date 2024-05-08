const productDetails = document.querySelector('.container-bill');
const closeDetail = document.querySelectorAll('.fa-xmark');
const showBillButtons = document.querySelectorAll('.show-detail');
const darkOverlay = document.querySelector('.dark-overlay');

showBillButtons.forEach(button => {
  button.addEventListener('click', function() {
    productDetails.classList.remove("hide");
    darkOverlay.style.display = 'block';
  })
})

closeDetail.forEach(button => {
  button.addEventListener('click', function() {
    productDetails.classList.add("hide");
    darkOverlay.style.display = 'none';
  })
})
var User;
let tried_queryz="";
let length=0;
loadtable();

// load lich su don hang
function loadtable() {

    $.ajax({  
        url: './controller/HistoryBillController.php',
        type: 'POST',
        dataType: 'json',
        data: {
        request: 'getHistoryBill'
        },
        success: function(data) {
          console.table(data);
          var html = "";
          // traverse data
          data.slice(data.length-4,data.length).reverse().forEach((element) => {
            html += `<tr>
            <td>${element.MaHD}</td>
            <td>${element.NgayLap}</td>`;
            // parse element.TrangThai to int
            switch(element.TrangThai) {
              case '0': 
                html += `<td>Đang chờ xác nhận</td>`;
                break;
              case '1':
                html += `<td>Đã xác nhận</td>`;
                break;
              case '2':
                html += `<td>Đang giao hàng</td>`;
                break;
              case '3':
                html += `<td>Đã giao hàng</td>`;
                break;
              default:
                html += `<td>Đã hủy</td>`;
                break;
            }
            html += `<td>${toVND(element.TongTien)}</td>
            <td><button class="show-detail" value="${element.MaHD}">Xem chi tiết</button></td>
        </tr>`;
          });
          if (data.length > 0) {
            let MaND = data[0].MaND; // Assign value to MaND
             tried_queryz="SELECT * FROM `HoaDon` where MaND="+MaND+"";
          }
          document.querySelector('.rowtable').innerHTML = html;
          addeventdetailorder();
          removeloader();
          render_page_li(Math.ceil(data.length/4));
          length=Math.ceil(data.length/4);
        }
    })
}

function loadtablez(data) {
  var html = "";
          // traverse data
          data.forEach((element) => {
            console.log(element.MaND)
            html += `<tr>
            <td>${element.MaHD}</td>
            <td>${element.NgayLap}</td>`;
            // parse element.TrangThai to int
            switch(element.TrangThai) {
              case '0': 
                html += `<td>Đang chờ xác nhận</td>`;
                break;
              case '1':
                html += `<td>Đã xác nhận</td>`;
                break;
              case '2':
                html += `<td>Đang giao hàng</td>`;
                break;
              case '3':
                html += `<td>Đã giao hàng</td>`;
                break;
              default:
                html += `<td>Đã hủy</td>`;
                break;
            }
            html += `<td>${toVND(element.TongTien)}</td>
            <td><button class="show-detail" value="${element.MaHD}">Xem chi tiết</button></td>
        </tr>`;})
        document.querySelector('.rowtable').innerHTML = html;
        addeventdetailorder();
        removeloader();
        
          
}

function render_page_li(totalPage) {
  console.log("nhan vao render_page_li")
  if (totalPage <= 1) totalPage = 0;
  var html = "";
  for (var i = 1; i <= totalPage; i++) {
    if (i == 1) {
      html += `<li class="page-item " onclick="ajaxrow(${i},this)" ><a  class="page-link">${i}</a></li>`;
    } else {
      html += `<li class="page-item " onclick="ajaxrow(${i},this)" ><a  class="page-link">${i}</a></li>`;
    }
   
  }
  document.querySelector(".pagination").innerHTML = html;

}


function ajaxrow(page,currentpage) {
  let currentqueryz=tried_queryz;
  console.log("nhan vao ajaxrow",currentqueryz);
  let currentPagez=1;
  currentPagez = page;
  if(currentpage.previousElementSibling){
    currentpage.previousElementSibling.classList.remove('--active');
  }
  if(currentpage.nextElementSibling){
    currentpage.nextElementSibling.classList.remove('--active');
  }
  currentpage.classList.add('--active');
  $.ajax({
    url: "./controller/HistoryBillController.php",
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
      loadtablez(data);
    },
    error: function () {
      alert("del duoc roi oniichan");
    },
  });
  console.log(length)
  render_page_li(length)
}





function addeventdetailorder() {
  var detaillist = document.querySelectorAll('.show-detail');
  detaillist.forEach((element) => {
    element.addEventListener('click', function() {
      // get value attribute
      var mahd = element.getAttribute('value');
      loadDetailBill(mahd);
    })
  })
}

function loadDetailBill(mahd) {
  // activeloader();
  $.ajax({
    url: './controller/HistoryBillController.php',
    type: 'POST',
    dataType: 'json',
    data: {
      request: 'getDetailBill',
      mahd: mahd
    },
    success: function(data) {
      console.log(data);
      var html = "";
      data.forEach((element, index) => {
        html += `<tr>
        <td>${index + 1}</td>
        <td>
            <img src="${element['Img']}" alt="">
            <br>
            ${element['TenSP']}
        </td>
        <td>${element['SoLuong']}</td>
        <td>${toVND(element['GiaTien'])}</td>
    </tr>`;
      });
      document.querySelector('.dark-overlay.hide').style.display = 'block';
      document.querySelector('.container-bill').classList.remove('hide');
      var div = document.querySelector('.detailorderedrows');
      div.innerHTML = html;
      // removeloader();
    }
  })
}