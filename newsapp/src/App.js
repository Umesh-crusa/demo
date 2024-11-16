import './App.css';

import React, { Component } from 'react'
import Nabvar from './Nabvar';
import { News } from './News';


export default class App extends Component {
  render() {
    return (
      <div>
        <Nabvar/>
        <News/>
      </div>
    )
  }
}

