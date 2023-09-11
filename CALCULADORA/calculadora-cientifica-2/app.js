"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculadora_base_1 = require("./calculadora-base");
var calculadora_cientifica_1 = require("./calculadora-cientifica");
var calculadora = new calculadora_base_1.Calculadora();
console.log("O resultado da soma dos numeros \u00E9 ".concat(calculadora.somar(10, 5)));
console.log("O resultado da soma dos numeros \u00E9 ".concat(calculadora.subtrair(10, 5)));
console.log("O resultado da soma dos numeros \u00E9 ".concat(calculadora.multiplicar(10, 5)));
if (calculadora.dividir(10, 5) < 0) {
    console.log('não pode dividir por 0');
}
else {
    console.log("O resultado de divis\u00E3o dos numeros \u00E9 ".concat(calculadora.dividir(10, 5)));
}
var cientifica = new calculadora_cientifica_1.Cientifica();
console.log("O resultado da soma dos numeros \u00E9 ".concat(cientifica.potencia(10, 5)));
