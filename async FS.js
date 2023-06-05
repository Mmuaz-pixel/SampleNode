const { readFile, writeFile } = require('fs');

readFile('./content/text.txt', 'utf8', (e, result)=>
{
    if(e)
    {
        console.log(e); 
        return; 
    }

    else{
        console.log(result); 
        writeFile('./content/another.txt', `Here is the result`, {flag: 'a'}, (err, result)=>{
            console.log(err, result);
            console.log("Task done") ; 
        })
    }
})

console.log("Task is being done"); 

