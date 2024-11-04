var root = document.body.querySelector('#root')

var container = document.createElement('div')

root.appendChild(trump)
//DESCARGAR IMÁGENES DE TRUMP Y AÑADIR CARACTERÍSTICAS
var trumpImage = document.createElement('img')
trumpImage.src =
    trumpImage.style.width =
    trump.appendChild(trumpImage)

var trumpKissImage = document.createElement



var trumpCoords = {
    x = 0
    y = 0
}
trump.style.left = trumpCoords.x + 'px'
trump.style.top = trumpCoords.y + 'px'

var STEP = 10

document.addEventListener('keydown', function (event) {
    if (event.key === 'k') {
        trump.removeChild(trumpImage)
        trump.appendChild(trumpKissImage)
    } else if (event.key === 'n') {
        trump.removeChild(trumpKissImage)
        trump.appendChild(trumpImage)
    } else if (event.key === 'ArrowUp') {
        trumpCoords.y -= STEP

        trump.style.top = trumpCoords.y + 'px'
    }

})