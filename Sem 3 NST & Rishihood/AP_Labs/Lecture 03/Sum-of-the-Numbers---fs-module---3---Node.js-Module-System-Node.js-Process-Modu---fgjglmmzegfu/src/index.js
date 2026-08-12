// const fs = require('fs')

// const data = fs.readFileSync('./input.text','utf-8')
// console.log(data)

const fs = require('fs');
const { totalmem } = require('os');

// Reads file synchronously (blocking)
const data = fs.readFileSync('src/input.txt', 'utf-8');
tem  = data.split('\n');

console.log(--d)

total = tem.reduce((acc,num)=>{
    const parts = num.split(' ');  // [ 'apple', '10' ]
    return acc + Number(parts[1]);
},0)
// console.log(total)

fs.writeFileSync('src/output.txt', total.toString())

