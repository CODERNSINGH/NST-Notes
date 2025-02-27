var a = 80
console.log(a)
var a = 100 // can be redeclar
console.log(a)
a = 110
console.log(a)

let b = 100


// this is not allowed redeleration
// let b = 100
// var b = 100
// const b = 100

b = 99 // this is allowed

let a1 = 11
let b1 = "1"

console.log(a1 + b1) // output is 111
console.log(a1 - b1) // output is 10

// string concaditate

let str1 = "Narendra"
let str2 = "Singh"
console.log(str1 + str2)
console.log(str1 > str2) // comparing all the starting elemt not the lenght



console.log(Math.floor(9.5))
console.log(Math.ceil(9.5))
console.log(Math.max(9, 5))
console.log(Math.min(9, 5))

// Genrating Random Number's
console.log(Math.random()) // will Genrate from 0 -1
console.log(Math.random() * 90 + 10)  // will Genrate from 0 -1


let a0 = undefined
let b0 = null
let c0 = "Hello"
let d0 = true
let e0 = 90
let f0 = 9.5
let g0 = { name: "nsn" }

console.log(typeof a0)
console.log(typeof b0)
console.log(typeof c0)
console.log(typeof d0)
console.log(typeof e0)
console.log(typeof f0)
console.log(typeof g0)


console.log("Type of all type")
console.log(typeof typeof a0)
console.log(typeof typeof b0)
console.log(typeof typeof c0)
console.log(typeof typeof d0)
console.log(typeof typeof e0)
console.log(typeof typeof f0)
console.log(typeof typeof g0)


let tem = 90
let tem2 = toString(tem)
console.log(typeof tem2) // string

let result = "Microsoft Google"
let final_result = result.replace("Google", "Adobe")
console.log(final_result)

let day = 1

switch (day) {
    case 1:
        console.log("Monday")
        break

}

// Loops 
let len = 9
for (let i = 0; i < 90; i++) {
    console.log('hi')
}

let i = 10
do {
    console.log("atleaset one")
}

while (i < 9) {
    console.log("hi2")
    i++
}

1
2
3
4
5
6
7
8
9
10
11
const books = [
    { title: "The Great Gatsby", year: 1925 }, { title: "To Kill a Mockingbird", year: 1960 }, { title: "1984", year: 1949 }, { title: "Moby-Dick", year: 1851 }, { title: "Pride and Prejudice", year: 1813 }]
for (let i = 0; i < books.length; i++) {
    console.log(`Title: ${books[i]. title}, Year: ${books [i].year}`);
}


const cart = [
    {item: "Laptop", price: 1299},
    {item: "car", price: 2299},
    {item: "key", price: 1399},
    {item: "plane", price: 12949}
]

for (i = 0; i<cart.length;i++){
    console.log(cart[i].price)
}


// Function

function sayHello(){
    console.log("Hello World i am Narendra Singh")
}
sayHello()


// arrow funciton 

const hello = () =>{
    return ("hello")
}
console.log(hello())

// Callbacks
number = 10
function sq(Number){
    return Number**2
}

function name(Number) {
    console.log(sq(Number))
}
name()


const div = (a,b) =>{
    console.log("Hello i am Narendra singh")
}

let nsn = div()



// Revision class by Rahul sir

setTimeout(()=>{
    console.log("Hello World")
},2000)


// set interval main code baar baar chalega after the given interver
const setInter = setInterval(() => {
    console.log('hi')
}, 3000);

setTimeout(() => {
    clearInterval(setInter)
}, 15000);
