import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// react-router
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

// full page components
import Header from './Header';
import Inventory from './Inventory';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App" >
                    <MuiThemeProvider>
                        <Header />
                        <Route path="/inventory" component={Inventory}/>
                    </MuiThemeProvider>
                </div>
            </HashRouter>
        );
    }
}

export default App;