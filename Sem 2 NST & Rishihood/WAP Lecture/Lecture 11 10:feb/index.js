// Promise in JS by codewith harry

let promise = new Promise(function(resolve, reject){
    // alert("i am alert in promise")
    resolve(56)
})


console.log("Hello 1")

setTimeout(() => {
    console.log("Hello 2")
}, 1000);

console.log("Hello 3")
console.log(promise)