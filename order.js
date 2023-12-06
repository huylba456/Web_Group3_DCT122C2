
document.querySelector('.check-shipping-info').addEventListener('click', () => {
    document.querySelector('.modal').style.display='block';
    document.querySelector('.activemauden').style.display = 'block';
});
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.modal').style.display='none';
    document.querySelector('.activemauden').style.display = 'none';
});
document.querySelector('.save').addEventListener('click', () => {
    alert('Lưu thông tin thành công');
    document.querySelector('.modal').style.display='none';
    document.querySelector('.activemauden').style.display = 'none';
});
document.querySelector('.checkout').addEventListener('click', () => {
    alert('Thanh toán đơn đặt hàng thành công');
    location.href = 'index.html';
});