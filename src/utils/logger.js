const { createLogger, format, transports } = require("winston");
require("winston-daily-rotate-file");

module.exports = createLogger({
  //--------------------------------------------------------
   format: format.combine(
    format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    format.simple(),
    format.printf(info => `[${info.timestamp}] ${info.level} ${info.message ? info.message : ''}${(info.meta && Object.keys(info.meta).length ? '\n\t'+ JSON.stringify(info.meta) : '' )}`)
    ), 

  transports: [
    new transports.DailyRotateFile({
      name: "errors-file",
      filename: `${__dirname}/../../runtime/%DATE%.log`,
      level: "debug",
      json: false
    }),

    new transports.Console({
      name: "console",
      level: "debug",
      colorize: true
    }),
  ]
});
