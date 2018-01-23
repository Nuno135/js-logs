var Logger = require('../main.js');

Logger.prototype.gray = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[2m' + string + '\x1b[0m';
}

