const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => animal[0])
console.log(secretMessage.join(""))

////////////////////////////////////
const bigNumbers = [100, 200, 300, 400, 500]

const smallNumbers = bigNumbers.map(number =>{
    return number/100
})

console.log(smallNumbers)