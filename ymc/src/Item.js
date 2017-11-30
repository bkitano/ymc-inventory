import React, { Component } from 'react';
import fire from './fire.js';
import RaisedButton from 'material-ui/RaisedButton';


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
    
    sellItem(e) {
        
        e.preventDefault();
        var id = e.target.id;
        var newSize = this.state.sizes;
        
        newSize[id] -= 1;
        
        // change the state (might not be necessary once we implement persistence)
        // this.setState({size:newSize});
        
        // persist to firebase
        var refName = 'item/' + this.state.item;
        var dbref = fire.database().ref(refName);
        
        dbref.on('value', snapshot => {
            var data = snapshot.val();
            console.log(data);
        })
        
        
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
    
    returnItem(e) {
        
        e.preventDefault();
        var id = e.target.id;
        var newSize = this.state.sizes;
        
        newSize[id] += 1;
        
        // change the state (might not be necessary once we implement persistence)
        // this.setState({size:newSize});
        
        // persist to firebase
        var refName = 'item/' + this.state.item;
        var dbref = fire.database().ref(refName);
        
        dbref.on('value', snapshot => {
            var data = snapshot.val();
            console.log(data);
        })
        
        
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
            <div>
                <h1>{this.state.item}:{sum}</h1>
                {this.state.index.map( i => {
                    return (
                    <div key={i}>
                        <h3 id={i}> {this.state.labels[i]}: {this.state.sizes[i]} </h3>
                        <RaisedButton id={i} op="sell" className="sell btn btn-primary" onClick={this.sellItem.bind(this)}>
                            <p id={i}> sell </p>
                        </RaisedButton>
                        <RaisedButton id={i} op="return" className="return btn btn-primary" onClick={this.returnItem.bind(this)}>
                            <p id={i}> return </p>
                        </RaisedButton>
                    </div>
                    );
                })}
            </div>
            )
    }
}

export default Item;