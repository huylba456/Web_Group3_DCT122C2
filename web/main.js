 const btn=document.querySelector('.button');
 const inputname=document.querySelector('.name');
 const inputfull=document.querySelector('.fullname');
 const inputusername=document.querySelector('.username');
 const inputemail=document.querySelector('.email');
 const inputpass=document.querySelector('.pass');
 const inputusernamereg=document.querySelector('.usernamereg');
 const inputpassreg=document.querySelector('.passreg');
 var c='chung';
 var s=c[1];

 setTimeout(() => {
    checkCurrentUser();
 }, 1);
 

 function equalUser(u1, u2) {
	return (u1.username == u2.username && u1.pass == u2.pass);
}
function getCurrentUser() {
    return JSON.parse(window.localStorage.getItem('CurrentUser')); 
}

function setCurrentUser(u) {
    window.localStorage.setItem('CurrentUser', JSON.stringify(u));
}
function login(){
       var username=inputusernamereg.value;
       var pass=inputpassreg.value;
       var user=new User(username,pass);
       var listUser=getListUser();
       var check=false;
       for(var u of listUser){
        if(equalUser(user,u)){
            setCurrentUser(u);
            check=true;
        }
        
       }
       if(check){
        window.location.href="index.html"
        alert("đăng nhập thành công");
       } else {
        alert("vui long đăng nhập lại")
        inputpassreg.focus();
       }
       

}
 function getuser(){
    var ho = inputname.value;
    var ten = inputfull.value;
    var email = inputemail.value;
    var username = inputusername.value;
    var pass = inputpass.value;
    if(ten== "") {
        alert("Vui lòng nhập tên!");
        return false;
        }
        if(ho == "") {
        alert("Vui lòng nhập họ!");
        return false;
        }
        if(username == "") {
        alert("Vui lòng nhập username!");
        return false;
        }
        if(pass == ""||pass.length<8) {
            alert("Vui lòng nhập pass!");
            return false;
            }
         if(email == "") {
                alert("Vui lòng nhập email!");
                return false;
                }
        
    var user=new User(username,pass,ho,ten,email);
    var listUser=getListUser();
    for(var u of listUser){
        if(user.username==u.username){
            alert("tên có người đăng nhập");
            return false;
        } 
    }
   
    listUser.push(user);
    
    window.localStorage.setItem('ListUser',JSON.stringify(listUser));
    window.location.href="signin.html"
   alert("vui long an vào đăng nhạp")
    
 }
 var list=getListUser();
 console.log(list);
 function getCurrentUser() {
    return JSON.parse(window.localStorage.getItem('CurrentUser'));
}

function setCurrentUser(u) {
    window.localStorage.setItem('CurrentUser', JSON.stringify(u));
}


function getListUser() {
    var data = JSON.parse(window.localStorage.getItem('ListUser')) || []
    var l = [];
    for (var d of data) {
        l.push(d);
    }
    return l;
}

function setListUser(l) {
    window.localStorage.setItem('ListUser', JSON.stringify(l));
}


function User(username, pass, ho, ten, email, products, donhang) {
	this.ho = ho || '';
	this.ten = ten || '';
	this.email = email || '';

	this.username = username;
	this.pass = pass;
	this.products = products || [];
	this.donhang = donhang || [];
}
function checkCurrentUser(){
    var user=getCurrentUser();
    
    console.log(user);
    if(user!=null){
        
        document.querySelector('.signin').innerHTML=user.username;
        document.querySelector('.signin').href="giohang.html"

    }
}


