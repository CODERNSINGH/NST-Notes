// // let arr = [1,2,3,4,5,6]

// // arr.forEach((x)=> console.log(x))


// // let arr2 = [10,20,30,40]

// // arr2.map((x,id) => console.log(x**2,id))


// // let arr3 = [11,12,13,14,15,16,17]
// // let filtered = arr3.filter((x) => x%2 === 0)
// // console.log(filtered)

// // let arr4 = [100,200,300,400,500]
// // let total = arr4.reduce((prev,x) => prev + x ,0)
// // console.log(total)
// // console.log(arr4.find((X) => X > 90))
// // console.log(arr4.findIndex((X) => X > 90))


// // let unsorted = [6,4,2,6,4]
// // console.log(unsorted.sort(helper))


// // function helper(a,b){
// //     return a -b
// // }

// // let array = [1,2,3,4,5,6]
// // console.log(array.slice(1,3))
// // array.slice(4,4,5)
// // console.log(array)

// // console.log(arr.join("-"))
// // console.log(arr.toString("-"))


// // let newArray = [1,2,3,4,5,6,7]
// // console.log(newArray.every((x) => x%2 == 0))
// // console.log(newArray.some((x) => x%2 == 0))

// // let temArr = [1, [2, [3,[4]]], [4, [5, [6]]]];
// // console.log(temArr.flat(2))
// // console.log(temArr.flat(3))
// // console.log(temArr.flat(Infinity))

// let obj = {
//     name : "Nitya",
//     age : "15",
//     add : 'Delhi'
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// // let obj2 = {
// //     name : "Shrihari",
// //     age: 19,
// //     add : "karnataka"
// // }
// // let merged = Object.assign({},obj,obj2)
// // console.log(merged)

// let tem = setInterval(() => {
//     console.log("Hello world")
// }, 1000);

// setTimeout (() =>{
//     console.log("Hello world")
//     clearInterval(tem)
// },10000)


// Promise 
async function name() {
    try{
    let data = await( await fetch('https://fake-json-api.mock.beeceptor.com/users')).json()
    // return data
    console.log(data)
    }
    catch(error){
        console.log("error")
    }
}

// console.log(data)
name()