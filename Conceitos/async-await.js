
// asunc - assincrona

async function exibirNomeDogFormatado (nome) {
    return nome.toUpperCase()

}

// await - esperar, ai ele retorna o resultado esperado, sem o await, ele exibe a "Promessa"esperada
console.log(await exibirNomeDogFormatado(`Pipoca`))
