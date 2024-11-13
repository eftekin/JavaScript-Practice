const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const bigNumbers = randomNumbers.filter(number => {
    return number > 100
})

console.log(bigNumbers)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7
})

console.log(longFavoriteWords)