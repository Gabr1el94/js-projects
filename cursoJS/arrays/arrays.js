var arr = ['1',2,3,4,5]; // new Array();

// todos sejam true
var isNumber = arr.every( function(el, i, obj){
    return typeof el === 'number';
});

//pelo menos um elemento
var isOnlyNumber = arr.some( function(el, i, obj){
    return typeof el === 'number';
});

// retornar os elementos 
var numeros = arr.filter(function(el, i, arr){
    return typeof el === 'number';
});

// console.log(isNumber);
// console.log(isOnlyNumber);
// console.log(numeros);

//loop
// arr.forEach(function(el,i,arr){
//     console.log('el=',el,' | i=',i , ' | i - ',arr.toString())
// });

//retornar a posição
var posicaoStr1 = arr.indexOf(3);

//retornar última posição
var lastPosicao = [20,10,30,40,20].lastIndexOf(20);

//console.log('posicaoStr1: ', posicaoStr1);
//console.log('lastPosicao:', lastPosicao);

//map
var tstMap = [1,2,3,4,5,6,7,8,9,10];
var resultMap = tstMap.map(function(el,i,arr){
    return el * i;
});

//console.log(resultMap);

//concat
var arrConcat = tstMap.concat('teste','arr2');
// console.log(arrConcat);

//join
var arrJoin = tstMap.join();
// console.log(arrJoin);

//push
arr.push(10);
console.log(arr);

//pop
var ultimoItem = arr.pop();
console.log(ultimoItem);

//shift
var primeiroItem = arr.shift();
console.log(primeiroItem);

//unshift
arr.unshift(true,false,'unshift');
console.log(arr);

//reduce - numbers
var smDeArr = numeros.reduce(function(anterior,atual){
    return anterior + atual;
});
console.log(smDeArr);

//reduceRight
var tstReduce = ['1','2','3'].reduce(function(i,a){
    return i + a;
});
console.log(tstReduce);

//reverse
console.log([10,20,30].reverse())

//slice
console.log(arr.slice(2,5))

//splice
var spliceArr = arr.splice(2,1,'limao','melao');
console.log(spliceArr);