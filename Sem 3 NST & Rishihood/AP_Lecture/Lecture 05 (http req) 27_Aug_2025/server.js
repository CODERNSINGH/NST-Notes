// today we are going to Make our own server 
// that or it's base we have to build everything

// this is base of everything express and all are framework



const http = require('http');
const { url } = require('inspector');
const server = http.createServer((req, res) => {
   console.log(req.url,req.method)
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({message: 'Hello world', page : `${req.url}`, method: req.method} ));
})

server.listen(3000, (err) => {
    console.log('Server running at http://localhost:3000/')
});

//data: {email:,password}, content type is JSON
// we want to return sucsess code 200 with data "Hello world" 