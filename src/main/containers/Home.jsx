import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'common/styles'

export const Home = (props) => (
  <div className={props.className}>
    <Button label='Login In' />
  </div>
)

Home.propTypes = {
  className: PropTypes.string
}
