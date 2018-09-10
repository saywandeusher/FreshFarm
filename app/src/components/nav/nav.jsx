import React, { Component } from 'react';
import './nav.css'

export default class Nav extends Component {

  render() {
    return (
      <nav>
          <div className="nav-wrapper container nav_container">
            <div className="row nav_row">
              <div className="col s3">
                <a href="home" className="brand-logo"><img src={require('../../images/Screen 1/FarmFresh Logo.png')} alt="FarmFresh_Logo" className="FarmFresh-img" /></a>
              </div>
              <div className="col s4">
                  <form>
                     <input type="text" placeholder="Search for a product or brand" className="searchbox" />
                     <button className="btn blue darken-2 search-button" type="submit" name="action">
                      <i className="material-icons">search</i>
                     </button>
                  </form>
              </div>
              <div className="col s2"></div>
              <div className="col s3">
                <a href="Shopping" className="cart-logo right"><img src={require('../../images/Screen 1/shopping-cart.png')} alt="Cart_Image" className="cart-img" /></a>
              </div>
            </div>
          </div> 
      </nav>
    );
  }
}