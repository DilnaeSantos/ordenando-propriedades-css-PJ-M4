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

pedirPropriedade()

rl.on('close', () => {
    const propriedadesOrdenadas = propriedades.sort();
    
    console.log('Propriedades ordenadas em ordem alfabética;');

    propriedadesOrdenadas.forEach((propriedade) => {
        console.log(propriedade)
    });
});