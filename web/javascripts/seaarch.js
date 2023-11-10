const categories = [...new Set(list_products.map((item) => { return item }))]
const categoriesale = [...new Set(list_sales.map((item) => { return item }))]
var filteredDataSale=categoriesale;
var filteredData=categories;
var list_random =[];
function addlist(){
 for(let i=0;i<20;i++){
    list_random.push(categories[Math.floor(Math.random()*50)+1])
 }
}
addlist();
console.log(list_random)
const itemsPerPage = 5;
let currentPage = 1;

const displayItem = (items) => {
    
    document.getElementById('root').innerHTML = items.map((item) => {
        var { img, name, price , masp} = item;
        var chitietSp='chitietsanpham.html?' +name.split(' ').join('-');
        console.log(masp);
        return (
            `<div class='box hover col-sm-2   mx-sm-3 my-sm-2' style=' background:white;'>
            <a class='text-decoration-none'href="` + chitietSp + `">
                <div class='img-box'>
                    <img class='images ' src=${img}></img>
                </div> 
                <div class='bottom'>
                    <p name='name'>${name}</p>
                    <h2> ${price}đ</h2>
                <button class='btn'  >Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
const displayItemSale = (items) => {
    
    document.getElementById('root-sale').innerHTML = items.map((item) => {
        var { img, name, price , masp} = item;
        var chitietSp='chitietsanpham.html?' +name.split(' ').join('-');
        console.log(masp);
        return (
            `<div class='box hover col-sm-2   mx-sm-3 my-sm-2' style=' background:white;'>
            <a class='text-decoration-none'href="` + chitietSp + `">
                <div class='img-box'>
                    <img class='images ' src=${img}></img>
                </div> 
                <div class='bottom'>
                    <p name='name'>${name}</p>
                    <h2> ${price}đ</h2>
                <button class='btn'  >Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
const displayItemRandom = (items) => {
    
    document.getElementById('root-random').innerHTML = items.map((item) => {
        var { img, name, price , masp} = item;
        var chitietSp='chitietsanpham.html?' +name.split(' ').join('-');
        console.log(masp);
        return (
            `<div class='box hover col-sm-2   mx-sm-3 my-sm-2' style=' background:white;'>
            <a class='text-decoration-none'href="` + chitietSp + `">
                <div class='img-box'>
                    <img class='images ' src=${img}></img>
                </div> 
                <div class='bottom'>
                    <p name='name'>${name}</p>
                    <h2> ${price}đ</h2>
                <button class='btn'  >Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
displayProductsOnPage(currentPage);
displayProductsOnPageRandom(currentPage);

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
     filteredData = categories.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchData)
        )
    })
    displayProductsOnPage(currentPage);
});
/*function getcompany(){
     const searchData = document.getElementById('list-company').value.toLowerCase();
     console.log(searchData);
    
     const filteredData = categories.filter((item) => {
        return (
            item.company.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
}
function getprice(){
    const searchData = document.getElementById('list-price').value.toLowerCase();
    console.log(searchData);
    const filteredData = categories.filter((item) => {
        return (
           item.listprice && item.listprice.includes(searchData)
        )
    })
    console.log(filteredData);
    displayItem(filteredData)
    
}*/
function getsearch(){
    const searchDataprice = document.getElementById('list-price').value.toLowerCase();
    const  searchDataram=document.getElementById('list-ram').value;
    const searchDatacompany = document.getElementById('list-company').value.toLowerCase();
    
    if(searchDatacompany!="company" && searchDataprice!="price" && searchDataram!="ram"){
        console.log("1");
        currentPage=1;
         filteredData = categories.filter((item) => {
            return (
                 item.company.includes(searchDatacompany)&& item.listprice && item.listprice.includes(searchDataprice)&& item.detail.ram && item.detail.ram.includes(searchDataram)
            )
        })
        
        displayProductsOnPage(currentPage);
    }else
    if(searchDataprice && searchDatacompany=="company"&&searchDataram=="ram"){
        console.log("2");
        currentPage=1;
         filteredData = categories.filter((item) => {
            return (
               item.listprice && item.listprice.includes(searchDataprice)
            )
        })
        
        displayProductsOnPage(currentPage);
    }else if(searchDatacompany &&searchDataram=="ram"&&searchDataprice=="price" ){
        console.log("3");
        currentPage=1;
             filteredData = categories.filter((item) => {
                return (
                    item.company.includes(searchDatacompany)
                )
            })
            console.log(filteredData)
            displayProductsOnPage(currentPage);
            
           // displayItem(filteredData)
        }else if(searchDataprice && searchDatacompany!="company"&&searchDataram=="ram"){
            currentPage=1;
             filteredData = categories.filter((item) => {
                return (
                    item.company.includes(searchDatacompany)&& item.listprice && item.listprice.includes(searchDataprice)
                )
            })
            
            displayProductsOnPage(currentPage);
        }
        else if(searchDataprice=="price" && searchDatacompany=="company"&&searchDataram!="ram"){
            currentPage=1;
             filteredData = categories.filter((item) => {
                return (
                    item.detail.ram && item.detail.ram.includes(searchDataram)
                )
            })
            displayProductsOnPage(currentPage);
        }
        else if(searchDataprice!="price" && searchDatacompany=="company"&&searchDataram!="ram"){
            currentPage=1;
            console.log("price ram")
            console.log(searchDataprice);
            console.log(searchDataram)
             filteredData = categories.filter((item) => {
                return (
                    item.listprice && item.listprice.includes(searchDataprice)&& item.detail.ram && item.detail.ram.includes(searchDataram)
                )
            })
            console.log(filteredData)
            displayProductsOnPage(currentPage);
        }else if(searchDataprice=="price" && searchDatacompany!="company"&&searchDataram!="ram"){
            currentPage=1;
            console.log(5)
             filteredData = categories.filter((item) => {
                return (
                   item.company&& item.company.includes(searchDatacompany)&& item.detail.ram && item.detail.ram.includes(searchDataram)
                )
            })
            displayProductsOnPage(currentPage);
        }
    
}



function getram(){
    searchDataram=document.getElementById('list-ram').value;
    console.log(searchDataram);
    if(searchDataram){
         filteredData = categories.filter((item) => {
            return (
                item.detail.ram && item.detail.ram.includes(searchDataram)
            )
        })
        console.log(filteredData)
        console.log(filteredData.slice(0,5))
        displayProductsOnPage(currentPage);
    }
}

function displayProductsOnPage(pageNumber) {
    
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = filteredData.slice(startIndex, endIndex);
    displayItem(productsToDisplay);
}
function displayProductsOnPageRandom(pageNumber) {
    
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = list_random.slice(startIndex, endIndex);
    displayItemRandom(productsToDisplay);
}
document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage * itemsPerPage < filteredData.length) {
        currentPage++;
        displayProductsOnPage(currentPage);
        updatePaginationButtons();
    }
});

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayProductsOnPage(currentPage);
        updatePaginationButtons();
    }
});
function updatePaginationButtons() {
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage * itemsPerPage >= list_products.length;
}
document.getElementById('nextPageSale').addEventListener('click', () => {
    if (currentPage * itemsPerPage < filteredData.length) {
        currentPage++;
        displayProductsOnPageSale(currentPage);
        updatePaginationButtonsSale();
    }
});

document.getElementById('prevPageSale').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayProductsOnPageSale(currentPage);
        updatePaginationButtonsSale();
    }
});
function updatePaginationButtonsSale() {
    const prevPageButton = document.getElementById('prevPageSale');
    const nextPageButton = document.getElementById('nextPageSale');

    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage * itemsPerPage >= categoriesale.length;
}

// Initialize pagination buttons
updatePaginationButtonsSale();
displayProductsOnPageSale(currentPage);
function displayProductsOnPageSale(pageNumber) {
    
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = filteredDataSale.slice(startIndex, endIndex);
    displayItemSale(productsToDisplay);
}
document.getElementById('nextPageRandom').addEventListener('click', () => {
    if (currentPage * itemsPerPage < filteredData.length) {
        currentPage++;
        displayProductsOnPageRandom(currentPage);
        updatePaginationButtonsRandom();
    }
});

document.getElementById('prevPageRandom').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayProductsOnPageRandom(currentPage);
        updatePaginationButtonsRandom();
    }
});
function updatePaginationButtonsRandom() {
    const prevPageButton = document.getElementById('prevPageSale');
    const nextPageButton = document.getElementById('nextPageSale');

    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage * itemsPerPage >= list_random.length;
}
updatePaginationButtonsRandom();