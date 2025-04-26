/*
Exercício Individual
Programação para Automação de Testes
Hands-on
Validador de idade mínima para adoção
Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.
Use os operadores adequados e exiba:
Nome do dog
Idade
Se está apto ou não para adoção
Extra: aplique uma regra com operador lógico para permitir que se o cão for de pequeno porte, pode ser adotado independente da idade.

EXEMPLOS:
minimo = 2 anos

 - idade 1 + porte M = nao
 - idade 2 + porte M = sim, pela idade
 - idade 2 + porte P = sim, pela idade
 - idade 1 + porte P = sim, pelo porte
*/



let nomeDog = "Florzinha"
const idadeDog = 1
const porteDog = "M"
const idadeMinima = 2
const aptoParaAdocao = (idadeDog >= idadeMinima || porteDog === "P")
                         ? "Sim" 
                        // : porteDog === "P"
                        // ? "Sim"
                         : "Não"

console.log("-----------------Validaçao de adoçao-----------------")
console.log(`Nome: ${nomeDog}`)
console.log(`Idade: ${idadeDog} anos`)  
console.log(`Apto para adoção: ${aptoParaAdocao}`)
console.log("---------------------------------------------------------")




function verificarSePodeSerAdotado(idade, porte) {
    const adocao = idade >= idadeMinima 
                  ? 'sim'
                  : porte === 'P' 
                  ? 'sim'
                  : 'não'
  
    // return adocao
    console.log(adocao)
  }
  
  // idade 1 + porte M = nao
  // idade 2 + porte M = sim, pela idade
  // idade 2 + porte P = sim, pela idade
  // idade 1 + porte P = sim, pelo porte
  
  verificarSePodeSerAdotado(1, 'M')
  verificarSePodeSerAdotado(2, 'M')
  verificarSePodeSerAdotado(2, 'P')
  verificarSePodeSerAdotado(1, 'P')