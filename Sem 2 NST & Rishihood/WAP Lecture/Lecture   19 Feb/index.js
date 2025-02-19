// Promises 
// Here we are waiting for API


async function printDescriptionLength(pageNumber,dataPerPage) {
    let data = await fetch('https://dummyjson.com/test')

    const response = await data.json()
    return response // it will always return promises if async function 
    console.log(data)

}
const result = printDescriptionLength(0,20)

console.log(result)