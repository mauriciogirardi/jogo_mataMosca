var height = 0
var width = 0

function ajustaTamanhoPalcoJogo(){
    height = window.innerHeight
    width = window.innerWidth
    console.log(width,height)
}

ajustaTamanhoPalcoJogo()

var positionX = Math.floor(Math.random() * width) - 90
var positionY = Math.floor(Math.random() * height) - 90

positionX = positionX < 0 ? 0 : positionX
positionY = positionY < 0 ? 0 : positionY
console.log(positionX,positionY)

//criar o elemento html
var mosquito = document.createElement('img')
mosquito.src = 'image/mosca.png'
mosquito.className = 'mosca__1'
mosquito.style.left = positionX + 'px'
mosquito.style.top = positionY + 'px'
mosquito.style.position = 'absolute'
document.body.appendChild(mosquito)
