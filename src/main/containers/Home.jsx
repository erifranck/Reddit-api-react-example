import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'common/styles'
import Background from 'main/images/bg.png'

export const Home = (props) => (
  <div className={props.className}>
    <div>
      <img src={Background} alt='' />
    </div>
    <Button label='Login In' />
  </div>
)

Home.propTypes = {
  className: PropTypes.string
}
