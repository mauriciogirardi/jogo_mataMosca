var height = 0
var width = 0
var vidas = 1
var tempo = 15

function ajustaTamanhoPalcoJogo(){
    height = window.innerHeight
    width = window.innerWidth
    console.log(width,height)
}

ajustaTamanhoPalcoJogo()

//adicionando tempo no jogo
document.getElementById('cronometro').innerHTML = tempo
var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
},1000)


var criaMosca = setInterval(function(){

    //remover mosquito anterior (caso exista)
    if(document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        //manipulando as vidas 
        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "image/coracao_vazio.png"
            vidas++
        }
    }
   

    //adicionado a mosca no palco 
    var positionX = Math.floor(Math.random() * width) - 90
    var positionY = Math.floor(Math.random() * height) - 90
    
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY
    console.log(positionX,positionY)
    
    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'image/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosca'

    //removendo o elemento ao clicar
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
    
}, 2000)

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosca__1'
        case 1:
            return 'mosca__2'
        case 2:
            return 'mosca__3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'lado__a'
        case 1:
            return 'lado__b'
    }   
}
