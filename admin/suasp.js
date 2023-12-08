document.querySelector('.btn-primaryedit').addEventListener('click', function () {
    alert('Sửa sản phẩm thành công');
});
function suaa(){
    location.href='quanlysanphamadmin.html';
}
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
