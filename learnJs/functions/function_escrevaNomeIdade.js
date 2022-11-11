 function escrevaNomeIdade(nome, idade) {
    if ((nome=="" && idade=="")) {
        console.log("Nome ou Idade devem ser preenchidos!");
        return;
    }else if(nome==""){
        console.log("Nome devem ser preenchido!");
        return;
    }else if(idade==""){
        console.log("Idade devem ser preenchido!");
        return;
    }
    
    let tipoIdade = idade >= 18 ? "Maior de idade" : "Menor de idade";
    console.log(`Seu nome é ${nome} e é ${tipoIdade}`);
}

escrevaNomeIdade('',20);
escrevaNomeIdade('Gabriel',20);
escrevaNomeIdade('Arthur',13);
