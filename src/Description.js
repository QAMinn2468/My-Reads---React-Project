import React, { Component } from 'react'

class Description extends Component {
  render() {
    return(
      <div className="description">{this.props.book.description}</div>
    )
  }
}

export default Description
