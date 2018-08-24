import React from 'react'
import PropTypes from 'prop-types'
import {NavBar} from 'common/styles'

export const Header = (props) => (
  <div className={props.className}>
    <div className='header-title'>
      <h1 className='title'>
        {props.title}
      </h1>
    </div>
    <div className="nav-bar">
      <NavBar links={[
        {label: 'Archivo', href: '#', active: true},
        {label: 'Nuevo', href: '#'},
        {label: 'Subiendo', href: '#'},
        {label: 'Polemico', href: '#'},
        {label: 'Popular', href: '#'},
        {label: 'Con Gold', href: '#'},
        {label: 'Wiki', href: '#'}
      ]} />
    </div>
  </div>
)

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}
