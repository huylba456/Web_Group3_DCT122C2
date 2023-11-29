let chitiet1 = "";
let chitietSp = "";
function renderPages() {
    var html = ''
    html += "<div class='previous'>&laquo;</div>";
    const maxPageShow = data.getMaxPages(products,perPage)
    for (var i = 1; i <= maxPageShow; i++) {
        html += `<a value=${i}>${i}</a>`
    }
    html += "<div class='next'>&raquo;</div>"
        const pageContainer = document.querySelector('.product__pagination');
        pageContainer.innerHTML = html;
    if (pageContainer.querySelector('.product__pagination a'))
        pageContainer.querySelector('.product__pagination a').classList.add('active');
}

function renderProduct() {
    html = '';
    const productBox = document.querySelector('.product__box');
    if (products.length == 0) {
        html = `
        <div class="product__content--image">
			<img src="./img/9170826.jpg" alt="">    
            <p class="nofound">Không tìm thấy sản phẩm nào!</p>
		</div>`;    
        productBox.innerHTML = html;
        sau.classList.add('active');
        truoc.classList.add('active');
        return;
    }
    var myData = data.getProductAtPage(products, currentPage, perPage);
    myData.forEach(e => {
        html += `<div class="product__item outline">
            <img class="product__item--img" src="${e.imgList[0]}" onerror="imgError(this)" alt="">
            <div class="product__item--name">${e.name}</div>
            <div class="product__item--price">${money.vnd(e.price3)} - ${money.vnd(e.price1)}</div>
            <div class="product__item--size">${e.soSize} size</div>
            <div class="product__item--rating ">`
            for (var i = 1; i <= 5; i++) {
                if (i <= e.rate) {
                    html += '<i class="fa-solid fa-star" style="color: yellow;"></i>';
                }
                else {
                    html += '<i class="fa-regular fa-star" style="color: yellow;"></i>';
                }
            }
            chitiet1 = e.name.replace("Nước Hoa ", "");
            chitietSp = "ProductDetail.html?" + chitiet1.split(' ').join('-');
            html += `</div> 
                     <div class="product__item--quickview" value="${e.productId}">Xem nhanh</div>
                     </div>` 
            

    })
    productBox.innerHTML = html;
    const productListItems = productBox.querySelectorAll('.product__item.outline');
    productListItems.forEach((product) => {
        renderProductDetail(product);
    })
}

