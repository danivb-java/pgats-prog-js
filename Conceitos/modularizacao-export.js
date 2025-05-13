/*
MODULARIZAÇAO DE CODIGO

Sao os conceitos de dividir o código em partes menores, mais simples e mais fáceis de entender.
Isso ajuda a organizar o código, facilita a manutenção e a reutilização de partes do código em outros projetos.
 Divide o codigo ou a funcoes em modulos.

 Existem 2 tipo de modularizacao
    1. Sintaxe CommonJS (mais antigo e pouco usado hoje em dia)
       module.exports = {} / require (' ')

    2. Sintaxe ES6 - Ecmasript Standard Modules
        export {} / import {}

        no terminal rodar npm init -y (para inicializar o projeto e definir o tipo de modulo a ser usado no projeto e 
        alem disso instalar as bibliotecas)

        EXEMPLO:
        antes eu colocava
        const nomePet = `Pitoco`
        console.log(`O nome do pet é: ${nomePet}`)


        agora eu coloco
        function exibirNomePet(nomePet) {
            console.log(`O nome do pet é: ${nomePet}`)
        }

        exibirNomePet(`Pipoca`)
        exibirNomePet(`Mel`)
        exibirNomePet(`Pitoco`)


        agora vamos criar modulos para exportar essa funcao pra fora do arquivo
        // export {} / import
        export {
            exibirNomePet
        }

*/  

function exibirNomePet(nomePet) {
    console.log(`O nome do pet é: ${nomePet}`)
}
/*
exibirNomePet(`Pipoca`)
exibirNomePet(`Mel`)
exibirNomePet(`Pitoco`)
*/

function exibirIdadePet(idadePet) {
    console.log(`A idade do pet é: ${idadePet}`)
}


export {
    exibirNomePet, 
    exibirIdadePet
}
