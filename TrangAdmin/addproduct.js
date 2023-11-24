currentPage = 1;
var productz = data.getProducts();
console.log(productz);
renderPhanTrangAddProduct(productz);
function renderPhanTrangAddProduct(productz) {
    var perPage = 5;
    var html = ''
    html += "<div class='previous'>&laquo;</div>";
    const maxPageShow = data.getMaxPages(productz,perPage);
    for (var i = 1; i <= maxPageShow; i++) {
        html += `<a value=${i}>${i}</a>`
    }
    html += "<div class='next'>&raquo;</div>"
        const pageContainer = document.querySelector('.phantrangaddproduct');
        pageContainer.innerHTML = html;
    if (pageContainer.querySelector('.phantrangaddproduct a'))
        pageContainer.querySelector('.phantrangaddproduct a').classList.add('active');
}

renderProductManage(productz);
function renderProductManage(productz) {
    var perPage = 5;
    html = '';
    var myData = data.getProductAtPage(productz, currentPage, perPage);
    const productBox = document.querySelector('.tableinfo');

    myData.forEach((e) => {
        var name = e.name.replace('Nước Hoa ',  '');
        html += `<tr>`
        html += `<td><img src="${e.imgList[0]}"</td>
                <td>${e.productId}</td>
                <td>${name}</td>
                <td>${data.vietHoaTatCaTuDau(e.brand)}</td>
                <td>${e.mui}</td>
                <td>${e.time}</td>
                <td>${e.capacity}</td>
                <td>${money.vnd(e.price3)}</td>
                <td>
                <i class="fa-solid fa-pen-to-square edit" value="${e.productId}" style="color: #00ff1e;"></i>
                <i class="fa-solid fa-trash delete" value="${e.productId}" style="color: #ee3158;"></i>
                </td>`;
        html += `</tr>`

    })
    productBox.innerHTML = html;
    renderEdit();
    addEventDeletesp();
}

function renderEdit() {
    const edit = document.querySelectorAll('.edit');
    edit.forEach(item => {
        item.addEventListener('click', function() {
            var product = data.getProductId(parseInt(this.getAttribute('value')));
            document.querySelector('.editproduct').style.display = 'block';
            document.querySelector('.activemauden').style.display = 'block';
            document.querySelector('.editinputid').value = product.productId;
            document.querySelector('.editinputtensanpham').value = product.name;
            document.querySelector('.editinputbrand').value = data.vietHoaTatCaTuDau(product.brand);
            document.querySelector('.editinputmui').value = product.mui;
            document.querySelector('.editgioitinh').value = data.vietHoaTatCaTuDau(product.gender);
            document.querySelector('.editinputtime').value = product.time;
            document.querySelector('.editinputsosize').value = product.soSize;
            document.querySelector('.editsoluogconlai').value = product.conlai;
            const price = document.querySelectorAll('.editinputprice');
            const capa = document.querySelectorAll('.editinputcapacity');
            capa[0].value = product.capacity[0];
            capa[1].value = product.capacity[1];
            capa[2].value = product.capacity[2];
            price[0].value = product.price1;
            price[1].value = product.price2;
            price[2].value = product.price3;
            document.querySelector('.editdescriptions').value = product.mota;
            var imgpreviews = document.querySelectorAll('.editimgpreview');
            for (var i = 0; i < product.imgList.length; i++) {
                imgpreviews[i].src = product.imgList[i]; 
            }
            // nếu ấn vào phần màu đen thì đóng
            const activemauden = document.querySelector('.activemauden');
            activemauden.addEventListener('click', () => {
                document.querySelector('.editproduct').style.display = 'none';
                document.querySelector('.activemauden').style.display = 'none';
            })
            // nếu ấn vào nút đóng thì sẽ tắt cửa sổ chỉnh sửa
            const closeicon = document.querySelector('.closeedit');
            closeicon.addEventListener('click', () => {
                document.querySelector('.editproduct').style.display = 'none';
                document.querySelector('.activemauden').style.display = 'none';
             })
         })
    })
}

