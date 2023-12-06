document.querySelector('.product__amount--minus').addEventListener('click', () => {
    var value=document.querySelector('.product__amount--number').value;
    value--;
    if(value<1) value=1;
    document.querySelector('.product__amount--box input').value=value;
});
 document.querySelector('.product__amount--add').addEventListener('click', () => {
    var value=document.querySelector('.product__amount--number').value;
    value++;
    document.querySelector('.product__amount--box input').value=value;
 });
document.querySelector('.product__addtocart--btn').addEventListener('click', () => {
    alert('Thêm vào giỏ hàng thành công');
});