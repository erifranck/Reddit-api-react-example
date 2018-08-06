import React from 'react'
import PropTypes from 'prop-types'
import {Button, Header} from 'common/styles'
import Background from 'main/images/bg.png'

export const Home = (props) => (
  <React.Fragment>
    <Header />
    <div className={props.className}>
      <div>
        <img src={Background} alt='' />
      </div>
      <Button label='Login In' />
    </div>
  </React.Fragment>
)

Home.propTypes = {
  className: PropTypes.string
}
