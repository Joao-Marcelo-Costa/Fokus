const html = document.querySelector("html")
const btFoco = document.querySelector(".app__card-button--foco")
const btDescansoCurto = document.querySelector(".app__card-button--curto")
const btDescansoLongo = document.querySelector(".app__card-button--longo")
const banner = document.querySelector(".app__image")

btFoco.addEventListener('click', () =>{
    html.setAttribute("data-contexto","foco" )
    banner.setAttribute("src","/imagens/foco.png")
})

btDescansoCurto.addEventListener('click', ()=>{
    html.setAttribute("data-contexto", "descanso-curto")
    banner.setAttribute("src", "/imagens/descanso-curto.png")
})

btDescansoLongo.addEventListener("click",()=>{
    html.setAttribute("data-contexto", "descanso-longo")
    banner.setAttribute("src","/imagens/descanso-longo.png")

})
