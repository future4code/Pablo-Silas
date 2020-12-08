function addTask(){
    const input = document.getElementById("tarefa")
    const inputValue = input.value
    console.log("Valor input", inputValue)

    const select = document.getElementById("dias-semana")
    const selectValue = select.value
    console.log("Valor select", selectValue)

    const div = document.getElementById(selectValue)
    div.innerHTML += `<p class="list-item">${inputValue}</p>`
}