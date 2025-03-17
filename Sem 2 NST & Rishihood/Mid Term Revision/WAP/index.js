// var a = 80
// console.log(a)
// var a = 100 // can be redeclar
// console.log(a)
// a = 110
// console.log(a)

// let b = 100


// // this is not allowed redeleration
// // let b = 100
// // var b = 100
// // const b = 100

// b = 99 // this is allowed

// let a1 = 11
// let b1 = "1"

// console.log(a1 + b1) // output is 111
// console.log(a1 - b1) // output is 10

// // string concaditate

// let str1 = "Narendra"
// let str2 = "Singh"
// console.log(str1 + str2)
// console.log(str1 > str2) // comparing all the starting elemt not the lenght



// console.log(Math.floor(9.5))
// console.log(Math.ceil(9.5))
// console.log(Math.max(9, 5))
// console.log(Math.min(9, 5))

// // Genrating Random Number's
// console.log(Math.random()) // will Genrate from 0 -1
// console.log(Math.random() * 90 + 10)  // will Genrate from 0 -1


// let a0 = undefined
// let b0 = null
// let c0 = "Hello"
// let d0 = true
// let e0 = 90
// let f0 = 9.5
// let g0 = { name: "nsn" }

// console.log(typeof a0)
// console.log(typeof b0)
// console.log(typeof c0)
// console.log(typeof d0)
// console.log(typeof e0)
// console.log(typeof f0)
// console.log(typeof g0)


// console.log("Type of all type")
// console.log(typeof typeof a0)
// console.log(typeof typeof b0)
// console.log(typeof typeof c0)
// console.log(typeof typeof d0)
// console.log(typeof typeof e0)
// console.log(typeof typeof f0)
// console.log(typeof typeof g0)


// let tem = 90
// let tem2 = toString(tem)
// console.log(typeof tem2) // string

// let result = "Microsoft Google"
// let final_result = result.replace("Google", "Adobe")
// console.log(final_result)

// let day = 1

// switch (day) {
//     case 1:
//         console.log("Monday")
//         break

// }

// // Loops 
// let len = 9
// for (let i = 0; i < 90; i++) {
//     console.log('hi')
// }

// let i = 10
// do {
//     console.log("atleaset one")
// }

// while (i < 9) {
//     console.log("hi2")
//     i++
// }

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// const books = [
//     { title: "The Great Gatsby", year: 1925 }, { title: "To Kill a Mockingbird", year: 1960 }, { title: "1984", year: 1949 }, { title: "Moby-Dick", year: 1851 }, { title: "Pride and Prejudice", year: 1813 }]
// for (let i = 0; i < books.length; i++) {
//     console.log(`Title: ${books[i]. title}, Year: ${books [i].year}`);
// }


// const cart = [
//     {item: "Laptop", price: 1299},
//     {item: "car", price: 2299},
//     {item: "key", price: 1399},
//     {item: "plane", price: 12949}
// ]

// for (i = 0; i<cart.length;i++){
//     console.log(cart[i].price)
// }


// // Function

// function sayHello(){
//     console.log("Hello World i am Narendra Singh")
// }
// sayHello()


// // arrow funciton 

// const hello = () =>{
//     return ("hello")
// }
// console.log(hello())

// // Callbacks
// number = 10
// function sq(Number){
//     return Number**2
// }

// function name(Number) {
//     console.log(sq(Number))
// }
// name()


// const div = (a,b) =>{
//     console.log("Hello i am Narendra singh")
// }

// let nsn = div()



// // Revision class by Rahul sir

// setTimeout(()=>{
//     console.log("Hello World")
// },1000)


// // set interval main code baar baar chalega after the given interver
// const setInter = setInterval(() => {
//     console.log('hi')
// }, 300);

// setTimeout(() => {
//     clearInterval(setInter)
// }, 150);


// // Making coundown 

// // function coundown(sec){
// //     let count = sec
// //     let inter = setInterval(() => {
// //         console.log(count)
// //         count--

