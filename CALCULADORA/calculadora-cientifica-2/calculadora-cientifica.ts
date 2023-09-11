import { Calculadora } from "./calculadora-base";

export class Cientifica extends Calculadora{
    potencia(numero1: number, numero2: number): number{
        return Math.pow(numero1, numero2);
    }
    
}