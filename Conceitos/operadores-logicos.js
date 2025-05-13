/*
    &&  - E / AND
    ||  - OU / OR
    !   - NÃO / NOT
*/

console.log(true && true) // verdadeiro
console.log(true && false) // falso
console.log(false && true) // falso 
console.log(false && false) // falso

const nomeDog = "Pipoca"
const nomePossuiApenasUmaPalavra = nomeDog.split(" ").length === 1
const nomePossuiAteDezCaracteres = nomeDog.length <= 10
console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres) // verdadeiro

console.log(true || true) // verdadeiro
console.log(true || false) // verdadeiro
console.log(false || true) // verdadeiro
console.log(false || false) // falso

const dog = {
    adotado: false,
    peso: 5.3
}
console.log(!dog.adotado || dog.peso < 10) // verdadeiro


console.log(!true) // falso
console.log(!false) // verdadeiro
console.log(!!true) // verdadeiro
console.log(!!false) // falso
console.log(!!1) // verdadeiro