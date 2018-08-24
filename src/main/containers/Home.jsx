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
        <Header title={this.state.reddit} />
        <div style={{marginTop: '20px'}}>
          <Grid fluid>
            <Row>
              <Col md={10} sm={8}>
                <div style={{marginBottom: '30px'}}>
                  {
                    this.props.subreddits.slice(0, 2).map(({data}, index) => (
                      <Box
                        key={index}
                        author={data.author}
                        url={data.url}
                        title={data.title}
                        votes={data.ups}
                        image='//a.thumbs.redditmedia.com/dYcU_yJojWtlHVUaRsYQdC3bY7wTQ4pnvcxsRZtedP4.png'
                      />
                    ))
                  }
                </div>
                <div>
                  {
                    this.props.subreddits.slice(2).map(({data}, index) => (
                      <Box
                        key={index}
                        author={data.author}
                        url={data.url}
                        title={data.title}
                        votes={data.ups}
                        image={data.thumbnail}
                      />
                    ))
                  }
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  className: PropTypes.string,
  getSubreddit: PropTypes.func,
  subreddits: PropTypes.array
}
