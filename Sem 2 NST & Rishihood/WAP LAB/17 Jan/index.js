// Callback 

function print(a){

    function abc(){
        console.log("Hi How are You, i am Narendra Singh")
    }
    // return abc()
    return abc;

}
const fn = print()
console.log(fn)

// Question 

function hello(timepass){
    console.log(timepass())
    function world(){
        console.log("Hello World !")
    }
    return world
}
function a(){console.log('A')}
abc(a);

// Important 
const arr = [1,2]
const newarr = arr
// arr = [3,4] cannot be done it's constant
arr [0]  = 10; //can be do bcoz we are chaning inner data not the address 

console.log(arr) // [10,2]
console.log(newarr) // [10,2] it's value also change bcoz it's refering to arr and arr got changed 


// to solve this issue we use Spreate Operatiors 
const time = [1,2]
const newtime = [...time]

time[0]  = 10; 

console.log(time) 
console.log(newtime)



// Rest Operator's
// it's says that i'll pack all argumetns in array you can use by indexing

function abc(...temp){
    console.log(temp)
}

abc(3,3,5,6,7,8,"Hi how are You")