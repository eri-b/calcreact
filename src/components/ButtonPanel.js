import React from 'react'
import Button from './Button'
import '../css/buttonpanel.css'

export default class ButtonPanel extends React.Component {


  render() {
    const buttons = {
      group1: ['AC', '+/-', '%','/'],
      group2: ['7','8','9','X'],
      group3: ['4','5','6','-'],
      group4: ['1','2','3','+'],
      group5: ['0','.','=']
    }
    const gray = "#ccc"

    const buttonGroup1 = buttons.group1.map((x, i) => {
      const last = i === 3 ? true : false
      return (
        <Button
          key={x}
          name={x}
          color={!last && gray}
          clickHandler={ this.props.clickHandler }
          />
        )
    })

    const buttonGroup2 = buttons.group2.map((x, i) => {
      const last = i === 3 ? true : false
      return (
        <Button
          key={x}
          name={x}
          color={!last && gray}
          clickHandler={ this.props.clickHandler }
          />
        )
    })

    const buttonGroup3 = buttons.group3.map((x, i) => {
      const last = i === 3 ? true : false
      return (
        <Button
          key={x}
          name={x}
          color={!last && gray}
          clickHandler={ this.props.clickHandler }
          />
        )
    })

    const buttonGroup4 = buttons.group4.map((x, i) => {
      const last = i === 3 ? true : false
      return (
        <Button
          key={x}
          name={x}
          color={!last && gray}
          clickHandler={ this.props.clickHandler }
          />
        )
    })

    const buttonGroup5 = buttons.group5.map((x, i) => {
      const last = i === 2 ? true : false
      const first = i === 0 ? true : false
      return (
        <Button
          key={x}
          name={x}
          color={!last && gray}
          wide={first && true}
          clickHandler={ this.props.clickHandler }
          />
        )
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
