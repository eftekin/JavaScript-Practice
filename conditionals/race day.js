let raceNumber = Math.floor(Math.random() * 1000);
const isEarly = false
let runnerAge = 15

if (runnerAge >= 18){
  raceNumber += 1000
}

if (runnerAge > 18 && isEarly === true){
  console.log(`Your race number is ${raceNumber}. The race will start at 9:30 am.`)
} else if (runnerAge > 18 && isEarly === false){
  console.log(`Your race number is ${raceNumber}. The race will start at 11:00 am.`)
} else {
  console.log(`Your race number is ${raceNumber}. The race will start at 12:30 pm.`)
}