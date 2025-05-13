/*
Programa sobre função (trabalho para entrega - 01)

Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.
*/


const listaOriginal = [1, "seis", 3, "quatro", 5, 10, "abc", "&"];

function filtrarNumeros(lista) {
    return lista.filter(item => typeof item === 'number');
  }
  
  const apenasNumeros = filtrarNumeros(listaOriginal);
  console.log(apenasNumeros);