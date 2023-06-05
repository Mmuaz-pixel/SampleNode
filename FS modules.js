const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/text.txt', 'utf8');
const second = readFileSync('./content/text2.txt', 'utf8');

writeFileSync(
    './content/newFile.txt', 
    `\nHere is the file result: ${first}, ${second}`, 
    { flag: 'a' }
)

console.log(first, second);
console.log(second); 