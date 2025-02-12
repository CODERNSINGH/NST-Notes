// Number's Method in Js

// Maths ceil 
console.log(Math.floor(4.7));
console.log(Math.ceil(4.7));


//Rendom Number 
// from 1 - 10

console.log(Math.random()*10 + 1)

//from 20 -30

console.log(Math.random()*10 + 10)
let user = "Narendra Singh"
console.log(`hello ${user}`);


// Replace method

let a = "i am Narendra Singh Founder of CodeSingh"
a.replace("Hello World", "Hello Universe")
console.log(a)
let new_a = a.replace("Narendra", "Mr. Narendra Singh")
console.log(new_a)
console.log(a.replace("Narendra", "Mr. Narendra Singh" )) // as of my knowladge it only works on console situations


let arr = [2,3,23,5,6,78]
console.log(arr.toString(arr)) // "2,3,23,5,6,78"




// Truthy or False values 

// airthmatic operations 


console.log("1/0 =", 1/0)

console.log(typeof Infinity);


let and = "&& this is and"
let or = "|| this is or"
let not = "! this is Not"


// conditional

// swich case 

let fruit = 'apple'

switch(fruit){
    case "apple":
        console.log("it's an apple ")
        break

    case 'grapes':
        console.log("it's Grapes")
        break


    default:
        console.log("i don't Know what is this fruit is called can you tell me what we call this fruit")
}



console.log((fruit === "apple"?"its apple by question mark condition":"not apple"))



// factorial using while loop

n = 5
let factorial = 1
do {
    console.log("it will run first then other will exicute");
    n--
    
}

while( n > 1){
   factorial *= n
   
}
console.log("Factorial -", factorial)

// Function 

// Callback Function

// function trim(name){
//     return name.trim()
// }

// function name(trim){
//     return trim()
// }

// console.log(name("Narendra Singh"))

let captain = "virat"
// let team = ["narendra", "singh","how","are","You"]
let team = "Narendra Sigh"

function fromCricketTeam(captain,...team){
    console.log("captain: ", captain)
    console.log("team: ", team)
}

fromCricketTeam(captain,team)



// sorting an array

let arr_op = [8,6,3,5,6,2,4,1,7]

console.log(arr_op.sort(fun))

function fun(a,b){
    return b-a
}

function usingmapp(ele,id) {
    return (ele,id)
}

const result = arr_op.map(usingmapp)
console.log(result)





let array_op = [-10,10,20,-5]

console.log(array_op.reduce((acc,ele)=> acc+ele, 0))