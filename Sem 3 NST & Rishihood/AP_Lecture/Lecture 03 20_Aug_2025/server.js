// // any asycro takes fuction as callaback it will not return promise bocz we already did .then in asycronous programming 

// // create 8 files
// const fs = require('fs')


// for (let i = 1;i<9;i++){
//     fs.writeFileSync(`data/${i}file.txt`, getrandom(i) )
// }

// function getrandom(count){
//     const numst = ""
//     for (let j = 0 ; j < count.length ; j++){

//        const randomNumber = Math.floor(Math.random()*100 + 1)
//        numst += randomNumber + "\n"
        
//     }
//     return numst
// }

// Create 8 file as i.txt(i belongs to 1 - 8) and content will be i random numbers

// this is one Sycronous programming 

// const fs = require("fs")
// for(let i = 1; i < 9; i++){
//     fs.writeFileSync(`data/file${i}.txt`, generateRandomNumber(i))
// }

// function generateRandomNumber(count){
//     let content = ""
//     for(let j = 0; j < count; j++){
//         var num = Math.floor(Math.random()* 100 + 1)
//         content += num + "\n"
//     } 
//     return content
// }




// Asyncnous making Files


// const fs = require("fs")


// for(let i = 1; i < 9; i++){
//     fs.writeFile(`data/file${i}.txt`, generateRandomNumber(i),()=>{
//         console.log(`File ${i}.txt is created`)
//     })
// }

// function generateRandomNumber(count){
//     let content = ""
//     for(let j = 0; j < count; j++){
//         var num = Math.floor(Math.random()* 100 + 1)
//         content += num + "\n"
//     } 
//     return content
// }


// for(let i = 1; i < 9; i++){
//     const data = fs.readFileSync(`./data/file${i}.txt`, 'utf8');
//     const number = data.split("\n").reduce((acc,num)=>{
//         acc += Number(num)
//         return acc
//     },0)
//     console.log(`updated ${i}file changed`)
    // fs.writeFileSync(`data/file${i}.txt`, number)
  
// }


const fs = require('fs')
for(let i = 1; i <= 8; i++){
    const con = fs.readFileSync(`./data/file${i}.txt`, 'utf-8')
    const arr = con.split("\n")
    let ans = 0
    for(let i of arr){
        ans += Number(i)   
    }
    console.log(ans)
}



