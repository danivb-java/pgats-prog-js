/**
 * Crie uma TAG do cachorro
 * O dono ira informar nome, idade, peso, raca e se eh adotado ou nao.
 * A tag deve ter:
 * * Nome do cachorro em letra maiuscula
 * * A raca com a primeira letra maiuscula
 * * O peso 
 *  
 */



const nome = 'Mel'
const raca = 'Golden Retriever'
let idadeCachorro = 3	
let pesoCachorro = 39
const adotado = false

const nome2 = 'Cacau'
const raca2 = 'SRD'
let idadeCachorro2 = 1	
let pesoCachorro2 = 20
const adotado2 = true

console.log(`========== TAG DE IDENTIFICAÇAO ============`)
console.log(`NOME: ${nome.toUpperCase()}`)
console.log(`RAÇA: ${raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()}`)
console.log(`IDADE: ${idadeCachorro} anos`)
console.log(`PESO: ${pesoCachorro} kg`)
console.log(`ADOTADO: ${adotado ? 'Sim' : 'Não'}`)
console.log(`============================================ \n`)	

console.log(`========== TAG DE IDENTIFICAÇAO ============`)
console.log(`NOME: ${nome2.toUpperCase()}`)
console.log(`RAÇA: ${raca2.charAt(0).toUpperCase() + raca2.slice(1).toLowerCase()}`)
console.log(`PESO: ${pesoCachorro2} kg`)
console.log(`============================================\n`)	

// OU

const DogCacau = [{
    nomec: 'Cacau',
    racac: 'SRD',
    idadec: 1,	
    pesoc: 20,
    adotadoc: true
}]
console.log(`========== TAG DE IDENTIFICAÇAO ============`)
console.log(`Nome: ${DogCacau[0].nomec.toUpperCase()}`)
console.log(`Raça: ${DogCacau[0].racac.charAt(0).toUpperCase() + DogCacau[0].racac.slice(1).toLowerCase()}`)
console.log(`============================================`)