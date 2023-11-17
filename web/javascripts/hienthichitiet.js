

phanTich_URL_chiTietSanPham();


function them(){
    var name=document.querySelector(".name");
    var user=getCurrentUser();
    var t=new Date();
    console.log(user.products);
    user.products.push({
        "name": name.innerHTML,
        "soluong": 1,
        "date": t
    });
    setCurrentUser(user);
    updateListUser(user);
}
function updateListUser(u, newData) {
    var list = getListUser();
    for (var i = 0; i < list.length; i++) {
        if (equalUser(u, list[i])) {
            list[i] = (newData ? newData : u);
        }
    }
    setListUser(list);
}

function khongTimThaySanPham() {
    console.log('Không tìm thấy sản phẩm');
}
function phanTich_URL_chiTietSanPham() {
   var nameProduct = window.location.href.split('?')[1]; // lấy tên
   var maProduct;
   console.log(nameProduct);

    // tách theo dấu '-' vào gắn lại bằng dấu ' ', code này giúp bỏ hết dấu '-' thay vào bằng khoảng trắng.
    // code này làm ngược lại so với lúc tạo href cho sản phẩm trong file classes.js
    nameProduct = nameProduct.split('-').join(' ');
    console.log(nameProduct);

    for(var p of list_products) {
        if(nameProduct == p.name) {
            maProduct = p.masp;
            break;
        }
    }
    console.log(maProduct);

    sanPhamHienTai = timKiemTheoMa(list_products, maProduct);
    if(!sanPhamHienTai) return khongTimThaySanPham();

    var divChiTiet = document.getElementsByClassName('content')[0];
    // Đổi title
    document.title = nameProduct + ' - Thế giới điện thoại';

    // Cập nhật tên h1
    var h1 = divChiTiet.getElementsByClassName('name')[0];
    
    h1.innerHTML = nameProduct;

    // Cập nhật sao
   
    

    
    var price = divChiTiet.getElementsByClassName('price')[0];
        price.innerHTML = `<strong>` + sanPhamHienTai.price + `₫</strong>`

    
    var info = document.getElementsByClassName('info')[0];
    var s = addThongSo('Màn hình ', sanPhamHienTai.detail.screen);
    s += addThongSo('Hệ điều hành ', sanPhamHienTai.detail.os);
    s += addThongSo('Camara sau', sanPhamHienTai.detail.camera);
    s += addThongSo('Camara trước', sanPhamHienTai.detail.camaraFront);
    s += addThongSo('CPU', sanPhamHienTai.detail.cpu);
    s += addThongSo('RAM', sanPhamHienTai.detail.ram);
    s += addThongSo('Bộ nhớ trong', sanPhamHienTai.detail.rom);
    s += addThongSo('Dung lượng pin', sanPhamHienTai.detail.battery);
    info.innerHTML = s;

    var hinh = document.getElementsByClassName('picture')[0];
    hinh = hinh.getElementsByTagName('img')[0];
    hinh.src = sanPhamHienTai.img;
    

    
}

function timKiemTheoMa(list, ma) {
    for (var l of list) {
        if (l.masp == ma) return l;
    }
}
function addThongSo(ten, giatri) {
    return `<li class='   align row ' >
                <div class=' d-flex col-sm-3'>` + ten +  `</div>
                <div class='mx-sm-5 col-sm-6'>` + giatri + `</div>
            </li>`;
}