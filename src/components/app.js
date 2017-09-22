import React, { Component } from 'react';
import CircularProgressBar from './CircularProgressBar.js';


class App extends Component {

    constructor(props){
        super(props);

    }
    render(){

        const user = 'glyphicon glyphicon-user';
        const thumbsUp = 'glyphicon glyphicon-thumbs-up';
        const horn = 'glyphicon glyphicon-bullhorn';

        return (
            <div className="row">
                <div className="col-md-4 progressbar">
                    <CircularProgressBar percentage="40" iconClass={thumbsUp} iconColor="red"/>
                </div>
                <div className="col-md-4 progressbar">
                    <CircularProgressBar percentage="60" iconClass={horn} iconColor="cyan"/>
                </div>
                <div className="col-md-4 progressbar">
                    <CircularProgressBar percentage="30" iconClass={user} iconColor="yellow"/>
                </div>
            </div>
        )
    }
}

export default App;