function renderProductDetail(self) {
    var modalDetails = document.querySelector('.quickview')
    var openModalDetails = self.querySelector('.product__item--quickview')
    var htmlStr = '';
    openModalDetails.addEventListener('click', function () {
        // cái product là nó lấy sản phẩm dựa trên id, parseInt(this.getAttribute('value')) chính là id của sp
        const product = data.getProductId(parseInt(this.getAttribute('value')));
        chitiet1 = product.name.replace("Nước Hoa ", "");
        chitietSp = "ProductDetail.html?" + chitiet1.split(' ').join('-');
        htmlStr = `
        <div class="quickview__background"></div>
        <div class="quickview__box child">
            <button class="quickview__close"></button>
            <div class="parent">
                <img class="quickview__img" src="${product.imgList[1]}" onerror="imgError(this)" alt="">
                <div class="quickview__rating">`
                         // Phần này in ra số sao dựa trên số sao của sản phẩm
                            for (var i = 1; i <= 5; i++) {
                                if (i <= product.rate) {
                                    htmlStr += `<i class="fa-solid fa-star" style="color: #eeff00;"></i>`;
                                }
                                else {
                                    htmlStr += `<i class="fa-regular fa-star" style="color: #eeff00;"></i>`;
                                }
                            }
                            // Phần này in ra số sp đã bán dựa trên số random từ 1 tới 50
                            htmlStr += `<span>${product.rate} sao</span>
                                        <span>(${(Math.floor(Math.random() * (50)) + 1)} Đã bán)</span>
                </div>
                <div class="quickview__sold"></div>
            </div>
            <div class="parent">
                <div class="quickview__name">${product.name}</div>
                <div class="quickview__brand">Thương hiệu: ${product.brand}</div>
                <div class="quickview__sex">Giới tính: ${product.gender}</div>
                <div class="quickview__scent">Mùi hương: ${product.mui}</div>
                <div class="child">
                    <div class="quickview__size">Lựa chọn size</div>
                    <a class="quickview__detail" href="${chitietSp}">Chi tiết sản phẩm</a>
                </div>
                <div class="quickview__size--box">`
                    htmlStr += `<button class="quickview__size--btn active" value="0">${product.capacity[0]}</button>`
                    for(var i = 1; i < product.soSize; i++) {
                        htmlStr += `<button class="quickview__size--btn" value="${i}">${product.capacity[i]}</button>`
                    }
                    htmlStr += `</div>
                <div class="quickview__amount">
                    <h1>Số lượng</h1>
                    <button class="quickview__amount--minus">-</button>
                    <div class="quickview__amount--number">1</div>
                    <button class="quickview__amount--add">+</button>
                </div>
                <div class="quickview__total">Thành tiền: <span class="total">${money.vnd(product.price3)}</span></div>
                <div class="quickview__addtocart--btn">Thêm vào giỏ hàng</div>
                <div class="quickview__buy--btn">Mua ngay</div>
            </div>
        </div>`
        


        
        modalDetails.innerHTML = htmlStr;
        modalDetails.style.display = 'flex';
        var closeModalDetails = modalDetails.querySelector('.quickview__close');
        var closeModalDetails2 = modalDetails.querySelector('.quickview__background');
        closeModalDetails.addEventListener('click', function () {
            modalDetails.style.display = 'none'
        })
        closeModalDetails2.addEventListener('click', function () {
            modalDetails.style.display = 'none'
            })
            const obj = modalDetails.querySelector('.quickview__addtocart--btn');
            const objmuangay = modalDetails.querySelector('.quickview__buy--btn');
            addEventOpenCart(obj, openModalDetails);
            addEventMuaNgay(objmuangay, openModalDetails);
            addEventPriceBaseOnSize(product);
            addEventThanhTien(product);
            addEventQuantity(product);

    },);
}

function addEventMuaNgay(obj, quickview) {
    obj.addEventListener('click', function () {
        const userid = user.checkLoginId();
        if (userid === null) {
            alert("Chưa đăng nhập, vui lòng đăng nhập để mua hàng!");
            return;
        }
        var soluong = parseInt(document.querySelector('.quickview__amount--number').innerHTML);
        var size = document.querySelectorAll('.quickview__size--btn');
        size.forEach(item => {
            if (item.classList.contains('active')) {
                var indexprice = parseInt(item.getAttribute('value'));
                var productid = parseInt(quickview.getAttribute('value'));
                if (indexprice == 0) cart.addItem(userid, productid, soluong, 0);
                else if (indexprice == 1) cart.addItem(userid,productid, soluong, 1);
                else if (indexprice == 2) cart.addItem(userid, productid, soluong, 2);
            }
        })
        window.location.href = "../Orderpage/Orderpagee.html";
})
}

function addEventThanhTien(product) {
    var size = document.querySelectorAll('.quickview__size--btn');
    const price = document.querySelector('.total');
    const amout = document.querySelector('.quickview__amount--number');
    size.forEach((item, index) => {
        item.addEventListener('click', function () {
            var num = parseInt(amout.innerHTML);
            if (index == 0) price.innerHTML = `${money.vnd(product.price3 * num)}`;
            else if (index == 1) price.innerHTML = `${money.vnd(product.price2 * num)}`;
            else if (index == 2) price.innerHTML = `${money.vnd(product.price1 * num)}`;
        })
    })
}

