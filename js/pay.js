let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

btn.addEventListener("click", function (e) {
    if(list.style.display == "none"){
        list.style.display = "block";
    }else{
        list.style.display = "none";
    }
})



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

let phone_header = document.querySelector(".logo")
console.log(phone_header);

window.addEventListener("scroll",function(e){
  if(this.window.pageYOffset > 100){
    phone_header.classList.add("add")
  }else{
    phone_header.classList.remove("add")
  }
})




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