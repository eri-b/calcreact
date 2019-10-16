import operate from './operate.js'

const calculate = (data, button) => {

  switch(button){
    case "+/-":
      data.total = data.total * -1
      data.next = data.next * -1
    break
    case "%":
      data.next = data.next / 100
    break
    case "AC":
      data.total = 0
    break
    case "X":
    case "/":
    case "+":
    case "-":
      data.total = operate(data.total, data.next, button)
    break
    default:
      console.log('something has gone wrong')
  }

  return data
}

export default calculate
