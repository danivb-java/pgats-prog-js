/*
Tratamento de erros (try)

tentar executar (ex)

tentar {
    //conexao com banco
    } pegar (erro ou excessao) {
        //salvar a excessao em algum lugar
        // ou somente exibir 
    }

    lançar o erro = throw

*/

//tentar fazer algo que pode dar erro

try {
    console.log(`Tentando alimentar o Pet`)
   //throw new Error('pet nao quis ser alimentado') // usado para lancar o erro - depois do throw nada mais sera executado
   const nome = 'Lucas'
   nome = 'Lazarim'

   //tentar conectar ao banco
   // executar uma query
} catch (excessao) {
    // se der erro, tratar o erro, exibir o erro, salvar, melhorar, etc
    //console.log(excessao)
    console.log(excessao.name)
    console.log(excessao.message)

    // capturar a excessao

} finally {
    //sempre executa como se fosse uma acao final
    console.log('Fechar o pacote de racao')

    // fechar a conexao com o banco (ao menos garantor que foi chamado) 
}