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
    var myData = data.getProductAtPage(products, currentPage, perPage);
    const productBox = document.querySelector('.product__box');
    if (myData == null) {
        html = `<div class="product__content--image">
			<img src="./img/kocosp.png" alt="">
		</div>`;    
        productBox.innerHTML = html;
        sau.classList.add('active');
        truoc.classList.add('active');
        return;
    }
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
    var modalDetails = document.querySelector('.product__modal__details')
    var openModalDetails = self.querySelector('.product__item--quickview')
    var htmlStr = '';
    openModalDetails.addEventListener('click', function () {
        // cái product là nó lấy sản phẩm dựa trên id, parseInt(this.getAttribute('value')) chính là id của sp
        const product = data.getProductId(parseInt(this.getAttribute('value')));
        chitiet1 = product.name.replace("Nước Hoa ", "");
            chitietSp = "ProductDetail.html?" + chitiet1.split(' ').join('-');
        htmlStr = `
                <div class="product__modal__details__content">
		            <div class="product__modal__details__content__left">
			            <div class="product__modal__details__content__left__img">
                        <img src="${product.imgList[1]}" alt="" onerror="imgError(this)">
			            </div>
		            </div>
                    <div class="product__modal__details__content__right">
                    <h3 class="product__modal__details__name">${product.name}</h3>
                    <div class="product__modal__details__close">
                        <div style="font-size:30px"class="product__modal__details__close"><i class="fa fa-window-close" aria-hidden="true"></i></div>
                    </div>
                    <div class="product__modal__details__star">`
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
                    <div class="product__modal__details__price">
                        Giá: ${money.vnd(product.price3)}
                    </div>
                    <div class="product__modal__details__info">
                        <div><span class="thuoctinh"n>Thương hiệu:</span> ${data.vietHoaTatCaTuDau(product.brand)}</div>
                        <div><span class="thuoctinh"n>Giới tính:</span> ${data.vietHoaTatCaTuDau(product.gender)}</div>
                        <div><span class="thuoctinh"n>Mùi hương:</span> ${product.mui}</div>
                    </div>
                    <div>
                        <div class="chonsize"><span class="thuoctinh"n>Lựa chọn size: </span></div>`
                        htmlStr += `<div class="sizeselected">`
                        htmlStr += `<div class="size active" value="0">${product.capacity[0]}</div>`
                        for(var i = 1; i < product.soSize; i++) {
                            htmlStr += `<div class="size" value="${i}">${product.capacity[i]}</div>`
                        }
                        htmlStr += `</div>`
                    htmlStr += `</div>
                    <div class="product__modal__details__quantity__group">
            
                       <div class="product__modal__details__quantity__modal__box">
                       <span class="thuoctinh">Số lượng:</span>
                        <div class="editquantity">
                        <div class="product__modal__details__quantity__item modal__details__quantity__minus"><i class="fas fa-chevron-left"></i></div>
                        <div class="product__modal__details__quantity__item modal__details__quantity__number">1</div>
                        <div class="product__modal__details__quantity__item modal__details__quantity__plus"><i class="fas fa-chevron-right"></i></div>
                        </div>
                       </div>
                       <div class="money"><span class="thuoctinh">Thành tiền: </span> <div class="total">${money.vnd(product.price3)}</div></div>
                        <div class="product__modal__details__add-to-cart__buy-now">
                            <div class="product__modal__details__add-to-cart"><i class="fas fa-shopping-bag"></i>Thêm Vào Giỏ</div>
                            <div class="product__modal__details__buy-now"><i class="fas fa-shopping-bag"></i> Mua Ngay</div>
                            <div class="product__item__button xemchitiet">
                            <a href="${chitietSp}" style="color: black">Xem chi tiết</a>
                            </div>
                        </div>
                    </div>
		        </div>
	        </div>`;
            modalDetails.innerHTML = htmlStr;
            modalDetails.classList.add('active');
            var closeModalDetails = modalDetails.querySelector('.product__modal__details__close');
            closeModalDetails.addEventListener('click', function () {
                modalDetails.classList.remove('active')
            })
            const obj = modalDetails.querySelector('.product__modal__details__add-to-cart');
            addEventOpenCart(obj, openModalDetails);
            addEventPriceBaseOnSize(product);
            addEventThanhTien(product);
            addEventQuantity(product);

    },);
}

function addEventThanhTien(product) {
    var size = document.querySelectorAll('.size');
    const price = document.querySelector('.total');
    const amout = document.querySelector('.modal__details__quantity__number');
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
    const subBtn = document.querySelector('.modal__details__quantity__minus');
    const addBtn = document.querySelector('.modal__details__quantity__plus');
    const amout = document.querySelector('.modal__details__quantity__number');
    const price = document.querySelector('.total');
    var size = document.querySelectorAll('.size');
    subBtn.addEventListener('click', function () {
        var num = parseInt(amout.innerHTML);
        num = num > 1 ? --num : num;
        amout.textContent = num;
        size.forEach((item, index) => {
            if (item.classList.contains('active')) {
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
function addEventPriceBaseOnSize(product) {
    size = document.querySelectorAll('.size');
    size.forEach(item => {
        item.addEventListener('click', function () {
            size.forEach(item => {
                item.classList.remove('active');
            })
            this.classList.add('active');
            const price = document.querySelector('.product__modal__details__price');
            var indexprice = parseInt(this.getAttribute('value'));
            if (indexprice == 0) price.innerHTML = `<span class="thuoctinh">Giá:</span> ${money.vnd(product.price3)}`;
            else if (indexprice == 1) price.innerHTML = `<span class="thuoctinh">Giá:</span> ${money.vnd(product.price2)}`;
            else if (indexprice == 2) price.innerHTML = `<span class="thuoctinh">Giá:</span> ${money.vnd(product.price1)}`;
        })
    })
}

function addEventOpenCart(obj,quickview) {
    const modalCart = document.querySelector('.product__modal__cart__container');
    const closeCart = document.querySelector('.product__modal__cart__close');
    obj.addEventListener('click', function () {
        const userid = user.checkLoginId();
        if (userid === null) {
            alert("Chưa đăng nhập, vui lòng đăng nhập để mua hàng!");
            return;
        }
        var soluong = parseInt(document.querySelector('.product__modal__details__quantity__item.modal__details__quantity__number').innerHTML);
        var size = document.querySelectorAll('.size');
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
        modalDetails.classList.remove('active');
        modalCart.classList.add('active');
        document.querySelector('.activemauden').style.display = 'block';
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
const cartBtn = document.querySelector('.vieworder');
cartBtn.addEventListener('click', function () {
    renderCartModal();
    modalCart.classList.add('active');
    document.querySelector('.activemauden').style.display = 'block';
})

function gotoorderpage() {
    window.location.href = "../Orderpage/Orderpagee.html";
}