renderDetail(); 
function renderDetail() {
    nameProduct = window.location.href.split('?')[1];
    nameProduct = nameProduct.split('-').join(' ');
    if (!nameProduct) return null;
    var ProductIDD;
    var listProducts = data.getProducts();
    listProducts.forEach((item) => {
        var temp = item.name.replace("Nước Hoa ", "");
        if (temp == nameProduct) {

            ProductIDD = item.productId;
            return;
        }
    }) 
    const currentProduct = data.getProductId(ProductIDD);
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
            <div class="product__size">Lựa chọn size:</div>
            <div class="child">
                <button class="product__size--btn active">${currentProduct.capacity[0]}</button>
                <button class="product__size--btn">${currentProduct.capacity[1]}</button>
                <button class="product__size--btn">${currentProduct.capacity[2]}</button>
            </div>
            <div class="child">
                <button class="product__addtocart--btn">Thêm vào giỏ hàng</button>
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
        <div class="description__content">
            ${currentProduct.mota};
            </div>
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
}

renderRecommend();
function renderRecommend() {
    var divRecommend = document.querySelector('.box');
    var recommendProduct = findRecommend();
    var html = '';
    recommendProduct.forEach((item) => {
        chitiet1 = item.name.replace("Nước Hoa ", "");
        chitietSp="ProductDetail.html?"+chitiet1.split(' ').join('-');
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
        if (dem <= 4 && item.brand == currentProduct.brand) {
            result.push(item);
            dem++;
        }
    })
    console.log(result);
    return result;
}