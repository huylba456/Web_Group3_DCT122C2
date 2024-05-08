document.querySelector(".dangkybtn").addEventListener("click", function () {
  var checkDone = true;
  var name = document.querySelector(".name");
  var nameFormItem = document.querySelector(".form-item.--register.--name");
  var nameError = nameFormItem.querySelector(
    ".form-item.--register.--name .error"
  );

  var sdt = document.querySelector(".sdt");
  var sdtFormItem = document.querySelector(".form-item.--register.--phone");
  var sdtError = sdtFormItem.querySelector(
    ".form-item.--register.--phone .error"
  );
  var phonePattern = /^[0-9]{10}$/;

  var email = document.querySelector(".email");
  var emailFormItem = document.querySelector(".form-item.--register.--email");
  var emailError = emailFormItem.querySelector(
    ".form-item.--register.--email .error"
  );
  var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  var gioitinh = document.querySelector("#cbgioitinh").value;

  var diachi = document.querySelector(".diachi");
  var diachiFormItem = document.querySelector(
    ".form-item.--register.--address"
  );
  var diachiError = diachiFormItem.querySelector(
    ".form-item.--register.--address .error"
  );
  var password = document.querySelector(".matkhau");
  var passwordFormItem = document.querySelector(
    ".form-item.--register.--password"
  );
  var passwordError = passwordFormItem.querySelector(
    ".form-item.--register.--password .error"
  );
  var cfpassword = document.querySelector(".xacnhanmatkhau");
  var cfpasswordFormItem = document.querySelector(
    ".form-item.--register.--cfpassword"
  );
  var cfpasswordError = cfpasswordFormItem.querySelector(
    ".form-item.--register.--cfpassword .error"
  );
  var boxdongy = document.querySelector(".form-check .dongy");

  //validate form

  if (name.value.trim() === "") {
    nameFormItem.classList.add("--error");
    nameError.innerText = "Yêu cầu nhập Tên";
    checkDone = false;
  } else if (name.value.length < 3) {
    nameFormItem.classList.add("--error");
    nameError.innerText = "Tên phải có ít nhất 3 ký tự";
    checkDone = false;
  } else {
      nameFormItem.classList.remove("--error");
      nameError.innerText = "";
    }
  name.addEventListener("input", function () {
    if (name.value.length < 3) {
      nameFormItem.classList.add("--error");
      nameError.innerText = "Ten phai co it nhat 3 ky tu";
      checkDone = false;
    } else {
      nameFormItem.classList.remove("--error");
      nameError.innerText = "";
    }
  });

  // Kiểm tra số điện thoại
  if (sdt.value.trim() === "") {
    sdtFormItem.classList.add("--error");
    sdtError.innerText = "Yêu cầu nhập Số điện thoại";
    checkDone = false;
  }else if (!phonePattern.test(sdt.value)) {
    sdtFormItem.classList.add("--error");
    sdtError.innerText = "Số điện thoại không hợp lệ";
    checkDone = false;
  } else {
    sdtFormItem.classList.remove("--error");
    sdtError.innerText = "";
  }
  
  sdt.addEventListener("input", function () {
    if (!phonePattern.test(sdt.value)) {
      sdtFormItem.classList.add("--error");
      sdtError.innerText = "Số điện thoại không hợp lệ";
      checkDone = false;
    } else {
      sdtFormItem.classList.remove("--error");
      sdtError.innerText = "";
    }
  });

  // Kiểm tra email
  if (email.value.trim() === "") {
    emailFormItem.classList.add("--error");
    emailError.innerText = "Yêu cầu nhập Email";
    checkDone = false;
  } else if (!emailPattern.test(email.value)) {
    emailFormItem.classList.add("--error");
    emailError.innerText = "Email không hợp lệ";
    checkDone = false;
  } else {
      emailFormItem.classList.remove("--error");
      emailError.innerText = "";
    }
    
  email.addEventListener("input", function () {
    if (!emailPattern.test(email.value)) {
      emailFormItem.classList.add("--error");
      emailError.innerText = "Email không hợp lệ";
      checkDone = false;
    } else {
      emailFormItem.classList.remove("--error");
      emailError.innerText = "";
    }
  });

  // Kiểm tra địa chỉ
  if (diachi.value.trim() === "") {
    diachiFormItem.classList.add("--error");
    diachiError.innerText = "Yêu cầu nhập Địa chỉ";
    checkDone = false;
  } else if (diachi.value.length < 3) {
      diachiFormItem.classList.add("--error");
      diachiError.innerText = "Địa chỉ phải có ít nhất 3 ký tự";
        checkDone = false;
    }
    else {
      diachiFormItem.classList.remove("--error");
      diachiError.innerText = "";
    }
    

  diachi.addEventListener("input", function () {
    if (diachi.value.length < 3) {
      diachiFormItem.classList.add("--error");
      diachiError.innerText = "Địa chỉ phải có ít nhất 3 ký tự";
      checkDone = false;
    } else {
      diachiFormItem.classList.remove("--error");
      diachiError.innerText = "";
    }
  });

  // Kiểm tra mật khẩu
  if (password.value.trim() === "") {
    passwordFormItem.classList.add("--error");
    passwordError.innerText = "Yêu cầu nhập Mật khẩu";
    checkDone = false;
  } else if (password.value.length < 3) {
      passwordFormItem.classList.add("--error");
        passwordError.innerText = "Mật khẩu phải có ít nhất 3 ký tự";
    }
  else {
      passwordFormItem.classList.remove("--error");
      passwordError.innerText = "";
    }
    
  password.addEventListener("input", function () {
    if (password.value.length < 3) {
      passwordFormItem.classList.add("--error");
      passwordError.innerText = "Mật khẩu phải có ít nhất 3 ký tự";
      checkDone = false;
    } else {
      passwordFormItem.classList.remove("--error");
      passwordError.innerText = "";
    }
  });

  // Kiểm tra mật khẩu
  if (cfpassword.value.trim() === "") {
    cfpasswordFormItem.classList.add("--error");
    cfpasswordError.innerText = "Yêu cầu nhập Mật khẩu";
    checkDone = false;
  } else if (cfpassword.value != password.value) {
    cfpasswordFormItem.classList.add("--error");
    cfpasswordError.innerText = "Mật khẩu không khớp";
    checkDone = false;
  }
  cfpassword.addEventListener("input", function () {
    cfpasswordFormItem.classList.remove("--error");
    cfpasswordError.innerText = "";
  });

  if (checkDone == false) {
    alert("Vui lòng kiểm tra lại thông tin");
    return false;
  } else if (!boxdongy.checked) {
    alert("Bạn chưa đồng ý với điều khoản của chúng tôi");
    return false;
  } else {
    alert(
      "Đăng ký thành công !" +
        name.value +
        " " +
        gioitinh +
        " " +
        sdt.value +
        " " +
        email.value +
        " " +
        diachi.value +
        " " +
        password.value +
        " " +
        cfpassword.value +
        " "
    );
    name.value = "";
    sdt.value = "";
    email.value = "";
    diachi.value = "";
    password.value = "";
    cfpassword.value = "";
    boxdongy.checked = false;

    return true;
  }
  // ajax register
  //   $.ajax({
  //       url: './controller/SignUpController.php',
  //       type: 'POST',
  //       data: {
  //           request: 'dangky',
  //           name: name,
  //           email: email,
  //           password: password,
  //           gioitinh: gioitinh,
  //           sdt: sdt,
  //           diachi: diachi
  //       },
  //       success: function(data) {
  //           if(data) {
  //               alert("thành công");
  //           }
  //       }
  //   })
});
