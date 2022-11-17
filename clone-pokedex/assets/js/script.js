const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
    .then((response)=> response.json())
    .then((jsonBody => consol.log(jsonBody)))
    .catch((err => console.log(err)))
    .finally(() => console.log('Requisição concluída!'));