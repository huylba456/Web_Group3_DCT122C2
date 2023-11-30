
Ordered(user.checkLoginId());

function getTotalMoneyOrder(list) {
    var tong = 0;
    list.forEach((item) => {
        tong += item.total;
    })
    return tong;
}

function Ordered(userid) {
    const orderList = order.getOrders();
    var html="";
    var html1='';
    var check=0;
    if (!orderList) return null;
    var orderl=document.querySelector('.productorderedd')
    if (!orderl) return null;
    orderList.forEach((item) => {
        if (item.userid === userid) {
            check=1;
            var date=new Date(item.orderTime);
            var newDate = date.toDateString() + " " + date.toTimeString().split(" ")[0];
            html =`<table>
            <tr>
            <div class="order__item">
            <td>
            <div class="order__item--id">
                ${item.orderId}
            </div>
            </td>
            <td>
            <div class="order__item--time">
                ${newDate}
            </div>
            </td>
            <td>
            <div class="order__item--status">
               COD( thanh toán khi nhận hàng )
            </div>
            </td>
            <td>
            <div class="order__item--total">
               ${money.vnd(1.05*getTotalMoneyOrder(item.cartList))}
            </div>
            </td>
            <td>
            <div class="order__item--detail">
                <a href="orderdetail.html?orderid=${item.orderId}" class="order__item--detail--btn">Chi tiết</a>
            </div>
            </td>
            </div>
            </tr>
            </table>
            `
            html1 +=html;
        }
})
    orderl.innerHTML = html1;
    document.querySelector('.empty_order_notifycation').style.display = 'none';
    if(check==0){
        document.querySelector('.empty_order_notifycation').style.display = 'block';
        document.querySelector(".product__pagination").style.display = "none";
    }
}
detaillll();
function detaillll() {
    chitietSp = location.href.split("=")[1] ;
    id=parseInt(chitietSp);
    const orderList = order.getOrders();
    var check=0;
    orderList.forEach((item) => {
        if (item.orderId === id) {
            check=1;
            var html = "";
            item.cartList.forEach((item) => {
                html += `<table>
                <tr>
                <td>
                    <div class="product__modal__cart__item__img">
                        <img src="${item.productImg}" alt="" width=18px; height=18px>
                    </div>
                </td>
                <td>
                        <div class="product__modal__cart__item__info__name">
                        ${data.getProductId(item.productId).name} 
                        </div>
                </td>
                <td>
                        <div>
                        (${item.dungtich})
                        </div>
                </td>
                <td>
                        <div class="product__modal__cart__item__info__price">
                            ${money.vnd(item.product_price)}
                        </div>
                </td>
                <td>
                        <div class="product__modal__cart__item__info__quantity">
                            ${item.soluong}
                        </div>
                </td>
                <td>
                        <div class="product__modal__cart__item__info__total">
                          ${money.vnd(item.total)}
                        </div>
                </td> 
                </tr>
                </table>  
                `
            })
            document.querySelector('.order__item--detail--btn--detail').innerHTML += html;
        }
    })
        document.querySelector('.empty_order_notifycationn').style.display = 'none';
    if(check==0){
         document.querySelector('.empty_order_notifycationn').style.display = 'block';
     }
}