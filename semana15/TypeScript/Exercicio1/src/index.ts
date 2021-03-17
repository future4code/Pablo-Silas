//A) Ao declarar uma variavel como string e atribuir um numero aparece um erro, informando que só será aceito string.

//B) Para usar mais de um tipo, pode declarar a variavel como any ou usar number e string juntos. 

//C)
enum CORES_ARCO_IRIS{
    VERMELHO = "VERMELHO",
    ROXO = "ROXO",
    AZUL = "AZUL",
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_ARCO_IRIS,
}

//D)

const pessoa1: pessoa = {
    nome: "Pablo",
    idade: 21,
    corFavorita: CORES_ARCO_IRIS.VERMELHO
}

const pessoa2: pessoa = {
    nome: "Jéssica",
    idade: 22,
    corFavorita: CORES_ARCO_IRIS.AZUL
}

const pessoa3: pessoa = {
    nome: "Ana",
    idade: 18,
    corFavorita: CORES_ARCO_IRIS.ROXO
}

console.log(pessoa1)