var modalCart = document.querySelector('.product__modal__cart__container');
const cartBtn = document.querySelector('.nav__cart');
cartBtn.addEventListener('click', function () {
    renderCartModal();
    modalCart.classList.add('active');
    document.querySelector('.activemauden').style.display = 'block';
})
function renderCartModal() {
   const closeCart = document.querySelector('.product__modal__cart__close');
    var html = '';
    const cartModal = document.querySelector('.product__modal__cart__content');
    // const userid = user.checkLoginId();
    // if (userid === null) {
    //     cartModal.innerHTML = html;
    //     return false;
    // }
    // const cartList = cart.getCartList(userid);
    // if (cartList.length > 0) {
    //     cartList.forEach(item => {
            html += `
            <div class="product__modal__cart__content__item">
            <div class="product__modal__cart__content__item__info__close" value=1><i class="fas fa-window-close"></i></div>
					 <div class="product__modal__cart__content__item__image">
							<img src="img/img1.jpg" alt="" onerror="imgError(this)">
						</div>
						<div class="product__modal__cart__content__item__info">
							<div class="product__modal__cart__content__item__info__title">
								<h5>Nước Hoa Louis Vuitton Heures DAbsence EDP(100ml)</h5>
							</div>
							<div class="product__modal__cart__content__item__info__price__quantity">
								<div class="product__modal__cart__content__item__info__quantity">
									<div class="product__modal__cart__content__item__info__quantity__minus"><i class="fas fa-chevron-left"></i></div>
									<div class="product__modal__cart__content__item__info__quantity__number">1</div>
									<div class="product__modal__cart__content__item__info__quantity__plus"><i class="fas fa-chevron-right"></i></div>
								</div>
								<div class="product__modal__cart__content__item__info__price">1.980.000đ</div>
							</div>
						</div>
				</div>`;
                html += `<div class="product__modal__cart__content__total">
                    <h5>Tạm tính:</h5>
                    <div class="product__modal__cart__content__total__price">1.980.000đ</div>
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
     const removeItem = document.querySelector('.product__modal__cart__content__item__info__close'); 
        removeItem.addEventListener('click', function () {
            cartModal.innerHTML = '<div class="Notification__add-to-cart">Giỏ hàng của bạn đang trống!</div>';

        });
        document.querySelector('.product__modal__cart__content__item__info__quantity__minus').addEventListener('click', () => {
            var value=document.querySelector('.product__modal__cart__content__item__info__quantity__number').innerHTML;
            value--;
            if(value<1) value=1;
            document.querySelector('.product__modal__cart__content__item__info__quantity__number').innerHTML=value;
        });
         document.querySelector('.product__modal__cart__content__item__info__quantity__plus').addEventListener('click', () => {
            var value=document.querySelector('.product__modal__cart__content__item__info__quantity__number').innerHTML;
            value++;
            document.querySelector('.product__modal__cart__content__item__info__quantity__number').innerHTML=value;
         });   
    closeCart.addEventListener('click', function () {
        modalCart.classList.remove('active');
        document.querySelector('.activemauden').style.display = 'none';
    })

}
function gotoorderpage() {
    location.href = 'Orderpage.html';
}
