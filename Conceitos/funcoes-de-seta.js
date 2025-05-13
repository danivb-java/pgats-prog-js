
//FUNCAO DE SETA / FLECHA
//sintaxe 
// () => {
// }

// funcao seta, com parametro, sem retorno
const exibirNomeDoDog = (nome) => {
    console.log(nome)
  }

  
  // funcao seta, com parametro + valor default, sem retorno
const exibirPorteDoDog = (porte = 'ND') => {
  console.log(porte)
}
  
  // funcao seta, com parametro, com retorno
  const obterNomeDoDogFormatado = (nome) => {
    return nome.toUpperCase() 
  }
  

  const obterObjetoDog = () => {
    return {
      nome: 'Bailey Maria',
      peso: 11.5,
      dogIrmao: {
        nome: 'Billy'
      },
      adotado: true
    }
  }
  
  const listarObjetosDog = () => {
    return [{
      nome: 'Bailey Maria',
      peso: 11.5
    }, {
      nome: 'Billy',
      peso: 1.5
    }]
  }


  const listarNomesDeDogs = () => {
    const nomes = [
      'Pituca',
      'Marea',
      'Anderson'
    ]
    
    console.log(`Passou pela função listarNomesDeDogs`)
  
    return nomes
  }

  //arrow function(set) sem bloco + com return automatico
  const dobrar = (numero) => numero * 2

  
  exibirNomeDoDog("Pipoca")
  exibirPorteDoDog()
  console.log(obterNomeDoDogFormatado("Bailey Maria"))
  console.log(obterObjetoDog())
  console.log(listarObjetosDog())
  console.log(listarNomesDeDogs())
  
  console.log(`--------`)
  