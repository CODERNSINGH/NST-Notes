
// const http = require('http');

// const server = http.createServer((req, res) => {
//    console.log(req.url,req.method)
//    res.setHeader('Content-Type', 'text/html');
//    res.statusCode = 200;

//    if (req.url.includes('about')){
//     res.end(<h1>message: 'Hello world this is About Page', page : `${req.url}`, method: req.method</h1>);
//    }
//    else if (req.url.includes('contact')){
//         res.end(<h1>message: 'About Page', page : `${req.url}`, method: req.method</h1>);

//    }
//    else if(req.url.includes('home')){
//     res.end(<h1>message: 'Hello world Home page', page : `${req.url}`, method: req.method</h1>);
//    }

//     res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/html');
    
//     res.end(<h1>Hello world this is Not Found</h1>);
// })

// server.listen(3000, (err) => {
//     console.log('Server running at http://localhost:3000/')
// });

// under this i will make routing for /about,/contact,/home,/ else 404 not found using Node only

// const http = require('http');

// const server = http.createServer((req, res) => {
//    console.log(req.url, req.method);
//    res.setHeader('Content-Type', 'text/html');
//    res.statusCode = 200;

//    if (req.url=='/about') {
//       res.end(`<h1>
//         message: 'Hello world this is About Page'
//       </h1>`);
//    } 
//    else if (req.url == '/contact') {
//       res.end(`<h1>
//         message: 'Hello world this is Contact Page',
//       </h1>`);
//    } 
//    else if (req.url == '/home') {
//       res.end(`<h1>
//         message: 'Hello world Home Page',
//       </h1>`);
//    } 
//    else {
//       res.statusCode = 404;
//       res.end(`<h1>Hello world this is Not Found</h1>`);
//    }
// });

// server.listen(3000, (err) => {
//    if (err) console.error(err);
//    else console.log('Server running at http://localhost:3000/');
// });


// Looks Bad Right SO we will use express to make it better
// express is framework on the top of node js
// it will make our work easy and fast
// it will provide us many inbuilt function to make our work easy
// it will handle many things for us like routing, middleware, etc.
// it will make our code clean and readable
// it will make our code maintainable

// const express = require('express');
// const app = express(); // inducs

// // app.(Method)('URL',Callback Fuction)
// // it means if i am getting with method and url match then this callback will be exicuted 

// app.get("/home", (req, res)=>{
//     res.status(200).send('<h1>Yo Welcome to Another Website</h1>');
// })

// app.get("/contact", (req, res)=>{
//     res.status(200).send('<h1>Contact at : 9672536268</h1>');
// })

// app.get("/about", (req, res)=>{
//     res.status(200).send('<h1>Mujko na pchane tu tere ghar akbaar nahi aata ?</h1>');
// })

// app.listen(3000, (err) => {
//     if (err){
//         console.log(err)
//     }
//     else{
//     console.log('Server running at http://localhost:3000/')}
// })

// Send ing data to Backing 

// https/....../user/123 -> Path parametere
// Quary Parameter = https://.............../user?userID=123 // Query Parameter


// const express = require('express');
// const app = express(); // inducs
// const fs = require('fs');
// const { url } = require('inspector');
// // app.(Method)('URL',Callback Fuction)
// // it means if i am getting with method and url match then this callback will be exicuted 


// // path Find
// app.get("/number", (req, res) => {
//     console.log(req.query)
//     res.status(200).send(`
//         <h1>Yo Welcome to Another Website</h1>`);
//         if (typeof req.url === 'number'){
//             const data = fs.readFileSync('file.txt','utf-8')
//             fs.writeFileSync('./file.txt',`${data}'\n' ${req.url}`)
//         }
//         else{
//             console.log("Error aaya hai ")
//         }
    
// });



// app.listen(3000, (err) => {
//     if (err){
//         console.log(err)
//     }
//     else{
//     console.log('Server running at http://localhost:3000/')}
// })



const express = require("express");
const fs = require("fs")
const app = express();

// app.get("/home", (req, res)=>{
// // app.get("/home/:id/:name", (req, res)=>{
//     console.log(req.query)
//     // console.log(req.params)
//     res.status(200).send('home page');
// })

// app.get('/contact', (req, res) => {
//     res.status(200).send("contact page")
// })

// app.get("/about", (req, res) => {
//     res.status(200).send("about page")
// })

app.get("/number/:number", (req, res) => {
    let data = req.params
    if(!isNaN(d)){
        fs.appendFileSync("./file.txt", req.params.number + "\n") 
        res.status(200).send("Number appended successfully")
    }else{
        res.status(400).send("Invalid number")
    }
    
})

app.listen(3000, (err) => {
    if(err){
        console.log("Error")
    }else{
        console.log('Server running at http://localhost:3000/')
    }
})

// app.get("/")
app.get("/number/:sum", (req, res) => {
    if (!isNaN(req.params.sum)) {
        fs.appendFileSync("./file.txt", req.params.sum + "\n");
        // Read all numbers from file.txt and calculate the sum
        const fileData = fs.readFileSync("./file.txt", "utf-8");
        const numbers = fileData
            .split("\n")
            .filter(line => line.trim() !== "")
            .map(Number)
            .filter(num => !isNaN(num));
        const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
        res.status(200).send(`Total sum: ${totalSum}`);
    } else {
        res.status(400).send("Invalid number");
    }
});