import React, { Component } from 'react';
import './promo.css'

export default class Promo extends Component {

  render() {
    return ( 
      <section className="promo-section">
      <div className="container">
      <div className="row">
          <div className="col s6 ">
            <div className="promo-headings">FRESH FOOD FOR A FRESHER YOU</div>
            <div className="promo-subheadings">Quailty food, quailty life.</div>
          </div>
          <div className="col s6 center">
            <img src={require('../../images/Screen 2/Side image.png')} alt="side_image" className="side-image" />
          </div>
        </div>

        <div className="row">

          <div className="col m4 s12">
            <div className="center">
              <img src={require('../../images/Screen 2/clock.png')} alt="clock_image" className="promo-image" />
            </div>
            <div className="center promo-subheadings">Online anywhere</div>
          </div>

          <div className="col m4 s12">
          <div className="center">
              <img src={require('../../images/Screen 2/delivery-truck.png')} alt="delivery_truck_image" className="promo-image-truck" />
            </div>
            <div className="center promo-subheadings">Fast Delivery</div>
          </div>

          <div className="col m4 s12">
          <div className="center">
              <img src={require('../../images/Screen 2/support.png')} alt="support_image" className="promo-image" />
            </div>
            <div className="center promo-subheadings">24/7 support</div>
          </div>
        
      </div>
      </div>
      </section>
    );
  }
}