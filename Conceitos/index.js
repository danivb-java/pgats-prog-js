/**
 * Console API
 * 
 */

console.log("Aula inicial JS")
console.error("Erro na exibicao") 
console.warn("Atenção!")
  
console.table([{
    nome: 'Lucas',
    cidade: 'São Paulo',
    profissao: 'Desenvolvedor',
    turma: '02',
    disciplina: 'Prog JS'
},
{
    nome: "Dani",
    cidade: "São Paulo",
    profissao: "QA",
    turma: "02",
    disciplina: 'Prog JS'

}])


/**
 * Constantes e variaveis 
 * 
 * const - para informações que não mudam
 * let - para informações que mudam
 * var - para informações que mudam (não é recomendado)
 */

// informacoes que nunca mudam
const raca = 'SRD'
const nome = 'Loki'
const sexo = 'Macho'	
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'


// informacoes que mudam
let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'M'

console.log(`Meu cachorro se chama ${nome}, ele é um ${raca} ${cor} de porte ${porte}, tem ${idade} anos e pesa ${peso}kg.`)	


//hoinsting --> içamento ou elevaçao (isso ocorre como var - mesmo que a variavel nao tenha sido declarada antes, 
// quando uso var ele ja inicializa como indefinido, diferente do que ocorre com let e const, onde eu preciso declarar)

const irmaos = ["Thor", "Hele"]
console.table(irmaos)



/**
 * Tipos de Dados - cadeia, inteiro, logico, vetor, funcao
 * 
 * String = cadeia 
 * Number = inteiro / real
 * Boolean = logico
 * Array - vetor / matriz
 * 
 * undefined
 * null
 * 
 * BigInt = Number para numeros extremamente grandes
 * Symbol = identificador unico e imutavel
 * 
 * TypeScript - linguagem de programacao que adiciona tipagem estaticas ao JS (para declarar os tipos das variaveis precisa instalar essa linguagem)
 * 
 */




/**
 * Strings
 *  
 * 'Turma 02 do PGATS' // aspas simples ou single quote
 * "Turma 02 do PGATS" // aspas duplas ou double quote
 * `Turma 02 do PGATS` // template string - permite interpolar variaveis dentro da string	
 */

const turma = "02"
let data = "05 de Abril"

console.log("Aula 03 da Turma " + turma + " no Sabado dia 05 de Abril") // concatenação de strings
console.log("Aula 03 da Turma" + " " + turma) // concatenação de strings

console.log(`Aula 03 da Turma ${turma} no Sabado dia ${data}`) // template string - interpolação de variaveis dentro da string

//para saber a quantidade de caracteres de uma string, utilizamos o LENGTH
console.log(data.length)

//para separra a string usamos SPLIT
const nomesDeAlunos = "Giulina, Lucas, Dani, Thais, Andre"

const NomesDeAlunosSplit = nomesDeAlunos.split(" ") // separa a string sempre que encontrar um espaco e coloca em um array(vetor)
console.log(NomesDeAlunosSplit)


//transforma string em maiusculo ou minunsculo
console.log(nomesDeAlunos.toLowerCase()) // transforma a string em minusculo
console.log(nomesDeAlunos.toUpperCase()) // transforma a string em maiusculo


// includes - verifica dentro da string se tem aquele valor 
console.log(nomesDeAlunos.includes("Lucas")) // true - existe o nome Lucas dentro da string


//replace - substitui uma string por outra
console.log(nomesDeAlunos.replace("Lucas", "Loki")) // substitui o nome Lucas por Loki na string nomesDeAlunos


//trim - remove os espacos em branco do inicio e do final da string
const conceitosLogica = "                         inteiro real cadeia      ....     "
console.log(conceitosLogica.trim()) // remove os espacos em branco do inicio e do final da string nomesDeAlunos


//slice - corta a string em um determinado ponto
const nomeCompleto = "Lucas Oliveira"
console.log(nomeCompleto.slice(0, 5)) // corta e exibe a string do indice 0 ao 5 (nao inclui o 5) - resultado: Lucas




/*
QUANDO CRIAR UM REPOSITORIO NO GIT
echo "# pgats-prog-js" >> README.md (cria um arquivo fictcio vazio)
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/danivb-java/pgats-prog-js.git (conecta o projeto local da minha maquina com o github)
git push -u origin main (envia as alteracoes do commit)
ELE CRIA UM ARQUIVO VAZIO E SO DEPOIS EU INSIRO MEU Codigo

DEPOIS DAR OS COMANDOS ABAIXO NO TERMINAL DO VSCode
git status - verificar os arquivos alterados 
git add <arquivo ou ponto> - para adicionar arquivos na área de 'staging'
git commit -m "mensagem" - para confirmar os arquivos adicionados 
git push - para enviar os arquivos confirmados para o github

*/

