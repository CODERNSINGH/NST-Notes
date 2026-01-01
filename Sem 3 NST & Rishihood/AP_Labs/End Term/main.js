// function getUser() {}
// function createUser() {}

// module.exports = {
//     getUser,
//     createUser
// }
const http = require('http')
const express = require('express')

const app = express()

app.use(express.json())

const server = http.createServer((req,res) =>{
    if (req.method == "GET"){
        if (req.url == '/'){

            const {id,name} = req.query

            const {id2} = req.params.id

            res.status(200).json({
            
            })
        }
    }
})







server.listen(3000,()=>{})