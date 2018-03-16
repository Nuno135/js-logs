
var Logger = require('../main.js');

Logger.prototype.clear = function() {
    return process.stdout.write('\033c');
}
