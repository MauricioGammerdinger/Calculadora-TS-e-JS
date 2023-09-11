"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var calculadora_1 = require("../calculadora/calculadora");
var AdvancedCalculator = /** @class */ (function (_super) {
    __extends(AdvancedCalculator, _super);
    function AdvancedCalculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedCalculator.prototype.power = function () {
        return Math.pow(this.num1, this.num2);
    };
    return AdvancedCalculator;
}(calculadora_1.Calculator));
var num1 = 10;
var num2 = 5;
var calculator = new AdvancedCalculator(num1, num2);

console.log('power:', calculator.power());
