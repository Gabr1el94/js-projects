/**
 * 
 * Faça um programa para calcular o valor gasto de combustivel em uma viagem
 * 
 * Você terá 3 variáveis, sendo elas:
 *  - 1 Preço do combustível;
 *  - 2 Gasto médio de combustível do carro por KM;
 *  - 3 Distância em KM da viagem
 * 
 * Imprima no console o valor que será gasto de combustivel para realizar esta viagem
*/


let precoCombustivel= 4.87;
let kmPorLitros = 10;
let distancia = 100;
const result = precoCombustivel*(distancia / kmPorLitros);

console.log("O valor total gasto combustível para realizar a viagem é: R$"+result);

