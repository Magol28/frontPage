import React, { Component } from 'react';
class Photo extends Component {
  render() {
  return(  <div>
    <img src={this.props.name} class="img-fluid" alt="Responsive image"></img>
    </div>
  )}
}
export default Photo;