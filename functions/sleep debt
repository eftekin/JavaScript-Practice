function getSleepHours(day) {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 6;
      break;
    case "wednesday":
      return 7;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 7;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 9;
      break;
  }
}

function getActualSleepHours() {
  const sumOfSleep =
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  return sumOfSleep;
}

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("user got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("user got more sleep than needed.");
  } else {
    console.log("user should get some rest.");
  }
}

calculateSleepDebt();
