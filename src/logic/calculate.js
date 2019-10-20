import operate from './operate.js'

const calculate = (data, button) => {

  switch(button){
    case "+/-":
      if (!data.operation) {data.total = operate(data.total, -1, "X")}
      else {data.next = operate(data.next, -1, "X")}
    break
    case "%":
      if (!data.operation) {data.total = operate(data.total, 100, "/")}
      else {data.next = operate(data.next, 100, "/")}

    break
    case "AC":
      data.next = null
      data.total = null
      data.operation = null
      data.last = "reset"
    break
    case "=":
      data.total = operate(data.total, data.next, data.operation)
      data.last = "operation"
      data.next = null
      data.operation = null
    break
    case "X":
    case "/":
    case "+":
    case "-":
      if (data.next) {
        data.total = operate(data.total, data.next, data.operation)
        data.next = null
      }
      data.last = "operation"
      data.operation = button //update for the next operation
    break
    default: //number buttons
      const concat = data.last === "number"
      if (!data.operation) { data.total = concat ? data.total + button : button }
      else { data.next = concat ? data.next + button : button }
      data.last = "number"
  }

  return data
}

export default calculate
