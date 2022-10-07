const { times } = require("async");
const { createLogger, transports, format} = require("winston");
const { simple, combine, timestamp, label, printf, colorize } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
    return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = {
    file: combine(
        label({
            label: "백엔드",
        }),
        timestamp({
            format: "YYYY-MM-DD HH:mm:dd",
        }),
        printFormat
    ),
    console: combine (
        colorize(),
        simple()
    )
};

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs",
        level: "info",
        format: printLogFormat.file,
    }),
    console: new transports.Console( {
        level: "info",
        format: printLogFormat.console,
    })
};


const logger = createLogger( {
    transports: [opts.file]});

// 개발용 서버와 서비스용 서버 구분
if (process.env.NODE_ENV !== "production") {
    logger.add(opts.console);
}

module.exports = logger;