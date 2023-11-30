const menuadmin = document.querySelectorAll('.menuadmin');
const tab = document.querySelectorAll('.link-name');

menuadmin.forEach((item,index) => {
    item.style.display = 'none';
})
menuadmin[0].style.display = 'block';
// tab laf menu goc trai
tab.forEach((item,index) => {    
    item.addEventListener('click', () => {
        menuadmin.forEach((itemz, indexz) => {
            // item.classList.remove('active');
            itemz.style.display = 'none';
        })
        // item.classList.add('active');
        menuadmin[index].style.display = 'block'; 
    })

})
//render phan addproduct
renderPhanTrangAddProduct(productz);
changePagesad(productz);
renderProductManage(productz);
addEventToPagead(); 
// end

//render phan quanlyuser
renderPhanTrang(userz);
changepageQuanlyuser(userz);
renderUserManagement(userz);
AddEventrenderPhanTrang();
//end

//render cho các nút previous và next ở đây

const gohome = document.querySelector('.logo-name');
gohome.addEventListener('click', () => {
    window.location.href = "../ProductPage/index.html";
})

const backhome = document.querySelector('.backhome');
backhome.addEventListener('click', () => {
    window.location.href = "../ProductPage/index.html";
})
