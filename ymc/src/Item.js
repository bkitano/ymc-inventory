import React, { Component } from 'react';
import fire from './fire.js';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            index: [0,1,2,3,4,5],
            sizes: [],
            labels: ['xs','s','m','l','xl','xxl']
            
        };
    }
    
    // Problem: this is null, so we need to bind?
    componentDidMount() {
        var refName = 'item/' + this.state.item;
        var dbref = fire.database().ref(refName);
        dbref.on('value', snapshot => {
            var data = snapshot.val();
            this.setState({sizes: data});
        });
    }
    
    render() {
        console.log(this.state.index);
        return (
            <div>
                <h1>{this.state.item}</h1>
                {this.state.index.map( i => {
                    return (
                    <h3>{this.state.labels[i]}: {this.state.sizes[i]}</h3>
                    );
                })}
            </div>
            )
    }
}

export default Item;