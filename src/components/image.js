import React, { Component } from 'react'

export default class image extends Component {
  render() {
    return (
      <div className='wrapperCard'>
      <img src={this.props.src}  />
      </div>
    )
  }
}
