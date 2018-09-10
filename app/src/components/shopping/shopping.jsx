import React, { Component } from 'react';
import './shopping.css'

export default class Shopping extends Component {

  render() {
    return (
      <section className="shopping-section">
      <div className="container">
      <div className="row">
        <div className="col s2 sidebar">
        <ul className="side-nav">
          <li><a href="#!">On Sales!</a></li>
          <li><a href="#!">New</a></li>
          <li><a href="#!">Shop by Store</a></li>
          <li><a href="#!">Fruits & Veg</a></li>
          <li><a href="#!">Meat & Seafood</a></li>
          <li><a href="#!">Dairy and chillied</a></li>
          <li><a href="#!">Bakery</a></li>
          <li><a href="#!">Beverages</a></li>
        </ul>
        </div>
        <div className="col s10 shopping-content">
        <div className="container shopping-container">
          <div className="row">
            <div className="col m4 s12">
              <a href=" "><img src={require('../../images/Screen 3/Untitled-1.png')} alt="Untitled1" className="shoppingimages hoverable" /></a>
              <div className="shoppingimages-title">Ripe Blue Grape</div>
              <div className="shoppingimages-subtitle">Packet</div>
            </div>
            <div className="col m4 s12">
              <a href=" "><img src={require('../../images/Screen 3/Untitled-5.png')} alt="Untitled6" className="shoppingimages hoverable" /></a>
              <div className="shoppingimages-title">Spinach</div>
              <div className="shoppingimages-subtitle">Packet</div>
            </div>
            <div className="col m4 s12">
              <a href=" "><img src={require('../../images/Screen 3/Untitled-7.png')} alt="Untitled7" className="shoppingimages hoverable" /></a> 
              <div className="shoppingimages-title">Salmon</div>
              <div className="shoppingimages-subtitle">Packet</div>          
            </div>
          </div>
          <div className="row">
            <div className="col m4 s12">
              <a href=" "><img src={require('../../images/Screen 3/Untitled-5.png')} alt="Untitled5" className="shoppingimages hoverable" /></a>
              <div className="shoppingimages-title">Capsicum</div>
              <div className="shoppingimages-subtitle">Packet</div>
            </div>
            <div className="col m4 s12">
              <a href=" "><img src={require('../../images/Screen 3/Untitled-2.png')} alt="Untitled2" className="shoppingimages hoverable" /></a>
              <div className="shoppingimages-title">Tomato</div>
              <div className="shoppingimages-subtitle">Packet</div>
            </div>
            <div className="col m4 s12">
              <a href=" "><img src={require('../../images/Screen 3/Untitled-5.png')} alt="Untitled4" className="shoppingimages hoverable" /></a>
              <div className="shoppingimages-title">Brocolli</div>
              <div className="shoppingimages-subtitle">Packet</div>            
            </div>
            </div>
          </div>
        </div>
      </div>
      </div> 
      </section>
    );
  }
}