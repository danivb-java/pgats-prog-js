/*
CONTADOR DE SATISFAÇAO DE PASSEIO

Crie um script que avise quando o DOG ja passeou o suficiente.
Para saber, vamos considerar que ele se sentira satisfeito somente a partir de 5 voltas na quadra.

use a estrutura de repetiçao whilw.

Exiba:
 - qual o numero de volta atual
- quando o dog estiver satisfeito

Exta: transforme a logica em uma funcao (da forma que conseguir)
*/


let voltasDogSatisfeito = 5
let quantidadeVoltasAtual = 1

/*
function verificarSatisfacaoDog(quantidadeVoltasAtual, voltasDogSatisfeito) {
    while (quantidadeVoltasAtual <= voltasDogSatisfeito) {
    console.log(`O numero de voltas atual é: ${quantidadeVoltasAtual}`)

    if (quantidadeVoltasAtual >= voltasDogSatisfeito) {
        console.log(`O dog satisfeito!!!!`)
    } else {
        console.log(`Volta!!! O dog ainda nao esta satisfeito`)
    }
    quantidadeVoltasAtual++
}
}
verificarSatisfacaoDog(quantidadeVoltasAtual, voltasDogSatisfeito)
*/

//ou um codigo mais enxuto e mais simples

function verificarSatisfacaoDog(quantidadeVoltasAtual, voltasDogSatisfeito) {
    while (quantidadeVoltasAtual <= voltasDogSatisfeito) {
        console.log(`O numero de voltas atual é: ${quantidadeVoltasAtual}`)
        quantidadeVoltasAtual++
    }
    console.log(`O dog está satisfeito!!!!`)
}
verificarSatisfacaoDog(quantidadeVoltasAtual, voltasDogSatisfeito)


/*
console.log(`*********************************************************************************************************`)
function verificarSatisfacaoDog() {
    let voltasDogSatisfeito = 5
    let quantidadeVoltasAtual = 1

    while (quantidadeVoltasAtual <= voltasDogSatisfeito) {
        console.log(`O numero de voltas atual é: ${quantidadeVoltasAtual}`)
        console.log(`Volta!!! O dog ainda nao esta satisfeito`)
        quantidadeVoltasAtual++
    }
    console.log(`O dog está satisfeito!!!!`)
}
verificarSatisfacaoDog(10)
console.log(`*********************************************************************************************************`)
*/