import operate from './operate.js'

const calculate = (data, button) => {
  console.log(data)
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
      // data.total = operate(data.next, data.total, button)
      data.operation = button
    break
    default:
      data.next = button
  }

  return data
}

export default calculate
