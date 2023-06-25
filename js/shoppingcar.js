
let minusBtn = document.querySelectorAll(".minus-btn");
let numInput = document.querySelectorAll(".numinput");
let plusBtn = document.querySelectorAll(".plus-btn");
let totalPay = document.querySelectorAll(".totalpay");
let price = document.querySelectorAll(".price");
let total = document.querySelector(".total");



//BTN1-----------------------------------------------------------------------------

init();

minusBtn[0].addEventListener("click", function (e) {
    if (numInput[0].value > 1) {
        numInput[0].value -= 1;
        let num = numInput[0].value * price[0].innerHTML
        totalPay[0].textContent = "NT" + num;
        init();
        totalPay[0].textContent = "NT" + num.toLocaleString();
    }


});

plusBtn[0].addEventListener("click", function (e) {
    numInput[0].value = parseInt(numInput[0].value) + 1;
    let num = numInput[0].value * price[0].innerHTML
    totalPay[0].textContent = "NT" + num;
    init();
    totalPay[0].textContent = "NT" + num.toLocaleString();
});






//BTN2-------------------------------------------------------------------------

minusBtn[1].addEventListener("click", function (e) {
    if (numInput[1].value > 1) {
        numInput[1].value -= 1;
        let num = numInput[1].value * price[1].innerHTML;
        totalPay[1].textContent = "NT" + num;
        init();
        totalPay[1].textContent = "NT" + num.toLocaleString();
    }

});

plusBtn[1].addEventListener("click", function (e) {
    numInput[1].value = parseInt(numInput[1].value) + 1;
    let num = numInput[1].value * price[1].innerHTML;
    totalPay[1].textContent = "NT" + num;
    init();
    totalPay[1].textContent = "NT" + num.toLocaleString();
});


//BTN3-------------------------------------------------------------------------


minusBtn[2].addEventListener("click", function (e) {
    if (numInput[2].value > 1) {
        numInput[2].value -= 1;
        let num = numInput[2].value * price[2].innerHTML
        totalPay[2].textContent = "NT" + num;
        init();
        totalPay[2].textContent = "NT" + num.toLocaleString();
    }

});

plusBtn[2].addEventListener("click", function (e) {
    numInput[2].value = parseInt(numInput[2].value) + 1;
    let num = numInput[2].value * price[2].innerHTML
    totalPay[2].textContent = "NT" + num;
    init();
    totalPay[2].textContent = "NT" + num.toLocaleString();
});





/*初始化*/

function init() {
    let num = 0;
    for (i = 0; i < totalPay.length; i++) {
        // console.log(numInput[i].value ,price[i].innerHTML);
        num += numInput[i].value * price[i].innerHTML;

    }
    let formatter = new Intl.NumberFormat('en-US');
    let formattedNumber = formatter.format(num);
    total.textContent = "NT" + formattedNumber;
    // console.log(num);
};




//電腦版全選

let check_box = document.querySelectorAll(".checkbox");
let des_check_all = document.querySelector(".des-check-all");

des_check_all.addEventListener("click",function(e){
    if(des_check_all.checked == true){
        for(let i = 0; i<check_box.length; i++){
            // console.log(i);
            check_box[i].checked =true;
        }
    }else{
        for(let i = 0; i<check_box.length; i++){
            // console.log(i);
            check_box[i].checked =false;
        }
    }
})


//電腦版刪除

let des_del = document.querySelectorAll(".des-del");
let cartList = document.querySelectorAll(".cartList");
let des_del_all = document.querySelector(".text2");
let table_body = document.querySelector("tbody");
console.log(table_body);

for(let i = 0; i<des_del.length;i++){
    des_del[i].addEventListener("click",function(e){
        cartList[i].classList.add("none")
    })
}

des_del_all.addEventListener("click",function(e){
    if(des_check_all.checked == true){
        console.log("讚");
        table_body.classList.add("none");
        total.innerHTML = "NT$"+ 0;
        check_box[0].checked = false;
        des_check_all.checked = false;
    }

})

//全刪




//手機板購物車

let phone_plus_btn = document.querySelectorAll(".phone-plus-btn"); //加法
let phone_num_btn = document.querySelectorAll(".phone-num-btn"); //數量
let phone_minus_btn = document.querySelectorAll(".phone-minus-btn"); //減法
let phone_price_total = document.querySelectorAll(".phone-price-total"); //每個商品價格
let phone_total = document.querySelector(".phone-all-total"); //加總



//先初始化一次
phoneInit();

//加法

