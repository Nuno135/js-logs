var Logger = require('../main.js');

Logger.prototype.bgWhite = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[47m' + string + '\x1b[0m';
}

