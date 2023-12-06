
 const userList = document.getElementById('user-list');
function renderUserList() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.className = 'user-item';
        listItem.innerHTML = `
            <div>
                <strong>${user.username}</strong> - ${user.email}
            </div>
            <div>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="toggleUserLock(${user.id})">${user.locked ? 'Unlock' : 'Lock'}</button>
            </div>
        `;
        userList.appendChild(listItem);
    });
}

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

renderUserList();