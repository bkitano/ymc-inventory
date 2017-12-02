import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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
        
        // styling
        var style = {
            "width":"100%",
            "height":"200px"
        }
        
        return (
            <div>
                <AppBar title="YMC" onLeftIconButtonTouchTap={(e) => {this.handleToggle(e)}}/>
                <Drawer docked={false} open={this.state.drawerOpen} onRequestChange={(e) => {this.handleClose(e)}}>
                    <MenuItem onClick={(e) => {this.handleClose(e)}}> Item </MenuItem>
                </Drawer>
            </div>
            );
    }
}

export default Header;