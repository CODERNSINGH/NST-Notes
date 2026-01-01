// const add = require('./main')

// const {getUser} = require('./main')

// console.log(add(2, 3));


// let arr = process.argv
// console.log(arr)


const fs = require('fs')

// async function writeFile() {
//     const data = await fs.writeFileSync('file1.txt',"Hello how are You")
// }

// writeFile()

// async function readFile() {
//     const data = await fs.readFileSync('./file1.txt','utf8')
//     console.log(data)
// }

// readFile()

async function readFile() {
    const data = await fs.appendFileSync('./file1.txt','\n Fuck you Keshav')
    console.log(data)
}

readFile()