"use strict";


// 서버의 중심 파일

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv"); // 환경 변수
const morgan = require("morgan");



const app = express();
dotenv.config();

const accessLogStream = require("./src/config/log");

//라우팅
const home = require("./src/routes/home"); // 경로 상대적으로 등록

// 뷰 엔진 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// exports한 것 받아오기

app.use(express.static(`${__dirname}/src/public`)); // 정적 경로 추가, 현재 위치 안의 src 안의 public을 정적 경로로 추가


app.use(bodyParser.json()); //body-parser 이용
app.use(bodyParser.urlencoded({extended: true})); // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

app.use(morgan("dev"));
app.use(morgan("common",{stream: accessLogStream}));// morgan 미들웨어 등록, stream = 연결 통로
app.use("/", home); // use는 미들웨어 등록하는 메서드

module.exports = app;