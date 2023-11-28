let banner = document.querySelector('.banner .list');
let items = document.querySelectorAll('.banner .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.banner .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadbanner();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadbanner();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadbanner(){
    banner.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.banner .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadbanner();
    })
})
window.onresize = function(event) {
    reloadbanner();
};

