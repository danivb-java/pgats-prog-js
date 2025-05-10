/*
Programa Retornando Número de Vogais

Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata. 
O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.
*/

const texto = "trabalho valendo nota para contar o numero de vogais dessa frase";

function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
  
    for (let i = 0; i < texto.length; i++) {
      if (vogais.includes(texto[i])) {
        contador++;
      }
    }
  
    return contador;
  }
  
  console.log(contarVogais(texto)); 