import React, { Component } from 'react';
import './intro.css'

export default class Intro extends Component {

  render() {
    return (
      <div className="parallax-container center valign-wrapper">
      <div className="parallax">
        <img src={require('../../images/Screen 1/Banner Photo.jpg')} alt="Banner_photo" />
      </div>
    </div>
    );
  }
}