import React, { Component } from 'react';

export default class CircularProgressBar extends Component {

    constructor(props){
        super(props);
        this.state = { percentage: this.props.percentage }
    }

    render(){
        const color = `${this.props.iconColor}`;
        return (
            <div style={{color}}>
                Progress bar here
                <div>
                    <span className={this.props.iconClass} ></span><br/>
                    <span className="perc-text">{this.state.percentage}%</span>
                </div>
            </div>
        );
    }
}

