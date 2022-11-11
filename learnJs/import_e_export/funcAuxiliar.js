
function getValueMult(value1, value2){
   return value1 * value2;
}

function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

function validacaoPar(value){
    return value % 2 === 0;
}


module.exports = {
    gets: gets,
    print: print,
    getValueMult: getValueMult,
    validacaoPar: validacaoPar 
}