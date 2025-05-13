/*
    + adicao
    - subtracao
    * multiplicacao
    / divisao
    % resto da divisao
    ** potenciação (exponencial)
    ++ incremento
*/

console.log(1 + 1) // 2
console.log(10 - 7) // 0
console.log(2 * 2) // 4

console.log(10 / 2) // 5 
console.log(10 % 3) // 1 -- resto da divisao (usado tb para saber se o numero é par - caso tenha resultado na divisao é impar)
console.log(4**4) // 256 (4*4*4*4)

console.log(+"5"*2) // 10 -- converte a string "5" para o numero 5 e multiplica por 2

console.log(11 / 2)  // 5.5
console.log(parseInt(11 / 2)) // 5 -- converte o resultado da divisao para inteiro (remove a parte decimal)
console.log(parseFloat(11 / 2)) // 5.5 -- converte o resultado da divisao para float (mantem a parte decimal)

// arredondamento
console.log(Math.floor(5.8)) // 5 -- arredonda para baixo
console.log(Math.ceil(5.2)) // 6 -- arredonda para cima 
console.log(Math.round(5.5)) // 6 -- arredonda para o inteiro mais proximo (se for 5.5 arredonda para cima)
console.log(Math.round(5.4)) // 5 -- arredonda para o inteiro mais proximo (se for 5.4 arredonda para baixo)    
