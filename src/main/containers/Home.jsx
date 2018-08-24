import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Header} from 'common/styles'
import {
  Grid,
  Row,
  Col
} from 'react-flexbox-grid'
import {Box} from 'categories/styles'

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
    console.log(this.props.subreddits)
    return (
      <React.Fragment>
        <Header title={this.state.reddit}/>
        <Grid>
        <Row>
          <Col md={10} sm={8}>
            {
              this.props.subreddits.map(({data}, index) => (
                <Box
                  key={index}
                  author={data.author}
                  url={data.url}
                  title={data.title}
                  image={data.thumbnail}
                />
              ))
            }
          </Col>
        </Row>
        </Grid>
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  className: PropTypes.string,
  getSubreddit: PropTypes.func,
  subreddits: PropTypes.array
}
