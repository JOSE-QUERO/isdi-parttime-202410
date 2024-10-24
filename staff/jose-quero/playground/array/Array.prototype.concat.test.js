console.log('TEST Array.prototype.push') // UNIR DOS ARRAYS EN UNO NUEVO

console.log('CASE merge fruits and veggies')

var fruits = ['apple', 'orange', 'lemon', 'banana', 'cherry']
var vegetables = ['lettuce', 'onion', 'garlic', 'carrot', 'lentice']
var food = fruits.concat(veggies)

console.log(food)
// ['apple', 'orange', 'lemon', 'banana', 'cherry', 'lettuce', 'onion', 'garlic', 'carrot', 'lentice']

console.log('CASE merge fruits and veggies and meats')

var fruits = ['apple', 'orange', 'lemon', 'banana', 'cherry']
var vegetables = ['lettuce', 'onion', 'garlic', 'carrot', 'lentice']
var meats = ['cow', 'salmon', 'pig']
var food = fruits.concat(veggies, meats)

console.log(food)
console.log(food)
// ['apple', 'orange', 'lemon', 'banana', 'cherry', 'lettuce', 'onion', 'garlic', 'carrot', 'lentice', 'cow', 'salmon', 'pig']

