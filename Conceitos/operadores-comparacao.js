/*
OPERADORES DE COMPARACAO
    >  - maior que
    >  - menor que  
    >=  - maior ou igual a
    <=  - menor ou igual a
    ==  - igual a
    === - igual a (mesmo valor e mesmo tipo de dado)
    !=  - diferente de   
    !== - diferente de (mesmo valor e mesmo tipo de dado)

*/

console.log(10 > 5) //verdadeiro = true -- retorna valores booleanos
console.log(`10 > 5 = ${10 > 5}`) //verdadeiro = true -- concatenacao
console.log(10 < 5) //falso = false -- retorna valores booleanos
console.log(10 >=10) //verdadeiro = true -- retorna valores booleanos

console.log(1 =='1') //igualdade somente de valores
console.log(true ==1) //verdadeiro - igualdade somente de valores
console.log(false ==1) //falso - igualdade somente de valores

console.log(1 ==='1') //falso - igualdade de valores e tipos de dados
console.log(true ===1) //falso - igualdade de valores e tipos de dados
console.log(false ===1) //falso - igualdade de valores e tipos de dados
console.log(null == undefined) // verdadeiro
console.log('' == 0) // verdadeiro

// diferença de valores
console.log(1 != 2) // verdadeiro
console.log(1 !== 2) // verdadeiro