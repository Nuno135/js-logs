var Logger = require('../main.js');

Logger.prototype.log = function(type, string) {
    if (typeof string !== 'string') 
        throw new Error('Invalid String.');
    if (typeof type !== 'string')
        throw new Error('Invalid String.');

    if (!type)
        throw new Error('Invalid Type.');

    if (!string)
        throw new Error('Invalid String.');

    if (type === 'success') {
        return '\x1b[32m' + string + '\x1b[0m';
    } else
    
    if (type === 'warn') {
        return '\x1b[33m' + string + '\x1b[0m';
    } else

    if (type === 'error') {
        return '\x1b[31m' + string + '\x1b[0m';
    }
}