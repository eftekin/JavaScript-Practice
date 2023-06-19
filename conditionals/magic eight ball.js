let userName = ""
const userQuestion = "will I be a successful programmer?"

userName ? console.log(`Hello, ${userName}!\n`): console.log("Hello!\n")
userName? console.log(`${userName}: ${userQuestion}`): console.log(`User: ${userQuestion} `)

let eightBall = ""
let randomNumber = Math.floor(Math.random() * 8);

switch (randomNumber){
  case 0:
  eightBall = "It is certain"
  break;
  case 1:
  eightBall = "It is decidedly so"
  break;
  case 2:
  eightBall = "Reply hazy try again"
  break;
  case 3:
  eightBall = "Cannot predict now"
  break;
  case 4:
  eightBall = "Do not count on it"
  break;
  case 5:
  eightBall = "My sources say no"
  break;
  case 6:
  eightBall = "Outlook not so good"
  break;
  case 7:
  eightBall = "Signs point to yes"
  break;
  default:
  console.log("Something went wrong.")
  break;
}

console.log(`Magic Eight Ball: ${eightBall}`)