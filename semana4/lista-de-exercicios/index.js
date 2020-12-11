//EXERCICIO DE LÓGICA DE PROGRAMAÇÃO

//1) PRIMEIRA FORMA DE PERCORRER ARRAY

// const numeros = [13, 20, 54, 32, 49]

// const posicaoNumero = numeros.map((item, index, array) =>{
//     return `O numero ${item} está na posição ${index}`
// })
// console.log(posicaoNumero)

//SEGUNDA FORMA DE PERCORRER ARRAY

// const numeros = [13, 20, 54, 32, 49]
// for(x of numeros) {
//     if(x % 2 ===0){
//         console.log("Os numeros pares são: ", x)
//     }
// }

//TERCEIRA FORMA DE PERCORRER ARRAY

// const numeros = [13, 20, 54, 32, 49]

// numeros.forEach(item => {
//     if(item % 2 !== 0) {
//         console.log("Os numeros impares são: ", item)
//     }
// });

//2) 
//a) - false 
//b) - false
//c) - true
//d) - true
//e) - true

//
//

//EXERCICIO DE FUNÇÕES

//1)
// const array = [13, 20, 54, 32, 49]

// const maiorMenor = (array) => {

//     let maior = 0
//     let menor = numeros[0]

//     for(item of array){
//         if(item > maior){
//             maior = item
//         }
//     }   if(item < menor){
//         menor = item
//     }

// }
// console.log(maior, menor)
// console.log(array)


//2)
// const msg = () => {
//     alert("Hello Labenu!")
// }
// msg()

//EXERCICIO DE OBJETOS 
//1 - O OBJETO É UMA FORMA DE ORGANIZAR MELHOR AS INFORMÇÕES QUE ESTÃO DENTRO DE UM ARRAY, PODENDO SEPARAR E FICAR MAIS CLARO A COMPREENSÃO.

//2)
// const criaRetrangulo = (lado1, lado2) => {
//     const retangulo = {
//         largura : (lado1) ,
//         altura : (lado2) ,
//         perimetro : (2*(lado1 + lado2)) ,
//         area : (lado1 * lado2) 
//     }
//     console.log(retangulo)
   
// }
// criaRetrangulo(23, 44)

//3)
// const filme = {
//     titulo: "As Branquelas",
//     ano : "2004",
//     diretor: "Keenan Ivory Wayans" ,
//     ator1: "Shawn Wayans",
//     ator2: "Marlon Wayans"
// }

// console.log(`Venha assistir ${filme.titulo} de ${filme.ano} dirigido por ${filme.diretor} e estrelado por ${filme.ator1} e ${filme.ator2}`)

//4)
// const pessoa = {
//     nome: "Pablo" , 
//     idade: "21" ,
//     email: "pablo@gmail.com" ,
//     endereco: "Rua nova"
// }
// console.log(pessoa)

// const anonimizarPessoa = () => {
//     const anonimo = {
//         nome: "ANONIMO" ,
//         idade: "21",
//         email: "pablo@gmail.com" ,
//         endereco: "Rua nova"
//     }
//     console.log(anonimo)
// }
//  anonimizarPessoa()









