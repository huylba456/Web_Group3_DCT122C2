let chitiet1 = "";
let chitietSp = "";
var addToCart = document.querySelector('.button__addtocart')
var modalCart = document.querySelector('.product__modal__cart__container');
var closeCart = document.querySelector('.product__modal__cart__close')
var modalDetails = document.querySelector('.product__modal__details')
listProducts = data.getProducts();
renderDetail();
var ProductIDD;
function renderDetail() {
    nameProduct = window.location.href.split('?')[1];
    nameProduct = nameProduct.split('-').join(' ');
    console.log(nameProduct);
    if (!nameProduct) return null;
    listProducts.forEach((item) => {
        var temp = item.name.replace("Nước Hoa ", "");
        if (temp == nameProduct) {

            ProductIDD = item.productId;
            return;
        }
    }) 
    const currentProduct = data.getProductId(ProductIDD);
    console.log(ProductIDD);
    if (!currentProduct) return null;
    var divDetail = document.querySelector('.content');
    var html = '';
    html += `<div class="content">
    <div class="product parent">
    <div class="product__name">${currentProduct.name}</div>
    <div class="child">
        <div class="product__left parent">
            <img class="product__img" src="${currentProduct.imgList[0]}">
        </div>
        <div class="product__right parent">
            <div class="product__price">${money.vnd(currentProduct.price3)}</div>
            <div class="product__rating">`
            // render sao
            var star = Math.floor(currentProduct.rate);
            for (var i = 1; i <= 5; i++) {
                if (i <= star)
                    html += '<i class="fa-solid fa-star" style="color: yellow;"></i>';
                else
                    html += '<i class="fa-regular fa-star" style="color: yellow;"></i>';
            }
            html += `</div>
            <div class="product__brand">Thương hiệu: ${data.vietHoaTatCaTuDau(currentProduct.brand)}</div>
            <div class="product__sex">Giới tính: ${data.vietHoaTatCaTuDau(currentProduct.gender)}</div>
            <div class="product__scent">Mùi hương: ${currentProduct.mui}</div>
            <div class="child">
            <div class="product__size">Lựa chọn size</div>
            <div class="product__amount">Số lượng</div>
        </div>
        <div class="child">
            <div class="product__size--box">
                <button class="product__size--btn active" value="0">${currentProduct.capacity[0]}</button>
                <button class="product__size--btn" value="1">${currentProduct.capacity[1]}</button>
                <button class="product__size--btn" value="2">${currentProduct.capacity[2]}</button>
            </div>
            <div class="product__amount--box">
                <button class="product__amount--minus">-</button>
                <input class="product__amount--number" type="text" value="1">
                <button class="product__amount--add">+</button>
            </div>
        </div>
            <div class="child">
                <button class="product__addtocart--btn" value="${ProductIDD}">Thêm vào giỏ hàng</button>
                <button class="product__buy--btn">Mua ngay</button>
            </div>
        </div>
    </div>
</div>
<div class="accordion">
    <div class="top">
        <div class="description">Chi tiết sản phẩm</div>
        <div class="review grayout">Đánh giá và bình luận</div>
        </div>
    <div class="bottom">
        <div class="description__content">${currentProduct.mota}</div>
        <div class="review__content">
            <div class="review__content--box">
                <div class="review__content--name">Nguyễn Văn A</div>
                <div class="review__content--rating">★★★★★</div>
                <div class="review__content--comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis tincidunt aliquam, nunc nibh ultricies nunc, quis ultricies nisl nunc vitae nunc. Sed euismod, nisl quis tincidunt aliquam, nunc nibh ultricies nunc, quis ultricies nisl nunc vitae nunc.</div>
                <div class="review__content--like">3</div>
            </div>
            <div class="review__content--box">
                <div class="review__content--name">Nguyễn Văn A</div>
                <div class="review__content--rating">★★★★★</div>
                <div class="review__content--comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis tincidunt aliquam, nunc nibh ultricies nunc, quis ultricies nisl nunc vitae nunc. Sed euismod, nisl quis tincidunt aliquam, nunc nibh ultricies nunc, quis ultricies nisl nunc vitae nunc.</div>
                <div class="review__content--like">3</div>
            </div>
        </div>
    </div>
    </div>
</div>`;
    divDetail.innerHTML = html;
    
    var modalDetails = document.querySelector('.product')
    
    const obj = modalDetails.querySelector('.product__addtocart--btn');
    addEventPriceBaseOnSize(currentProduct);
    addEventThanhTien(currentProduct);
    addEventQuantity(currentProduct);
    addEventOpenCart(obj);
    renderRecommend();
}



