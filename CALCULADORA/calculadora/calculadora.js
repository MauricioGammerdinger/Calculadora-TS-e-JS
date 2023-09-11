"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Calculator.prototype.add = function () {
        return this.num1 + this.num2;
    };
    Calculator.prototype.subtract = function () {
        return this.num1 - this.num2;
    };
    Calculator.prototype.multiply = function () {
        return this.num1 * this.num2;
    };
    Calculator.prototype.divide = function () {
        return this.num1 / this.num2;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
var num1 = 10;
var num2 = 5;
var calculator = new Calculator(num1, num2);
console.log('Addition:', calculator.add());
console.log('Subtraction:', calculator.subtract());
console.log('Multiplication:', calculator.multiply());
console.log('Division:', calculator.divide());
