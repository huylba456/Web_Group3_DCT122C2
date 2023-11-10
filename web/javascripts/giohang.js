var user=getCurrentUser();
listcart(user);
function listcart(user){
    var list =document.querySelector(".list-cart");
	var total=0;
	var s=`<tbody>
	<tr>
		<th>STT</th>
		
		
	</tr>`;;
    for (var i = 0; i < user.products.length; i++) {
		var namesp = user.products[i].name;
        var p=timKiemTheoMa(list_products,namesp);

		var soluongSp = user.products[i].soluong;
        console.log(p);
        s += `
	<div class="card rounded-3 mb-4" style="height:150px">
		<div class="card-body d-flex justifi-content-center align-items-center p-4">
		   <div class="col-sm-1">
			   <img src="`+p.img+`" class="img-fluid rounder-3 w-100 h-100 overflow-hidden">
		   </div>
		   <div class="col-sm-3 mx-5">
		   <p class="lead fw-normal mb-2">`+p.name+`</p>
	   		</div>
		   <div class="col-sm-3 mx-5">
			   <p class="lead fw-normal mb-2">`+p.price+`</p>
			</div>
		</div>
	  </div>
		`;
		
		total+=Number(p.price);
		
}
list.innerHTML=s;
 document.querySelector('.price').innerHTML=total;
}
function timKiemTheoMa(list, ten) {
    for (var l of list) {
        if (l.name == ten) return l;
    }
}