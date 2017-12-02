import React, { Component } from 'react';
import fire from './fire.js';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import './index.css'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: this.props.year,
            item: this.props.item,
            index: [0,1,2,3,4,5],
            sizes: [-1,-1,-1,-1,-1],
            labels: ['xs','s','m','l','xl','xxl'],
            quantity: 1,
            color: '',
            price: -1
        };
    }
    
    componentDidMount() {
        var refName = this.props.year + '/' + this.state.item;
        var dbref = fire.database().ref(refName);
        dbref.on('value', snapshot => {
            var data = snapshot.val();
            var color = data.color;
            var price = data.price;
            this.setState({sizes: data, color: color, price: price});
        });
    }
    
    sellItem(i) {
        
        var id = i; 
        var newSize = this.state.sizes;
        
        newSize[id] -= this.state.quantity;
        
        // change the state (might not be necessary once we implement persistence)
        this.setState({size:newSize});
        
        // persist to firebase
        var refName = this.state.year + '/' + this.state.item;
        var dbref = fire.database().ref(refName);
        
       // if(this.state.item === "tee") {
            dbref.set({
                0: newSize[0],
                1: newSize[1],
                2: newSize[2],
                3: newSize[3],
                4: newSize[4],
                5: newSize[5],
                color: this.state.color,
                price: this.state.price

            });
    }
    
    // Problem: never gets the id value.
    returnItem(i) {
        
        var id = i;
        var newSize = this.state.sizes;
        
        newSize[id] += this.state.quantity;
        
        // persist to firebase
        var refName = this.state.year + '/' + this.state.item;
        var dbref = fire.database().ref(refName);
        
            dbref.set({
                0: newSize[0],
                1: newSize[1],
                2: newSize[2],
                3: newSize[3],
                4: newSize[4],
                5: newSize[5],
                color: this.state.color,
                price: this.state.price
            });
    }
    
    qOnChange(e) {
        let input = parseInt(e.target.value);
        if( input ) {
            this.setState({quantity: input});
        } else if(isNaN(input)) {
            this.setState({quantity: 1});
        }
    }
    
    render() {
        var sum = 0;
        
        // get the totals for each item
        for(var i = 0; i < this.state.index.length; i++) {
            sum += this.state.sizes[i];
        }
        
        // styling overrides for Mui
        var style = {
            'margin': '10px', // adds space on the outside
            'padding': '10px' // adds space on the inside
        };
        
        return (
                <Card style={style} >
                    <CardTitle title={this.state.year + " " + this.state.item + " (" + sum + ")"} subtitle={ this.state.color + ", $" + this.state.price } actAsExpander={true}
      showExpandableButton={true} />
                    <CardMedia expandable={true}>
                    <TextField hintText="quantity" onChange={ (e) => {this.qOnChange(e)} } />
                    {this.state.index.map( i => {
                        var thing = this.state.labels[i] + ": " + this.state.sizes[i] ;
                        return (
                            <div key={i}>
                                <Card >
                                    <CardHeader title={thing} />
                                    <CardActions>
                                        <FlatButton onClick={ (e) => {this.sellItem(i)} } label="Sell"/>
                                        <FlatButton onClick={ (e) => {this.returnItem(i)} } label="Return"/>
                                    </CardActions>
                                </Card>
                            </div>
                        );
                    })}
                    </CardMedia>
                </Card>
            )
    }
}

export default Item;