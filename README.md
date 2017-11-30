# logstub

[![NPM](https://nodei.co/npm/logstub.png?downloads=true)](https://nodei.co/npm/logstub/)

[![Actual version published on npm](http://img.shields.io/npm/v/logstub.svg)](https://www.npmjs.org/package/logstub)
[![Travis build status](https://travis-ci.org/MediaXPost/logstub.svg?branch=master)](https://www.npmjs.org/package/logstub)
[![Total npm module downloads](http://img.shields.io/npm/dt/logstub.svg)](https://www.npmjs.org/package/logstub)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5df4541beccd4014bc2c80e275b0bf21)](https://www.codacy.com/app/chronosis/logstub?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=MediaXPost/logstub&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/5df4541beccd4014bc2c80e275b0bf21)](https://www.codacy.com/app/chronosis/logstub?utm_source=github.com&utm_medium=referral&utm_content=MediaXPost/logstub&utm_campaign=Badge_Coverage)
[![Dependencies badge](https://david-dm.org/MediaXPost/logstub/status.svg)](https://david-dm.org/MediaXPost/logstub?view=list)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMediaXPost%2Flogstub.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FMediaXPost%2Flogstub?ref=badge_shield)

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

The logging stub will handle method calls for `log`, `silly`, `debug`, `info`, `verbose`, `warn`, `error`, `critical`, `fatal`, `trace`, and `all` with any number of parameters making it compatible for stubbing general logging from a number of popular logging libraries such as [Winston](https://www.npmjs.com/package/winston), [Log4JS](https://www.npmjs.com/package/log4js), and [Bunyan](https://www.npmjs.com/package/bunyan).


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMediaXPost%2Flogstub.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FMediaXPost%2Flogstub?ref=badge_large)
