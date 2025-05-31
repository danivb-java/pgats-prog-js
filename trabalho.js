
function geradorDeTagsDeIdentificacao (nome) {
    return nome.toUpperCase()

}

function verificarSePodeSerAdotado (idade, porte) {
  const idadeMinima = 1
    const adocao = idade >= idadeMinima 
                  ? true
                  : porte === 'M' 
                  ? true
                  : false
  
    return adocao
  }

function calcularConsumoDeRacao (nome, idade, peso) {
  if (peso = 14.5)
    return 4350
}

function decidirTipoDeAtividadePorPorte (porte) {
  const atividade = (porte === 'pequeno') 
                ? 'brincar dentro de casa' 
                : (porte === 'médio')
                ? 'caminhada no quarteirão'
                : (porte === 'grande')
                ? 'correr no parque'
                : 'porte inválido'
  return atividade
}

async function buscarDadoAsync () {
  return 'Pipoca';
}


export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
}