const fs= require("fs");
const appRoot = require("app-root-path"); // 루트 경로를 가져옴

const accessLogStream = fs.createWriteStream(
    `${appRoot}/logs/access.log`,
    { flags : "a" }
);

module.exports = accessLogStream;