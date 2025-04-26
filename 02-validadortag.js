/*
VALIDADOR DE NOMES PARA AS TAGS

#Alguns donos estao registrando os dogs com nomes mal formatados. Crie um script para limpar e padronizar o nome.

#Aplique as formatacoes e exiba:
#o nome original, como foi cadastrado
#o nome formatado

#Extra: aplique uma regra que confira se o nome informado possui apenas uma palavra.
#Exiba se o nome é valido ou nao.
*/


 const nomeDog = 'Ba!ley Maria@'

 let nomeFormatado = removerCaracteresEspeciais(nomeDog)
 nomeFormatado = nomeFormatado.charAt(0).toUpperCase() + nomeFormatado.slice(1, nomeFormatado.length).toLowerCase()

 const palavras = nomeFormatado.split(" ");
 console.log(palavras)
 const valido = palavras.length === 1 ? 'Nome valido' : 'Nome invalido'

 console.log(nomeDog)
 console.log(nomeFormatado)
 console.log(valido)

 function removerCaracteresEspeciais(nome) {
   return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
 }

 function removerEspacoEntreAPalavra(nome) {
   return nome.replace(/\s+/g, "")
}

function tornarAPrimeiraLetramaiuscula(nome) {
   return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
}  