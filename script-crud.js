const btAdicionarTarefa = document.querySelector(".app__button--add-task")
const formAdicionarTarefa = document.querySelector(".app__form-add-task")
const textArea = document.querySelector(".app__form-textarea")
const ulTarefas = document.querySelector(".app__section-task-list")
const btCancelarAdicaoDeTarefa = document.querySelector(".app__form-footer__button--cancel")
const btDeletarTarefaNoFormulario = document.querySelector(".app__form-footer__button--delete")
const paragrafoDescricaoTarefa = document.querySelector(".app__section-active-task-description")

const listaDeTarefas = JSON.parse(localStorage.getItem("Tarefas")) || []
let tarefaSelecionada = null
let LiTarefaSelecionada = null

function atualizarTarefas (){
    localStorage.setItem(`Tarefas`,JSON.stringify(listaDeTarefas))//adiciona adiciona a lista de tarefas à memoria
}

function criarElementoTarefa (tarefa){ //função que transforma uma tarefa object em um HTML dessa tarefa
    const li = document.createElement("li")
    li.classList.add("app__section-task-list-item")

    const svg = document.createElement("svg")
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `
    const paragrafo = document.createElement("p")
    paragrafo.classList.add("app__section-task-list-item-description")
    paragrafo.textContent = tarefa.descricao

    const botaoEditar = document.createElement('button')
    botaoEditar.classList.add("app_button-edit")

    const imagemBotaoEditar = document.createElement("img")
    imagemBotaoEditar.setAttribute("src", "/imagens/edit.png" )
    botaoEditar.append(imagemBotaoEditar)

    botaoEditar.onclick = ()=>{
        const novaDescricao = prompt("qual é o novo nome da tarefa ?")
        if (novaDescricao){//verifica se ha algum valor em nova descrição
            paragrafo.textContent = novaDescricao
            tarefa.descricao = novaDescricao
            atualizarTarefas ()
        } 
    }
    
    const botaoDeletar =document.createElement("button")
    botaoDeletar.classList.add("app__button-delete")
    
    const imagemBotaoDeletar = document.createElement("img")
    imagemBotaoDeletar.setAttribute("src","/imagens/delete.png")
    botaoDeletar.append(imagemBotaoDeletar)

    botaoDeletar.onclick = ()=>{
        li.classList.add("hidden")
        listaDeTarefas.pop()
        tarefa.descricao = null
        atualizarTarefas ()
    }
    
    li.append(svg)
    li.append(paragrafo)
    li.append(botaoEditar)
    li.append(botaoDeletar)

    li.onclick = ()=>{
        document.querySelectorAll('.app__section-task-list-item-active')
        .forEach(elemento => {//para cada tarefa
            elemento.classList.remove("app__section-task-list-item-active")});//remove a classe ativa de todas

            if (tarefaSelecionada == tarefa){
                tarefaSelecionada = null
                LiTarefaSelecionada = null

                return
            }
            tarefaSelecionada = tarefa
            LiTarefaSelecionada = li
            paragrafoDescricaoTarefa.textContent = tarefa.descricao 

            
            li.classList.add('app__section-task-list-item-active')
    }

    return li
}

let contagemDeTarefas = 0
btAdicionarTarefa.addEventListener("click", () =>{
    formAdicionarTarefa.classList.toggle("hidden")
})

btCancelarAdicaoDeTarefa.addEventListener("click", ()=>{
    formAdicionarTarefa.classList.add("hidden")
    textArea.value = ""
})

btDeletarTarefaNoFormulario.addEventListener("click", ()=>{
    textArea.value = ""
})

formAdicionarTarefa.addEventListener("submit", (evento)=>{ //evento ao clicar em salvar tarefa
    evento.preventDefault()
    const tarefa = { 
    descricao: textArea.value //cria um objeto chamado tarefa com um índice descrição
    }
    const elementoTarefa = criarElementoTarefa(tarefa) //recebe o objeto tarefa que acabou de ser criado
    ulTarefas.append(elementoTarefa)//adiciona a tarefa que acabou de ser criada à tela
    listaDeTarefas.push(tarefa) //coloca o objeto chamado tarefa na lista de tarefas
    atualizarTarefas ()//adiciona adiciona a lista de tarefas à memoria
    textArea.value=""//limpa o escrito do usuário do text area
    formAdicionarTarefa.classList.add("hidden")//esconde o formulário de adicionar tarefas depois que a tarefa é adicionada
})

listaDeTarefas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
});

document.addEventListener("FocoFinalizado", ()=>{
    if (LiTarefaSelecionada && tarefaSelecionada){
        LiTarefaSelecionada.classList.remove("app__section-task-list-item-active")
        LiTarefaSelecionada.classList.add("app__section-task-list-item-complete")
        //LiTarefaSelecionada.querySelector("button").setAttribute("disabled", "True")
    }
})