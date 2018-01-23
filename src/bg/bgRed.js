var Logger = require('../main.js');

Logger.prototype.bgRed = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[41m' + string + '\x1b[0m';
}

