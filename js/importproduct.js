loadProductPN();
addeventThempn();
loadmaphieunhap();
addeventsuapn();
var curProduct;
var listDeProduct = [];
var listDeLength = 0;
var listSizeProduct = [];
var listproduct = [];
var listCTPN = [];
var sum = 0;
function loadProductPN() {
    $.ajax({
        url: "./controller/ProductsController.php",
        type: "POST",
        dataType: "json",
        data: {
            request: 'getAllProduct',
        },
        success: function(data) {
            listproduct = data;
            var div = document.querySelector('.product-list');
            var html = '';
            data.forEach(element => {
                html += `<tr class="productClicked" value="${element.MaSP}">
                            <td>${element.MaSP}</td>
                            <td>${element.TenSP}</td>
                        </tr>`
            })
            div.innerHTML = html;
            addeventClick();
        }
    })
}

function addeventClick() {
    var clickbtnlist = document.querySelectorAll('.productClicked');
    clickbtnlist.forEach(element => {
        element.addEventListener('click', function() {
            document.querySelectorAll('.rowdetail').forEach(element => {
                element.classList.remove('black');
            })
            var productID = element.getAttribute('value');
            var combobox = document.getElementById('product-item');
            clickbtnlist.forEach(element => {
                if (element.classList.contains('black')) {
                    element.classList.remove('black');
                }
                if (element.getAttribute('value') == productID) {
                    element.classList.add('black');
                }
            })
            listproduct.forEach(element => {
                if (element.MaSP == productID) {
                    document.querySelector('#product-name').value = element.MaSP + ' - ' + element.TenSP;
                    document.querySelector('#product-name').disabled = true;
                }
            })
            $.ajax({
                url: './controller/ProductsController.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    request: 'getListSizeDeProduct',
                    productID: productID
                },
                success: function(data) {
                    var listItem = [];
                    data.forEach(element => {
                        listItem.push({
                            "MaSize" : element.MaSize,
                            "MaDe": element.MaVien,
                            "TenSize" : element.TenSize,
                            "TenDe" : element.TenVien,
                        })
                            
                    })
                    var html = '';
                    listItem.forEach(element => {
                        html += `<option value="${element.MaSize + element.MaDe}">${element.TenSize} - ${element.TenDe}</option>`
                    })
                    combobox.innerHTML = html;
                }
            });
            document.querySelector('#product-price').value = '';
            document.querySelector('#product-pricesell').value = '';
            document.querySelector('#product-quantity').value = '';
        })
    })
}

function addeventThempn() {
    var btnThem = document.querySelector('.addphieunhap');
    btnThem.addEventListener('click', function(e) {
        e.preventDefault();
        var flag = 0;
        document.querySelectorAll('.productClicked').forEach(element => {
            if (element.classList.contains('black')) {
                flag = 1;
            }
        })
        if (flag == 0) {
            createToast('error', 'Vui lòng chọn sản phẩm cần nhập!');
            return;
        }
        var masp = document.querySelector('#product-name').value.split(' - ')[0];
        var tensp = document.querySelector('#product-name').value.split(' - ')[1]
        var masize = document.querySelector('#product-item').value[0];
        var made = document.querySelector('#product-item').value[1];
        var soluong = document.querySelector('#product-quantity').value;
        var giaban = document.querySelector('#product-pricesell').value;
        var gianhap = document.querySelector('#product-price').value;
        if (masp == '' || masize == '' || made == '' || soluong == '') {
            createToast('error', 'Vui lòng nhập đủ thông tin phiếu nhập!');
            return;
        }

        if (parseFloat(gianhap) >= parseFloat(giaban)) {
            createToast('error', 'Giá nhập phải nhỏ hơn giá bán!');
            return;
        }
        // check xem sản phẩm đã tồn tại trong list chưa
        var flag = 0;
        listCTPN.forEach(element => {
            if (element.MaSP == masp && element.MaSize == masize && element.MaDe == made) {
                createToast('error', 'Sản phẩm đã tồn tại trong danh sách!');
                flag = 1;
            }
        })
        if (flag == 1) {
            return;
        }
        listCTPN.push({
            "MaSP": masp,
            "TenSP": tensp,
            "MaSize": masize,
            "MaDe": made,
            "SoLuong": soluong,
            "TenSize": document.querySelector('#product-item').options[document.querySelector('#product-item').selectedIndex].text.split(' - ')[0],
            "TenDe": document.querySelector('#product-item').options[document.querySelector('#product-item').selectedIndex].text.split(' - ')[1],
            "GiaNhap": document.getElementById('product-price').value,
            "GiaBan": document.getElementById('product-pricesell').value,
        })
        loadTablepn();
        sum += parseInt(document.getElementById('product-price').value) * parseInt(soluong);
        
        document.querySelector('.tongtienpn').innerHTML = toVND(sum);
    })

}

