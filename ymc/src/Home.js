import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

class Home extends Component {
    
    render() {
        return (
            <div className="home">
                <Card>
                    <CardTitle title="YMC App"/>
                    <CardText>
                    Welcome to the YMC app. Here you can do stuff. Love Brian :)
                    </CardText>
                </Card>
            </div>
            );
    }
}

export default Home;