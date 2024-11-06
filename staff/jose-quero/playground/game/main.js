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
mrpotatoImage.style.zIndex = 0

mrpotato.appendChild(mrpotatoImage)

var mrpotatoNose = document.createElement('img')
mrpotatoNose.src = 'images/nariz-mrpotato.png'
mrpotatoNose.style.width = '50px'
mrpotatoNose.style.position = 'absolute'
mrpotato.appendChild(mrpotatoNose)

var mrpotatoHat = document.createElement('img')
mrpotatoHat.src = 'images/sombrero-mrpotato.png'
mrpotatoHat.style.width = '100px'
mrpotatoHat.style.position = 'absolute'
mrpotatoHat.style.zIndex = 50
mrpotato.appendChild(mrpotatoHat)

mrpotatoHatCoords = {
    x: 110,
    y: 125
}

mrpotatoNoseCoords = {
    x: 20,
    y: 150
}

mrpotatoHat.style.left = mrpotatoHatCoords.x + 'px'
mrpotatoHat.style.top = mrpotatoHatCoords.y + 'px'
mrpotatoNose.style.left = mrpotatoNoseCoords.x + 'px'
mrpotatoNose.style.top = mrpotatoNoseCoords.y + 'px'


var STEP = 8

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        mrpotatoHatCoords.y -= STEP
    } else if (event.key === 'ArrowDown') {
        mrpotatoHatCoords.y += STEP
    } else if (event.key === 'ArrowLeft') {
        mrpotatoHatCoords.x -= STEP
    } else if (event.key === 'ArrowRight') {
        mrpotatoHatCoords.x += STEP
    }

    else if (event.key === 'w') {
        mrpotatoNoseCoords.y -= STEP
    } else if (event.key === 's') {
        mrpotatoNoseCoords.y += STEP
    } else if (event.key === 'a') {
        mrpotatoNoseCoords.x -= STEP
    } else if (event.key === 'd') {
        mrpotatoNoseCoords.x += STEP
    }


    mrpotatoHat.style.left = mrpotatoHatCoords.x + 'px'
    mrpotatoHat.style.top = mrpotatoHatCoords.y + 'px'

    mrpotatoNose.style.left = mrpotatoNoseCoords.x + 'px'
    mrpotatoNose.style.top = mrpotatoNoseCoords.y + 'px'


})


/*var root = document.body.querySelector('#root');

var mrpotato = document.createElement('div');
mrpotato.style.width = '200px';
mrpotato.style.height = '200px';
mrpotato.style.backgroundColor = 'brown';
root.appendChild(mrpotato);

var mrpotatoImage = document.createElement('img');
mrpotatoImage.src = 'images/mrpotato.png';
mrpotatoImage.style.width = '200px';
mrpotatoImage.style.position = 'absolute';
mrpotatoImage.style.zIndex = 0;

mrpotato.appendChild(mrpotatoImage);

var mrpotatoNose = document.createElement('img');
mrpotatoNose.src = 'images/nariz-mrpotato.png';
mrpotatoNose.style.width = '50px';
mrpotatoNose.style.position = 'absolute';
mrpotato.appendChild(mrpotatoNose);

var mrpotatoHat = document.createElement('img');
mrpotatoHat.src = 'images/sombrero-mrpotato.png';
mrpotatoHat.style.width = '100px';
mrpotatoHat.style.position = 'absolute';  // Cambié esto a 'absolute' para un control total
mrpotatoHat.style.zIndex = 50;
mrpotato.appendChild(mrpotatoHat);

var mrpotatoHatCoords = {
    x: 110,
    y: 125
};

var mrpotatoNoseCoords = {
    x: 20,
    y: 150
};

mrpotatoHat.style.left = mrpotatoHatCoords.x + 'px';
mrpotatoHat.style.top = mrpotatoHatCoords.y + 'px';
mrpotatoNose.style.left = mrpotatoNoseCoords.x + 'px';
mrpotatoNose.style.top = mrpotatoNoseCoords.y + 'px';

var STEP = 8;

document.addEventListener('keydown', function (event) {
    // Movimiento del sombrero con las teclas de dirección
    if (event.key === 'ArrowUp') {
        mrpotatoHatCoords.y -= STEP;
    } else if (event.key === 'ArrowDown') {
        mrpotatoHatCoords.y += STEP;
    } else if (event.key === 'ArrowLeft') {
        mrpotatoHatCoords.x -= STEP;
    } else if (event.key === 'ArrowRight') {
        mrpotatoHatCoords.x += STEP;
    }

    // Movimiento de la nariz con las teclas 'w', 'a', 's', 'd'
    else if (event.key === 'w') {
        mrpotatoNoseCoords.y -= STEP;
    } else if (event.key === 's') {
        mrpotatoNoseCoords.y += STEP;
    } else if (event.key === 'a') {
        mrpotatoNoseCoords.x -= STEP;
    } else if (event.key === 'd') {
        mrpotatoNoseCoords.x += STEP;
    }

    // Actualización de las posiciones de los elementos después de cualquier movimiento
    mrpotatoHat.style.left = mrpotatoHatCoords.x + 'px';
    mrpotatoHat.style.top = mrpotatoHatCoords.y + 'px';

    mrpotatoNose.style.left = mrpotatoNoseCoords.x + 'px';
    mrpotatoNose.style.top = mrpotatoNoseCoords.y + 'px';
});









/*mrpotatoNoseCoords = {
    x: 20,
    y: 150
}

mrpotatoNose.style.left = mrpotatoNoseCoords.x + 'px'
mrpotatoNose.style.top = mrpotatoNoseCoords.y + 'px'

var STEP = 10

document.addEventListener('keydown', function (event) {
    if (event.key === 'W') {
        mrpotatoNoseCoords.y -= STEP
    } else if (event.key === 'S') {
        mrpotatoNoseCoords.y += STEP
    } else if (event.key === 'A') {
        mrpotatoNoseCoords.x -= STEP
    } else if (event.key === 'D') {
        mrpotatoNoseCoords.x += STEP

        mrpotatoHat.style.left = mrpotatoNoseCoords.x + 'px'
        mrpotatoHat.style.right = mrpotatoNoseCoords.x + 'px'
        mrpotatoHat.style.up = mrpotatoNoseCoords.x + 'px'
        mrpotatoHat.style.down = mrpotatoNoseCoords.x + 'px'
    }
})



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