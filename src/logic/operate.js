//var Big = require('big.js')
import Big from 'big.js'

const operate = (numberOne, numberTwo, operation) => {
  if (operation === "-") {
    return (Big(numberTwo) - Big(numberOne))
  } else if (operation === "X"){
    return (Big(numberTwo) * Big(numberOne))
  } else if (operation === "/"){
    return (Big(numberTwo) / Big(numberOne))
  } else if (operation === "+"){
    return (Big(numberTwo) + Big(numberOne))
  }
}

export default operate
