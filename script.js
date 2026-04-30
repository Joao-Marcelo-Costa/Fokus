const html = document.querySelector("html")
const btFoco = document.querySelector(".app__card-button--foco")
const btDescansoCurto = document.querySelector(".app__card-button--curto")
const btDescansoLongo = document.querySelector(".app__card-button--longo")
const banner = document.querySelector(".app__image")
const tituloH1 = document.querySelector(".app__title")

function alterarContexto(contexto) {
    html.setAttribute("data-contexto",contexto)
    banner.setAttribute("src", `/imagens/${contexto}.png`)
    switch(contexto){
        case "foco":
            tituloH1.innerHTML = `Otimize sua produtividade,<br>
                    <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break

        case "descanso-curto":
            tituloH1.innerHTML = `Que tal dar uma respirada?<br>
                    <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break

        case "descanso-longo":
            tituloH1.innerHTML = `Hora de voltar à superfície<br>
                    <strong class="app__title-strong">Faça uma pausa longa</strong>`
            break

    }
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
