// require is like import 
const names = require('./names.js'); 
const data = require('./another.js'); 
const func = require('./anotherfile.js'); 

const value = func.fun(func.obj.one, func.obj.two); 
console.log(value); 
console.log(names.name1); 
console.log(names.name2); 
console.log(data); 