for(let i = 0; i<phone_plus_btn.length;i++){
    phone_plus_btn[i].addEventListener("click",function(e){
        phone_num_btn[i].value = parseInt(phone_num_btn[i].value)+1;
        phoneInit();
    })
}




//減法

for(let i = 0; i<phone_minus_btn.length;i++){
    phone_minus_btn[i].addEventListener("click",function(e){
        if(phone_num_btn[i].value >1){
            phone_num_btn[i].value -= 1;
            phoneInit();
        }
    })
}


//刪除
const product_list = document.querySelectorAll(".product");
const phone_del = document.querySelectorAll(".phone-del");


for (var i = 0; i < phone_del.length; i++) {
  (function(index) {
    phone_del[index].addEventListener("click", function(e) {
      product_list[index].classList.add('none');
      
      phone_num_btn = document.querySelectorAll(".phone-num-btn"); // 更新nodelist
      phone_price_total = document.querySelectorAll(".phone-price-total"); // 更新nodelist
      
      phoneInit();
    });
  })(i);
}

//加總

function phoneInit(){
    let num = 0;

    for(let i = 0;i < phone_num_btn.length ;i++){
        // console.log(phone_num_btn);
         num += phone_num_btn[i].value * phone_price_total[i].innerHTML;
    }
    
    let formatter = new Intl.NumberFormat('en-US');
    let formattedNumber = formatter.format(num);
    phone_total.innerHTML = formattedNumber;
    // console.log(formattedNumber);
}





//手機板全選

const check_all = document.querySelector("div.left input");
const check = document.querySelectorAll(".check");



check_all.addEventListener("click",function(e){
    if(check_all.checked == true){
       check.forEach(function(item,index){
        item.checked = true;
       })
    }else{
        for(let i = 0; i< check.length;i++){
            check[i].checked = false;  //為何使用forEach無法?
        }
    }
})


// const product_list = document.querySelectorAll(".product");
// const phone_del = document.querySelectorAll(".phone-del");
// console.log(phone_del);
// console.log(product_list);

// for (var i = 0; i < phone_del.length; i++) {
//     phone_del[i].addEventListener("click",function(e){
//         product_list[i].classList.add('none');
//     })
// }

















// let phone_minus_btn = document.querySelectorAll(".phone-minus-btn");
// let phone_plus_btn = document.querySelectorAll(".phone-plus-btn");
// let phone_num = document.querySelectorAll(".phone-num-btn");
// let phone_total = document.querySelectorAll(".phone-price-total")
// let all_total = document.querySelector(".phone-all-total");

// // phoneInit();
// phoneInit();
// //加法
// phone_plus_btn[0].addEventListener("click", function (e) {
//     phone_total[0].innerHTML = 550;
//     phone_num[0].value = parseInt(phone_num[0].value) + 1;

//     let price = phone_num[0].value * phone_total[0].innerHTML;
    
//     phone_total[0].innerHTML = price;
//     phoneInit();
//     phone_total[0].innerHTML = price.toLocaleString(); //+在後面不會出錯
// })



// phone_plus_btn[1].addEventListener("click", function (e) {
//     phone_total[1].innerHTML = 600;
//     phone_num[1].value = parseInt(phone_num[1].value) + 1;

//     let price = phone_num[1].value * phone_total[1].innerHTML;
//     phone_total[1].innerHTML = price;
//     phoneInit();
//     phone_total[1].innerHTML = price.toLocaleString();
// })



// phone_plus_btn[2].addEventListener("click", function (e) {
//     phone_total[2].innerHTML = 500;
//     phone_num[2].value = parseInt(phone_num[2].value) + 1;

//     let price = phone_num[2].value * phone_total[2].innerHTML;
//     phone_total[2].innerHTML = price;
//     phoneInit();
//     phone_total[2].innerHTML = price.toLocaleString();
// })



// //減法
// phone_minus_btn[0].addEventListener("click", function (e) {

//     phone_total[0].innerHTML = 550;

//     if (phone_num[0].value > 1) {
//         phone_num[0].value -= 1;
//         let price = phone_num[0].value * phone_total[0].innerHTML;
//         phone_total[0].innerHTML = price;
//         phoneInit();
//         phone_total[0].innerHTML = price.toLocaleString();
//     };
 
    
// })

// phone_minus_btn[1].addEventListener("click", function (e) {

//     phone_total[1].innerHTML = 600;

