const fs = require('fs')
// //const data = fs.writeFile('./Data01.txt', "Hello this is Narendra Using Promise how are you")
// const data = fs.writeFile('./Data02.txt', "Hello this is Narendra Using Promise how are you",(err)=>{
//     if (err){
//         console.log(err)
//     }else{
//         console.log("File added Sucess")
//     }
// })
// // console.Console
// console.log(data)

// const isFile = fs.existsSync('./Data02.txt');
// console.log(isFile)

// // read File 

// const readData = fs.readFile('./Data02.txt','utf-8',(err,data)=>{
//     if (err){
//         console.log("Tell its Error",err)
//     }else{
//         console.log("Data is ->", data)
//     }
// })

// // if i wnat to add somthing new or append 

// const append = fs.appendFile('./Data02.txt',"\n"+"Hello are You Second Line",(err)=>{
//     if(err){
//         console.log("Error agya", err)
//     }else{
//         console.log(append,"Add hogya")
//     }
// })


// const http = require('http')

// const server = http.createServer((req,res) =>{
//     res.writeHead(200,{"Content-Type":"text/json"})
//     res.end(JSON.stringify({"inro": "Hello Mr Narendra Singh Founder of Rishihood Edu "}))
// })

// server.listen(3000,()=>{
//     console.log("http://localhost:3000")

// })

const app = require('express')()

app.get('/',(req,res)=>{
    const url = req.url
    res.status(200).json({"inro": "Hello Mr Narendra Singh Founder of Rishihood Edu "})
    // res.end(JSON.stringify({"inro": "Hello Mr Narendra Singh Founder of Rishihood Edu "}))

})
app.get('/')
app.listen(3000,()=>{
    console.log("http://localhost:3000")

})