const btAdicionarTarefa = document.querySelector(".app__button--add-task")
const formAdicionarTarefa = document.querySelector(".app__form-add-task")
const textArea = document.querySelector(".app__form-textarea")
const listaDeTarefas = []

let contagemDeTarefas = 0
btAdicionarTarefa.addEventListener("click", () =>{
    formAdicionarTarefa.classList.toggle("hidden")
})

formAdicionarTarefa.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    const tarefa = {
        descricao: textArea.value
    }
    listaDeTarefas.push(tarefa)
    localStorage.setItem(`Tarefa ${contagemDeTarefas}`,JSON.stringify(listaDeTarefas))
    contagemDeTarefas ++
})