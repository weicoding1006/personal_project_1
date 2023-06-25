let right_move = document.querySelector(".phone-sec2-content");
let left_move = document.querySelector(".phone-sec2-pic")

let phone_sec3_content = document.querySelector(".phone-sec3-content")
let phone_sec3_pic = document.querySelector(".phone-sec3-pic")

console.log(right_move);

window.addEventListener("scroll",function(){
    console.log(this.window.pageYOffset);
    if(window.pageYOffset > 100){
        right_move.classList.add("move")
        left_move.classList.add("leftmove")
        if(window.pageYOffset > 800){
            phone_sec3_content.classList.add("sec3_left_move")
            phone_sec3_pic.classList.add("sec3_right_move")
        }
    }
})



//swiper

var mySwiper = new Swiper('.swiper-container', {
    effect: 'fade', // 淡入淡出效果
    // 輪播的方向，可選值：horizontal、vertical
    // direction: 'horizontal',
  
    // 是否循環輪播
    loop: true,
  
    // 自動輪播，可選值：數字（自動輪播的時間間隔），false（禁用自動輪播）
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
  
    // 分頁器，如果設置為 true，會自動生成分頁器
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true
    // },
  
    // 導航按鈕，如果設置為 true，會自動生成上一頁、下一頁按鈕
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  
    // 響應式設計，如果設置為 true，會自動適應不同的設備尺寸
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
    transition: {
        // 過渡效果為ease-in-out
        // 可以修改成 linear, ease-out 等等
        // 參考 https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
        timingFunction: 'ease-in-out'
      },

    allowTouchMove: false,
    speed:4000,
  })


