import React from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate.js'
import '../css/app.css'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      total: "0",
      next: "0",
      operation: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName){
      alert(buttonName)
      const data = calculate(this.state, buttonName)
      // console.log(data)
      this.setState(data)
  }

  render(){

    return (
      <div id="calc">
        <Display result={this.state.next}/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    )
  }
}
