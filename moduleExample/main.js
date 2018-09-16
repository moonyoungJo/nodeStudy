const myModule = require('./module.js');
const myModuleSet = require('./moduleSet');

console.log(`abc(-273) : ${myModule.abs(-273)}`);
console.log(`circleArea(3) : ${myModule.circleArea(3)}`);
myModuleSet.speak();