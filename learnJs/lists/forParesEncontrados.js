/**
 *  2) Crie um programa que seja capaz de percorrer uma lista de números
 *  e imprima cada número PAR encontrado
 */

let listPar = [];

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        listPar.push(i);
    }
}

console.log(`Números de pares encontrados foram: ${listPar}`);