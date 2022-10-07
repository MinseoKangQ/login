"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home); // 루트 경로로 오면 홈으로 이동
router.get("/login", ctrl.output.login); // 로그인 경로로 오면 로그인으로 이동
router.get("/register", ctrl.output.register); // API

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register); 

module.exports = router; // 라우터 외부에서 사용할 수 있도록 함