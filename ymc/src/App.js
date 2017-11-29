import React, { Component } from 'react';
import './App.css';

import Item from './Item.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Item item='tee'/>
      </div>
    );
  }
}

export default App;