function loadTablepn() {
    var divtable = document.querySelector('.rowtable');
    var html = '';
    listCTPN.forEach((element,index) => {
        html += `<tr class="rowdetail" value="${index}">
                    <td>${element.MaSP}</td>
                    <td>${element.TenSP}</td>
                    <td>${element.TenSize}</td>
                    <td>${element.TenDe}</td>
                    <td>${element.GiaNhap}</td>
                    <td>${element.GiaBan}</td>
                    <td>${element.SoLuong}</td>
                </tr>`
    })
    divtable.innerHTML = html;
    addeventclickdetail();
}

function addeventclickdetail() {
    var rowdetail = document.querySelectorAll('.rowdetail');
    rowdetail.forEach((element, index) => {
        element.addEventListener('click', function() {
            document.querySelectorAll('.productClicked').forEach(element => {
                element.classList.remove('black');
            })
            var index = element.getAttribute('value');

            rowdetail.forEach(element => {
                if (element.classList.contains('black')) {
                    element.classList.remove('black');
                }
                if (element.querySelectorAll('td')[0].innerHTML == listCTPN[index].MaSP && element.querySelectorAll('td')[2].innerHTML == listCTPN[index].TenSize && element.querySelectorAll('td')[3].innerHTML == listCTPN[index].TenDe) {
                    element.classList.add('black');
                }   
            })

            document.querySelector('#product-name').value = listCTPN[index].MaSP + ' - ' + listCTPN[index].TenSP;
            document.querySelector('#product-name').disabled = true;
            document.querySelector('#product-item').value = listCTPN[index].MaSize + listCTPN[index].MaDe;
            document.querySelector('#product-price').value = listCTPN[index].GiaNhap;
            document.querySelector('#product-pricesell').value = listCTPN[index].GiaBan;
            document.querySelector('#product-quantity').value = listCTPN[index].SoLuong;
        })
    })
}

function loadmaphieunhap() {
    $.ajax({
        url: './controller/ImportController.php',
        type: 'POST',
        dataType: 'json',
        data: {
            request: 'getMaPNnew'
        },
        success: function(data) {
            document.querySelector('#import-id').value = parseInt(data[data.length - 1].mapn) + 1; 
            document.querySelector('#import-id').disabled = true;
            removeloader();
        }
    })
}

function thempn(e) {
    e.preventDefault();
    // get current date and time
    var date = new Date();
    var curdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    var curtime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    var date = curdate + ' ' + curtime;
    $.ajax({
        url: './controller/ImportController.php',
        type: 'POST',
        dataType: 'json',
        data: {
            request: 'themphieunhap',
            MaPN: document.querySelector('#import-id').value,
            listCTPN: listCTPN,
            date: date,
        },
        success: function(data) {
                createToast('success', 'Thêm phiếu nhập thành công!');
            
        }     
    })
    window.location.reload();
}

function addeventsuapn() {
    document.querySelector('.suapn').addEventListener('click', function(e) {
        e.preventDefault();
        var flag = 0;
        document.querySelectorAll('.rowdetail').forEach(element => {
            if (element.classList.contains('black')) {
                flag = 1;
            }
        })
        if (flag == 0) {
            createToast('error', 'Vui lòng chọn sản phẩm cần sửa!');
            return;
        }    
    })

}