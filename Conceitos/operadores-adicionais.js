/*
-- decremento
++ incremento
? ternário

*/


let pesoDoDog = 10
console.log(pesoDoDog)

pesoDoDog++
console.log(pesoDoDog)

pesoDoTutor = 100
console.log(pesoDoTutor)

pesoDoTutor--
console.log(pesoDoTutor)    

//ternário
//<condicao> ? <acao se verdadeiro> : <acao se falso>
const porte = pesoDoDog <= 10 ? 'pequeno' : 'medio'
//             condicao       se          senao
console.log(porte)

const pesoDoDogOperadorTernario = 10
const porteDog = pesoDoDogOperadorTernario <= 10 // se if
            ? "pequeno"
            : pesoDoDogOperadorTernario <=20  // senao se  /  else if
            ? 'medio'
            : 'grande'   // senao
console.log(porteDog)