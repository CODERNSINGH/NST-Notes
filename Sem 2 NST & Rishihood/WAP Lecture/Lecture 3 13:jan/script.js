// 0, undefined, NaN, null, '' => this all are false value
// let collegeName; // Undefined
let collegeName = '';

if (collegeName) {
    console.log('Hey....')
} else {
    console.log('False....') //will be exicute boz collegeName undefinded
}

//const studentName; //we have to initialized it

// Inclasss
// const percentage = prompt("Enter your Marks Dumass");


const percentage = 90

if (percentage > 90) {
    console.log('A+')
}
else if (percentage >= 80 && percentage < 90) {
    console.log('A')
}
else if (percentage >= 70 && percentage < 80) {
    console.log('B')
}
else if (percentage >= 60 && percentage < 70) {
    console.log('C')
}
else {
    console.log("You failed idiot 🖕")
    //alert("you Failed big C 😂")
}

// switch case 

const day = 1;

switch (day) {
    case 1: {
        console.log('Sunday');
        break;
    }

    case 2: {
        console.log('Sunday');
        break;
    }

    case 3: {
        console.log('Sunday');
        break;
    }

    case 4: {
        console.log('Sunday');
        break;
    }

    case 5: {
        console.log('Sunday');
        break;
    }

    case 6: {
        console.log('Sunday');
        break;
    }
    case 7: {
        console.log('Sunday');
        break;
    }
    default: {
        console.log('Please give week number idiot')
    }


}

// Termary Operator's

const Name = "Narendra";

if (Name){
    console.log(Name + 'singh')
}else{
    console.log("Guest")
} // return NarendraSingh

console.log(Name===Name ? Name + 'Singh':'Guest') //same NarendraSingh


// For Loops

//Here ⬇️ const cannot be use
for(let i = 0; i <5 ; i++){    // definded t = 0 then run till i become 5 and +1 each time and instant of let we cannot use const we have to change that
    console.log('i: ' + i)
}


// while loops 

let count = 0;

while(count > 0){
    console.log(count);
    count++;
}

// do - while loops at least code will be exicute
let num = 0
// do {
//     console.log("hi here i am Running")
// }while(num < 5){
//     console.log("hi")
//     num++;
// }


// Basics of Array and Object

let user = ['alex', 'Rim', 'Tom']

const classop = {
    Name : 'Narendra Singh',
    class : 'Section B',
    Batch : 'NST'
}
console.log(classop)
console.log(classop, user)


// itration of objects

for (let i in classop){
    console.log(i)
}
for (let i in users){
    console.log(i)
}

// for of can be use only in array this will give value of array

for (let value of user){
    console.log(user(value))
}