function calculator(a:number, b:number, exp: string): number {

    switch (exp) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                throw new Error('Division by zero');
            }
            return a / b;
        default:
            throw new Error('Invalid operator');
    }

}

console.log(calculator(10, 5, '+'));