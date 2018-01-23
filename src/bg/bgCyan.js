var Logger = require('../main.js');

Logger.prototype.bgCyan = function(string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');

    return '\x1b[46m' + string + '\x1b[0m';
}

