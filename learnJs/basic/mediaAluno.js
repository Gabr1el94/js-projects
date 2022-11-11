/**
 * Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule 
 * e imprima a sua média e a sua classificação conforme a tabela abaixo.
 * 
 *  Media = (nota1 + nota2 + nota3) / 3 ;
 * 
 * Classificação:
 *  - Média menor que 5, reprovação;
 *  - Média entre maior/igual 5 e menor que 7, recuperação;
 *  - Media acima/igual 7, aprovação
 * 
*/

let notas = [5,6,8];

const media = ( notas[0] + notas[1] + notas[2] ) / 3;

console.log("A média do aluno é: ", media.toFixed(2));

if (media < 5) {
    console.log('reprovação')
} else if (media >= 5 && media < 7) {
    console.log('recuperação');
} else {
    console.log('aprovação');
} 