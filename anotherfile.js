const num = 
{
    one: 18, 
    two: 13
}

const addValue = (a, b) => {
    console.log(`Sum is: ${a+b}`); 
    return a+b; 
}

addValue(10,20); 

module.exports.fun = addValue; 
module.exports.obj = num; 