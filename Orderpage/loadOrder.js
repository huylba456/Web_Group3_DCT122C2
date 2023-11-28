var currenpage = 1;
const perpage = 5;
loadOrder();
function loadOrder() {
    const userid = user.checkLoginId();
    const cartList = cart.getCartList(userid);
    var myData = data.getProductAtPage(cartList, currenpage, perpage);
    console.log(myData);
    var html = '';
    if (cartList.length == 0) {
        html += '<img class="noorder" src="./img/noorder.png">';
    }
    else {
        myData.forEach((item) => {
            html += `<td> 
            <div class="cart-info">
                <img src="${item.productImg}">
                <div>
                    <p>${data.getProductId(item.productId).name}</p>
                    <small>Giá: ${money.vnd(item.product_price)} |</small>
                    <a href="#" class="deleteproductorder">Xoá</a>
                </div>
    
            </div> 
        </td>
        <td>${item.dungtich}</td>
        <td> <input class="dieuchinhsoluong" type="number" value="${item.soluong}"></td>
        <td>${money.vnd(item.product_price)}</td>
    </tr>`
        })
    }
    document.querySelector(".productordered").innerHTML = html;
}
// nếu điều chỉnh số lượng trong  ô input số lượng thì cập nhật lại giỏ hàng
const dieuchinhsoluong = document.querySelectorAll(".dieuchinhsoluong");
dieuchinhsoluong.forEach((item, index) => {
    item.addEventListener("change", (e) => {
        const userid = user.checkLoginId();
        const cartList = cart.getCartList(userid);
        cartList[index].soluong = e.target.value;
        user.updateCart(userid, cartList);
        renderTotalprice();
    })
})

renderTotalprice();
function renderTotalprice() {
    const totalDiv = document.querySelector(".total-price");
    var html = '';
    const userid = user.checkLoginId();
    const cartList = cart.getCartList(userid);
        html += `<table>
        <tr>
            <td>Tạm tính</td>
            <td>${money.vnd(cart.getTotalMoney(userid))}</td>
        </tr>
        <tr>
            <td>Thuế (5% giá trị đơn hàng) </td>
            <td>${money.vnd(0.05*cart.getTotalMoney(userid))}</td>
        </tr>
        <tr>
            <td>Tổng chi phí</td>
            <td>${money.vnd(1.05*cart.getTotalMoney(userid))}</td>
        </tr>
    </table>`
    totalDiv.innerHTML = html;
}

// add event cho nut click
function deleteOrdered() {
    const deleteBut = document.querySelectorAll(".deleteproductorder");
    deleteBut.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const userid = user.checkLoginId();
        const cartList = cart.getCartList(userid);
        cartList.splice(index, 1);
        user.updateCart(userid, cartList);
        loadOrder();
        renderTotalprice();
        deleteOrdered();
        // gọi lại deleteordered là khi người dùng xóa 1 thằng trong carlist rồi
        // thì index của deletebut sẽ bị thay đổi nên phải gọi lại deleteordered 1 lần nữa để đúng index
    })
})
}

deleteOrdered();

renderphantrang();
function renderphantrang() {
    var html = '';
    var currentid = user.checkLoginId();
    var product_order = cart.getCartList(currentid);
    const maxPageShow = data.getMaxPages(product_order,perpage);
    html += "<div class='previous'>«</div>";
    for (var i = 1; i <= maxPageShow; i++) {
        html += `<a value=${i}>${i}</a>`
    }
    html += "<div class='next'>»</div>"
        const pageContainer = document.querySelector('.product__pagination');
        pageContainer.innerHTML = html;
    if (pageContainer.querySelector('.product__pagination a'))
        pageContainer.querySelector('.product__pagination a').classList.add('active');
}
addEvenPhanTrang();
function addEvenPhanTrang() {
    var pageBtnns = document.querySelectorAll('.product__pagination a');
    pageBtnns.forEach(item => {
        item.addEventListener('click', function () {
            currenpage = parseInt(this.getAttribute("value"));
            changespageOrderpage();
            loadOrder();
            scrollToProduct();
        })
    })
}
function changespageOrderpage() {
        const pageBtns = document.querySelectorAll('.product__pagination a');
        var userid = user.checkLoginId();
        var cartList = cart.getCartList(userid);
        pageBtns.forEach(item => { 
            if (parseInt(item.getAttribute("value")) == currenpage) {
                item.classList.add('active');
            }
            else item.classList.remove('active');
        })
        if (data.getMaxPages(cartList, perpage) == 1) {
            truoc.classList.add('active');
            sau.classList.add('active');
        }
        var first = currenpage - 1;
        var last = currenpage + 1;
       
        if (currenpage == 1) {
            first = currenpage;
            last = currenpage + 2;
        }
        if (currenpage == data.getMaxPages(cartList, perpage)) {
            first = currenpage - 2;
            last = currenpage;
        }   
        pageBtns.forEach((item, index) => {
            if (index >= first-1 && index <= last-1) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
}


function scrollToProduct() {
    document.querySelector('.top').scrollIntoView();
}

//thêm thông tin người dùng vào ô input thông tin vận chuyển
fillInput();
const editinfo = document.querySelector('.check-shipping-info');
editinfo.addEventListener("click", function() {
    fillInput();
})
function fillInput() {
    var id = user.checkLoginId();
    var userz = user.getUserId(id);
    document.querySelector('.ten').value = userz.name;
    document.querySelector('.sdt').value = userz.phone;
    document.querySelector('.diachi').value = userz.address;
    document.querySelector('.save').addEventListener("click", function() {
        if (checkInputPhone()) {
            userz.name = document.querySelector('.ten').value;
            userz.phone = document.querySelector('.sdt').value;
            userz.address = document.querySelector('.diachi').value;
            user.updateInfoUser(id, userz);
            document.querySelector('.modal').style.display = 'none';
            document.querySelector('.activemauden').style.display = 'none';
        }
    })
}

function clickToBuyModalCart() {
    const loginId = user.checkLoginId();
    if (cart.getCartList(loginId).length > 0) {
        order.makeOrder(cart.getCartList(loginId), loginId, Date.now());
    }
}

const checkout = document.querySelector('.checkout');
checkout.addEventListener("click", function() {
    if (document.querySelector('.ten').value == ''|| document.querySelector('.sdt').value == '' || document.querySelector('.diachi').value == '') {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
    }
    clickToBuyModalCart();
    alert('Đặt hàng thành công! quay về trang chủ.');
    window.location.href = "../ProductPage/ProductPage.html";
})

let listMessage = document.querySelectorAll(".listMes");
function checkInputPhone() {
    if (document.querySelector('.sdt').value == null || document.querySelector('.sdt').value == "") {
        return 1;
    }
    let returnValue = form.validatePhone(document.querySelector('.sdt').value);
    if (returnValue.value === false) {
        listMessage[1].textContent = returnValue.str;
        listMessage[1].style.display = "block";
        return 0;
    }
    listMessage[1].style.display = "none";
    return 1;
}