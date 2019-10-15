import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

export default class Button extends React.Component {
  render() {
    const styles = {
      background: this.props.color,
      flex: this.props.wide === true ? "0 50%" : "1"
    }
    return <button style={styles}>{ this.props.name}</button>
  }
}

Button.propTypes = { name: PropTypes.string.isRequired }
