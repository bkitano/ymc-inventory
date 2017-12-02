import React, {Component} from 'react';

import Inventory from './Inventory';
import Header from './Header';

class InventoryPage extends Component {
    render() {
        return (
            <div className="InventoryPageContainer" >
                <Header />
                <Inventory />
            </div>
        );
    }
}

export default InventoryPage;