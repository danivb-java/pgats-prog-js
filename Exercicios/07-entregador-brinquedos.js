/*
ENTREGADOR DE BRINQUEDOS

Dado que vc tenha uma lista de brinquedos com: Bola, Osso, Corda, Sino.
Crie um script que passe pela lista de brinquedos e entregue um por vez.
Exiba o nome de cada brinquedo entregue.

Use a estrutura de repetiçao forEach.

Extra: trabsforme a logica em uma funcao (da forma que conseguir)
*/



const brinquedos = ['Bola', 'Osso', 'Corda', 'Sino']
const brinquedosEntregues = [] // Array para armazenar os brinquedos entregues

function entregarBrinquedos(brinquedos) {
    brinquedos.forEach((brinquedo) => { //o parametro brinquedo é o item que está sendo percorrido na lista (posicao dele na lista)
        console.log(`Entregando o brinquedo: ${brinquedo}`)
        brinquedosEntregues.push(brinquedo) // Adiciona o brinquedo ao array de entregues
    })
    console.log(`Todos os brinquedos foram entregues: ${brinquedosEntregues.join(', ')}`)
}

entregarBrinquedos(brinquedos)
console.log(`*********************************************************************************************************`)

/*
ou

const brinquedos = ['Bola', 'Osso', 'Corda', 'Sino']

function entregarBrinquedos(brinquedos) {
    brinquedos.forEach((brinquedo) => { 
        console.log(`Entregando o brinquedo: ${brinquedo}`)
    })
    console.log(`Todos os brinquedos foram entregues: !!`)
}

entregarBrinquedos(brinquedos)


ou


function entregarBrinquedos(brinquedos) {
    brinquedos.forEach((brinquedo, i) => { 
        console.log(`Entregando o brinquedo: ${i +1}: ${brinquedo}`)
    })

*/


const brinquedosComNomeECor = [
    {
        nome: 'Bola',
        cor: 'vermelha'
    },
    {
        nome: 'Osso',
        cor: 'azul'
    },
    {
        nome: 'Corda',
        cor: 'verde'
    },
    {
        nome: 'Sino',
        cor: 'amarelo'
    }
]

brinquedosComNomeECor.forEach((brinquedo) => {
    console.log(`Entregando o brinquedo: ${brinquedo.nome} de cor ${brinquedo.cor}`)
})