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
console.log("------------------------------------")


// Sort given array in acending order

const array_a = [2,30,50,100,10,69,60]

console.log(array_a.sort()) // it first convert it to Unicode then return the value 

// --> To solve this Issue we Have to Use <-- 
console.log(array_a.sort(compare))
function compare(a,b){


}
