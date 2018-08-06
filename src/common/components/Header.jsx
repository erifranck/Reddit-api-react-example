import React from 'react'
import PropTypes from 'prop-types'

export const Header = (props) => (
  <div className={props.className}>
    <div className='header-title'>
      <h3>
        Reddit Example
      </h3>
    </div>
    <nav>
      <ul>
        <li>Home</li>
        <li>Categories</li>
      </ul>
    </nav>
  </div>
)

Header.propTypes = {
  className: PropTypes.string
}
