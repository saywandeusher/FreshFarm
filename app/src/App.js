import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/nav'
import Intro from './components/intro/intro'
import Promo from './components/promo-page/promo'

export default class App extends Component {
  render() {
    return (
    [
      <header>
        <Nav />
        <Intro />
      </header>,

      <main>
        <Promo />
      </main>,

      <footer>
      </footer>
    ]
    );
  }
}

