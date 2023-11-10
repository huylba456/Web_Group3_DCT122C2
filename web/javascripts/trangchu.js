var index=1;
function changeimg(){
    var imgs=["/image/quang-cao1.jpg","/image/quang-cao2.png","/image/quang-cao3.jpg","/image/quang-cao4.jpg"]
    document.querySelector(".img").src=imgs[index];
    
    console.log(index)
    if(index>imgs.length-2){
        index=0;
    }else{
        index++;
    }
}
setInterval(() => {
    changeimg();
}, 2000);
function User(username, pass, ho, ten, email, products, donhang) {
	this.ho = ho || '';
	this.ten = ten || '';
	this.email = email || '';

	this.username = username;
	this.pass = pass;
	this.products = products || [];
	this.donhang = donhang || [];
}