
var orderlist = order.getOrders();
var currentPage = 1;
renderPhanTrangOrder(orderlist);
function renderPhanTrangOrder(orderlist) {
    var html = '';
    var maxPageShow = data.getMaxPages(orderlist, 20);
    html += "<div class='previousorderpagnition'>&laquo;</div>";
    for (var i = 1; i <= maxPageShow; i++) {
        html += `<a value=${i}>${i}</a>`
    }
    html += "<div class='nextorderpagnition'>&raquo;</div>"
        const pageContainer = document.querySelector('.phantrangorder');
        pageContainer.innerHTML = html;
    if (pageContainer.querySelector('.phantrangorder a'))
        pageContainer.querySelector('.phantrangorder a').classList.add('active');
    addeventnextdonhang();
    addeventpreviousdonhang();
}


renderOrders(orderlist);
function renderOrders(orderlist) {
    var html = '';
    var mydata = data.getProductAtPage(orderlist, currentPage, 20);
    if (orderlist.length == 0) {
        document.querySelector('.bodyquanlydonhang').innerHTML = `<p class="khongtimthaydonhang">Không tìm thấy đơn hàng</p>`;
    }
    mydata.forEach((item) => {
        html += `
        <tr>
            <td>${item.orderId}</td>
            <td>${item.userProfile.name}</td>
            <td>${money.vnd(order.getTotalMoneyFromCartList(item.cartList))}</td>
            <td>${time.getDateStr(item.orderTime)}</td>`
            if (item.status == true) {
                html += `<td style="color: #24ff32;">Đã xử lý</td>`
            }
            else {
                html += `<td style="color: #fe3939;">Chưa xử lý</td>`
            }
            html += `<td class="thaotac">
              <i class="fa-solid fa-check" value="${item.orderId}" style="color: #24ff32;"></i>
              <i class="fa-solid fa-x" value="${item.orderId}" style="color: #fe3939;"></i>
            </td>
            <td><div class="chitiet" value="${item.orderId}"></class><td>
        </tr>
        `
    })
    document.querySelector('.bodyquanlydonhang').innerHTML = html;
}

changePagesorder(orderlist);
function changePagesorder(orderlist) {
    var perPage = 10;
    const pageBtns = document.querySelectorAll('.phantrangorder a');
    pageBtns.forEach(item => { 
        if (parseInt(item.getAttribute("value")) == currentPage) {
            item.classList.add('active');
        }
        else item.classList.remove('active');
    }); 
    var first = currentPage - 1;
    var last = currentPage + 1;
   
    if (currentPage == 1) {
        first = currentPage;
        last = currentPage + 2;
    }
    if (currentPage == data.getMaxPages(orderlist, perPage)) {
        first = currentPage - 2;
        last = currentPage;
    }   
    pageBtns.forEach((item, index) => {
        if (index >= first-1 && index <= last-1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

}

addEventToPageorder();
function addEventToPageorder() {
    var pageBtnns = document.querySelectorAll('.phantrangorder a');
    pageBtnns.forEach(item => {
        item.addEventListener('click', function () {
            currentPage = parseInt(this.getAttribute('value'));
            renderOrders(orderlist);
            changePagesorder(orderlist);
            addeventchuaxuly();
            addEventChiTietDonHang();
            addEventNutXacNhan();
            addeventchuaxuly();
        })
    })  
    addeventchuaxuly();
    addEventChiTietDonHang();
    addEventNutXacNhan();
    addeventchuaxuly();
}

function addEventNutXacNhan() {
    var nutxacnhan = document.querySelectorAll('.fa-solid.fa-check');
    nutxacnhan.forEach(item => {
        item.addEventListener('click', function () {
            var id = parseInt(this.getAttribute('value'));
            var useridxacnhan = user.checkLoginId();
            var userz = user.getUserId(useridxacnhan);
            var orderz = order.getOrders();
            orderz.forEach(item => {
                if (item.orderId == id) {
                    item.status = true;
                }
            }) 
            orderlist.forEach(item => {
                if (item.orderId == id) {
                    item.status = true;
                }
            })
            history.addNode(Date.now(), `${userz.username} đã xác nhận đơn hàng ${id}`, userz.username, userz.email);
            renderOrders(orderlist);
            order.loadOrder(orderz);
            addEventToPageorder();
        })
    })
}

function addeventpreviousdonhang() {
    var previous  = document.querySelector('.previousorderpagnition');
    previous.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            changePagesorder(orderlist);
            renderOrders(orderlist);
            addEventToPageorder();
        }
    })
}

