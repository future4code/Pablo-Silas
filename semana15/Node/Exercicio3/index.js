// --- Exercicio 3 ---

const tarefas = [
    "Limpar as janelas",
    "Lavar o quintal",
    "Jogar o lixo fora",
];
const novaTarefa = tarefas.push(process.argv[2]);
console.log(`Tarefa adicionada com sucesso! Suas tarefas são: ${tarefas}`)