function addEventQuantity(product) {
    const subBtn = document.querySelector('.quickview__amount--minus');
    const addBtn = document.querySelector('.quickview__amount--add');
    const amout = document.querySelector('.quickview__amount--number');
    const price = document.querySelector('.total');
    var size = document.querySelectorAll('.quickview__size--btn');
    subBtn.addEventListener('click', function () {
        var num = parseInt(amout.innerHTML);
        num = num > 1 ? --num : num;
        amout.textContent = num; 
        size.forEach((item, index) => {
            if (item.classList.contains('active')) {
                console.log(index);
                if (index == 0) price.innerHTML = `${money.vnd(product.price3 * num)}`;
                else if (index == 1) price.innerHTML = `${money.vnd(product.price2 * num)}`;
                else if (index == 2) price.innerHTML = `${money.vnd(product.price1 * num)}`;
            }
        })
    })
    addBtn.addEventListener('click', function () {
        var num = parseInt(amout.innerHTML);
        num = num < 20 ? ++num : num;
        amout.textContent = num;
        size.forEach((item, index) => {
            if (item.classList.contains('active')) {
                if (index == 0) price.innerHTML = `${money.vnd(product.price3 * num)}`;
                else if (index == 1) price.innerHTML = `${money.vnd(product.price2 * num)}`;
                else if (index == 2) price.innerHTML = `${money.vnd(product.price1 * num)}`;
            }
        })
    })

}




function addEventOpenCart(obj,quickview) {
    var modalDetails = document.querySelector('.quickview')
    const modalCart = document.querySelector('.product__modal__cart__container');
    const closeCart = document.querySelector('.product__modal__cart__close');
    obj.addEventListener('click', function () {
        const userid = user.checkLoginId();
        if (userid === null) {
            alert("Chưa đăng nhập, vui lòng đăng nhập để mua hàng!");
            return;
        }
        var soluong = parseInt(document.querySelector('.quickview__amount--number').innerHTML);
        var size = document.querySelectorAll('.quickview__size--btn');
        size.forEach(item => {
            if (item.classList.contains('active')) {
                var indexprice = parseInt(item.getAttribute('value'));
                var productid = parseInt(quickview.getAttribute('value'));
                if (indexprice == 0) cart.addItem(userid, productid, soluong, 0);
                else if (indexprice == 1) cart.addItem(userid,productid, soluong, 1);
                else if (indexprice == 2) cart.addItem(userid, productid, soluong, 2);
            }
        })
        closeCart.addEventListener('click', function () {   
        modalCart.classList.remove('active');
        })
        renderCartModal();
        modalDetails.style.display = 'none';
        modalCart.classList.add('active');
        document.querySelector('.activemauden').style.display = 'block';
    })
}

function addEventPriceBaseOnSize(product) {
    size = document.querySelectorAll('.quickview__size--btn');
    size.forEach(item => {
        item.addEventListener('click', function () {
            size.forEach(item => {
                item.classList.remove('active');
            })
            this.classList.add('active');
            // const price = document.querySelector('.quickview__total');
            // var indexprice = parseInt(this.getAttribute('value'));
            // if (indexprice == 0) price.innerHTML = `<span>Thành tiền:</span> ${money.vnd(product.price3)}`;
            // else if (indexprice == 1) price.innerHTML = `<span>Thành tiền: </span> ${money.vnd(product.price2)}`;
            // else if (indexprice == 2) price.innerHTML = `<span>Thành tiền: </span> ${money.vnd(product.price1)}`;
        })
    })
}