//     if (phone_num[1].value > 1) {
//         phone_num[1].value -= 1;
//         let price = phone_num[1].value * phone_total[1].innerHTML;
//         phone_total[1].innerHTML = price;
//         phoneInit();
//         phone_total[1].innerHTML = price.toLocaleString();
//     };

// })


// phone_minus_btn[2].addEventListener("click", function (e) {

//     phone_total[2].innerHTML = 500;

//     if (phone_num[2].value > 1) {
//         phone_num[2].value -= 1;
//         let price = phone_num[2].value * phone_total[2].innerHTML;
//         phone_total[2].innerHTML = price;
//         phoneInit();
//         phone_total[2].innerHTML = price.toLocaleString();
//     };

// })



// function phoneInit() {
//     let num = 0;
//     for (let i = 0; i < phone_total.length; i++) {
//         num += parseInt(phone_num[i].value * phone_total[i].innerHTML)

//         console.log(num);
//     }
//     let formatter = new Intl.NumberFormat('en-US');
//     let formattedNumber = formatter.format(num);
//     // console.log(formattedNumber);
//     // console.log(typeof num);
//     all_total.innerHTML = formattedNumber;
// }














//減法

// for (let i = 0; i < phone_minus_btn.length; i++) {
//     phone_minus_btn[i].addEventListener("click", function (e) {

//         phone_total[0].innerHTML = 550;  //不寫會出事
//         phone_total[1].innerHTML = 600;
//         phone_total[2].innerHTML = 500;

//         if (phone_num[i].value > 1) {
//             phone_num[i].value -= 1;
//         };


//         phone_total[i].innerHTML = phone_num[i].value * phone_total[i].innerHTML;
//     })
// }


//加法
// for (let i = 0; i < phone_plus_btn.length; i++) {
//     phone_plus_btn[i].addEventListener("click", function (e) {

//         phone_total[0].innerHTML = 550;  //不寫會出事
//         phone_total[1].innerHTML = 600;
//         phone_total[2].innerHTML = 500;

//         phone_num[i].value = parseInt(phone_num[i].value) + 1;  //加法會需要轉成數字型態

//         phone_total[i].innerHTML = phone_num[i].value * phone_total[i].innerHTML;
//     });
// }

//加總

// function phoneInit(){
//     let num = 0;
//     for(i = 0 ; i < phone_total.length; i++){
//         num += phone_total[i].innerHTML
//     }
// }
























let cardslide = document.querySelector(".cardslide");
let slideshoppingcar = document.querySelector(".slideshoppingcar")
let bg = document.querySelector(".bg-color");
// console.log(cardslide);

cardslide.addEventListener("click", function (e) {
    e.preventDefault();
    slideshoppingcar.classList.toggle("slideshoppingcarblock");
    bg.style.display = "block";
})


bg.addEventListener("click", function (e) {
    bg.style.display = "none";
    slideshoppingcar.classList.toggle("slideshoppingcarblock");
})
// let html = document.querySelector(html)

let hd_btn = document.querySelector(".hd-line");
hd_btn.addEventListener("click", function (e) {
    let phone_slidebar = document.querySelector(".phone-slidebar");
    if (this.getAttribute("class") == "hd-line") {
        this.classList.add("click");
        phone_slidebar.classList.add("slide")
    } else {
        this.classList.remove("click");
        phone_slidebar.classList.remove("slide")
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
let numInput_btn = document.querySelectorAll(".slide-numinput")
let slide_price = document.querySelectorAll(".slide-price");
let slide_product_price = document.querySelectorAll(".slide-product-price");



for(let i = 0;i < right_icon.length; i++){
  right_icon[i].addEventListener("click",function(e){
    numInput_btn[i].value = parseInt(numInput_btn[i].value)+1;
    console.log(numInput_btn[i].value);
    slide_price[i].textContent = numInput_btn[i].value*slide_product_price[i].textContent;
    let formatter = new Intl.NumberFormat('en-US');
    let formattedNumber = formatter.format(slide_price[i].textContent);
    slide_price[i].textContent = formattedNumber;
  })
}


for(let i = 0;i < right_icon.length; i++){
  left_icon[i].addEventListener("click",function(e){
    if(numInput_btn[i].value>1){
      numInput_btn[i].value = parseInt(numInput_btn[i].value)-1;
       slide_price[i].textContent = numInput_btn[i].value*slide_product_price[i].textContent;
       let formatter = new Intl.NumberFormat('en-US');
       let formattedNumber = formatter.format(slide_price[i].textContent);
       slide_price[i].textContent = formattedNumber;
    }
  })
}









