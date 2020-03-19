import React, { Component } from 'react';
import Photo from './componets/image'
import Menu from './componets/menu';
import Item from './componets/list';
import './App.css';
const ip = 'localhost';

class App extends Component {
  constructor(){
    super();
    this.state={
      image:'',
      images:[],
      listImage:null
      
  }
  fetch('https://coronaback.herokuapp.com/images').then(response => response.json())
  .then(info=>{
    this.state.images= info;
    this.setState({image:'https://coronaback.herokuapp.com/'+info[0].location})
    const imagesList=  this.state.images.map((number) =>
    <Item  change={this.change.bind(this)} data={number}></Item>);
    this.setState({listImage:imagesList})
  })
  }
  change(image){
  this.setState({image})
  }
  render() {
  return(
    <div  class="container-fluid">
    <Menu ></Menu>
      <div class="row">
        <section className="col-3">
        {this.state.listImage}
        </section>
        <section   className="col-9">
        <Photo name= {this.state.image}></Photo>
        </section>
      </div> 
    </div>
  )}
}
export default App;
