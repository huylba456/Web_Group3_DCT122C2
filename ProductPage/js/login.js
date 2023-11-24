let inputUname = document.querySelector('#yourname');
let inputUsername = document.querySelector('#userrname');
let inputPassword = document.querySelector('#pass');
let inputRePassword = document.querySelector('#cf-password');
let inputEmail = document.querySelector('#email');
let inputPhoneNumber = document.querySelector('#phone');
let inputAddress = document.querySelector('#address');
const loginButton = document.querySelectorAll('.dangnhap');
const signupForm = document.querySelector('.dangky');
const signupButton = document.querySelector('.signup-button');
const listMessage = document.querySelectorAll('.er');
const loginButtonClick = document.querySelector('.signin-button');
const userNameDangNhap = document.querySelector('#username');
const passwordDangNhap = document.querySelector('#password');

loginButtonClick.addEventListener('click', function (event) {
    event.preventDefault();
    var success = user.login(userNameDangNhap.value, passwordDangNhap.value);
    if (success == false) {
        alert("Sai tên đăng nhập hoặc mật khẩu");
    }
    else window.location.reload();
})

loginButton.forEach(item => {
    item.addEventListener('click', function () {
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.activemauden').style.display = 'block';
        document.querySelector('.closeiconDangnhap').addEventListener('click', function () {
            document.querySelector('.modal').style.display = 'none';
            document.querySelector('.activemauden').style.display = 'none';
        })
        document.querySelector('.activemauden').addEventListener('click', function () {
            document.querySelector('.modal').style.display = 'none';
            document.querySelector(".modal_signup").style.display = "none";
            document.querySelector('.activemauden').style.display = 'none';
        })
    })

    document.querySelector(".button-asking1").addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".modal_signup").style.display = "block";
        document.querySelector(".closeiconDangky").addEventListener('click', function() {
            document.querySelector(".modal_signup").style.display = "none";
            document.querySelector('.activemauden').style.display = 'none';
        })
    })
})
    
signupForm.addEventListener('click', function () {
    document.querySelector('.modal_signup').style.display = 'block';
    document.querySelector('.activemauden').style.display = 'block';
    document.querySelector('.closeiconDangky').addEventListener('click', function () {
        document.querySelector('.modal_signup').style.display = 'none';
        document.querySelector('.activemauden').style.display = 'none';
    })
    document.querySelector('.activemauden').addEventListener('click', function () {
        document.querySelector('.modal_signup').style.display = 'none';
        document.querySelector('.activemauden').style.display = 'none';
    })

    document.querySelector(".button-asking2").addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(".modal").style.display = "block";
        document.querySelector(".modal_signup").style.display = "none";
        document.querySelector(".closeiconDangky").addEventListener('click', function() {
            document.querySelector(".modal_signup").style.display = "none";
            document.querySelector('.activemauden').style.display = 'none';
        })
    })
})

signupButton.addEventListener('click', function (event) {
    event.preventDefault();
    let check = 1;
    check &= checkInputUserName();
    check &= checkInputName();
    check &= checkInputPassword();
    check &= checkInputEmail();
    check &= checkInputPhone();
    check &= checkInputAddress();
    if (check == 1) {
        user.addUser(inputUsername.value, inputPassword.value, inputUname.value, inputEmail.value, inputPhoneNumber.value, inputAddress.value);
        user.login(inputUsername.value, inputPassword.value);
        alert("Đăng ký thành công");
    }
    
})

function checkInputName() { 
    if (inputUname.value == null || inputUname.value == "") {
        // nếu như người dùng chưa nhập thì ko sao từ từ nhập return true luôn
        // còn khi nào người dùng nhập 1 cái gì đó rồi mới kiểm tra hợp lệ hay 0a
        return 1;
    }
    let returnValue = form.validateName(inputUname.value);
    if (returnValue.value === false) {
        listMessage[4].textContent = returnValue.str;
        listMessage[4].style.display = "block";
        return 0;
    }
    listMessage[4].style.display = "none";
    return 1;
}

function checkInputUserName() {
    var userz = user.getUsers();
    var kiemtrabitrung = 0;
    userz.forEach(item => {
        if (item.username == inputUsername.value) {
            listMessage[0].textContent = "Tên người dùng đã tồn tại";
            listMessage[0].style.display = "block";
            kiemtrabitrung = 1;
        }
    })
    if (kiemtrabitrung == 0) {
        let returnValue = form.validateUserName(inputUsername.value);
        if (returnValue.value === false) {
            listMessage[0].textContent = returnValue.str;
            listMessage[0].style.display = "block";
            return 0;
        }
        listMessage[0].style.display = "none";
        return 1;
    }
    return 0;
}


function checkInputPassword() {
    let returnValue = form.validatePassword(inputPassword.value);
    if (returnValue.value === false) {
        listMessage[2].textContent = returnValue.str;
        listMessage[2].style.display = "block";
        return 0;
    }
    listMessage[2].style.display = "none";
    return 1;
}

function checkInputEmail() {
    if (inputEmail.value == null || inputEmail.value == "") {
        return 1;
    }
    let returnValue = form.validateEmail(inputEmail.value);
    if (returnValue.value === false) {
        listMessage[1].textContent = returnValue.str;
        listMessage[1].style.display = "block";
        return 0;
    }
    listMessage[1].style.display = "none";
    return 1;
}

function checkInputPhone() {
    if (inputPhoneNumber.value == null || inputPhoneNumber.value == "") {
        return 1;
    }
    let returnValue = form.validatePhone(inputPhoneNumber.value);
    if (returnValue.value === false) {
        listMessage[3].textContent = returnValue.str;
        listMessage[3].style.display = "block";
        return 0;
    }
    listMessage[3].style.display = "none";
    return 1;
}

function checkInputAddress() {
    if (inputAddress.value == null || inputAddress.value == "") {
        return 1;
    }
    if (inputAddress.value.length < 4) {
        listMessage[5].textContent = "Địa chỉ phải có ít nhất 4 ký tự";
        listMessage[5].style.display = "block";
        return 0
    }
    listMessage[5].style.display = "none";
    return 1;
}

