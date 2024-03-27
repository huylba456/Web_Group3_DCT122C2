const notifications = document.querySelector(".notifications"),
buttons = document.querySelectorAll(".buttons .btn");
const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Đăng nhập thành công!',
    },
    error: {
        icon: 'fa-circle-xmark',
        text: 'Tên đăng nhập hoặc mật khẩu không đúng!',
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
}

const createToast = (id) => {
    // Getting the icon and text for the toast based on the id passed
    const { icon, text } = toastDetails[id];
    
    const toast = document.createElement("li"); // Creating a new 'li' element for the toast
    toast.className = `toast ${id}`; // Setting the classes for the toast
    // Setting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;

    notifications.appendChild(toast); // Append the toast to the notification ul
    // Setting a timeout to remove the toast after the specified duration

    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

// Adding a click event listener to each button to create a toast when clicked
buttons.forEach(btn => {
    btn.addEventListener("click", function() {
        createToast(btn.id);
        
    });
});


// id se nam trong:
// --success: #0ABF30;
// --error: #E24D4C;
// --warning: #E9BD0C;
// --info: #3498DB;
const createToastWithMes = (iconz, mes, id) => {
    // Getting the icon and text for the toast based on the id passed

    const { icon, text } = {icon: iconz, text: mes}
    
    const toast = document.createElement("li"); // Creating a new 'li' element for the toast
    toast.className = `toast ${id}`; // Setting the classes for the toast
    // Setting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${mes}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;

    notifications.appendChild(toast); // Append the toast to the notification ul
    // Setting a timeout to remove the toast after the specified duration

    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}
