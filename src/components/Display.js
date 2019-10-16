import React from 'react'
import PropTypes from 'prop-types'
import '../css/display.css'

export default class Display extends React.Component {
  render() {
    return (
        <div id="display">{ this.props.result}</div>
    )
  }
}

Display.defaultProps = {result: "0"}
Display.propTypes = { result: PropTypes.string }
