var Logger = require('../main.js');

Logger.prototype.blue = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[34m' + string + '\x1b[0m';
}

