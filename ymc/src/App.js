import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Item from './Item.js';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div className="App">
            <Item item='tee'/>
            <Item item='sweater'/>
          </div>
        </MuiThemeProvider>

    );
  }
}

export default App;
