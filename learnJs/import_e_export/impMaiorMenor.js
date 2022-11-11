const { print } = require('./funcAuxiliar');
/**
 * 
    2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
    Imprima o maior e o menor número deste conjunto.

    Exemplo:
        Entrada:
            4
            100
            550
            90
            200

        Saída:
            Maior número: 200
            Menor número: 4
 */

function maiorMenorValores(numeros) {
    let maiorNumero = numeros[0];
    let menorNumero = numeros[0];
    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
        
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
        }
    }

    print(`Maior número é : ${maiorNumero}`);
    print(`Menor número é : ${menorNumero}`);
}

maiorMenorValores([4,100,550,90,200,1]);