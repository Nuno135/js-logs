# js-logs
Brighten up your terminal with some colors.

## Installation
```bash
npm install js-logs
```

## Usage
```js
var logger = require('js-logs');

console.log(logger.red(...));
```
- Possible Methods (font colors):
```js
logger.red(...);

logger.blue(...);

logger.green(...);

logger.yellow(...);

logger.cyan(...);

logger.white(...);

logger.magenta(...);

logger.gray(...);
```

- Possible Methods (background colors):
```js
logger.bgRed(...);

logger.bgBlue(...);

logger.bgGreen(...);

logger.bgYellow(...);

logger.bgCyan(...);

logger.bgWhite(...);

logger.bgMagenta(...);
```

- Possible Methods (extras):
```js
logger.ul(...); // Underlines text

logger.bold(...);

logger.blink(...); // Makes input blink
```

- Possible Methods (logger):
```js
logger.success(...);

logger.warn(...);

logger.error(...);

logger.info(...);
```


