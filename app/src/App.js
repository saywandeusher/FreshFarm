import React, { Component } from 'react';
import './App.css';
import Intro from './components/intro/intro'
import Nav from './components/nav/nav'

export default class App extends Component {
  render() {
    return (
    [
      <header>
        <Nav />
        <Intro />
      </header>,

      <main>

      </main>,

      <footer>
      </footer>
    ]
    );
  }
}

