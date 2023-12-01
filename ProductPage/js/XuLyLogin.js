const userBtnGroup = document.querySelector('.user');
const noneUserBtnGroup = document.querySelector('.nonuser');
const adminBtnGroup = document.querySelector('.admin');
const userId = user.checkLoginId();
const logOut = document.querySelectorAll('.logout');

logOut.forEach(element => {
    element.addEventListener('click', function() {
        user.logout();   
        window.location.href='../ProductPage/index.html';
    })
});
   
if (userId === null) {
    showGroup(noneUserBtnGroup,userBtnGroup,adminBtnGroup);
}
else if (userId !== null) {
    changeTitle();
    if (user.isUserAdmin() === true) {
        showGroup(adminBtnGroup,userBtnGroup,noneUserBtnGroup);
    }
    else {
        showGroup(userBtnGroup,adminBtnGroup,noneUserBtnGroup);
    }
}

function changeTitle() {
    const name = document.querySelectorAll('.name');
    name.forEach(item => item.innerHTML = user.getUserId(userId).username);
}

function showGroup(group,otherGroup1,otherGroup2) {
    group.style.display = 'flex';
    hideGroup(otherGroup1);
    hideGroup(otherGroup2);
}

function hideGroup(group) {
    group.style.display = 'none';
}