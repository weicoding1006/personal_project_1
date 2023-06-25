$(document).ready(function () {
    $("li.type a.out").eq(0).click(function (e) {
        e.preventDefault()
        $(".innerblock1").slideToggle();
    });
});

$(document).ready(function () {
    $("li.type a.out").eq(1).click(function (e) {
        e.preventDefault()
        $(".innerblock2").slideToggle();
    });
});

$(document).ready(function () {
    $("li.type a.out").eq(2).click(function (e) {
        e.preventDefault()
        $(".innerblock3").slideToggle();
    });
});

$(document).ready(function () {
    $("li.type a.out").eq(3).click(function (e) {
        e.preventDefault()
        $(".innerblock4").slideToggle();
    });
});

$(document).ready(function () {
    $("li.type a.out").eq(4).click(function (e) {
        e.preventDefault()
        $(".innerblock5").slideToggle();
    });
});

$(document).ready(function () {
    $("li.type a.out").eq(5).click(function (e) {
        e.preventDefault()
        $(".innerblock6").slideToggle();
    });
});






document.addEventListener("click", function (e) {

    if (e.target.getAttribute("class") == "out") {
        e.target.classList.add("-on");
    }else{
        e.target.classList.remove("-on")
    };
})


///裡面的a
let innerLink = document.querySelectorAll(".innerlink");
console.log(innerLink);

for(let i = 0; i < innerLink.length; i++){
    innerLink[i].addEventListener("click",function(e){
        e.preventDefault();
    })
}