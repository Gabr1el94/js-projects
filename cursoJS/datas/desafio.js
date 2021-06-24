const dtFormat = new Date();


function formatDate(data){ 
    var dia = data.getDate() < 10 ? '0' + data.getDate() : data.getDate();

    var mes = data.getMonth() + 1;
    mes = mes < 10 ? '0' + mes : mes;
    return dia + '/' + mes + '/' + data.getFullYear();
}

console.log(formatDate(dtFormat))