// Promises 
// Here we are waiting for API


async function printDescriptionLength(pageNumber,dataPerPage) {
    try{
    let data = await fetch('https://dummyjson.com/test')

    const response = await data.json()
    return response // it will always return promises if async function 
    console.log(data)
    }
    catch(error){
        console.log("error occuress")
    }

}
const result = printDescriptionLength(0,20)

console.log(result)



// Promise Chaining

const promise = new Promise((resolved,rejected)=>{
    resolved(3)

})
promise.then((res)=>{
    console.log(res)
    return res*3
}).then((res1)=>{
    console.log(res1)
    return res1*10
}).catch((error)=>{
    console.log("Error occured 😢")
})

// we cannot use catch chaining

const promise3 = new Promise((resolved,rejected)=>{
    resolved(3)

})

promise3.catch((res)=>{
    console.log(res)
    return res*10
}).catch((res1)=>{
    console.log(res1)
}).then((res2)=>{
    console.log(res2)
})

// Finally we can say
// then => then Yes
// then => catch No

// catch => then Yes
// catch => catch No