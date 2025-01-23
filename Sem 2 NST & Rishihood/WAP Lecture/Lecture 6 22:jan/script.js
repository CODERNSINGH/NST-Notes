//Introduction of Array

// Spread opreator's and Rest operator denoted by(...)

const arr = [1,2,3,4,5,6]

console.log(arr) // Output: [ 1, 2, 3, 4, 5, 6 ]
console.log("Spreate Operator",...arr) // Output: 1 2 3 4 5 6

// Finding maximum number in given array

const marks = [80,56,90,60,50]

marks.sort()
console.log(marks[-1])

// Another Method
// for (let i = 0; i<marks.length; i++){
//     if 
// }

console.log(Math.max(marks)) // Return NaN reason it take multiple elemetns or we say Number not array

console.log(Math.max(...marks)) // Output : 90 // Math.max don't accept array


// Concanate given two array into single array --> (marge two array)
const ar1 = [3,4,5]
const ar2 = ['A','B','C']

const arr3 = [...ar1,...ar2]
console.log("Marged Array : ", arr3)

// Add Multiple number function 

function add(a,b,...restpara){
    console.log('a:', a)
    console.log('b:', b)
    console.log('Restpara:', restpara)

    let sum = a+b;

    for (let i = 0; i< restpara.length; i++){
        sum += restpara[i]
    }
    console.log("Sum of all of These : ", sum)
}
console.log("----------------***-----------------")
add(1,2)
console.log("------------------------------------")
add(1,2,3)
console.log("------------------------------------")
add(1,2,3,3,4,5,6)

// console.log("------------------------------------")


// Sort given array in acending order

const array_a = [2,30,50,100,10,69,60]

console.log("----------------Only Sort--------------------")

console.log(array_a.sort()) // it first convert it to Unicode then return the value 

// --> To solve this Issue we Have to Use <-- 
array_a.sort(comparefun)

// for accending order
function comparefun(a,b){
    
    return a-b
}
// For decending Order
// function comparefun(a,b){
    
//     return b-a
// }

// How it's Working if b-a is -ve 

console.log("----------------Solved the Issue--------------------")
console.log(array_a)

const array_b = ['a','d','c','d','b']
console.log("Do this Normarlly no issue : -> " + array_b.sort())


// ---> Find Method{arr.find();} in JavaScript array

const array_c = [900,600,200,300,399]

function cheker(element){
    // console,log()
    return element%2 != 0 //if true return element
}
const result = array_c.find(cheker)
console.log("Result ->", result)

// Given list of adult find the first person which is applicable for voting First Time

age = [15,16,17,20,40,99,18]

function voter(element){
    return element == 18
}

const eli_Voter = age.find(voter) // Here what we are doing selection each value then find run the function and digit of age converted as parameter and run the function https://www.w3schools.com/jsref/jsref_foreach.asp


console.log("The first time Voter are ->", eli_Voter) // find method is predefinded Method then array(where we have to concat).find(function)


// ---> iterting through given array, JS array higher order funciton foreach()

const array_d = [4,5,6,7,8,9]

function multiply(ele,inx,arr){
    console.log("Element ->", ele, "index ->", inx, "array ->",arr)
    console.log('elem* 2', ele*2)
}

array_d.forEach(multiply)