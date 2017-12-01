import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Item from './Item.js';

class App extends Component {
  render() {
    
    // css
    var style = {
      "margin": "10px auto",
      "display": "grid",
      "grid-template-columns": " 1fr 1fr "
    };
    
    return (
        <MuiThemeProvider className="App">
          <div style={style}>
            
            <Item year='2017' item='tee'/>
            <Item year='2017' item='sweater'/>
            <Item year='2016' item='long-sleeve-hilary'/>
            <Item year='2016' item='long-sleeve-trump'/>
            <Item year='2016' item='tee'/>
            <Item year='2015' item='long-sleeve'/>
            <Item year='2014' item='tee'/>
            <Item year='2010' item='tee'/>
            
          </div>
        </MuiThemeProvider>

    );
  }
}

export default App;
