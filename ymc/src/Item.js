import React, { Component } from 'react';
import fire from './fire.js';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            index: [0,1,2,3,4,5],
            sizes: [-1,-1,-1,-1,-1],
            labels: ['xs','s','m','l','xl','xxl']
            
        };
    }
    
    componentDidMount() {
        var refName = 'item/' + this.state.item;
        var dbref = fire.database().ref(refName);
        dbref.on('value', snapshot => {
            var data = snapshot.val();
            this.setState({sizes: data});
        });
    }
    
    sellItem(i) {
        
        var id = i; 
        var newSize = this.state.sizes;
        
        newSize[id] -= 1;
        
        // change the state (might not be necessary once we implement persistence)
        this.setState({size:newSize});
        
        // persist to firebase
        var refName = 'item/' + this.state.item;
        var dbref = fire.database().ref(refName);
        
        if(this.state.item === "tee") {
            dbref.set({
                0: newSize[0],
                1: newSize[1],
                2: newSize[2],
                3: newSize[3],
                4: newSize[4],
                5: newSize[5]

            });
        } else if(this.state.item === "sweater") {
            dbref.set({
                0: newSize[0],
                1: newSize[1],
                2: newSize[2],
                3: newSize[3],
                4: newSize[4],
                5: newSize[5]
            });
        }
    }
    
    // Problem: never gets the id value.
    returnItem(i) {
        
        var id = i;
        var newSize = this.state.sizes;
        
        newSize[id] += 1;
        
        // change the state (might not be necessary once we implement persistence)
        // this.setState({size:newSize});
        
        // persist to firebase
        var refName = 'item/' + this.state.item;
        var dbref = fire.database().ref(refName);
        
        if(this.state.item === "tee") {
            dbref.set({
                0: newSize[0],
                1: newSize[1],
                2: newSize[2],
                3: newSize[3],
                4: newSize[4],
                5: newSize[5]

            });
        } else if(this.state.item === "sweater") {
            dbref.set({
                0: newSize[0],
                1: newSize[1],
                2: newSize[2],
                3: newSize[3],
                4: newSize[4],
                5: newSize[5]
            });
        }
    }
    
    render() {
        var sum = 0;
        for(var i = 0; i < this.state.index.length; i++) {
            sum += this.state.sizes[i];
        }
        
        return (
            <Card>
                <CardTitle title={this.state.item} subtitle={sum} />
                {this.state.index.map( i => {
                    var thing = this.state.labels[i] + ": " + this.state.sizes[i];
                    return (
                    <Card key={i}>
                        <CardHeader title={thing} />
                        <CardActions>
                            <FlatButton onClick={ (e) => {this.sellItem(i)} } label="Sell"/>
                            <FlatButton onClick={ (e) => {this.returnItem(i)} } label="Return"/>
                        </CardActions>
                    </Card>
                    );
                })}
            </Card>
            )
    }
}

export default Item;