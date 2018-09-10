import React, { Component } from 'react';
import './promo.css'

export default class Promo extends Component {

  render() {
    return ( 
      <section className="promo-section">
      <div className="container">
      <div className="row">
          <div className="col s6">
            <h3 className="promo-headings">FRESH FOOD FOR A FRESHER YOU</h3>
            <h5>Quailty food, quailty life.</h5>
          </div>
          <div className="col s6">
          <img src={require('../../images/Screen 2/Side image.png')} alt="side_image" className="side-image" />
          </div>
        </div>

        <div className="row">

          <div className="col m4 s12">
            <h5 className="center">Online anywhere</h5>
          </div>

          <div className="col m4 s12">
            <h5 className="center">Fast Delivery</h5>
          </div>

          <div className="col m4 s12">
            <h5 className="center">24/7 support</h5>
          </div>
        
      </div>
      </div>
      </section>
    );
  }
}