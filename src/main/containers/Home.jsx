import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Header} from 'common/styles'
import Background from 'main/images/bg.png'

export class Home extends Component {
  constructor () {
    super()
    this.state = {
      reddit: 'overwatch'
    }
  }
  componentDidMount () {
    this.props.getSubreddit(this.state.reddit)
  }
  render () {
    return (
      <React.Fragment>
        <Header title={this.state.reddit}/>
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  className: PropTypes.string,
  getSubreddit: PropTypes.func
}
