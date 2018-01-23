var Logger = require('../main.js');

Logger.prototype.bold = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[1m' + string + '\x1b[0m';
}