function renderCartModal() {
    var html = '';
    const cartModal = document.querySelector('.product__modal__cart__content');
    const userid = user.checkLoginId();
    if (userid === null) {
        cartModal.innerHTML = html;
        return false;
    }
    const cartList = cart.getCartList(userid);
    if (cartList.length > 0) {
        cartList.forEach(item => {
            html += `
            <div class="product__modal__cart__content__item">
            <div class="product__modal__cart__content__item__info__close" value=${item.cartId}><i class="fas fa-window-close"></i></div>
					 <div class="product__modal__cart__content__item__image">
							<img src="${item.productImg}" alt="" onerror="imgError(this)">
						</div>
						<div class="product__modal__cart__content__item__info">
							<div class="product__modal__cart__content__item__info__title">
								<h5>${data.getProductId(item.productId).name} (${item.dungtich})</h5>
							</div>
							<div class="product__modal__cart__content__item__info__price__quantity">
								<div class="product__modal__cart__content__item__info__quantity">
									<div class="product__modal__cart__content__item__info__quantity__minus"><i class="fas fa-chevron-left"></i></div>
									<div class="product__modal__cart__content__item__info__quantity__number">${item.soluong}</div>
									<div class="product__modal__cart__content__item__info__quantity__plus"><i class="fas fa-chevron-right"></i></div>
								</div>
								<div class="product__modal__cart__content__item__info__price" value=${item.product_price}>${money.vnd(item.product_price * item.soluong)}</div>
							</div>
						</div>
				</div>`;
        })
    }
    else {
        html += `<div class="Notification__add-to-cart">Giỏ hàng của bạn đang trống!</div>`
    }

    html += `<div class="product__modal__cart__content__total">
                    <h5>Tạm tính:</h5>
                    <div class="product__modal__cart__content__total__price">${money.vnd(cart.getTotalMoney(userid))}</div>
            </div>
            <div class="product__modal__cart__content__checkout__viewcart">
                <div class="product__modal__cart__content__checkout__item checkout__button" onclick="gotoorderpage()">
                    <i class="fas fa-lock"></i> <h5>THANH TOÁN HÓA ĐƠN</h5>
                </div>
                <div class="product__modal__cart__content__viewcart__item viewcart__item" onclick="clickToViewOrder()">
                    <i class="fas fa-shopping-cart"></i> <h5>XEM CÁC ĐƠN HÀNG ĐÃ ĐẶT</h5>
                </div>
            </div>
            `;
    cartModal.innerHTML = html; 
    const removeItem = document.querySelectorAll('.product__modal__cart__content__item__info__close');  
    removeItem.forEach(item => {
        item.addEventListener('click', function () {
            cart.removeItem(userid, parseInt(this.getAttribute('value')));
            renderCartModal();
        })  
    })
    const listItem = document.querySelectorAll('.product__modal__cart__content__item');
    listItem.forEach(item => {
        const subBtn = item.querySelector('.product__modal__cart__content__item__info__quantity__minus');
        const addBtn = item.querySelector('.product__modal__cart__content__item__info__quantity__plus');
        const amout = item.querySelector('.product__modal__cart__content__item__info__quantity__number');
        const cartId = parseInt(item.querySelector('.product__modal__cart__content__item__info__close').getAttribute('value'));
        const price = item.querySelector('.product__modal__cart__content__item__info__price');
        subBtn.addEventListener('click', function() {
            var num = parseInt(amout.innerHTML);
            num = num > 1 ? --num : num;
            amout.textContent = num;
            price.innerHTML = parseInt(price.getAttribute('value')) * num + "đ";
            cart.changeAmout(userid, cartId, num);
            renderCartModal();
        })
        addBtn.addEventListener('click', function () {
            var num = parseInt(amout.innerHTML);
            num = num < 20 ? ++num : num;
            amout.textContent = num;
            price.innerHTML = parseInt(price.getAttribute('value')) * num + "đ";
            cart.changeAmout(userid, cartId, num);
            renderCartModal();
        })
    })
    closeCart.addEventListener('click', function () {
        modalCart.classList.remove('active');
        document.querySelector('.activemauden').style.display = 'none';
    })
}


//render giỏ hàng xem nhanh khi ấn vào icon giỏ hàng
const cartBtn = document.querySelector('.nav__cart');
cartBtn.addEventListener('click', function () {
    userz = user.checkLoginId();
    if (userz == null) {
        alert("Vui lòng đăng nhập để xem giỏ hàng!");
        return;
    }
    renderCartModal();
    modalCart.classList.add('active');
    document.querySelector('.activemauden').style.display = 'block';
})

function gotoorderpage() {
    window.location.href = "../Orderpage/Orderpagee.html";
}   