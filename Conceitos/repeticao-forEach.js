/*
o mais utilizado porque é usado do forEach para iterar sobre um array de objetos - lista de dados

paraCada

    Matheus
    Renata
    Leandro
    Ana
    Lucas

    nota para cada aluno

    o paraCada percorre a lista e da a nota para cada um da lista


    paraCada (item da) listaDeAlunos
        //dar uma nota aleatoria

*/

const listaDeAlunos = [
    "Matheus", 
    "Renata", 
    "Leandro", 
    "Ana", 
    "Lucas"
]

listaDeAlunos.forEach(aluno => {
    console.log(aluno)
})


const listaDeAlunosENotas = [
    {
        nome: "Matheus", 
        nota: 7
    }, 
    {
        nome: "Renata", 
        nota: 7
    }, 
    {
        nome: "Leandro", 
        nota: 4
    }, 
    {
        nome: "Ana", 
        nota: 7
    }, 
    {
        nome: "Lucas", 
        nota: 0
    }
]


console.log(`*********************************************************************************************************`)


listaDeAlunosENotas.forEach(aluno => {
    if (aluno.nota < 7) {
        console.log(`O aluno ${aluno.nome} foi reprovado com a nota ${aluno.nota}`)
        console.log(`O aluno ${aluno.nome} tirou a nota ${aluno.nota}`)
    }
})