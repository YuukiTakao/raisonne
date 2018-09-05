var fs = require('fs');
var bunyan = require('bunyan');

var log = bunyan.createLogger({name: 'myapp'});
var appLogDirectory = __dirname + '/../log/application_log';
//fs.existsSync(appLogDirectory) || fs.mkdirSync(appLogDirectory);

//module.exports = bunyan.createLogger({
//  src: true,
//  name: 'raisonne',
//  streams: [
//    {
//      level: 'error',
//      type: 'rotating-file',
//      path: appLogDirectory + '/error.log',
//      period: '1d',
//      count: 30
//    },
//    {
//      level: 'info',
//      type: 'rotating-file',
//      path: appLogDirectory + '/application.log',
//      period: '1d',
//      count: 30
//    }
//  ]
//});
