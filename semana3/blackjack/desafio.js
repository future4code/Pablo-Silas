totalUsuario = 0
totalComputador = 0

if(confirm("Deseja iniciar um novo jogo?")) {
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let carta1Computador = comprarCarta()

   confirm(
      "Suas cartas são: " + carta1Usuario.texto + carta2Usuario.texto + ". A carta revelada do computador é: " + carta1Computador.texto +
      "\n"+ 
      "Deseja comprar mais uma carta?"
   )
      totalUsuario = carta1Usuario.valor + carta2Usuario.valor
      totalComputador = carta1Computador.valor + carta2Computador.valor

      if(totalUsuario < 21){
         let carta3Usuario = comprarCarta()
        
      }else {
         confirm(
            "Suas cartas são: " + carta1Usuario.texto + carta2Usuario.texto + carta3Usuario.texto + ". Sua pontuação é: " + totalUsuario +
            "\n"+ 
            "As cartas do computador são: " + carta1Computador + "O Computador ganhou"
         )
      }

   confirm(
   "Suas cartas são: " + carta1Usuario.texto + carta2Usuario.texto + carta3Usuario.texto + carta4Usuario.texto + ". A carta revelada do computador é: " + carta1Computador.texto + carta2Computador.valor +
   "\n"+  
   "Deseja comprar mais uma carta?"
   )   

   totalUsuario = carta1Usuario.valor + carta2Usuario.valor + carta3Usuario.valor


} else {
   confirm = false
   console.log("O Jogo Acabou!")
}