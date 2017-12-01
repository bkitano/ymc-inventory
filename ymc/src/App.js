import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Item from './Item.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gridTemplateColResponse : "1fr 1fr 1fr"
    };
  }
  
  render() {
    // responsive debug
    var mql = window.matchMedia("(max-width: 480px)");
    
    if(mql.matches) {
      // if the max width is 480 px, aka mobile
      this.state.gridTemplateColResponse = "1fr";
    }

    // css
    var style = {
      "margin": "10px auto",
      "display": "grid",
      "width": "auto",
      "gridTemplateColumns": this.state.gridTemplateColResponse,
      'width': '100%'
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
            <Item year='2015' item='tee'/>
            <Item year='2014' item='tee'/>
            <Item year='2010' item='tee'/>
            
          </div>
        </MuiThemeProvider>

    );
  }
}

export default App;
