var Logger = require('../main.js');

Logger.prototype.white = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[37m' + string + '\x1b[0m';
}

