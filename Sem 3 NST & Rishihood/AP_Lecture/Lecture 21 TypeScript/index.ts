// let num:number = 42;


// let str:string = "Hello, TypeScript!";
// let bool:boolean = true;

// let arr:number[] = [1, 2, 3, 4, 5];

// let Stringop:string[] = ["apple", "banana", "cherry"];

// let num1:number | undefined = undefined;

// // sring or Number in array
// let arr1:(string | number)[] = ["one", 2, "three", 4];


// //
// let arr3 : string[] | number[] = ["one", "two", "three"]; // or [1, 2, 3]


// let arr2:number[] | undefined = undefined;

// // Now Objects

// let student:{
//     name: string;
//     age: number;
//     isEnrolled?: boolean; // Optional property it can be present or not
// } = {
//     name: "John Doe",
//     age: 20,
//     // isEnrolled: true
// }


// let student1 : Record<string,number> // allows any string as key and number as value



// function sum(a: number, b: number): number {
//     return a + b;
// }

// // if i have data and i want to use it again and again

// let user1:{
//     name: string;
//     age: number;
//     isActive: boolean;
// } = {
//     name: "Alice",
//     age: 30,
//     isActive: true
// }
// let user2:{
//     name: string;
//     age: number;
//     isActive: boolean;
// } = {
//     name: "Bob",
//     age: 25,
//     isActive: false
// }

// let user3:{
//     name: string;
//     age: number;
//     isActive: boolean;
// } = {
//     name: "Charlie",
//     age: 28,
//     isActive: true
// }

// interface User {
//     name: string;
//     age: number;
//     isActive: boolean;
// }

// let user4: User = {
//     name: "David",
//     age: 22,
//     isActive: false
// }



// interface Circle {
//     shape: "circle";
//     radius: number;
// }

// interface Square {
//     shape: "square";
//     side: number;
// }


// type Shape = Circle | Square;



// function area(shape: Shape): string {
//     return shape.shape
// }

let numop : any = 42;  // 'any' type disables type checking
console.log(typeof numop);




// enum 

enum Role {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

let userRole = {
    name: "Alice",
    role: Role.ADMIN
}


interface Person {
    name: string;
    age: number;
    address?: string;
}


class Person implements Person {

}














