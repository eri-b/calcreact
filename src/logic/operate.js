//var Big = require('big.js')
import Big from 'big.js'

const operate = (numberOne, numberTwo, operation) => {

  switch(operation){
    case "-":
      return (Big(numberTwo) - Big(numberOne))
    case "X":
      return (Big(numberTwo) * Big(numberOne))
    case "/":
      if (Big(numberOne) !== 0) {
        return (Big(numberTwo) / Big(numberOne))
      }
    break
    case "+":
      return (Big(numberTwo) + Big(numberOne))
    default:
      console.log('something went wrong')
  }
}

export default operate
