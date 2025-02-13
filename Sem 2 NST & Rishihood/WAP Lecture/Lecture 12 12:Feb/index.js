// Understanding api's
const api = `https://jsonplaceholder.typicode.com/users`
const responce = fetch(api)

console.log(responce)

responce.then((res) =>{
    res.json().then((data)=>{
        console.log(data)
    })
}).catch((error)=>{

})


// understanding

function succses(value){
    value.json().then(res =>{

        console.log(value)
    })
}
function error(value){
    console.log(value)
}
responce.then(succses).catch(error)