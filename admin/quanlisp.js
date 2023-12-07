document.querySelectorAll('.fa-solid.fa-trash.delete').forEach(item=>{
    item.addEventListener('click', function () {
    var check=confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
     if(check){
          alert('Xóa sản phẩm thành công');
     }
     else{
         alert('Hủy xóa sản phẩm thành công');
     }
 });
});