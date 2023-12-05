const ketqua=document.querySelector('.ket-qua');
const page=document.querySelectorAll('.product__pagination a');
document.querySelectorAll('.product__pagination a').forEach((item,index) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.product__pagination a').forEach((item) => {
      item.classList.remove('active');
    });
    item.classList.add('active');
    if(index==1)
    {
       var html='';
        html= `<div class="product__item outline">
					<div class="product__item--img"><img src="./img/img1.jpg"></div>
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
					<div class="product__item--img"><img src="./img/img5.jpg"></div>
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
					<div class="product__item--img"><img src="./img/img9.jpg"></div>
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
					<div class="product__item--img"><img src="./img/img13.jpg"></div>
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
					<div class="product__item--img"><img src="./img/img17.jpg"></div>
					<div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					<div class="product__item--price">727.000đ-1.727.000đ</div>
					<div class="product__item--size">3 size</div>
					<div class="product__item--rating ">★★★★★</div>
				</div>`
   document.querySelector('.product__box').innerHTML= html;
    }
    if(index==2)
    {
       var html='';
        html= `<div class="product__item outline">
       <div class="product__item--img"><img src="./img/img19.jpg"></div>
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
       <div class="product__item--img"><img src="./img/img23.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
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
       <div class="product__item--img"><img src="./img/img29.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>
   <div class="product__item outline">
       <div class="product__item--img"><img src="./img/img31.jpg"></div>
       <div class="product__item--name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <div class="product__item--price">727.000đ-1.727.000đ</div>
       <div class="product__item--size">3 size</div>
       <div class="product__item--rating ">★★★★★</div>
   </div>`
   document.querySelector('.product__box').innerHTML= html;
    }
}
    )});

    document.querySelectorAll('.product__filter--brand button').forEach((item,index) => {
    item.addEventListener('click', () => {
    document.querySelectorAll('.product__filter--brand button').forEach((item) => {
      item.classList.remove('active');
    });
    item.classList.add('active');
    if(index==0)
    {
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