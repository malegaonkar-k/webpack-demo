//var sayHello = require('./say-hello');
require('./style/main.css');
require('./style/main01.scss');
const sayHello = require('./say-hello')
 sayHello('Guybrush you', document.querySelector('h2'));
