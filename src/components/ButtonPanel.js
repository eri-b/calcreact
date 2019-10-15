import React from 'react'
import Button from './Button'

export default class ButtonPanel extends React.Component {
  render() {
    const buttons = {
      group1: ['AC', '+/-', '%','/'],
      group2: ['7','8','9','X'],
      group3: ['4','5','6','-'],
      group4: ['1','2','3','+'],
      group5: ['0','.','=']
    }

    const buttonGroup1 = buttons.group1.map((x) => {
      return <Button keys={x} name={x} />
    })

    const buttonGroup2 = buttons.group2.map((x) => {
      return <Button keys={x} name={x} />
    })

    const buttonGroup3 = buttons.group3.map((x) => {
      return <Button keys={x} name={x} />
    })

    const buttonGroup4 = buttons.group4.map((x) => {
      return <Button keys={x} name={x} />
    })

    const buttonGroup5 = buttons.group5.map((x) => {
      return <Button keys={x} name={x} />
    })

    return (
    <div>
      <div className="group">
        {buttonGroup1}
      </div>
      <div className="group">
        {buttonGroup2}
      </div>
      <div className="group">
        {buttonGroup3}
      </div>
      <div className="group">
        {buttonGroup4}
      </div>
      <div className="group">
        {buttonGroup5}
      </div>
    </div>
    )
  }
}
