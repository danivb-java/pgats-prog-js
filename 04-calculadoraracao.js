/*
CALCULADORA DE RACAO DIARIA

Crie um script que receba o peso do dog em KG + estoque atual de racao em gramas.
Calcule a quantidade diaria de racao com base na seguinte formula: Gramas por dia = peso * 30 gramas

EXIBA: 
 - nome do dog
 - peso do dog
 - quantidade de racao recomendada por dia
 - quantos dias o estoque atual vai durar
*/


const nome = "Mel"
let peso = 39 // em KG
let estoqueAtual = 10000 // em gramas

let quantidadeRecomendadaPorDia = peso * 30 // em gramas
let quantidadeDuracaoEstoque = estoqueAtual / quantidadeRecomendadaPorDia // em dias

console.log("================== CALCULADORA DE RAÇÃO =================")
console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso} KG`)
console.log(`Quantidade de raçao recomendada por dia: ${quantidadeRecomendadaPorDia} gramas`)
//console.log('Duraçao do estoque de raçao: ' + quantidadeDuracaoEstoque.toFixed(2) + ' dias')
console.log('Duraçao do estoque de raçao: ' + Math.floor(quantidadeDuracaoEstoque) + ' dias')
console.log("=========================================================")


// ALTERNATIVA COM FUNCOES
// ALTERNATIVA 2, usando função com parâmetros

function calcularConsumoDeRacao(nome, peso, estoque) {
    const gramasPorDia = peso * 30
    const duracaoEstoque = Math.floor(estoque / gramasPorDia)
  
    console.log(`----------------------`)
    console.log(`Nome do dog: ${nome}`)
    console.log(`Peso: ${peso}kg`)
    console.log(`Gramas por dia: ${gramasPorDia}g`)
    console.log(`O estoque vai durar: ${duracaoEstoque} dias`)
    console.log(`----------------------`)
  }
  
  calcularConsumoDeRacao('Ada', 1, 2000)
  calcularConsumoDeRacao('Laninha', 4.2, 15000)
  calcularConsumoDeRacao('Pantera', 14.5, 5000)


