const ketqua=document.querySelector('.ket-qua');
const logout=document.querySelector('.usersection.logout');
const loginButton = document.querySelector('.dangnhap');
const signupForm = document.querySelector('.dangky');
const hinhanh=document.querySelectorAll('.buttons button');
const page=document.querySelectorAll('.product__pagination a');
document.querySelector('.findPrice').addEventListener('click', () => {
    ketqua.style.display='block';
});
document.querySelector('.nav__search--btn.outline').addEventListener('click', () => {
    ketqua.style.display='block';
});
var current=1;
hinhanh.forEach((item,index) => {
    item.addEventListener('click', () => {
        if(index==0){
        if(current==1) current=1;
        else --current;
        }
        else{
            if(current==5) current=5;
            else  ++current;
        }
        var html='';
        html=`<img src="img/banner${current}.jpg" alt="">
        </div>`;
        document.querySelector('.item').innerHTML=html;
    });
});
loginButton.addEventListener('click', function () {
        document.querySelector('.modal').style.display = 'flex';
        document.querySelector('.activemauden').style.display = 'block';
        document.querySelector('.closeiconDangnhap').addEventListener('click', function () {
            document.querySelector('.modal').style.display = 'none';
            document.querySelector('.activemauden').style.display = 'none';
        })
        document.querySelector('.signin-button').addEventListener('click', function (e) {
            e.preventDefault();
            alert('Đăng nhập thành công');
            document.querySelector('.modal').style.display = 'none';
            document.querySelector('.activemauden').style.display = 'none';
        })
        document.querySelector('.user').style.display='block'; 
        document.querySelector('.nonuser').style.display='none';
    })
    signupForm.addEventListener('click', function () {
        document.querySelector('.modal_signup').style.display = 'block';
        document.querySelector('.activemauden').style.display = 'block';
        document.querySelector('.closeiconDangky').addEventListener('click', function () {
            document.querySelector('.modal_signup').style.display = 'none';
            document.querySelector('.activemauden').style.display = 'none';
        })
        document.querySelector('.activemauden').addEventListener('click', function () {
            document.querySelector('.modal_signup').style.display = 'none';
            document.querySelector('.activemauden').style.display = 'none';
        })
        document.querySelector('.signup-button').addEventListener('click', function (e) {
            e.preventDefault();
            alert('Đăng ký thành công');
            document.querySelector('.modal_signup').style.display = 'none';
            document.querySelector('.activemauden').style.display = 'none';
        })
        document.querySelector('.user').style.display='block'; 
        document.querySelector('.nonuser').style.display='none';
    })
logout.addEventListener('click', () => {
    document.querySelector('.user').style.display='none'; 
    document.querySelector('.nonuser').style.display='block';
});

    document.querySelectorAll('.product__filter.outline button').forEach((item,index) => {
    item.addEventListener('click', () => {
    document.querySelectorAll('.product__filter.outline button').forEach((item) => {
      item.classList.remove('active');
    });
    item.classList.add('active');
    if(index==0)
    { 
        location.href='index.html';
        page.forEach((item) => {
        item.style.display='block';
        });
    var html='';
    html= `
    <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img33.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img35.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img1.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img5.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img9.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img15.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img3.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
   <div class="product__item--img"><img src="./img/img7.jpg"></div>
   <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
   <div class="product__item--price">727.000đ-1.727.000đ</div>
   <div class="product__item--size">3 size</div>
   <div class="product__item--rating ">★★★★★</div>
    </div>
    <div class="product__item outline">
    <div class="product__item--img"><img src="./img/img5.jpg"></div>
    <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <div class="product__item--price">727.000đ-1.727.000đ</div>
    <div class="product__item--size">3 size</div>
    <div class="product__item--rating ">★★★★★</div>
    </div>
`
    document.querySelector('.product__box').innerHTML= html;
    page.forEach((item) => {
    item.style.display='block';
    });

    }
    if(index==1)
    {
        page.forEach((item) => {
            item.style.display='none';
            });
    var html='';
    html= `
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img5.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img9.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img15.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img3.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>`
    document.querySelector('.product__box').innerHTML= html;
    page.forEach((item) => {
        item.style.display='none';
        });
    }
    if(index==2)
    {
        page.forEach((item) => {
            item.style.display='none';
            });
    var html='';
    html= `
    <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img3.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img7.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img1.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img5.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img9.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img15.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img3.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>`
    document.querySelector('.product__box').innerHTML= html;
    page.forEach((item) => {
        item.style.display='none';
        });
    }
    if(index==3)
    {
        page.forEach((item) => {
            item.style.display='none';
            });
    var html='';
    html= `
    <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img25.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img27.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img1.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
`
    document.querySelector('.product__box').innerHTML= html;
    page.forEach((item) => {
        item.style.display='none';
        });
    }
    if(index==4)
    {
        page.forEach((item) => {
            item.style.display='none';
            });
    var html='';
    html= `
    <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img17.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img11.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img21.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img29.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   `
    document.querySelector('.product__box').innerHTML= html;
    page.forEach((item) => {
        item.style.display='none';
        });
    }
    });
    });
    document.querySelectorAll('.product__filter--type button').forEach((item) => {
        item.addEventListener('click', () => {
        document.querySelectorAll('.product__filter--type button').forEach((item) => {
          item.classList.remove('active');
        });
        item.classList.add('active'); 
        var html='';
        html= `
        <div class="product__item outline">
           <div class="product__item--img"><img src="./img/img35.jpg"></div>
           <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
           <div class="product__item--price">727.000đ-1.727.000đ</div>
           <div class="product__item--size">3 size</div>
           <div class="product__item--rating ">★★★★★</div>
       </div>`
        document.querySelector('.product__box').innerHTML= html;
        });
        });
        document.querySelectorAll('.product__filter--price button').forEach((item) => {
            item.addEventListener('click', () => {
            document.querySelectorAll('.product__filter--price button').forEach((item) => {
              item.classList.remove('active');
            });
            item.classList.add('active'); 
            var html='';
            html= `
            <div class="product__item outline">
               <div class="product__item--img"><img src="./img/img37.jpg"></div>
               <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
               <div class="product__item--price">727.000đ-1.727.000đ</div>
               <div class="product__item--size">3 size</div>
               <div class="product__item--rating ">★★★★★</div>
           </div>`
            document.querySelector('.product__box').innerHTML= html;
            });
            });
                    document.querySelectorAll('.product__filter--rating button').forEach((item) => {
                        item.addEventListener('click', () => {
                        document.querySelectorAll('.product__filter--rating button').forEach((item) => {
                        item.classList.remove('active');
                        });
                        item.classList.add('active'); 
                        var html='';
                        html= `
                        <div class="product__item outline">
                           <div class="product__item--img"><img src="./img/img33.jpg"></div>
                           <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                           <div class="product__item--price">727.000đ-1.727.000đ</div>
                           <div class="product__item--size">3 size</div>
                           <div class="product__item--rating ">★★★★★</div>
                       </div>`
                        document.querySelector('.product__box').innerHTML= html;
                        });
                        });
