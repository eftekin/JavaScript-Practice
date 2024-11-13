const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
    return animal === "elephant"
})
console.log(foundAnimal)
console.log(animals[7])

const startsWithS = animals.findIndex(stwS => {
    return stwS[0] === "s"
})

console.log(startsWithS) // prints 3 because the .findIndex() method gets the first element in the array. 
console.log(animals[3])