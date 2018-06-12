import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => (
  <button className={props.className} handleClick={props.handleClick} styles={props.styles}>
    {props.label}
  </button>
)

Button.propTypes = {
  handleClick: PropTypes.func,
  styles: PropTypes.object,
  label: PropTypes.string,
  className: PropTypes.string
}
