// Asynchronous Programming

document.getElementById('hello').innerHTML = "hello how are you from JS"



function toRunafterDelay(){
    console.log("time katam ho gya");
  

}
setTimeout(toRunafterDelay,1000)

setTimeout(() => {
    console.log("Hello how are you")
}, 0); // this run after some time priority synch -> asyn

console.log("i'll not wait for anyone")




//Ser interval

function tobetrigger() {
    console.log('hi')
}

setInterval(tobetrigger,1000000) // repeat after spesific delay


for(let i = 0; i<10 ; i++){
    setTimeout(()=>{
        console.log(i)
    },i * 100)
}

// sorting 😂

const a = [1,2,3,8,5,4,6,12,23,45,67,34]

for (let i = 0; i<a.length; i++){
    setTimeout(()=>{
        console.log(a[i])
    },a[i])
}

let count = 0;

console.log("Start");

setInterval(() => {
  count++;
  console.log("Interval running:", count);
}, 1000);

console.log("End");
