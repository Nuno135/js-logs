var Logger = require('../main.js');

Logger.prototype.success = function(string) {
    if (!string)
        throw new Error('Invalid String.');

    return '\x1b[32m' + string + '\x1b[0m';
};
