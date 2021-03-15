// --- Exercicio 2 ---

const operacao = process.argv[2];
const numero1 = Number(process.argv[3]);
const numero2 = Number(process.argv[4]);

switch (operacao) {
    case "add":
        const add = numero1 + numero2
        console.log('Resultado da soma: ' + add)
        break;
    case "sub":
        const sub = numero1 - numero2
        console.log('Resultado da subtração: ' + sub)
        break;
    case "mult":
        const mult = numero1 * numero2
        console.log('Resultado da multiplicação: ' + mult)
        break;
    case "div":
        const div = numero1 / numero2
        console.log('Resultado da divisão: ' + div)
        break;
}

