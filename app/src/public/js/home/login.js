"use strict";

// 로그인 기능 구현
// Front : 아이디, 비밀번호 입력 => 버튼 눌리면 서버로 데이터 전송

const id = document.querySelector("#id"),
      psword = document.querySelector("#psword"),
      loginBtn = document.querySelector("#button");

      console.log(id);
      console.log("hello");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
   
    fetch("/login", {
        method: "POST", // 데이터 전달 POST
        headers: {// 전달하는 데이터 JSON
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href="/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("로그인 중 에러 발생");
    });
}