"use strict";

// 로그인 기능 구현
// Front : 아이디, 비밀번호 입력 => 버튼 눌리면 서버로 데이터 전송

const id = document.querySelector("#id"),
      name = document.querySelector("#name"),
      psword = document.querySelector("#psword"),
      confirmPsword = document.querySelector("#confirm-psword"),
      registerBtn = document.querySelector("#button");

      console.log(id);
      console.log("hello");

registerBtn.addEventListener("click", register);

function register() {

    if(!id.value) return alert("아이디를 입력해주십시오.");
    if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");
    
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    };
   
    fetch("/register", {
        method: "POST", // 데이터 전달 POST
        headers: {// 전달하는 데이터 JSON
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href="/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
}