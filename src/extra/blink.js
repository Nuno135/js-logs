var Logger = require('../main.js');

Logger.prototype.blink = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[5m' + string + '\x1b[0m';
}

