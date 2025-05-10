/*
CONTROLE DE PETISCOS

Crie um script que receba uma quantidade de petiscos e dê 1 por vez ate que o dog esteja satisfeito.
Use a estrutura de repeticao for contado.

Exiba:
 - cada vez que um petisco for entregue
 - quando o dog estiver satisfeito (que é quando terminar os petiscos)

 Extra: transforme a logica em uma funcao (da forma que conseguir)
*/

let quantidadePetiscos = 10
let quantidadePetiscosEntregues = 0

function verificarPetiscos(quantidadePetiscos, quantidadePetiscosEntregues) {
    for (let petisco = 1; petisco <= quantidadePetiscos; petisco++) {
        console.log(`Entregando petisco ${petisco}`)
        quantidadePetiscosEntregues++
    }
    console.log(`O dog está satisfeito!!!!`)
}   

verificarPetiscos(quantidadePetiscos, quantidadePetiscosEntregues)
console.log(`*********************************************************************************************************`)

/*
ou

function verificarPetiscos(quantidadePetiscos) {
    for (let petisco = 1; petisco <= quantidadePetiscos; petisco++) {
        console.log(`Entregando petisco ${petisco}`)
    }
    console.log(`O dog está satisfeito!!!!`)
}


ou

function alimentar(...treats) {
  let chance = 0; // Starting chance of being full
  let isFull = false;

  for (let i = 0; i < treats.length; i++) {
    chance += 5; // Increase the chance by 5% per treat
    const random = Math.random() * 100; // Random number between 0 and 100

    console.log(`Petisco ${i + 1}: Cachorro comeu "${treats[i]}". Chance de estar cheio: ${chance}%.`);

    if (random < chance) {
      console.log("O cachorro está cheio!");
      isFull = true;
      break;
    } else {
      console.log("O cachorro ainda está com fome!");
    }
  }

  if (!isFull) {
    console.log("Comeu todos os petiscos, mas ainda está com fome!");
  }
}

// Example usage:
alimentar("Biscoito", "Galinha", "Porco", "Queijo", "Ração");

*/

