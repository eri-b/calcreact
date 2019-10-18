import React from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate.js'
import '../css/app.css'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      total: null,
      next: null,
      operation: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName){
      const data = calculate(this.state, buttonName)
      this.setState(data)
  }

  render(){

    return (
      <div id="calc">
        <Display result={this.state.total}/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    )
  }
}