function renderRecommend() {
    var divRecommend = document.querySelector('.box');
    var recommendProduct = findRecommend();
    var html = '';
    recommendProduct.forEach((item) => {
        chitiet1 = item.name.replace("Nước Hoa ", "");
        chitietSp = "ProductDetail.html?" + chitiet1.split(' ').join('-');
        html += `<a class="product__item outline" href="${chitietSp}">
        <img class="product__item--img" src="${item.imgList[0]}">
        <div class="product__item--name">${item.name}</div>
        <div class="product__item--price">${money.vnd(item.price3)} - ${money.vnd(item.price1)}</div>
        <div class="product__item--size">${item.soSize} size</div>
        <div class="product__item--rating">`;
        //render sao
        var star = Math.floor(item.rate);
        for (var i = 1; i <= 5; i++) {
                if (i <= star)
                    html += '<i class="fa-solid fa-star" style="color: yellow;"></i>';
                else
                    html += '<i class="fa-regular fa-star" style="color: yellow;"></i>';
            }
        html += `</div>
        <div class="product__item--quickview">Xem sản phẩm</div> 
        </a>`
    })
    divRecommend.innerHTML = html;
}
findRecommend()
function findRecommend() {
    var ProductIDD;
    listProducts.forEach((item) => {
        var temp = item.name.replace("Nước Hoa ", "");
        if (temp == nameProduct) {
            ProductIDD = item.productId;
            return;
        }
    }) 
    const currentProduct = data.getProductId(ProductIDD);
    const list = data.getProducts();
    var result = [];
    var dem = 0;
    list.forEach((item) => {
        if (dem <= 3 && item.brand == currentProduct.brand) {
            result.push(item);
            dem++;
        }
    })
    console.log(result);
    return result;
}




function addEventThanhTien(currentProduct) {
    var size = document.querySelectorAll('.product__size--btn');
    const price = document.querySelector('.product__price');
    const amout = document.querySelector('.product__amount--number');
    size.forEach((item, index) => {
        item.addEventListener('click', function () {
            var num = parseInt(amout.getAttribute('value'));
            if (index == 0) price.innerHTML = `${money.vnd(currentProduct.price3 * num)}`;
            else if (index == 1) price.innerHTML = `${money.vnd(currentProduct.price2 * num)}`;
            else if (index == 2) price.innerHTML = `${money.vnd(currentProduct.price1 * num)}`;
        })
    })
}

function addEventQuantity(currentProduct) {
    const subBtn = document.querySelector('.product__amount--minus');
    const addBtn = document.querySelector('.product__amount--add');
    const amout = document.querySelector('.product__amount--number');
    const price = document.querySelector('.product__price');
    var size = document.querySelectorAll('.product__size--btn');
    subBtn.addEventListener('click', function () {
        var num = parseInt(amout.getAttribute('value')); 
        num = num > 1 ? --num : num; 
        amout.setAttribute('value', num); 
        size.forEach((item, index) => {
            if (item.classList.contains('active')) {
                // console.log(index);
                if (index == 0) price.innerHTML = `${money.vnd(currentProduct.price3 * num)}`;
                else if (index == 1) price.innerHTML = `${money.vnd(currentProduct.price2 * num)}`;
                else if (index == 2) price.innerHTML = `${money.vnd(currentProduct.price1 * num)}`;
            }
        })
    })
    addBtn.addEventListener('click', function () {
        var num = parseInt(amout.getAttribute('value'));
        num = num < 20 ? ++num : num;
        amout.setAttribute('value', num); 
        size.forEach((item, index) => {
            if (item.classList.contains('active')) {
                // console.log(index);
                if (index == 0) price.innerHTML = `${money.vnd(currentProduct.price3 * num)}`;
                else if (index == 1) price.innerHTML = `${money.vnd(currentProduct.price2 * num)}`;
                else if (index == 2) price.innerHTML = `${money.vnd(currentProduct.price1 * num)}`;
            }
        })
    })

}




function addEventOpenCart(obj) {
    // var modalDetails = document.querySelector('.quickview')
    const modalCart = document.querySelector('.product__modal__cart__container');
    const closeCart = document.querySelector('.product__modal__cart__close');
    obj.addEventListener('click', function () {
        const userid = user.checkLoginId();
        if (userid === null) {
            alert("Chưa đăng nhập, vui lòng đăng nhập để mua hàng!");
            return;
        }
        var soluong = parseInt(document.querySelector('.product__amount--number').value);
        var size = document.querySelectorAll('.product__size--btn');
        size.forEach(item => {
            if (item.classList.contains('active')) {
                var indexprice = parseInt(item.getAttribute('value'));
                var productid = parseInt(ProductIDD);
                if (indexprice == 0) cart.addItem(userid, productid, soluong, 0);
                else if (indexprice == 1) cart.addItem(userid,productid, soluong, 1);
                else if (indexprice == 2) cart.addItem(userid, productid, soluong, 2);
            }
        })
        closeCart.addEventListener('click', function () {   
        modalCart.classList.remove('active');
        })
        renderCartModal();
        // modalDetails.style.display = 'none';
        modalCart.classList.add('active');
        document.querySelector('.activemauden').style.display = 'block';
    })
}

function addEventPriceBaseOnSize(currentProduct) { 
    size = document.querySelectorAll('.product__size--btn');
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
   const closeCart = document.querySelector('.product__modal__cart__close');
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
    renderCartModal();
    modalCart.classList.add('active');
    document.querySelector('.activemauden').style.display = 'block';
})

function gotoorderpage() {
    window.location.href = "../Orderpage/Orderpagee.html";
}   