function addeventchuaxuly() {
        var chuaxuly  = document.querySelectorAll('.thaotac .fa-solid.fa-x');
        chuaxuly.forEach(item => {
        item.addEventListener('click', function () {
            var id = parseInt(this.getAttribute('value'));
            var orderz = order.getOrders();
        orderz.forEach(item => {
                if (item.orderId == id && item.status == true) {
                    var userid = user.checkLoginId();
                    if (userid != 1) {
                        alert("Chỉ có admin mới có thể sử dụng thao tác này!");
                    }
                    else item.status = false;
                }
        })
            orderlist.forEach(item => {
                if (item.orderId == id && item.status == true) {
                    var userid = user.checkLoginId();
                    if (userid != 1) {
                        alert("Chỉ có admin mới có thể sử dụng thao tác này!");
                    }
                    else item.status = false;
                }
            })
            renderOrders(orderlist);
            order.loadOrder(orderz);
            addEventToPageorder();
        })
    })
}
function addeventnextdonhang() {
    var next  = document.querySelector('.nextorderpagnition');
    next.addEventListener('click', function () {
        if (currentPage < data.getMaxPages(orderlist, 20)) {
            currentPage++;
            changePagesorder(orderlist);
            renderOrders(orderlist);
            addEventToPageorder();
        }
    })
}

const filterorder = document.querySelector('.filterorderthoigian');
const filterinputFrom = document.querySelector('#dateInputfrom');
const filterinputTo = document.querySelector('#dateInputto');
const filterstatus = document.querySelector('.status');
filterorder.addEventListener('click', function (e) {
    e.preventDefault();
 //  if (filterinputFrom.value == '' || filterinputTo.value == '') alert("Khoảng thời gian để lọc có vẻ như chưa dầy đủ, xin vui lòng kiểm tra lại!");
    if (filterinputFrom.value == '' && filterinputTo.value == '') {
        currentPage = 1;
        var dateFrom = time.toTimeSpan('01/01/2023');
        var dateTo = Date.now();
        orderlist = order.getOrders();
        orderlist = filterOrderByDate(dateFrom, dateTo);
        console.log(orderlist);
        var status = filterstatus.value; // status mang gia tri 1 hoac 0
        orderlist = filterOrderByStatus(orderlist, status);
        renderPhanTrangOrder(orderlist);
        changePagesorder(orderlist);
        renderOrders(orderlist);
        addEventToPageorder();  
    }
    else if (filterinputFrom.value == '' && filterinputTo.value != '') {
        currentPage = 1;
        var dateFrom = time.toTimeSpan('01/01/2023');
        var dateTo = time.toTimeSpan(filterinputTo.value);
        orderlist = order.getOrders();
        orderlist = filterOrderByDate(dateFrom, dateTo);
        var status = filterstatus.value; // status mang gia tri 1 hoac 0
        orderlist = filterOrderByStatus(orderlist, status);
        renderPhanTrangOrder(orderlist);
        changePagesorder(orderlist);
        renderOrders(orderlist);
        addEventToPageorder();
    }
    else if (filterinputFrom.value != '' && filterinputTo.value == '') {
        currentPage = 1;
        var dateFrom = time.toTimeSpan(filterinputFrom.value);
        var dateTo = Date.now();
        orderlist = order.getOrders();
        orderlist = filterOrderByDate(dateFrom, dateTo);
        var status = filterstatus.value; // status mang gia tri 1 hoac 0
        orderlist = filterOrderByStatus(orderlist, status);
        renderPhanTrangOrder(orderlist);
        changePagesorder(orderlist);
        renderOrders(orderlist);
        addEventToPageorder();
    }
    else if (filterinputFrom.value != '' && filterinputTo.value != '') {
        currentPage = 1;
        var dateFrom = time.toTimeSpan(filterinputFrom.value);
        var dateTo =  time.toTimeSpan(filterinputTo.value);
        orderlist = order.getOrders();
        orderlist = filterOrderByDate(dateFrom, dateTo);
        var status = filterstatus.value; // status mang gia tri 1 hoac 0
        orderlist = filterOrderByStatus(orderlist, status);
        renderPhanTrangOrder(orderlist);
        changePagesorder(orderlist);
        renderOrders(orderlist);
        addEventToPageorder();
    }
})

