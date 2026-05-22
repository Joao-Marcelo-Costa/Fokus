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
const playAudio = new Audio("sons/play.wav")
const pauseAudio = new Audio("sons/pause.mp3")
const beepAudio = new Audio("sons/beep.mp3")
const imagemDoTimer = document.querySelector(".app__card-primary-butto-icon")
const btTimer = document.querySelector("#start-pause span")
const tempoNaTela = document.querySelector("#timer")

let tempoDecorridoEmSegundo = 15
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
    tempoDecorridoEmSegundo = 1500
    mostrarTempo()
})

btDescansoCurto.addEventListener('click', ()=>{
    alterarContexto("descanso-curto")
    btDescansoCurto.classList.add("active")
    tempoDecorridoEmSegundo = 300
    mostrarTempo()

})

btDescansoLongo.addEventListener("click",()=>{
    alterarContexto("descanso-longo")
    btDescansoLongo.classList.add("active")
    tempoDecorridoEmSegundo = 900
    mostrarTempo()

})

const contagemRegresiva = () => {
    if (tempoDecorridoEmSegundo <= 0){
        zerar()
        const focoAtivo = html.getAttribute("data-contexto") == "foco"
        if (focoAtivo) {
            const evento = new CustomEvent("FocoFinalizado")
            document.dispatchEvent(evento)
        }
        beepAudio.play()
        alert("tempo acabou")
        return
    }

    tempoDecorridoEmSegundo -=1
    mostrarTempo()
}

btComecar.addEventListener("click",()=>{
    iniciarOuPausar()
})

function iniciarOuPausar() {
    if (intervaloId){
        imagemDoTimer.setAttribute("src", "/imagens/play_arrow.png")
        btTimer.innerHTML = "Começar"
        zerar()
        pauseAudio.play()
        return
    }
    btTimer.innerHTML = "Pausar"
    imagemDoTimer.setAttribute("src", "/imagens/pause.png")
    playAudio.play()
    intervaloId = setInterval(contagemRegresiva, 1000)
}

function zerar(){
    clearInterval(intervaloId)
    intervaloId = null
}

function mostrarTempo(){
    const tempo = new Date(tempoDecorridoEmSegundo * 1000)
    const tempoFormatado = tempo.toLocaleString("pt-Br", {minute: "2-digit", second: "2-digit"})
    tempoNaTela.innerHTML = `${tempoFormatado}`

}

mostrarTempo()