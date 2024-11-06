var root = document.body.querySelector('#root')

var mrpotato = document.createElement('div')
mrpotato.style.width = '200px'
mrpotato.style.height = '200px'
mrpotato.style.backgroundColor = 'brown'
root.appendChild(mrpotato)


var mrpotatoImage = document.createElement('img')
mrpotatoImage.src = 'images/mrpotato.png'
mrpotatoImage.style.width = '200px'
mrpotatoImage.style.position = 'absolute'

mrpotato.appendChild(mrpotatoImage)

var mrpotatoNose = document.createElement('img')
mrpotatoNose.src = 'images/nariz-mrpotato.png'
mrpotatoNose.style.width = '65px'
mrpotato.appendChild(mrpotatoNose)

var mrpotatoHat = document.createElement('img')
mrpotatoHat.src = 'images/sombrero-mrpotato.png'
mrpotatoHat.style.width = '50px'
mrpotatoHat.style.zIndex = 3
mrpotato.appendChild(mrpotatoHat)

/*mrpotatoHatCoords = {
    x = 0
    y = 0
}

mrpotatoHat.style.left = mrpotatoHatCoords.x + 'px'
mrpotatoHat.style.top = mrpotatoHatCoords.y + 'px'

var STEP = 10

document.addEventListener()




/*var trumpCoords = {
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
*/

//TERMINAR EJEMPLOS DE MANU 04/11