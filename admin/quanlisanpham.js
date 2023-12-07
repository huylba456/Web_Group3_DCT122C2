document.querySelector('.addproducticon').addEventListener('click', function () {
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.activemauden').style.display = 'block';
});
document.querySelector('#iconclose').addEventListener('click', function () {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.activemauden').style.display = 'none';
});
document.querySelector('.btn-primary').addEventListener('click', function () {
    alert('Thêm sản phẩm thành công');
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.activemauden').style.display = 'none';
});
document.querySelector('.fa-solid.fa-pen-to-square.edit').addEventListener('click', function () {
    document.querySelector('.editproduct').style.display = 'block';
    document.querySelector('.activemauden').style.display = 'block';
});
document.querySelector('.closeedit').addEventListener('click', function () {
    document.querySelector('.editproduct').style.display = 'none';
    document.querySelector('.activemauden').style.display = 'none';
});
document.querySelector('.btn-primaryedit').addEventListener('click', function () {
    alert('Sửa sản phẩm thành công');
    document.querySelector('.editproduct').style.display = 'none';
    document.querySelector('.activemauden').style.display = 'none';
});
document.querySelector('.fa-solid.fa-trash.delete').addEventListener('click', function () {
   var check=confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
    if(check){
         alert('Xóa sản phẩm thành công');
    }
    else{
        alert('Hủy xóa sản phẩm thành công');
    }
});
document.querySelector('.imgdel1').addEventListener('click', function () {
    var check=confirm('Bạn có chắc chắn muốn xóa hình ảnh 1 không?');
    if(check){
         alert('Xóa hình ảnh 1 thành công');
    }
    else{
        alert('Hủy xóa hình ảnh 1 thành công');
    }
});
document.querySelector('.imgdel2').addEventListener('click', function () {
    var check=confirm('Bạn có chắc chắn muốn xóa hình ảnh 2 không?');
    if(check){
         alert('Xóa hình ảnh 2 thành công');
    }
    else{
        alert('Hủy xóa hình ảnh 2 thành công');
    }
});
document.querySelector('.imgdel3').addEventListener('click', function () {
    var check=confirm('Bạn có chắc chắn muốn xóa hình ảnh 3 không?');
    if(check){
         alert('Xóa hình ảnh 3 thành công');
    }
    else{
        alert('Hủy xóa hình ảnh 3 thành công');
    }
});