import operate from './operate.js'

const calculate = (data, button) => {
  if ( button === "+/-" ){
    data.total = data.total * -1
    data.next = data.next * -1
  } else if( button === "%" ) {
    data.next = data.next / 100
  } else if( button === "AC"){
    data.total = 0
  } else if ( button === "X" || button === "/" || button === "+" || button === "-") {
    data.total = operate(data.total, data.next, button)
  }


  return data
}

export default calculate
