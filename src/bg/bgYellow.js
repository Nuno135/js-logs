var Logger = require('../main.js');

Logger.prototype.bgYellow = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[43m' + string + '\x1b[0m';
}

