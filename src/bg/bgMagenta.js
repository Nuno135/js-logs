var Logger = require('../main.js');

Logger.prototype.bgMagenta = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[45m' + string + '\x1b[0m';
}

