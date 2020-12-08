totalUsuario = 0
totalComputador = 0

if(confirm("Deseja iniciar um novo jogo?")) {
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   totalUsuario = carta1Usuario.valor + carta2Usuario.valor
   console.log("Usuario - Cartas: ", carta1Usuario, carta2Usuario, "Pontuação: ", totalUsuario)

   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()
   totalComputador = carta1Computador.valor + carta2Computador.valor
   console.log("Computador - Cartas: ", carta1Computador, carta2Computador, "Pontuação: ", totalComputador)

   if(totalUsuario > totalComputador){
      console.log("Usuario ganhou!")
   } else if (totalComputador > totalUsuario){
      console.log("Computador ganhou!")
   } else if(totalUsuario === totalComputador){
      console.log("Empate!")
   }

} else {
   confirm = false
   console.log("O Jogo Acabou!")
}
