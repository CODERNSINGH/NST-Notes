const fs = require('fs')
const xyz = require("./module/abcd")
const tem = require('./module/logger')
const { error } = require('console')

console.log(xyz)

console.log(tem.info("Main toh Inform kar raha hu"))
console.log(tem.warn("it's warning brother stop this "))
console.log(tem.error("Error agya bro"))


const file = fs.readFileSync('file.txt') // return buffer
console.log(file)
const file22 = fs.readFileSync('file.txt','utf-8') // converting buffer into human language
console.log(file22)

const file2 = fs.writeFileSync("file2.txt","Hello how are you")
// console.log(file2)