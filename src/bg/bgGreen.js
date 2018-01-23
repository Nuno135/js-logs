var Logger = require('../main.js');

Logger.prototype.bgGreen = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[42m' + string + '\x1b[0m';
}

