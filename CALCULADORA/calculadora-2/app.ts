import { Calculadora } from "./calculadora-base";
import { Cientifica } from "./calculadora-cientifica";

let calculadora = new Calculadora();

console.log(`O resultado da soma dos numeros é ${calculadora.somar(10,5)}`)
console.log(`O resultado da soma dos numeros é ${calculadora.subtrair(10,5)}`)
console.log(`O resultado da soma dos numeros é ${calculadora.multiplicar(10,5)}`)
console.log(`O resultado da soma dos numeros é ${calculadora.dividir(10,5)}`)

let cientifica = new Cientifica();

console.log(`O resultado da soma dos numeros é ${cientifica.potencia(10,5)}`);