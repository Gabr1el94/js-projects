const { print,validacaoPar } = require('./funcAuxiliar');
/**
 3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
 */

let listPar = [5,1,3,9,10,12];
let addPares = [];
for (let i = 0; i <= listPar.length; i++) {
    if (validacaoPar(listPar[i])) {
        addPares.push(listPar[i]);
    }
}

print(`Números de pares encontrados foram: ${addPares}`);