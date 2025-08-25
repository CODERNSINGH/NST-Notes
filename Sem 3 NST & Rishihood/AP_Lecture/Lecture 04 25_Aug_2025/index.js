// const fs = require('fs')

// for (let i = 1; i<3;i++){

//     setTimeout(()=>{
//         let data = fs.readFile(`text${i}.txt`, 'utf-8',()=>{})
//         console.log(data)
//     },0)
// }

const fs = require('fs');
// const { setTimeout } = require('timers/promises');
// for (let i = 1; i < 11; i++) { 
// const data = fs.writeFileSync(`text${i}.txt`, `${i}`)}


// for (let i = 1; i < 11; i++) {
//     setTimeout(() => {
//         fs.readFile(`text${i}.txt`, 'utf-8', (err, data) => {
//             if (err) throw err;

//             console.log(data);            
//         });
//     }, 0);
// }

// another method use recursion then increase i


// function read(i) {
//     if (i == 11){
//         return
//     }
    
//         fs.readFile(`text${i}.txt`, 'utf-8', (err, data) => {
//             if (err) throw err;

//             console.log(data);});

//     setTimeout(() => {
//         read(i+1)
//     }, 5000);      
//     // read(i+1)
// }
// read(1)

// home work



// function read(i) {
//     if (i == 11){
//         return
//     }

//     // return new Promise((res,rej){

//     //     res()
//     // })
//         fs.readFile(`text${i}.txt`, 'utf-8', (err, data) => {
//             if (err) throw err;

//             console.log(data);
//             read(i+1)
        
//         });
            
            
    
// }
// read(1)


// Let's do this with promise

// function readWithPromise(i){
//     if (i == 11){
//         return
//     }
//     return new Promise((res,rej)=>{

//         fs.readFile(`text${i}.txt`, 'utf-8', (err, data) => {

//             res(data);
//             rej(err)
            
        
//         });

//     }).then((data)=>{
//         console.log(data)
//         readWithPromise(i+1)
//     })
// }

// readWithPromise(1)

// Using for Loop

for (i= 1;i<11;i++){
    
    let data = new Promise((res,rej)=>{

        fs.readFile(`text${i}.txt`, 'utf-8', (err, data) => {

            res(data);
            rej(err)
            
        
        });

    }).then((data)=>{
        console.log(data)
        // readWithPromise(i+1)
    })
}

he1234567890!@#$%^&*()