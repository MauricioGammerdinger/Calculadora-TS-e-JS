"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.somar = function (numero1, numero2) {
        return (numero1 + numero2);
    };
    Calculadora.prototype.subtrair = function (numero1, numero2) {
        return (numero1 - numero2);
    };
    Calculadora.prototype.multiplicar = function (numero1, numero2) {
        return (numero1 * numero2);
    };
    Calculadora.prototype.dividir = function (numero1, numero2) {
        return (numero1 / numero2);
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
