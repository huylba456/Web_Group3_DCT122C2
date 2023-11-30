document.getElementById("modal-link").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
  });
  
  document.getElementsByClassName("close1")[0].addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("modal")) {
      document.getElementById("modal").style.display = "none";
    }
  }); 

var currentPage = 1;
var userz = user.getUsers();
renderPhanTrang(userz);
function renderPhanTrang(userz) {
    var perPage = 10;
    var html = ''
    html += "<div class='previoususerpagnition'>&laquo;</div>";
    const maxPageShow = data.getMaxPages(userz,perPage);
    for (var i = 1; i <= maxPageShow; i++) {
        html += `<a value=${i}>${i}</a>`
    }
    html += "<div class='nextuserpagnition'>&raquo;</div>"
        const pageContainer = document.querySelector('.phantrangquanlynguoidung');
        pageContainer.innerHTML = html;
    if (pageContainer.querySelector('.phantrangquanlynguoidung a'))
        pageContainer.querySelector('.phantrangquanlynguoidung a').classList.add('active');
    addEventNextnguoidung();
    addEventPreviousnguoidung();
}

renderUserManagement(userz);
function renderUserManagement(listuser) {
    var perPage = 10;
    var myData = data.getProductAtPage(listuser, currentPage, perPage);
    const divUserManagement = document.querySelector(".bodyqlnd");
    var html = "";
    myData.forEach((item)=> {
        html += `
        <tr>
        <td>${item.username}</td>
        <td>${item.password}</td>
        <td>${item.name}</td>
        <td>${item.phone}</td>
        <td>t${item.email}</td>
        <td>${item.address}</td>`
        if (item.isAdmin == true) {
            html += `<td>Admin</td>`;
        }
        else {
            html += `<td>User</td>`;
        }
        html += `<td>
            <span class="action-btn">
                <a href="#" class="editngdungz" value="${item.userID}">Chỉnh sửa</a>
                <a href="#" class="xoangdungz" value="${item.userID}">Xoá</a>
            </span>
        </td>
      <tr>`;
    });
    divUserManagement.innerHTML = html;
    addEventEdit();
    addEventDelete();
}
AddEventrenderPhanTrang();
function AddEventrenderPhanTrang() {
    var pageBtnns = document.querySelectorAll('.phantrangquanlynguoidung a');
    pageBtnns.forEach(item => {
        item.addEventListener('click', function () {
            currentPage = parseInt(this.getAttribute("value"));
            renderUserManagement(userz);
            changepageQuanlyuser(userz);
        })
    })
}
changepageQuanlyuser(userz);
function changepageQuanlyuser(userz) {
    var perPage = 10;
    const pageBtns = document.querySelectorAll('.phantrangquanlynguoidung a');
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
    if (currentPage == data.getMaxPages(userz, perPage)) {
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

// thêm sự kiện cho nút trước và sau của phân trang
function addEventNextnguoidung() {
    truoc = document.querySelector('.nextuserpagnition');
    var perPage = 10;
    truoc.addEventListener('click', function () {
        if (currentPage < data.getMaxPages(userz, perPage)) {
            currentPage++;
            renderPhanTrang(userz);
            changepageQuanlyuser(userz);
            renderUserManagement(userz);
            AddEventrenderPhanTrang();
        }
    })
}

function addEventPreviousnguoidung() {
    sau = document.querySelector('.previoususerpagnition');
    sau.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            renderPhanTrang(userz);
            changepageQuanlyuser(userz);
            renderUserManagement(userz);
            AddEventrenderPhanTrang();
        }
    })
}
// thêm người dùng
document.querySelector('.submit-btn').addEventListener('click', function () {
    const username = document.querySelector('.usernamengdung').value;
    var userlist = user.getUsers();
    var check = false;
    userlist.forEach((item) => {
        if (item.username == username) {
            check = true;
        }
    })

    const password = document.querySelector('.passngdung').value;
    const phone = document.querySelector('.phonengdung').value;
    const email = document.querySelector('.emailngdung').value;
    const address = document.querySelector('.addressngdung').value;
    const quyenhan = document.querySelector('.quyenhan').value;
    const hovaten = document.querySelector('.hovatenngdung').value;
    if (check == false) {
        adduser(username, password, email, phone, hovaten, address, quyenhan);
        alert("Thêm người dùng thành công!");
        userz = user.getUsers();
        renderPhanTrang(userz);
        changepageQuanlyuser(userz);
        renderUserManagement(userz);
        AddEventrenderPhanTrang();
    }
    else if (check == true) {
        alert("Thêm người dùng thất bại vì tên đăng nhập đã tồn tại!");
    }
})
function adduser(username, password, email, phone, hovaten, address, quyenhan) {
    if (quyenhan == "admin") {
        user.addAdmin(username, password, email, phone, hovaten, address);
    }
    else {
        user.addUser(username, password, email, phone, hovaten, address);
    }
}

function addEventEdit() {
    document.querySelectorAll('.editngdungz').forEach(item => {
        item.addEventListener('click', function () {
                document.getElementById("modalz").style.display = "block";
                document.querySelector('.activemauden').style.display = 'block';
                var id = parseInt(this.getAttribute("value"));
                var userz = user.getUserId(id);
                document.querySelector('.editidngdung').value = id;
                document.querySelector('.editusernamengdung').value = userz.username;
                document.querySelector('.editpassngdung').value = userz.password;
                document.querySelector('.editphonengdung').value = userz.phone;
                document.querySelector('.editemailngdung').value = userz.email;
                document.querySelector('.editaddressngdung').value = userz.address;
                document.querySelector('.edithovatenngdung').value = userz.name;
                if (userz.isAdmin == true) {
                    document.querySelector('.editquyenhan').value = "admin";
                }
                else {
                    document.querySelector('.editquyenhan').value = "user";
                }
        })
        // add event nut close
        document.querySelectorAll('.close1')[1].addEventListener('click', function () {
            document.getElementById("modalz").style.display = "none";
            document.querySelector('.activemauden').style.display = 'none';
        })
        // add event nut activemauden
        document.querySelector('.activemauden').addEventListener('click', function () {
            document.getElementById("modalz").style.display = "none";
            document.querySelector('.activemauden').style.display = 'none';
        })
    })

}


