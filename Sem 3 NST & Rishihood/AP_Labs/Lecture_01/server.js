// global Exicution Context
// Fuction Exicution Context

// var a = 10

// var abc = function(){
//     var b = 20
//     console.log(b)

// }
// console.log(a)
// abc()


var b = 10
function abc(b){
    console.log(b)

}
console.log(b)
abc(3)





// this method is called hoisting

// console.log(a)
// var a = 10
// console.log(b)

// var a;
// console.log(a)

// var a = 10
// console.log(b)



{
    let a = 10;
}

if (true) {
    let a = 20;
    console.log(a); // 20
}

// lacal scope
// lacal scope is the scope of the block