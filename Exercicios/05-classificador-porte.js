/*
CLASSIFICADOR DE PORTE AUTOMATICO

Muitos tutores nao fazem ideia do porte do seu Dog.
Crie um script que classifique o porte com base no peso de forma simplificada, sendo:
- ate 10Kg --> pequeno; acima disso --> medio

use o operador ternario para determinar o porte. Extra:
- nome
- peso- porte classificado

EXTRA: transforme a logica e, uma funcao (da forma que conseguir)
*/



const nome = 'Mel'
const peso = 39

const porte = peso <= 10 ? 'pequeno': 'medio' // operador ternario, se peso <= 10, porte = pequeno, senao porte = medio	

console.log('============================')
console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso}kg`)  
console.log(`Porte: ${porte}`)
console.log('============================')


//ALTERNATIVA com funcao (EXTRA)
function classificarPortePorPeso(nome, peso) {
    const porte = peso <=10 ? 'pequeno' : 'medio'
    console.log('============================') 
    console.log(`Nome: ${nome}`)
    console.log(`Peso: ${peso}kg`)  
    console.log(`Porte: ${porte}`)
    console.log('============================')
}

classificarPortePorPeso('Pantera', 14.5)
classificarPortePorPeso('Bandite', 35)
classificarPortePorPeso('Rex', 8)
