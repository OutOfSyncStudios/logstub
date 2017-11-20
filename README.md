# logstub

[![NPM](https://nodei.co/npm/logstub.png?downloads=true)](https://nodei.co/npm/logstub/)

[![Actual version published on npm](http://img.shields.io/npm/v/logstub.svg)](https://www.npmjs.org/package/logstub)
[![Travis build status](https://travis-ci.org/MediaXPost/logstub.svg)](https://www.npmjs.org/package/logstub)
[![Total npm module downloads](http://img.shields.io/npm/dt/logstub.svg)](https://www.npmjs.org/package/logstub)
[![Package Quality](http://npm.packagequality.com/shield/logstub.svg)](http://packagequality.com/#?package=logstub)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d264ea63a69a4e3899ce06d6e81f18fb)](https://www.codacy.com/app/MediaXPost/logstub?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=MediaXPost/logstub&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/d264ea63a69a4e3899ce06d6e81f18fb)](https://www.codacy.com/app/MediaXPost/logstub?utm_source=github.com&utm_medium=referral&utm_content=MediaXPost/logstub&utm_campaign=Badge_Coverage)
[![Dependencies badge](https://david-dm.org/MediaXPost/logstub/status.svg)](https://david-dm.org/MediaXPost/logstub?view=list)

logstub is a basic library to stub logging calls when an external logger is expected to be passed to your libraries and applications.

### Installation

```
$ npm install logstub
```

### Usage
```js
  const LogStub = require('logstub');

  class YourClass {
    constructor(logger) {
      // Stub out the logger when none is passed to the class constructor.
      this.logger = logger || new LogStub();
    }

    someMethod() {
      try {
        this.logger.info('Some Logging Info');
      } catch (err) {
        this.logger.error(err);
      }
    }
  }
```

## API

The logging stub will handle method calls for `log`, `silly`, `debug`, `info`, `verbose`, `warn`, and `error` with any number of parameters making it compatible for stubbing general logging from both [Winston](https://www.npmjs.com/package/winston) and [Bunyan](https://www.npmjs.com/package/bunyan).
