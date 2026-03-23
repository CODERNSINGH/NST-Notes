let message = "Hello, TypeScript!";
let number = 42;

//data types
let isTrue: boolean = true;
let isFalse: boolean = false;
console.log(isTrue);
console.log(isFalse);

//null - isme kabhi koi value nahi hoti
const value : number | null = null;
console.log(value);

//undefined - i will be assigned later for now it is undefined
let undef: undefined = undefined;
console.log(undef);


console.log(typeof message);
console.log(typeof number);


// function

// Here ------------------------->this one <-- is output type
function add(a: number, b: number): number {
    return a + b;
}

let x :any = 5;
console.log(typeof x);
