const brand = document.querySelectorAll('.brand');
const sex = document.querySelectorAll('.sex');
const orderedPrice = document.querySelectorAll('.orderedPrice');
const star = document.querySelectorAll('.star');
const priceTableFrom = document.querySelector('.from');
const priceTableTo = document.querySelector('.to');
var myChoiceBrand = '';
var pricemin = 0;
var pricemax = data.getMaxProductPrice();
var gender = 'none';
var searchKeyWords = '';
var tangdan = -1;
var starRange1 = 0;
var starRange2 = 5;
filterProductByBrand(brand)
function filterProductByBrand(nameListFilter) {
    nameListFilter.forEach((item, i) => {
        item.addEventListener('click', function () {
           if(item.classList.contains('active')) {
               item.classList.remove('active');
               myChoiceBrand = '';
               searchAndRender();
           }
           else {
            myChoiceBrand = arrBrand[i];
            nameListFilter.forEach(item => {
                item.classList.remove('active');
            });
            item.classList.add('active');
            searchAndRender();
           }
        });
    });
}

filterProductSex(sex)
function filterProductSex(sexList) {
    sexList.forEach((item, index) => {
        item.addEventListener('click', function () {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                gender = 'none';
                searchAndRender();
            }
            else {
                sexList.forEach(item => {
                    item.classList.remove('active');
                })
                item.classList.add('active');
                if (index == 0) gender = 'nam';
                if (index == 1) gender = 'nu';
                if (index == 2) gender = 'unisex';
                searchAndRender();
            }
        });
    })
}

filterProductByRange(orderedPrice)
function filterProductByRange(priceList) {
    priceList.forEach((item, index) => {
        item.addEventListener('click', function () {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                tangdan = -1;
            }
            else if (index == 0) {
                priceList.forEach(item => {
                    item.classList.remove('active');
                })
                item.classList.add('active');
                tangdan = 1;
            }
            else if (index == 1) {
                priceList.forEach(item => {
                    item.classList.remove('active');
                })
                item.classList.add('active');
                tangdan = 0;
            }
            searchAndRender();
        })
    })
}

filterProductStar(star);
function filterProductStar(starList) {
    starList.forEach((item,index) => {
        item.addEventListener('click', function() {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                starRange1 = 0;
                starRange2 = 5;
            }
            else if (index == 0) {
                starList.forEach(item => {
                    item.classList.remove('active');
                })
                item.classList.add('active');
                starRange1 = 4;
                starRange2 = 5;
            }
            else if (index == 1) {
                starList.forEach(item => {
                    item.classList.remove('active');
                })
                item.classList.add('active');
                starRange1 = 3;
                starRange2 = 4;
            }
            else if (index == 2) {
                starList.forEach(item => {
                    item.classList.remove('active');
                })
                item.classList.add('active');
                starRange1 = 2;
                starRange2 = 3;
            }
            else if (index == 3) {
                starList.forEach(item => {
                    item.classList.remove('active');
                })
                item.classList.add('active');
                starRange1 = 1;
                starRange2 = 2;
            }
            searchAndRender();
        })
    })
}

filterProductSearch();
function filterProductSearch() {
    const inputsearch = document.querySelector('.nav__search--input');
    const searchicon = document.querySelector('.nav__search--btn.outline');
    searchicon.addEventListener('click', function() {
        searchKeyWords = inputsearch.value;
        searchAndRender();
    })
}

priceTableFrom.addEventListener('input', function() {
    if (priceTableFrom.value == '') pricemax = data.getMaxProductPrice();
    var temp = parseInt(priceTableFrom.value.replace(/,/g, '')); // xóa dấu "," nếu có
    if (!isNaN(temp)) {
        var result = "";
        var count = 0;
        
        while (temp > 0) {
            result = (temp % 10).toString() + result;
            temp = Math.floor(temp / 10);
            count++;
            
            if (count == 3 && temp > 0) {
                result = ',' + result;
                count = 0;
            }
        }
        priceTableFrom.value = result; 
    }
});

priceTableTo.addEventListener('input', function() {
    if(priceTableTo.value == '') pricemin = 0;
    var temp = parseInt(priceTableTo.value.replace(/,/g, '')); // xóa dấu "," nếu có
    if (!isNaN(temp)) {
        var result = "";
        var count = 0;
        
        while (temp > 0) {
            result = (temp % 10).toString() + result;
            temp = Math.floor(temp / 10);
            count++;
            
            if (count == 3 && temp > 0) {
                result = ',' + result;
                count = 0;
            }
        }
        priceTableTo.value = result; 
    }
});
document.querySelector('.findPrice').addEventListener('click', function() {
    if (priceTableFrom.value == '')  priceTableFrom.value = 0;
    if (priceTableTo.value == '')  priceTableTo.value = data.getMaxProductPrice();
    var tempFrom = parseInt(priceTableFrom.value.replace(/,/g, '')); // xóa dấu "," nếu có
    var tempTo = parseInt(priceTableTo.value.replace(/,/g, '')); // xóa dấu "," nếu có
    if (!isNaN(tempFrom) && !isNaN(tempTo)) {
        pricemin = tempFrom;
        pricemax = tempTo;
        searchAndRender()
    }


})
function searchAndRender() {
    products = data.getProducts();
    products = menu.filterProudct(products, myChoiceBrand, pricemin, pricemax, gender, tangdan, searchKeyWords, starRange1, starRange2);
    currentPage = 1;
    renderPages();
    changePages();
    addEventToPage();
    renderProduct();
    addEventNextPrevious();
}


// render nut search
