// var n = 3;
// for (i = 1; i++; i<6 ){
//     // console.log("hi")
//     console.log(" ".repeat(n-i) , "*".repeat(i*2 - 1), " ".repeat(n-i))
    
// }

// // 
// var n = 3;
// for (i = 1; i < n+1; i++) {
//     console.log(" ".repeat(n - i), "*".repeat(((2 * n) - 1) - 2 * ((n - i) + 1)), " ".repeat(n - i));
// }


//"*".repeat(((2 * n) - 1) - 2 * ((n - i) + 1))


var n = 5;
for (let i = 1; i < 5; i++) {
    var spa = n - i;
    let sta = (i*2 -1 ); 
    console.log(" ".repeat(spa) + "*".repeat(sta) + " ".repeat(spa));
}
