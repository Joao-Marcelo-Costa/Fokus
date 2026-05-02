const html = document.querySelector("html")
const btFoco = document.querySelector(".app__card-button--foco")
const btDescansoCurto = document.querySelector(".app__card-button--curto")
const btDescansoLongo = document.querySelector(".app__card-button--longo")
const banner = document.querySelector(".app__image")
const tituloH1 = document.querySelector(".app__title")
const botoes = document.querySelectorAll(".app__card-button")
const musicaCheckobox = document.querySelector(".toggle-checkbox")
const musica = new Audio("sons/luna-rise-part-one.mp3")
musica.loop = true
const btComecar = document.querySelector('#start-pause')

let tempoDecorridoEmSegundo = 5
let intervaloId = null

function alterarContexto(contexto) {
    botoes.forEach((contexto)=>{
        contexto.classList.remove("active")
    })
    html.setAttribute("data-contexto",contexto)//muda a cor de fundo
    banner.setAttribute("src", `/imagens/${contexto}.png`)//muda a imagem
    switch(contexto){//muda o texto
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

musicaCheckobox.addEventListener("change", ()=>{
    if( musica.paused){
        musica.play()
    }else{
        musica.pause()}

})
btFoco.addEventListener('click', () =>{
    alterarContexto("foco")
    btFoco.classList.add("active")
})

btDescansoCurto.addEventListener('click', ()=>{
    alterarContexto("descanso-curto")
    btDescansoCurto.classList.add("active")
})

btDescansoLongo.addEventListener("click",()=>{
    alterarContexto("descanso-longo")
    btDescansoLongo.classList.add("active")
})

const contagemRegresiva = () => {
    iniciar()
    console.log(`Tempo decorrido em segundos: ${tempoDecorridoEmSegundo}`)
    tempoDecorridoEmSegundo -=1
}

btComecar.addEventListener("click",()=>{
    contagemRegresiva()
})

function iniciar() {
    intervaloId = setInterval(contagemRegresiva, 1000)
}