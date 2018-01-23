var Logger = require('../main.js');

Logger.prototype.red = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[31m' + string + '\x1b[0m';
}

