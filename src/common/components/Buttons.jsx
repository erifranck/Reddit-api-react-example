import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => (
  <button className={props.className} onClick={props.handleClick} styles={props.styles}>
    {props.children}
  </button>
)

Button.propTypes = {
  handleClick: PropTypes.func,
  styles: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
}
