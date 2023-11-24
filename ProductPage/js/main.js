const perPage = 8;
// var maxPage = Math.ceil(products.length / perPage);
const pageContainer = document.querySelector('.product__pagination');
renderPages();
const modalBg = document.querySelector('.background__modal__box');

addEventToPage();
function addEventToPage() {
    var pageBtnns = document.querySelectorAll('.product__pagination a');
    pageBtnns.forEach(item => {
        item.addEventListener('click', function () {
            currentPage = parseInt(this.getAttribute("value"));
            changePages();
            renderProduct();
            scrollToProduct();
        })
    })
}

var currentPage = 1;
var truoc = document.querySelector('.previous');
var sau = document.querySelector('.next');
changePages();
renderProduct();
addEventNextPrevious();
function addEventNextPrevious() {
truoc = document.querySelector('.previous');
sau = document.querySelector('.next');
sau.addEventListener('click', function () {
    if (currentPage < data.getMaxPages(products, perPage)) {
        currentPage++;
        changePages();
        renderProduct();
        scrollToProduct();
    } 
})

truoc.addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        changePages();
        renderProduct();
        scrollToProduct();
    }
})
}


var searchInput = document.querySelector('.fa-search')

searchInput.addEventListener('click', (e) => {
    e.stopPropagation()
})

var addToCart = document.querySelector('.button__addtocart')
var modalCart = document.querySelector('.product__modal__cart__container');
var closeCart = document.querySelector('.product__modal__cart__close')
var modalDetails = document.querySelector('.product__modal__details')


function changePages() {
    const pageBtns = document.querySelectorAll('.product__pagination a');
    pageBtns.forEach(item => { 
        if (parseInt(item.getAttribute("value")) == currentPage) {
            item.classList.add('active');
        }
        else item.classList.remove('active');
    }); 
    if (currentPage > 0 && currentPage <= data.getMaxPages(products,perPage)) {
        truoc.classList.add('active');
    }
    if (currentPage <= 1) {
        truoc.classList.add('active');
        sau.classList.remove('active');
    }
    else if (currentPage > 1 && currentPage < data.getMaxPages(products, perPage)) {
        truoc.classList.remove('active');
        sau.classList.remove('active');
    }
    if (data.getMaxPages(products, perPage) == 1) {
        truoc.classList.add('active');
        sau.classList.add('active');
    }
    var first = currentPage - 1;
    var last = currentPage + 1;
   
    if (currentPage == 1) {
        first = currentPage;
        last = currentPage + 2;
    }
    if (currentPage == data.getMaxPages(products, perPage)) {
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

function scrollToProduct() {
    document.querySelector('.product.parent').scrollIntoView();
}

// chuyen sang admin
const adminBtn = document.querySelector('.adminbtn');
adminBtn.addEventListener('click', function () {
    window.location.href = "../TrangAdmin/index.html";
})

