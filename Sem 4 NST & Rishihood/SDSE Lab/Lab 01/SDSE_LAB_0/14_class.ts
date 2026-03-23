class Person {
  // Properties
  name: string;
  age: number;

  // Constructor - runs when creating a new Person
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

// Create instances
let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

console.log(person1.greet());
console.log(person2.age);
