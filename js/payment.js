// creat hashmap
var mapsize = new Map();
// add key, value
mapsize.set('S', 'Nhỏ');
mapsize.set('M', 'Vừa');
mapsize.set('L', 'Lớn');

var mapde = new Map();
mapde.set('D', 'Dày');
mapde.set('M', 'Mỏng');
mapde.set('V', 'Vừa');

loadUserInfo();
loadTableOrdered();
function loadTableOrdered() {
    // ajax get currentuser session
    $.ajax({
        url: './controller/ProductsController.php',
        type: 'post',
        dataType: 'json',
        data: {
            request: 'getCurrentUser'
        },
        success: function(data) {
           // data sẽ bao gồm result (thông tin ng dùng hiện tại) và cart (giỏ hàng)
           if (!data) {
                alert("Bạn chưa đăng nhập");
                return;
           }
           var html = '';
           var total = 0;
           data['cart'].forEach(function(item) {
                html += `<tr class="orderitem">
                <td class="product-description">
                    <img src="${item['Product'].Img}" alt=""> ${item['Product'].TenSP}
                </td>
                <td>Đế: ${mapsize.get(item['Product'].MaSize)} - Size: ${mapde.get(item['Product'].MaVien)}</td>
                <td>${item['Quantity']}</td>
                <td>${toVND(item['Product'].GiaTien)}</td>
                <td>${toVND(item['Product'].GiaTien * item['Quantity'])}</td>
            </tr>`;
            total += item['Product'].GiaTien * item['Quantity'];
           })

           html += `<tr>
           <td colspan="3" id="total">Tổng tiền:</td>
           <td id="total-price">${toVND(total)}</td>
           <td>
               <div class="close-bg">
                   <button class="close">
                       Đóng
                   </button>
               </div>
           </td>
       </tr>`;
           document.querySelector('.ordertable').innerHTML = html;
           document.querySelector('.price').innerHTML = toVND(total);
           addeventclose();
           console.log(data['cart']);
           addeventdathang(data['cart']);
        }
        

    })

}

function loadUserInfo() {
    $.ajax({
        url: './controller/ProductsController.php',
        type: 'post',
        dataType: 'json',
        data: {
            request: 'getCurrentUser'
        },
        success: function(data) {
            console.log(data);
            document.querySelector('.name').value = data['result'][0].Ho + ' ' + data['result'][0].Ten; 
            document.querySelector('.email').value = data['result'][0].SDT;
            document.querySelector('.sdt').value = data['result'][0].Email;
            document.querySelector('.diachi').value = data['result'][0].DiaChi;
        }
    })
}

function addeventdathang(listProduct) {
    var dathangbtn = document.querySelector('.dathangbtn');
    dathangbtn.addEventListener('click', function() {
        var name = document.querySelector('.name').value;
        var email = document.querySelector('.email').value;
        var sdt = document.querySelector('.sdt').value;
        var diachi = document.querySelector('.diachi').value;
        var total = document.querySelector('.price').innerHTML;
        // delete last character
        total = total.slice(0, -1);
        // transform "," to ""
        total = total.replace(/,/g, '');

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        // get current date

        // ajax register
        $.ajax({
            url: './controller/PaymentController.php',
            type: 'POST',
            data: {
                request: 'dathang',
                name: name,
                email: email,
                sdt: sdt,
                diachi: diachi,
                total: total,
                listProduct: listProduct,
                date: today
            },
            success: function(data) {
                console.log(data);
                if(data) {
                    alert("Đặt hàng thành công");
                    window.location.href = 'index.php?controller=HistoryBillController&action=index';
                }
            }
        })
    })
}
    
function addeventclose() {
    var closeButton = document.querySelector(".close-bg");
    // Thêm sự kiện click cho nút đóng
    closeButton.addEventListener("click", function() {
        document.querySelector('.dark-overlay').classList.add('hide');
    });
}