/*
Escolha caso - switch case
usamos esse quando tem a partir de 3 condicionais

escolha (condicao):
    se x: faca
    se y: faca
    se z: faca

*/

const peso1 = 10

switch (peso1) {
    case 10:
        console.log('P')
        break
    case 20:
        console.log('M')
        break
    case 30:
        console.log('G')
        break
    default: // se nenhum dos casos acima for verdadeiro, faça isso
    console.log('ND')
}

//Se quiser muito usar switch, dá para fazer um truque com true, tipo:

const peso = 10;

switch (true) {
    case peso <= 10:
        console.log('P');
        break;
    case peso <= 20:
        console.log('M');
        break;
    case peso <= 30:
        console.log('G');
        break;
    default:
        console.log('ND');
}