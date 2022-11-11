/**
 *  Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal 
 *  de etiqueta e a escolha da condição de pagamento.
 *  Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar
 *  o cálculo adequado.
 * 
 *  Código Condição de pagamento:
 *      - À vista débito, recebe 10% de desconto;
 *      - À vista no dinheiro ou PIX, recebe 15% de desconto;
 *      - Em duas vezes, preço normal de etíqueta sem juros;
 *      - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 */

const precoEtiqueta = 200;
const tipoPagamento = 'PIX';

let result = 0;

if (tipoPagamento == 'DB') {
    result = precoEtiqueta - ( precoEtiqueta * 10 / 100);
}else if(tipoPagamento == 'DN' || tipoPagamento == 'PIX') {
    result = precoEtiqueta - ( precoEtiqueta * 15 / 100);
}else if(tipoPagamento == 'CD'){
    const parcelamento = 3;
    if (parcelamento <= 2) {
        result = precoEtiqueta; 
    } else {
        result = precoEtiqueta + ( precoEtiqueta * 10 / 100);
    }
}else{
    console.log('Tipo de pagamento inválido!');
}

if (result!=0) {
    console.log('Total a pagar por etiqueta:',result.toFixed(2));
}