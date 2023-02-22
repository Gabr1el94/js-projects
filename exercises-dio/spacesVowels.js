/**
 * Jorginho é professor do primário de uma determinada escola. 
 * Ele tem 100000 alunos e precisa criar um programa que verifica quantos espaços em branco 
 * e quantas vogais existem em uma determinada string de entrada que os alunos entregaram na avaliação final.
 * Ajude-o a realizar essa tarefa antes que o tempo para entrega-la no fim do semestre acabe!
 */

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - ".split()": esse método transforma uma string em um array de substrings;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO: faça um programa que contabilize quantos espaços em branco e quantas vogais existem
//na string de entrada;

let str = gets(); 
let strSplit = str.split('');
let countSpaces = 0;
let countChar = 0;
const isVogal = (char) => ["a", "e", "i", "o", "u"].includes(char);

for (let index = 0; index < strSplit.length; index++) {
    if (strSplit[index] === ' ') {
        countSpaces += 1;
    }

    for (let j = 0; j < strSplit[index].length; j++) {
        if (isVogal(strSplit[index][j].toLowerCase())) {
            countChar += 1;
        }
    }
}

print(`Espacos em branco: ${countSpaces} Vogais: ${countChar}`);