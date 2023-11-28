const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

const SPdangban = document.querySelector(".spdangban");
SPdangban.innerHTML = data.getProducts().length;
const soDondadat = document.querySelector(".sodondadat");
soDondadat.innerHTML = order.getOrders().length;
const tongdoanhthu = document.querySelector(".tongdoanhthu");
tongdoanhthu.innerHTML = money.vnd(order.getTotalOrderMoney(order.getOrders()));
const historyTable = document.querySelectorAll(".data-list");
renderHistoryTable();
function renderHistoryTable() {
    historyList = history.getNewest(9);
    console.log(historyList);
    var html = '';
    historyList.forEach((item) => {
        html += `<p class="data-lidst">${item.username}</p>`;
    })
    historyTable[0].innerHTML = html;

    html = '';
    historyList.forEach((item) => {
        html += `<p class="data-lidst">${item.email}</p>`;
    })
    historyTable[1].innerHTML = html;

    html = '';
    historyList.forEach((item) => {

        html += `<p class="data-lidst">${time.getDateStr(item.timeShow)}</p>`;
    })
    historyTable[2].innerHTML = html;

    html = '';
    historyList.forEach((item) => {
        html += `<p class="data-lidst">${item.textShow}</p>`;
    })
    historyTable[3].innerHTML = html;
}