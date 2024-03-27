
document.querySelector('.dangkybtn').addEventListener('click', function() {
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var password = document.querySelector('.matkhau').value;
    var gioitinh = document.querySelector('#cbgioitinh').value;
    var sdt = document.querySelector('.sdt').value;
    var diachi = document.querySelector('.diachi').value;
    // ajax register
    $.ajax({
        url: './controller/SignUpController.php',
        type: 'POST',
        data: {
            request: 'dangky',
            name: name,
            email: email,
            password: password,
            gioitinh: gioitinh,
            sdt: sdt,
            diachi: diachi
        },
        success: function(data) {
            if(data) {
                alert("thành công");
            }
        }
    })
})