/**
 * Faça um Programa que peça ao usuário que insira o valor, 
 * em seguida deverá ser mostrado se o número é classificado como INTEIRO ou DECIMAL. 
 */

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.


let valor = gets();

//TODO: Descubra se o valor é inteiro ou decimal
if(valor % 2 === 0) {
  print('Inteiro');
} else {
  print('Decimal');
}