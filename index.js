var Logger = require('./src/main.js');
module.exports = {
    // Colors
    red: require('./src/colors/red.js'),
    blue: require('./src/colors/blue.js'),
    green: require('./src/colors/green.js'),
    yellow: require('./src/colors/yellow.js'),
    magenta: require('./src/colors/magenta.js'),
    gray: require('./src/colors/gray.js'),
    white: require('./src/colors/white.js'),
    cyan: require('./src/colors/cyan.js'),

    // Extras
    ul: require('./src/extra/ul.js'),
    blink: require('./src/extra/blink.js'),
    bold: require('./src/extra/bold.js'),

    // Backgrounds
    bgRed: require('./src/bg/bgRed.js'),
    bgBlue: require('./src/bg/bgBlue.js'),
    bgYellow: require('./src/bg/bgYellow.js'),
    bgMagenta: require('./src/bg/bgMagenta.js'),
    bgCyan: require('./src/bg/bgCyan.js'),
    bgWhite: require('./src/bg/bgWhite.js'),
    bgGreen: require('./src/bg/bgGreen.js'),

    // Logging
    success: require('./src/log/success.js'),
    warn: require('./src/log/warn.js'),
    error: require('./src/log/error.js')
};

var logger = new Logger();

module.exports = logger;
