/**
 * 
 * Faça um programa para calcular o valor gasto de combustivel em uma viagem
 * 
 * Você terá 3 variáveis, sendo elas:
 *  - 1 Preço etanol
 *  - 2 Preço gasolina
 *  - 3 O tipo de combustivel que está no seu carro;
 *  - 4 Gasto médio de combustível do carro por KM;
 *  - 5 Distância em KM da viagem
 * 
 * Imprima no console o valor que será gasto de combustivel para realizar esta viagem
*/
let tipoCombustivel='gasolina';
let precoCombustivel= 0;
let kmPorLitros = 10;
let distancia = 100;

if (tipoCombustivel == 'gasolina') {
    precoCombustivel = 4.87;
}else if(tipoCombustivel == 'etanol'){
    precoCombustivel = 3.25;
}else{
    console.log('tipo combustível é inválido!');
}

const result = precoCombustivel*(distancia / kmPorLitros);

if (result!=0) {

    console.log("o tipo de combustivel selecionado foi: ", tipoCombustivel);
    console.log("O valor total gasto combustível para realizar a viagem é: R$"+result.toFixed(2));
}