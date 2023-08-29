const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const propriedades = [];

function pedirPropriedade() {
    rl.question('Digite uma propriedade de CSS (ou "SAIR" para finalizar): ', (resposta) => {
        if (resposta.toUpperCase() === 'SAIR') {
            rl.close();
        } else {
            propriedades.push(resposta);
            pedirPropriedade();
        }
    });
}