function addEventToPagead() {
    var pageBtnns = document.querySelectorAll('.phantrangaddproduct a');
    pageBtnns.forEach(item => {
        item.addEventListener('click', function () {
            currentPage = parseInt(this.getAttribute('value'));
            renderProductManage(productz);
            changePagesad(productz);
            scrollToProduct();
        })
    })
}


function changePagesad(productz) {
    var perPage = 5;
    const pageBtns = document.querySelectorAll('.phantrangaddproduct a');
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
    if (currentPage == data.getMaxPages(productz, perPage)) {
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


function scrollToProduct() {
    document.querySelector('.topp').scrollIntoView();
}

// addevent vào nút thêm sản phẩm
const btnThem = document.querySelector('.addproducticon');
btnThem.addEventListener('click', () => {
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.activemauden').style.display = 'block';
    const closethemsp = document.getElementById('iconclose');
    const activemauden = document.querySelector('.activemauden');
    closethemsp.addEventListener('click', () => {
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.activemauden').style.display = 'none';
    })
    activemauden.addEventListener('click', () => {
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.activemauden').style.display = 'none';
    })
})
// Xử lý thêm sản phẩm
const inputid = document.querySelector('.inputid');
const inputetensanpham = document.querySelector('.inputtensanpham');
const inputbrand = document.querySelector('.inputbrand');
const inputmui = document.querySelector('.inputmui');
const inputtime = document.querySelector('.inputtime');
const inputcapacity = document.querySelectorAll('.inputcapacity');
const inputprice = document.querySelectorAll('.inputprice');
const themsanpham = document.querySelector('.btn.btn-primary');
const inputimg = document.getElementById('img');
const imgpreview = document.querySelectorAll('.imgpreview');
const descript = document.querySelector('.descriptions');
const soSize = document.querySelector('.inputsosize');
const gender = document.querySelector('.gioitinh');
const soluongconlai = document.querySelector('.soluogconlai');
inputid.value = data.getLargestId() + 1;
inputid.disabled = true;
inputid.style.backgroundColor = 'grey';
inputid.style.color = 'white';

inputimg.addEventListener('change', () => {
    if (inputimg.files.length > 3) { 
        alert("Chỉ được chọn tối đa 3 ảnh");
        inputimg.value = '';
        return;
    }
    capNhatAnhSanPham();
})

themsanpham.addEventListener('click', (e) => {
    e.preventDefault();
    var name = inputetensanpham.value;
    var brand = inputbrand.value;
    var mui = inputmui.value;
    var time = inputtime.value;
    var mota = descript.value;
    var sosize = soSize.value;
    var genders = gender.value;
    var numberproduct = soluongconlai.value;
    listcapacity = [];
    listImg = [];
    inputcapacity.forEach(item => {
        if (item.value != '') listcapacity.push(item.value);
    })
    const imgs = document.querySelectorAll('.imgpreview');
    imgs.forEach(item => {
        if (item.value != '') listImg.push(item.src);
    })
    if (name == '' || brand == '' || mui == '' || time == '' || mota == '' || sosize == '' || numberproduct == '' || genders == '' || (inputprice[0] == '' && inputprice[1] == '' && inputprice[2] == '') || listcapacity.length == 0 || listImg.length == 0) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    data.addProduct(name, inputprice[0].value, inputprice[1].value, inputprice[2].value, sosize, genders, listImg, mui, time, listcapacity, numberproduct, brand, mota);
})

function capNhatAnhSanPham() {
    for (let i = 0; i < inputimg.files.length; i++) {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            imgpreview[i].src = reader.result;
        }, false);
        reader.readAsDataURL(inputimg.files[i]);
    }
}

