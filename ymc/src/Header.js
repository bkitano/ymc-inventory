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
            drawerOpen : false,
            activePage : ' - Home'
        };
    }
    
    handleToggle(e) {
        var drawerIsOpen = this.state.drawerOpen;
        this.setState({drawerOpen: !drawerIsOpen});
    }
    
    handleClose(e) {
        this.setState({drawerOpen: false});
    }
    
    handleMenuClick(siteName) {
        this.setState({activePage: siteName, drawerOpen: false});
    }
    
    render() {
        
        return (
            <div>
                <AppBar title={"YMC" + this.state.activePage} onLeftIconButtonTouchTap={(e) => {this.handleToggle(e)}}/>
                <Drawer docked={false} open={this.state.drawerOpen} onRequestChange={(e) => {this.handleClose(e)}}>
                    <AppBar title="Menu" showMenuIconButton={false}/>
                    
                    <NavLink to='/' style={{ textDecoration: 'none' }}  >
                        <MenuItem onClick={(e) => {this.handleMenuClick(' - Home')}}>
                            Home
                        </MenuItem>
                    </NavLink>
                    
                    <NavLink to='/inventory' style={{ textDecoration: 'none' }} >
                        <MenuItem onClick={(e) => {this.handleMenuClick(' - Inventory')}}>
                            Inventory
                        </MenuItem>
                    </NavLink>
                
                </Drawer>
            </div>
            );
    }
}

export default Header;