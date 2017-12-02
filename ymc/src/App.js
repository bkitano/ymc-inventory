import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Inventory from './Inventory';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App" >
                    <Header />
                    <Inventory />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;