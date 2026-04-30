const html = document.querySelector("html")
const btFoco = document.querySelector(".app__card-button--foco")
const btDescansoCurto = document.querySelector(".app__card-button--curto")
const btDescansoLongo = document.querySelector(".app__card-button--longo")
const banner = document.querySelector(".app__image")

function alterarContexto(contexto) {
    html.setAttribute("data-contexto",contexto)
    banner.setAttribute("src", `/imagens/${contexto}.png`)
}

btFoco.addEventListener('click', () =>{
    alterarContexto("foco")
})

btDescansoCurto.addEventListener('click', ()=>{
    alterarContexto("descanso-curto")
})

btDescansoLongo.addEventListener("click",()=>{
    alterarContexto("descanso-longo")
})
