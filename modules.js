// built in modules 
// -------------- Os module ---------------
const os = require('os')

// info about current user 
const user = os.userInfo(); 
// console.log(user); 

// system uptime in seconds 

// console.log(`The system uptime is ${(os.uptime())/(360)} hours`); 

// saving data about os

const currentOs = 
{
    name: os.type(), 
    release: os.release(), 
    TotalMem: os.totalmem()/Math.pow(2,30), 
    freemem: os.freemem()/Math.pow(2,30)
}

// console.log(currentOs); 

// ---------------- Path module ----------------

const path = require('path')

console.log(path.sep);  
const filePath = path.join(__dirname, '/contet', 'another', 'textfile.txt'); 

console.log(filePath); 
console.log(path.basename(filePath)); 

//absolute path (starting from the D:/ )
console.log(path.resolve(__dirname, 'content', 'subfolder', 'txt')); 

