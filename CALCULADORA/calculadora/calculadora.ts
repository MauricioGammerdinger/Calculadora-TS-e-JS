export class Calculator {
  constructor(public num1: number, public num2: number) {}

  add(): number {
    return this.num1 + this.num2;
  }

  subtract(): number {
    return this.num1 - this.num2;
  }

  multiply(): number {
    return this.num1 * this.num2;
  }

  divide(): number {
    return this.num1 / this.num2;
  }

}

const num1 = 10;
const num2 = 5;

const calculator = new Calculator(num1, num2);

console.log('Addition:', calculator.add());
console.log('Subtraction:', calculator.subtract());
console.log('Multiplication:', calculator.multiply());
console.log('Division:', calculator.divide());

