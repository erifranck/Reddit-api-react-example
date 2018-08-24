import React from 'react'
import PropTypes from 'prop-types'

export const Box = (props) => (
  <div className={props.className}>
    <div className='votes-container'>
      <span className='arrow-up' />
      <p className='votes'>
        {props.votes}
      </p>
      <span className='arrow-down' />
    </div>
    <div className='image-container'>
      {
        props.withBgImage ?
          <a href={props.url} className='bg-render' /> :
          <a href={props.url}>
            <img src={props.image} alt='' />
          </a>
      }
    </div>
    <div className='content'>
      <h5>
        <a href={props.url}>
          {props.title}
        </a>
      </h5>
      <p>
        <a href={props.url}>
          {props.description}
        </a>
      </p>
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
  votes: PropTypes.number,
  withBgImage: PropTypes.bool
}
