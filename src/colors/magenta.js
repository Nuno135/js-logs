var Logger = require('../main.js');

Logger.prototype.magenta = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[35m' + string + '\x1b[0m';
}