function filterOrderByDate(dateFrom, dateTo) {
    var orderz = order.getOrders();
    var result = [];
    orderz.forEach(item => {
        if (item.orderTime >= dateFrom && item.orderTime <= dateTo) {
            result.push(item);
        }
    })
    return result;
}
// isProcessed = 1 <=> da xu ly
// isProcessed = 0 <=> chua xu ly
function filterOrderByStatus(orderlist, isProcessed) {
    var result = [];
    if (isProcessed == 1) {
        orderlist.forEach(item => {
            if (item.status == true) {
                result.push(item);
            }
        })
    }
    else if (isProcessed == 0) {
        orderlist.forEach(item => {
            if (item.status == false) {
                result.push(item);
            }
        })
    }
    else {
        result = orderlist;
    }
    return result;
}



/// add event chitiet don hang
addEventChiTietDonHang();
function addEventChiTietDonHang() {
   const divchitiet = document.querySelectorAll('.chitiet');
   const chitietcontent = document.querySelector('.chitietdonhangcontent');
   divchitiet.forEach(item => {
     item.addEventListener('click', function () {
        var html = '';
        var id = parseInt(this.getAttribute('value'));
        var orderz = order.getOrderID(id);
        console.log(orderz);
        orderz.cartList.forEach(itemz => {
            html += ` <tr>
            <td class="hinhanh"><img src="${itemz.productImg}"></td>
            <td class="tensp">${itemz.storeProduct.name}</td>
            <td class="soluongz">${itemz.soluong}</td>
            <td class="dungtichzz">${itemz.dungtich}</td>
            <td style="cursor: pointer;" class="hanhdong">${money.vnd(itemz.total)}</td>
          </tr>`
        })
        chitietcontent.innerHTML = html;
        document.querySelector('.activemauden').style.display = 'block';
        document.querySelector('.chitietdonhang').style.display = 'block';
        document.querySelector('.activemauden').addEventListener('click', function () {
            document.querySelector('.activemauden').style.display = 'none';
            document.querySelector('.chitietdonhang').style.display = 'none';
        })
        renderPageChiTietDonHang(orderz);
     })
   })

}   

// render phan trang cho chi tiet don hang
function renderPageChiTietDonHang(orderlistz) {
    var html = '';
    var maxPageShow = data.getMaxPages(orderlistz.cartList, 10);
    html += ` <button class="buttonChiTietDonHang" style="cursor: pointer;border-radius: 50%;height: 30px;width: 30px;background-color: #FF9077;border: black solid 1px;color: white;font-weight: bolder;text-align: center;"><i class="fa-solid fa-chevron-left"></i></button>`
    for (var i = 1; i <= maxPageShow; i++) {
        html += `<button class="buttonChiTietDonHangz" style="cursor: pointer;border-radius: 50%;height: 30px;width: 30px;background-color: #FF9077;border: black solid 1px;color: white;font-weight: bolder;text-align: center;" value=${i}>${i}</button>`
    }
    html += `<button class="buttonChiTietDonHang" style="cursor: pointer;border-radius: 50%;height: 30px;width: 30px;background-color: #FF9077;border: black solid 1px;color: white;font-weight: bolder;text-align: center;"><i class="fa-solid fa-chevron-right"></i></button>`
        const pageContainer = document.querySelector('.buttonChiTietDonHang');
        pageContainer.innerHTML = html;
    if (pageContainer.querySelector('.buttonChiTietDonHang buttonChiTietDonHangz'))
        pageContainer.querySelector('.buttonChiTietDonHang buttonChiTietDonHangz').classList.add('active');
    // addeventnextdonhangchitiet();
    // addeventpreviousdonhangchitiet();
    changePagesChitiet(orderlistz.cartList);
}
currenpagechitiet = 1;
function changePagesChitiet(list) {
    var perPage = 10;
    const pageBtns = document.querySelectorAll('.buttonChiTietDonHang buttonChiTietDonHangz');
    console.log(pageBtns);
    pageBtns.forEach(item => { 
        if (parseInt(item.getAttribute("value")) == currenpagechitiet) {
            item.classList.add('active');
        }
        else item.classList.remove('active');
    }); 
    var first = currenpagechitiet - 1;
    var last = currenpagechitiet + 1;
   
    if (currenpagechitiet == 1) {
        first = currenpagechitiet;
        last = currenpagechitiet + 2;
    }
    if (currenpagechitiet == data.getMaxPages(list, perPage)) {
        first = currenpagechitiet - 2;
        last = currenpagechitiet;
    }   
    pageBtns.forEach((item, index) => {
        if (index >= first-1 && index <= last-1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}
