import React from 'react'

export default class Display extends React.Component {
  render() {
    return (
        <div>Result: { this.props.result}</div>
    )
  }
}

Display.defaultProps = {result: "0"}
