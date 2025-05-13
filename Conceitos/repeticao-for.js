/*
ja sabemso a quantidade de vezes que sera repetida a "repeticao"

para, faça
contador; condicao; manipulacao do contador (incremento / decremento)

quantidadeDePetiscos; quantidadedePetiscos <= quantidadeCalculada; quantidadeDePetiscos++

*/


const quantidadeCalculada = 3
for(quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++){
    //acao de dar o petisco
    console.log(`Dando o petisco numero ${quantidadeDePetiscos}`)
}



const gatos = ["Lessie", "Mimi", "Lili"]

for(let indice = 0; indice < gatos.length; indice++){
    console.log(`O gato ${gatos[indice]} eh o gato de numero ${indice}`)
}



//for dentro do for

for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
    // acao de dar o petisco
    console.log(`Dando o petisco de nº: ${quantidadeDePetiscos}`)
    for (let indice = 0; indice < gatos.length; indice++) {
        console.log(`Dando o petisco para ${gatos[indice]}`)
    }
}



