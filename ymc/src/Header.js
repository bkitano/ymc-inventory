import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// react-router
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Header extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            drawerOpen : false
        };
    }
    
    handleToggle(e) {
        var drawerIsOpen = this.state.drawerOpen;
        this.setState({drawerOpen: !drawerIsOpen});
    }
    
    handleClose(e) {
        this.setState({drawerOpen: false});
    }
    
    render() {
        
        return (
            <div>
                <AppBar title="YMC" onLeftIconButtonTouchTap={(e) => {this.handleToggle(e)}}/>
                <Drawer docked={false} open={this.state.drawerOpen} onRequestChange={(e) => {this.handleClose(e)}}>
                    <AppBar title="Menu" showMenuIconButton={false}/>
                    <MenuItem >
                        <NavLink to='/inventory'>Inventory</NavLink>
                    </MenuItem>
                </Drawer>
            </div>
            );
    }
}

export default Header;