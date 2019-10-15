import React from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
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
