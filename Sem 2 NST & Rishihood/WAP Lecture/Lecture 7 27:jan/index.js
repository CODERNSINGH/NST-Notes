// includes method if exist then return true 

const array = ["Banana","apple","Oranges"]
console.log(array.includes('apple')) //output: ture

const data = [1,2,3,"4",'hello4',4444,'narendra']
// check wether numeric 4 exist or not
console.log(data.includes(parseInt(4))) // output: false


// Higher order function map
// find square of each element

const arrayN = [4,5,6,7,8,9]

function square(element,index){ // as map pass argument number and index
    // element*element //if we not return it return undefined interview question
    return element*element


}

const N = [3,4,5,6,7,8]

function order(element,index){
    if (element%2 == 0){
        return "Even"
    }
    else{
        return "Odd"
    }
}

const or = N.map(order)
console.log(or)

// Filter 

const dataop = [2,3,4,5,6,7,8]

function isodd(element,index){
    if (element %2 ==0){
        return false
    }
    else{
        return true
    }
}

const Newdata = dataop.filter(isodd) // same as map it only return true or false
console.log(Newdata)


// Task : mutiply given array by 3 and then returen odd element 

const array4 = [3,4,5,6,6,7,8,8]

function mutiplethree(element,index){
    return element*3
}

const array5 = array4.map(mutiplethree)

function odd_again(element,index){
    if (element %2 ==0){
        return false
    }
    else{
        return true
    }
}

const result = array5.filter(odd_again)
console.log(result)

// smaller 
// using arrow function


const small_answer = array4.map(mutiplethree).filter(odd_again) // multiple fuction can be use called chaining
console.log(small_answer)


// Reduce

const MM = [2,3,4,5,6,6,6]

function sum(acc,element,index){
    return acc+element
}
const res5 = MM.reduce(sum,0)

// intially accumalor is 0 then 2 added then acc become 2 next elemnt 3 added to acc .... run till end

console.log(res5) // output 32

// get the result of multiply of all element usind reduce



const MMM = [2,3,4,5,6,6,6]

function multi(acc,element,index){
    return acc *element
}

const res6 = MMM.reduce(multi)
console.log(res6)