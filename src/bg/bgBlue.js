var Logger = require('../main.js');

Logger.prototype.bgBlue = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[44m' + string + '\x1b[0m';
}

