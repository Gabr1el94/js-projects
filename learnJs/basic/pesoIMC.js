/**
 * O IMC - É um critério da OMS para dar uma indicação sobre a condição de peso de uma 
 * pessoa adulta
 * 
 * Formula do IMC: 
 *  IMC = peso / (altura * altura )
 * 
 * Elabore um algorimo que dado o peso e a altuea de um adulto moste sua condição de acordo
 * com a tabela abaixo:
 * 
 * IMC em adultos condição:
 *  - Abaixo 18.5 abaixo do peso;
 *  - Entre 18.5 e 25 pelo normal;
 *  - Entre 25 e 30 acima do peso;
 *  - Entre 30 e 40 obeso;
 *  - acima de 40 obesidade grave;
 * 
*/

let peso = 100;
let altura = 1.80;
let classificacao = '';
const imc = peso / Math.pow(altura, 2);

console.log('O resultado do cálculo IMC', imc.toFixed(2));

if (imc < 18.5 ) {
  classificacao = 'abaixo de peso';   
}else if(imc >= 18.5 && imc < 25) {
  classificacao = 'normal';
}else if(imc >= 25  && imc < 30 ) {
  classificacao = 'acima do peso';
}else if(imc >= 30  && imc < 40 ) {
  classificacao = 'obeso';
}else {
  classificacao = 'obesidade grave';
}


console.log('Sua classificação do IMC está: ', classificacao);