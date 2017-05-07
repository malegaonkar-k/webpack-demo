//var sayHello = require('./say-hello');
require('./style/main.css');
require('./style/main01.scss');
var imgElement = document.createElement('img');

imgElement.src = require('./images/my-image.jpg');

document.body.appendChild(imgElement);
const sayHello = require('./say-hello')
 sayHello('Guybrush you', document.querySelector('h2'));
