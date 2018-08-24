import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'common/styles'
import cn from 'classnames'

export const NavBar = (props) => (
  <div className={props.className}>
    <nav>
      <img src="/reddit-logo-icon-13.png" alt="" />
      <ul>
        {
          props.links.map(( item, index ) => (
            <li key={index} className={cn({active: item.active})}>
              <a href={item.url}>
                <Button>
                  {item.label}
                </Button>
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  </div>
)

NavBar.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array
}
