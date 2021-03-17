function obterEstatisticas(numeros : any) {

    const numerosOrdenados = numeros.sort(
        (a: any, b: any ) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
