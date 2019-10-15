import React from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate.js'
import './app.css'

export default class App extends React.Component {
  render(){
    return (
      <div id="calc">
        <Display/>
        <ButtonPanel />
      </div>
    )
  }
}