// add event khi ấn chỉnh sửa thông tin
document.querySelector('.submit-btnedit').addEventListener('click', function () {
    const id = parseInt(document.querySelector('.editidngdung').value);
    const username = document.querySelector('.editusernamengdung').value;
    const password = document.querySelector('.editpassngdung').value;
    const phone = document.querySelector('.editphonengdung').value;
    const email = document.querySelector('.editemailngdung').value;
    const address = document.querySelector('.editaddressngdung').value;
    const quyenhan = document.querySelector('.editquyenhan').value;
    const hovaten = document.querySelector('.edithovatenngdung').value;
    edituser(username, password, email, phone, hovaten, address, quyenhan, id);
})

function edituser(username, password, email, phone, hovaten, address, quyenhan, id) {
    var userlist = user.getUsers();
    userlist.forEach((item) => {
        if (item.userID == id) {
            item.username = username;
            item.password = password;
            item.phone = phone;
            item.email = email;
            item.address = address;
            item.name = hovaten;
            if (quyenhan == "admin") {
                item.isAdmin = true;
            }
            else {
                item.isAdmin = false;
            }
        }
    })
    user.loadUsers(userlist);
    alert("Chỉnh sửa thành công");
    document.getElementById("modalz").style.display = "none";
    document.querySelector('.activemauden').style.display = 'none';
    renderPhanTrang(userz);
        changepageQuanlyuser(userz);
        renderUserManagement(userz);
        AddEventrenderPhanTrang();
}

// add event khi ấn xoá
addEventDelete();
function addEventDelete() {
    const delbtn = document.querySelectorAll('.xoangdungz');
    delbtn.forEach((item) => {
        item.addEventListener('click', function () {
            var userChoice = window.confirm('Bạn có muốn xóa tài khoản này không?');
            if (!userChoice) return;
            var id = parseInt(this.getAttribute("value"));
            deleteuser(id);
            renderPhanTrang(userz);
            changepageQuanlyuser(userz);
            renderUserManagement(userz);
            AddEventrenderPhanTrang();
        })
    })
}

function deleteuser(id) {
    var userlist = user.getUsers();
    userlist.forEach((item, index) => {
        if (item.userID == id) {
            userlist.splice(index, 1);
        }
    })
    user.loadUsers(userlist);
}

// tìm kiếm user
function filteruser(keywords) {
    var userlist = user.getUsers();
    if (keywords === "" || keywords === null) return userlist;
    keywords = keywords.toLowerCase();
    var result = [];
    userlist.forEach(item => {
        var str = item.username.toLowerCase().toString();
        if (str.includes(keywords)) {
            result.push(item);
        }
    })
    return result;
}

//add event nut search
SearchRenderUser();
function SearchRenderUser() {
    const inputsearch = document.querySelector('.user-search');
    const searchicon= document.querySelector('.user__search--btn.outline');
    searchicon.addEventListener('click', function () {
    document.querySelector('.nouserfound').style.display = "none";
    var keywords = inputsearch.value;
    var userz = filteruser(keywords);
    if (userz.length == 0) {
        document.querySelector('.bodyqlnd').innerHTML = ``;
        document.querySelector('.nouserfound').style.display = "block";
        renderPhanTrang(userz);
        changepageQuanlyuser(userz);
        renderUserManagement(userz);
        AddEventrenderPhanTrang();
        return;
    }
    renderPhanTrang(userz);
    changepageQuanlyuser(userz);
    renderUserManagement(userz);
    AddEventrenderPhanTrang();
})
}

// add event nut filter 
var filterOrder = document.querySelector('.selectfilter');
filterOrder.addEventListener('change', function () {
    var filter = filterOrder.value;
    if (filter == "atoz") {
        userz.sort((a, b) => {
            if (a.username > b.username) return 1;
            else if (a.username < b.username) return -1;
            else return 0;
        })
        renderPhanTrang(userz);
        changepageQuanlyuser(userz);
        renderUserManagement(userz);
        AddEventrenderPhanTrang();
    }
    else if (filter == "ztoa") {
        userz.sort((a, b) => {
            if (a.username > b.username) return -1;
            else if (a.username < b.username) return 1;
            else return 0;
        })
        renderPhanTrang(userz);
        changepageQuanlyuser(userz);
        renderUserManagement(userz);
        AddEventrenderPhanTrang();
    }
    else if (filter == "theochucvuuser") {
        // negative thi a sort trước b
        // positive thì a sort sau b
        userz.sort((a, b) => {
            if (a.isAdmin > b.isAdmin) return 1;
            else if (a.isAdmin < b.isAdmin) return -1;
            else return 0;
        })
        renderPhanTrang(userz);
        changepageQuanlyuser(userz);
        renderUserManagement(userz);
        AddEventrenderPhanTrang();
    }
    else if (filter == "theochucvuadmin") {
        userz.sort((a, b) => {
            if (a.isAdmin > b.isAdmin) return -1;
            else if (a.isAdmin < b.isAdmin) return 1;
            else return 0;
        })
        renderPhanTrang(userz);
        changepageQuanlyuser(userz);
        renderUserManagement(userz);
        AddEventrenderPhanTrang();
    }
})
