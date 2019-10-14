import React from 'react'
import Button from './Button'

export default class ButtonPanel extends React.Component {
  render() {
    const buttons = {
      group1: ['AC', '+/-', '%','%'],
      group2: ['7','8','9','X'],
      group3: ['4','5','6','-'],
      group4: ['1','2','3','+'],
      group5: ['0','.','=']
    }
    return (
    <div>
      <div className="group">
        {buttons.group1.map((x) => <Button name={x} />)}
      </div>
      <div className="group">
        {buttons.group2.map((x) => <Button name={x} />)}
      </div>
      <div className="group">
        {buttons.group3.map((x) => <Button name={x} />)}
      </div>
      <div className="group">
        {buttons.group4.map((x) => <Button name={x} />)}
      </div>
      <div className="group">
        {buttons.group5.map((x) => <Button name={x} />)}
      </div>

    </div>
    )
  }
}
