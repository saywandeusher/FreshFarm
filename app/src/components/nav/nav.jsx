import React, { Component } from 'react';
import './nav.css'

export default class Nav extends Component {

  render() {
    return (
      <nav>
          <div className="nav-wrapper container">
            <div className="row">
              <div className="col s3">
                <a href=" " className="brand-logo"><img src={require('../../images/Screen 1/FarmFresh Logo.png')} alt="FarmFresh Logo" className="FarmFresh-img" /></a>
              </div>
              <div className="col s5">
                  <form action=" ">
                     <input type="text" placeholder="Search for a product or brand" className="searchfield" />
                     <button className="btn" type="submit">
                      <i className="small material-icons search-icon">search</i>
                     </button>
                  </form>
              </div>
              <div className="col s1"></div>
              <div className="col s3">
                <a href=" " className="cart-logo right"><img src={require('../../images/Screen 1/shopping-cart.png')} alt="Cart" className="Cart-img" /></a>
              </div>
            </div>
          </div> 
      </nav>
    );
  }
}