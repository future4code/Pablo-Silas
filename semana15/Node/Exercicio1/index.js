// --- Exercicio 1 ---

//A) Podemos acessar colocando o valor dentro de uma variavel

//B)
// const nome = process.argv[2];
// const idade = Number(process.argv[3]);
// console.log(`Olá, ${nome}! Você tem ${idade} anos. `)

//C) 
const nome = process.argv[2];
const idade = Number(process.argv[3]);
const novaIdade = idade + 7 
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade} anos.`)

