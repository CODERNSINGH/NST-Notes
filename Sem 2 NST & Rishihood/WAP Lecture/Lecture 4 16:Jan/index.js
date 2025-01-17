// Functions - Most important 
// Function Naming is most important funciton name should describe it's work

function square(num) {
    return num*num
}

console.log(square(2))

//Hello World
function print(){
    console.log("Hello World")
} 
print();


//username is parameter
function greetMassage(username){
    const massage = `Hay ${username}, Aaj thandi hai chai pia ?`
    //console.log(massage)  //if function called print massage
    return massage
}

const studentname = ['Ram', 'Sayam','Narendra','shivam','hariom','ranajeet']

for (let i=0; i<studentname.length; i++){
    console.log(greetMassage(studentname[i])) //
}


// return value 

var value = Math.random()*50 +50
console.log(value)

function friendship() {
    if (parseInt(value) > 70){
        return true
    }
    else{
        return false
    }
}
console.log(friendship())

// 

function multiply(a,b,c,d=1){
    return a*b*c*d
}
console.log(multiply(1,2,3,4)) //output is 24

console.log(multiply(1,2,3))
// function multiply(a,b,c,d){
    // a = 1
    // b = 2
    // c = 3
    // d = undefiend otherwise use defalut 1 in multiply
//     return a*b*c*d
// }

// Divide

function Divide(num,Den=1){
    return num/Den
}
console.log(Divide(4,2)) //output is 2;

// Question 
function docode(){
    return 'Every Day 4 Hour..'
}

console.log(docode('hi')) // return no error it run smoothly 😇