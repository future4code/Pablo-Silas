let titulo = document.getElementById("titulo-post")
let autor = document.getElementById("autor-post")
let img = document.getElementById("img-post")
let conteudo = document.getElementById("conteudo-post")

const post = {
    titulo : `${titulo.value}`,
    autor :  `${autor.value}`,
    img : `${img.value}` ,
    conteudo : `${conteudo.value}` 
   }


const addPost = () => {
    const container  = document.getElementById("container-de-posts")
    container.innerHTML += `<h2>${titulo.value}</h2>`
    container.innerHTML += `<h4>${autor.value}</h4>`
    container.innerHTML += `<img src=${img.value}>`
    container.innerHTML += `<p>${conteudo.value}</p>`
    titulo.value = ""
    autor.value = ""
    img.value = ""
    conteudo.value = ""

}

