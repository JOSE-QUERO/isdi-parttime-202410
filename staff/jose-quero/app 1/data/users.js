//users

var users = []

users.push({
    id: uuid(),     //Genera un ID único para el usuario usando la función uuid()
    name: 'quero',
    email: 'jose@quero.com',
    username: 'querito',
    password: '123123'
})

users.push({
    id: uuid(),
    name: 'sora',
    email: 'keyblade@light.com',
    username: 'Chosen One',
    password: 713
})


localStorage.users = JSON.stringify(users)      // Almacena el array de usuarios en localStorage como una cadena de texto de JSON