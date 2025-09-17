const express = require('express')

const app = express();

app.use(express.json()); // this is middleware
app

// instant of next we can write anything but industry standard we use next
function validate(req,res,next){
    const {num1,num2} = req.params;

    if(isNaN(num1) || isNaN(num2)){
        res.status(400).send('Invalid Numbers');
    }else{
        next()
    }

}
// Multiply
function multiply(req,res,next){

    const {num1,num2} = req.params; // already validate
    req.multiply = Number(num1) * Number(num2)
    next()

}
function sum(req,res,next){

    const{num1, num2} = req.params;
    req.sum = Number(num1) + Number(num2)
    next()

}

app.get('/sum/:num1/:num2',[validate,multiply,sum],(req,res)=>{

    // if(!isNaN(num1) && !isNaN(num2)){
    //     res.status(400).send('Invalid Numbers');
    // }
    // const{num1, num2} = req.params;
    // console.log(num1,num2)
    // req.status("Valid Numbers")
    console.log(req.multiply , req.sum)
    res.status(200).json({'multiply hai':req.multiply , 'sum hai Bhai':req.sum})
    
})


app.get('/user',(req,res)=>{
    console.log(JSON.stringify(req.body))
    res.send(JSON.stringify(req.body))
})



app.listen(3000, (err) => {
    if(err){
        console.log("Error")
    }else{
        console.log('Server running at http://localhost:3000/')
    }
})