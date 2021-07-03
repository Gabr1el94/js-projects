//Não são nativas ECMAScript
//setTimeout(fn[function],ms[time])
//setInterval(fn,ms)
//clearTimeout(id[limpar uma função]);

var n = 0
function soma() {
    console.log('n',++n) 
    
    if (n > 10) {
        clearTimeout(intervalo);
    }
}

setTimeout(function (){
    soma() 
},2000)

var intervalo = setInterval(function (){
                    soma() 
                },2000)

var str = '';
var timeoutTest = setTimeout(function (){
    
    for (let i = 0; i < 100; i++) {
        str += "i: "+ i +" -- ";
        console.log(str)
    }

},3000)