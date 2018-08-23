import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Header} from 'common/styles'
import Background from 'main/images/bg.png'

export class Home extends Component {
  componentDidMount() {
    this.props.getSubreddit('overwatch')
  }
  render () {
    console.log(this.props.subreddits)
    return (
      <React.Fragment>
        <Header />
        <div className={this.props.className}>
          <div>
            <img src={Background} alt='' />
          </div>
          <Button label='Login In' />
        </div>
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  className: PropTypes.string
}