// //         if (count <0){
// //             clearInterval(inter)
// //         }
// //     }, 1000);
// // }
// // coundown(5)


// // API by Kartik Sir

// let api = 'https://dummyjson.com/users'

// fetch(api).then((data)=>{
//     return data.json(); 
// }).then((data)=>{
//     console.log(data)
//     let userArr = data.users

//     let count = 0
//     for(let i = 0; i<userArr.length; i++){
//         const currObj = userArr[i]
//         const currcount = Object.keys(currObj).length;
//         count += currcount
        
//     }
//     // if there is an return 
//     return count
    
// }).then((data)=>{
//     console.log(data)
// })

// Types of Funciton

// let arr = [1,2,3,4, true, null]

// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// // some function out of this 

// arr.push(3) // add 3 at back
// console.log(arr);

// arr.unshift(1) // add 1 at front 
// console.log(arr);

// // Remove 

// // arr.remove(true)
// // console.log(arr);


// arr.shift() // Remove's First element
// console.log(arr)

// console.log("hi")

// // Find Function 

// let array = []

// for (let i =0 ; i<101; i++){
//     array.push(i)
// }

// // Find function
// const findNumber = array.find(num =>{
//     const number = num == 10
//     return number
// })
// console.log(findNumber)


// let people = [
//     {name:'John',age:25},
//     {name:'Alice',age:30},
//     {name: 'bob',age: 22}
// ]

// // Return the element which we Need :->

// let Idperson = people.find(p => p.age == 30)
// console.log(Idperson)


// // // Slice the array


// // // array is [1 = 100]

// // let new_arr = array.slice(0,51)
// // console.log(new_arr)


// // // if wnat ot remove first element 

// // array.splice(0,90)
// // console.log(array)


// // sorting method 

// let arr_sort = [5,8,2,3,6]
// const compareFunction = (a,b)=>{
//     // return b - a
//     return a - b
// }
// console.log((arr_sort.sort(compareFunction)).reverse())



// // Join method 

// let Join = ['narndaf','hi ','i am Founder','Rishihood', 'University']
// console.log(Join.join(" "))
// console.log(Join.join("__"))
// console.log(Join.join("<->"))


// let split = Join.join(" ")
// console.log(split.split(" "))



// let for_each = [10,20,30,40]

// let Square_for_each = for_each.map((n) => {return n*n})
// console.log(Square_for_each)


// let man_workspaces = [
//     {name: "Narendra Singh",
//         worker : 'amazon'
//     },
//     {
//         name: "Mayank",
//         worker : "JP Morgans"
//     },
//     {
//         name: "Keshav",
//         worker: 'google'
//     }
// ]

// let desig = man_workspaces.map(n => n.worker)
// console.log(desig)


// let map_arr = [1,2,3,4,5,6]

// const print = function(n){
//     console.log("item", n)
// }
// map_arr.forEach(print)
// console.log("Upper is ForEach and Lower is map")
// map_arr.map(print)


// let fileter = [4,9,16,24]

// const notSqare = (n) =>{
//     return n ** 0.5
// }

// let resule = fileter.filter((n) =>{

//     return notSqare(n) % 1 !== 0;
// })
// console.log(resule)

// // Reduce method 

// let arr_reduce = [1,2,3,4,5,6,7,8,9]
// let prifix = [1]
// let final = arr_reduce.reduce((pre,red)=>{
//     let sum = pre + red
//     prifix.push(sum)
//     return sum
// })

// console.log(prifix)

// // Finding max 

// let red_arr = [2,3,63,12,52,32,3,2]

// let maximum = red_arr.reduce((max,num) =>{
//     if(num > max){
//          max = num
//     }
//     return max
    

// },red_arr[0])
// console.log(maximum)

// // No of Repitaion
// let re_arr = [1,2,2,3,2,4,2,6,2,6,2,5,2]

// let total = re_arr.reduce((count,num) =>{

//     if (num == 2){
//         count += 1
//     }
//     return count
// })
// console.log(total)



// Promises

