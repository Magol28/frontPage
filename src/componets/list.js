import React, { Component } from 'react';
class Item extends Component {
    changeImage(){
        this.props.change('http://localhost:3000'+this.props.data.location)
    }
  render() {
  return( 
      
    <div onClick={this.changeImage.bind(this)}
    class="card text-white bg-secondary mb-3 ml-3" >
    <div class="card-header" >{this.props.data.date}
    </div>
  
    </div>
  )}
}
export default Item;