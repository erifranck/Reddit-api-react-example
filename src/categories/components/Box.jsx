import React from 'react'
import PropTypes from 'prop-types'

export const Box = (props) => (
  <div className={props.className}>
    <div>
      {props.votes}
    </div>
    <div>
      <img src={props.image} alt='' />
    </div>
    <h3> {props.title}</h3>
    <p>{props.description}</p>
    <span>{ props.author }</span>
  </div>
)

Box.propTypes = {
  author: PropTypes.string,
  comments: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  votes: PropTypes.string
}