// render edit sp
const editinputid = document.querySelector('.editinputid');
const editinputetensanpham = document.querySelector('.editinputtensanpham');
const editinputbrand = document.querySelector('.editinputbrand');
const editinputmui = document.querySelector('.editinputmui');
const editinputtime = document.querySelector('.editinputtime');
const editinputcapacity = document.querySelectorAll('.editinputcapacity');
const editinputprice = document.querySelectorAll('.editinputprice');
const editchinhsuasp = document.querySelector('.btn.btn-primaryedit');
const editinputimg = document.getElementById('editimg');
const editimgpreview = document.querySelectorAll('.editimgpreview');
const editdescript = document.querySelector('.editdescriptions');
const editsoSize = document.querySelector('.editinputsosize');
const editgender = document.querySelector('.editgioitinh');
const editsoluongconlai = document.querySelector('.editsoluogconlai');
const closeiconedit = document.querySelector('.iconcloseedit');
editinputimg.addEventListener('change', () => {
    if (inputimg.files.length > 3) { 
        alert("Chỉ được chọn tối đa 3 ảnh");
        inputimg.value = '';
        return;
    }
    capNhatAnhSanPhamEdit();
})


editchinhsuasp.addEventListener('click', function(e) {
    e.preventDefault();
    var name = editinputetensanpham.value;
    var brand = editinputbrand.value;
    var mui = editinputmui.value;
    var time = editinputtime.value;
    var mota = editdescript.value;
    var sosize = editsoSize.value;
    var genders = editgender.value;
    var numberproduct = editsoluongconlai.value;
    listcapacity = [];
    listImg = [];
    editinputcapacity.forEach(item => {
        if (item.value != '') listcapacity.push(item.value);
    })
    const imgs = document.querySelectorAll('.editimgpreview');
    imgs.forEach(item => {
        if (item.value != '') listImg.push(item.src);
    })
    if (name == '' || brand == '' || mui == '' || time == '' || mota == '' || sosize == '' || numberproduct == '' || genders == '' || (editinputprice[0] == '' && editinputprice[1] == '' && editinputprice[2] == '') || listcapacity.length == 0 || listImg.length == 0) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    var listproduct = data.getProducts();    
    listproduct.forEach(item => {
        if (item.productId == editinputid.value) {
            item.name = name;
            item.brand = brand;
            item.mui = mui;
            item.time = time;
            item.mota = mota;
            item.price1 = editinputprice[0].value;
            item.price2 = editinputprice[1].value;
            item.price3 = editinputprice[2].value;
            item.imgList = listImg;
            item.soSize = sosize;
            item.capacity = listcapacity;
            item.gender = genders;  
            productz = listproduct;
            data.loadProducts(listproduct);
            alert("Chỉnh sửa sản phẩm thành công!");
            document.querySelector('.editproduct').style.display = 'none';
            document.querySelector('.activemauden').style.display = 'none';
            renderPhanTrangAddProduct(productz);
            renderProductManage(productz);
            addEventToPagead(); 
            return;
        }
    })
})

function capNhatAnhSanPhamEdit() {
    for (let i = 0; i < editimgpreview.length; i++) {
        editimgpreview[i].src = './Images/defaultimg.png';
    }
    for (let i = 0; i < editinputimg.files.length; i++) {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            editimgpreview[i].src = reader.result;
        }, false);
        reader.readAsDataURL(editinputimg.files[i]);
    }
}

// Xóa sản phẩm
function addEventDeletesp() {
const deleteicon = document.querySelectorAll('.delete');
deleteicon.forEach(item => {
    item.addEventListener('click', function() {
        var listproduct = data.getProducts();
        listproduct.forEach((itemz, index) => {
            if (itemz.productId == parseInt(this.getAttribute('value'))) {
                listproduct.splice(index, 1);
                data.loadProducts(listproduct);
                alert("Xóa sản phẩm thành công!");
                renderProductManage(productz);
                return;
            }
        })
    })
})
}

// render tim kiem san pham
document.querySelector('.product-search').addEventListener('change', function () {
    var keywords = document.querySelector('.product-search').value;
    productz = filterproduct(keywords);
    if (productz.length == 0) {
        alert("Không tìm thấy người dùng");
        return;
    }
    renderPhanTrangAddProduct(productz);
    renderProductManage(productz);
    changePagesad(productz);
})

function filterproduct(keywords) {
    var productlist = data.getProducts();
    if (keywords === "" || keywords === null) return productlist;
    keywords = keywords.toLowerCase();
    var result = [];
    productlist.forEach(item => {
        var str = item.name.toLowerCase().toString();
        if (str.includes(keywords)) {
            result.push(item);
        }
    })
    return result;
}