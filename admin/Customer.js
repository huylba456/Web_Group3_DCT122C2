
 const userList = document.getElementById('user-list');

function showAddUserForm() {
    const addUserForm = document.getElementById('add-user-form');
    userList.style.display='block';
    addUserForm.style.display = 'block';
}

function addUser() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const newUser = {
        id: users.length + 1,
        username: usernameInput.value,
        email: emailInput.value,
        locked: false,
    };

    users.push(newUser);
    renderUserList();
    
    usernameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    const addUserForm = document.getElementById('add-user-form');
    addUserForm.style.display = 'none';
}

function editUser(userId) {
    console.log(`Editing user with ID ${userId}`);
}

function toggleUserLock(userId) {
    const user = users.find(u => u.id === userId);
    if (user) {
        user.locked = !user.locked;
        renderUserList();
    }
}
function hello(){  
    var result = confirm("Bạn có chắc không?");  
    if(result){
      alert("Thay đổi thành công!");
    }
    else{
      alert("Đã hủy bỏ thay đổi");
    }
  }
const signupForm = document.querySelectorAll('.dangky');
signupForm.forEach(item =>{
    item.addEventListener('click', function () {
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
    document.querySelector('.signup-button').addEventListener('click', function (e) {
        e.preventDefault();  
        hello();
        document.querySelector('.modal_signup').style.display = 'none';
        document.querySelector('.activemauden').style.display = 'none';
    })
    document.querySelector('.user').style.display='block'; 
    document.querySelector('.nonuser').style.display='none';
})
})
document.querySelectorAll('.khoa').forEach((item,index)=>{item.addEventListener('click',function(){
    var value=item.value;
    if(index==0){
    if(value==1)
    {
        item.value=0;
        item.innerHTML="Hủy khóa";
    }
    if(value==0)
    {
        item.value=1;
        item.innerHTML="Khóa";
    }
}
if(index==1){
    if(value==1)
    {
        item.value=0;
        item.innerHTML="Hủy khóa";
    }
    if(value==0)
    {
        item.value=1;
        item.innerHTML="Khóa";
    }
}
})
})
