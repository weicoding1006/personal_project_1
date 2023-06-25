let cardslide = document.querySelector(".cardslide");
let slideshoppingcar = document.querySelector(".slideshoppingcar")
let bg = document.querySelector(".bg-color");
// console.log(cardslide);

cardslide.addEventListener("click", function (e) {
  e.preventDefault();
  slideshoppingcar.classList.toggle("slideshoppingcarblock");
    bg.style.display = "block";
})


bg.addEventListener("click",function(e){
  bg.style.display = "none";
  slideshoppingcar.classList.toggle("slideshoppingcarblock");
})
// let html = document.querySelector(html)

let hd_btn = document.querySelector(".hd-line");
hd_btn.addEventListener("click",function(e){
  let phone_slidebar = document.querySelector(".phone-slidebar");
  if(this.getAttribute("class") == "hd-line"){
    this.classList.add("click");
    phone_slidebar.classList.add("slide")
  }else{
    this.classList.remove("click");
    phone_slidebar.classList.remove("slide")
  }
})




//點擊小圖變大圖  html在72行

let picLink = document.querySelectorAll("div.big-product img");

let pic = document.querySelectorAll("div.small-product a");
// console.log(pic);



for(let i = 0; i<picLink.length; i++){   //先將所有圖片none掉
  picLink[i].style.display = "none" 
}

picLink[0].style.display = "block"; //開啟第一張預設的圖片




for(let i = 0;i<pic.length; i++){   //跑迴圈
  pic[i].addEventListener("click",function(e){ //對小圖執行click事件
    e.preventDefault(); 
    // for(let k = 0; k<pic.length;k++){
    //   pic[k].classList.remove("border")
    // }
    // this.classList.add("border")
    for(let j = 0; j<picLink.length; j++){    
      picLink[j].style.display = "none" //先將所有圖none掉
      if(j-i == 1){   //因為picLink的0是預設圖 所以是picLink的1 會等於 pic的0 兩者永遠差1
        picLink[j].style.display = "block"  //當點擊pic[0]，pickLink[1]會開啟
      }
    }
  })
}






//滑入的購物車移除
let delete_btn = document.querySelector(".delete-icon");
delete_btn.addEventListener("click",function(e){
  slideshoppingcar.classList.remove("slideshoppingcarblock");
  bg.style.display = "none"
})




let right_icon = document.querySelectorAll(".right-icon");
let left_icon = document.querySelectorAll(".left-icon");
let numInput = document.querySelectorAll(".numinput")
let slide_price = document.querySelectorAll(".slide-price");
let slide_product_price = document.querySelectorAll(".slide-product-price");



for(let i = 0;i < right_icon.length; i++){
  right_icon[i].addEventListener("click",function(e){
    numInput[i].value = parseInt(numInput[i].value)+1;

    slide_price[i].textContent = numInput[i].value*slide_product_price[i].textContent;
    let formatter = new Intl.NumberFormat('en-US');
    let formattedNumber = formatter.format(slide_price[i].textContent);
    slide_price[i].textContent = formattedNumber;
  })
}


for(let i = 0;i < right_icon.length; i++){
  left_icon[i].addEventListener("click",function(e){
    if(numInput[i].value>1){
      numInput[i].value = parseInt(numInput[i].value)-1;
       slide_price[i].textContent = numInput[i].value*slide_product_price[i].textContent;
       let formatter = new Intl.NumberFormat('en-US');
       let formattedNumber = formatter.format(slide_price[i].textContent);
       slide_price[i].textContent = formattedNumber;
    }
  })
}





// let picLink1 = document.querySelector(".piclink1");
// let picLink2 = document.querySelector(".piclink2");
// let picLink3 = document.querySelector(".piclink3");
// let picLink4 = document.querySelector(".piclink4");
// let picLink5 = document.querySelector(".piclink5");
// let pic0 = document.querySelector(".pic0")
// let pic1 = document.querySelector(".pic1")
// let pic2 = document.querySelector(".pic2")
// let pic3 = document.querySelector(".pic3")
// let pic4 = document.querySelector(".pic4")
// let pic5 = document.querySelector(".pic5")

// pic1.style.display = "none";
// pic2.style.display = "none";
// pic3.style.display = "none";
// pic4.style.display = "none";
// pic5.style.display = "none";
// picLink1.addEventListener("click",function(e){
//   e.preventDefault();
//   pic0.style.display = 'none'
//   pic2.style.display = 'none'
//   pic1.style.display = 'block'
//   pic3.style.display = "none";
//   pic4.style.display = "none";
//   pic5.style.display = "none";
// })

// picLink2.addEventListener("click",function(e){
//   e.preventDefault();
//   pic0.style.display = 'none'
//   pic1.style.display = 'none'
//   pic2.style.display = 'block'
//   pic3.style.display = "none";
//   pic4.style.display = "none";
//   pic5.style.display = "none";
// })

// picLink3.addEventListener("click",function(e){
//   e.preventDefault();
//   pic0.style.display = 'none'
//   pic1.style.display = "none";
//   pic2.style.display = "none";
//   pic3.style.display = "block";
//   pic4.style.display = "none";
//   pic5.style.display = "none";
// })

// picLink4.addEventListener("click",function(e){
//   e.preventDefault();
//   pic0.style.display = 'none'
//   pic1.style.display = "none";
//   pic2.style.display = "none";
//   pic3.style.display = "none";
//   pic4.style.display = "block";
//   pic5.style.display = "none";
// })

// picLink5.addEventListener("click",function(e){
//   e.preventDefault();
//   pic0.style.display = 'none'
//   pic1.style.display = "none";
//   pic2.style.display = "none";
//   pic3.style.display = "none";
//   pic4.style.display = "none";
//   pic5.style.display = "block";
// })


