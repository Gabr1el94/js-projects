/**
 * Geronimo acredita que perde muito tempo lembrando qual número do mês representa cada um deles. 
 * Ele precisa de um programa que mude os meses do ano do calendário do celular dele para facilitar e agilizar a leitura. 
 * Ajude-o e faça um programa que, com uma determinada entrada de uma data, retorne essa data com o mês escrito por extenso.
 */

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - ".split()": esse método transforma uma string em um array de substrings;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO: faça um programa que retorne a data da entrada com o mês por extenso;

let data = gets();
let dataSplit = data.split('/');
let date = new Date(dataSplit[2], dataSplit[1] - 1, dataSplit[0]);

function capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

const monthNumberToText = () => {
    const month = date.toLocaleString('pt-br', { month: 'long' });
    return capitalizeFirstLetter(month);
}

const checkDay = date.getDate() <= 9 ? '0' + date.getDate() : date.getDate();    
print(`${checkDay} de ${monthNumberToText()} de ${date.getFullYear()}`);