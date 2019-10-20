import React from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate.js'
import '../css/app.css'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      total: null,
      next: null,
      operation: null,
      last: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName){

      const data = calculate(this.state, buttonName)
      this.setState(data)
      console.log(this.state)
  }

  render(){

    return (
      <div id="calc">
        <Display
          result={ this.state.next? this.state.next : this.state.total }
          />
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    )
  }
}
