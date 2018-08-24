import React from 'react'
import PropTypes from 'prop-types'

export const Box = (props) => (
  <div className={props.className}>
    <div className='votes-container'>
      <span className='up-arrow' />
      <p className='votes'>
        {props.votes}
      </p>
      <span className='down-arrow' />
    </div>
    <div className='image-container'>
      <img src={props.image} alt='' />
    </div>
    <div className='content'>
      <h5> {props.title}</h5>
      <p>{props.description}</p>
      <span>Publicado por { props.author }</span>
    </div>
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
  votes: PropTypes.number
}
