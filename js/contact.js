let submit = document.querySelector(".submit");
let name = document.querySelector(".name");
let phone = document.querySelector(".phone");
let email = document.querySelector(".email");
let content = document.querySelector(".content");


submit.addEventListener("click", function (e) {
    e.preventDefault();
    if (name.value === "") {
        alert("請輸入姓名");
        return;
    }
    if (phone.value === "") {
        alert("請輸入電話號碼")
        return;
    }
    if (email.value === "") {
        alert("請輸入電子信箱")
        return;
    }
    if (content.value === "") {
        alert("請輸入內容");
        return;
    }
    if (name.value !== "" && phone.value !== "" && email.value !== "" && content.value !== "") {
        alert(`姓名:${name.value}\n電話號碼:${phone.value}\n電子信箱:${email.value}\n\n傳送成功`);
    }
    name.value = "";
    phone.value = "";
    content.value = "";
    email.value = "";
});

