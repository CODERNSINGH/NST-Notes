// arrow Function's

function getData(a,b){
    return(a+b)
}

// arrow functions syntex
const a = (a,b) =>{
    return("hello i am Arrow Function !", a+b)
}
console.log(getData(7,5), "i'm from normal funcion")
console.log(a(7,5), "i'm arrow funcion")


const divide = (a,b) =>{
    console.log(a/b, "arrow funcion")
}
divide(4,2) // output is 2 arrow funcion

// const age = (DOB) =>{
//     console.log(getFullYear()-DOB)
// }
// age(2005) // output is 20 years

// Type = "success", "Failed" , "info"

const successLog = () =>{
    console.log("Hello welcome to the webpage")
}
const FailedLog = () =>{
    console.log("Please try again")
}
const infoLog = () =>{
    console.log("Please wait for some time")
}

const massageGenerator = (type) =>{
    if (type == "Success"){
        successLog();
    }
    else if (type == "Failed"){
        FailedLog();
    }
    else if (type == "info"){
        infoLog();
    }
}
massageGenerator("Failed")

// Fuction callback


const massageGenerator_2 = (type,successCallback,FailedCallback,infoCallback) =>{
    if (type == "Success"){
        successCallback();
    }
    else if (type == "Failed"){
        FailedCallback();
    }
    else if (type == "info"){
        infoCallback();
    }
}

const successop = ()=>{
    console.log("hi it's sucessful")
}
const failedop = () =>{
    console.log("it's failed bro what are you doing")
}
const infoop = () =>{
    console.log("hi we are just checking is everything alright or not ")
}

massageGenerator_2('Success' , successop,failedop,infoop) // now what it's doing now it's assiging value to type in massagegenrator_2 now sucess will check if suppose sucssescallback is run now in crosspoinding to that successop will run 


// Higer order callback function
const done = () =>{
    console.log("ho gya")
}
const fail = () =>{
    console.log("Nahi aaya")
}
const transit = () =>{
    console.log("atk gya")
}

const paymentmassage = (type) =>{

    if (type == "success"){
        done();
    }
    else if (type == 'fail'){
        fail()
    }
    else if (type == 'transit'){
        transit()
    }
}
paymentmassage("transit")


//

const getDetails = (userName) =>{
    const getUserDetails = () =>{
        console.log(`Hello how are are You ${userName}`)
    }
    return getUserDetails;
}
const fun = getDetails("Narendra Singh")
fun();