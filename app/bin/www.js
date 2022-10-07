"use strict";

// 서버를 띄워주는 코드

const app = require("../app"); // app 사용할 수 있게
const logger = require("../src/config/logger");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { // listen 함수로 3000번 포트로 서버 오픈할 수 있음
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});