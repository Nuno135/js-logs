var Logger = require('../main.js');

Logger.prototype.cyan = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[36m' + string + '\x1b[0m';
}

