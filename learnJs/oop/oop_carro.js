/**
 *  1 - Crie um classe para representar carros
 *  Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
 *  Crie um método que dado a quantidade de quilômetros e o preço do combustível nos 
 *  dê o valor gasto em reais para realizar este percurso.
 * 
*/

class Carro{
    marcador;
    cor;
    gastoMedioPorKm;

    constructor(marcador,cor,gastoMedioPorKm){
        this.marcador = marcador;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm.toFixed(2);
    }

    calculoPrecoMedioCombustivel(distancia, precoCombustivel){
        return (distancia * this.gastoMedioPorKm * precoCombustivel).toFixed(2);
    }
}

let uno = new Carro('FIAT','VERMELHO',1/15);
console.log(uno);
console.log(uno.calculoPrecoMedioCombustivel(200,5));