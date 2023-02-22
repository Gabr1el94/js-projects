/**
 * O gerente de uma loja resolveu aplicar descontos em todos os seus produtos! 
 * A tarefa é calcular a Porcentagem de Desconto aplicada a esses produtos. 
 */

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let M, S; 

M = parseInt(gets()); 

S = parseInt(gets()); 

//TODO: Retorne o percentual de desconto que foi aplicado no produto
let result = ((M - S) / M) * 100;

print(`O desconto foi de ${result}%`);