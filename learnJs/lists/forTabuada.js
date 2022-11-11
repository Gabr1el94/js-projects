/**
 *  1) Crie um programa que dado um número imprima a sua tabuada
 */

function tabuada(value) {
    for (let i = 0; i <= 10; i++) {
        let result = value * i;
        console.log(`${value} x ${i} = ${result}`);
    }
}

tabuada(5);