//  const promiseOne = new Promise(function(resolve,reject){
//     // do an async task 
//     // DB calls , network 

//     setTimeout(()=>{
//         console.log("Async task is complete")
//         resolve()
//     },1000)
//  })

//  // .then is connected to resolve 
//  promiseOne.then(function(){
//     console.log("Promised Comsumed");
    
//  })

//  const promiseTwo = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("Asyc task 2")
//         res()
//     },1000)
//  }).then(()=>{
//     console.log("Asyc is Resolved")
//  })

//  //

//  const promiseThree = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res({username: "Narendra", email: "nsnrajput2244@gmail.com"})
//     },1000)
//  })
// promiseThree.then((user)=>{
//     console.log(user) // it means whatever we pass in res we will get it in then fuction automatically 
// })


// const promiseFour = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         let error = false
//         if (!error){
//             res({username: "Narendra", email: "nsnrajput2244@gmail.com"})
//         }else{
//             rej('Error: Something went wrong')
//         }
//     },1000)
// })


// promiseFour.catch((error)=>{
//     console.log(error)
// })

// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{ // it's called Promise chaining using .then and reading .then data using another .then 
//     console.log(username)
// }).catch((error)=>{
//     console.log("Error is ", error)
// }).finally(()=>{ // always execute
//     console.log("either Promise is resolve or Rejected");
    
// })


// const promiseFive = new Promise((rej,res)=>{
//     setTimeout(()=>{
//         let error = true


//         if (!error){
//             res({username: "Narendra", email: 'nsn@example.com',mob: 9944555})
//         }else{
//             rej('Error: JS went wrong')
//         }
//     },1000)
// })
// async function consumePromiseFive(){
//     try{
//     const response = await promiseFive
//     console.log(response);
//     }
//     catch(error){
//         console.log(error)
//     }
    
// }
// consumePromiseFive()

// const URL = 'https://jsonplaceholder.typicode.com/users/hi'

// async function getAllUser(){
//     try{
//     const response = await fetch(URL)
//     const data = await response.json() // it also take time 
//     console.log(data);
//     }
//     catch{
//         console.log("Error", error)
        
//     }
    
// }
// getAllUser()


// Let's do this using Promise

// const URL = 'https://jsonplaceholder.typicode.com/users/'

// fetch(URL).then((data)=>{
//     return data.json()
// }).then((finalData)=>{
//     console.log(finalData)
// }).catch(()=>{
//     console.log('Error: ',error)
// })


// Objects 

// const student = {
//     name: "Narendra",
//     class: "NST",
//     laptop : "Mac"
// }

// student.laptop = "Macbook Pro"
// student.mouse = "anti-fox"


// console.log(student)

// delete student.mouse
// console.log(student)

// // printing all keys and values of object 

// for (let keys in student){
//     console.log(student[keys])
// }

// const object = {
//     keshav: 90,
//     hari: 34,
//     sayam:34,
//     om: 33,
//     narendra: 56
// }
// const entries = Object.entries(object)
// const character = Object.fromEntries(entries)
// console.log(character)

// Deep copy and shallow copy
 

// let Vari = 49

// console.log(Vari==45?"Narendra singh":"Hello");

// let arr = [1,2,3,4,5]

// for (let i of arr){
//     console.log(i)
// }


// // do while 
// let i = 95
// do{

//     console.log("first time")
//     i++
// }while (i < 100)


// console.log(Math.max(...arr))
// console.log(Math.min(...arr))

// console.log('4'*2)
// console.log('4'/2)


// Hastag time op

let promiseOne = new Promise((res,rej)=>{
    let data = fetch('https://fake-json-api.mock.beeceptor.com/users')
    // const finalop = data.json()

    return data


    
}).then((final)=>{
    console.log(final)
}).catch((n)=>{
    console.log("error", error)
})


let promise = new Promise((res,rej)=>{
    let sucsess = false

    if (sucsess){
        res("Fullfilled")
    }else{
        rej("Rejected")
    }
})
promise.then((data)=>console.log(data)).catch((error)=>console.error(error))


