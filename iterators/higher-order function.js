function multipleWithThree(num){
    return num * 3
}
const mult3 = multipleWithThree

function isTheFunctionConsistent(func, value){
    let firstCheck = value*3
    let secondCheck = func(value)

    if (firstCheck === secondCheck){
        return func(value)
    }else{
        return "this function is not consistent."
    }
}

console.log(isTheFunctionConsistent(mult3, 3))