import { Calculator } from "../calculadora/calculadora";

class AdvancedCalculator extends Calculator {
    power(): number {
        return Math.pow(this.num1, this.num2);
    }
}

const num1 = 10;
const num2 = 5;

const calculator = new AdvancedCalculator(num1, num2);

console.log('power:' , calculator.power());
