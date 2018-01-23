var Logger = require('../main.js');

Logger.prototype.yellow = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[33m' + string + '\x1b[0m';
}

