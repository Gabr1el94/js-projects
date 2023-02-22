/** 
 * Faça um Programa que leia cinco números inteiros e armazene-os em um vetor chamado VETOR. 
 * Armazene os números pares no vetor PAR e os números ímpares no vetor IMPAR
*/
let vetor = [];
let pares = [];
let impares = [];

//TODO: Implemente uma condição para o armazenamento dos números PARES e ÍMPARES:
for(let i = 0; i < 5; i++){
   let numero = gets(); 
   vetor.push(numero);
   if(numero % 2 === 0 ){
     pares.push(numero)
   }else{
    impares.push(numero); 
   }
}

//TODO: Imprima os valores dos três vetores um em cada linha:
print("Vetor:",vetor);
print("Par(es):",pares);
print("Impar(es):",impares);