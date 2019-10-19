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
      data.next = null
      data.total = null
      data.operation = null
    break
    case "=":
      data.total = operate(data.total, data.next, data.operation)
      data.last = "operation"
    break
    case "X":
    case "/":
    case "+":
    case "-":
      
      if (data.total) {
        data.total = operate(data.total, data.next, data.operation)
      } else {
        data.total = data.next // copy first operand to total
      }
      data.last = "operation"
      data.next = null // empty next operand
      data.operation = button //update for the next operation
    break
    default: //number buttons
      if (data.last === "number"){ // concatenate
        data.next = data.next + button
      } else{
        data.next = button // preceding action was an operation
      }
      data.last = "number"
  }
  // console.log(data)
  return data
}

export default calculate
