import React, { Component } from 'react';

export default class CircularProgressBar extends Component {

    constructor(props){
        super(props);
        this.state = { currPerc: 0, percentage: this.props.percentage }
    }

    componentDidMount(){
        /*while(this.state.currPerc < this.state.percentage){
            setTimeout(()=>{
                let currPerc = this.state.currPerc+1;
                this.setState({currPerc})
            }, 200);
        }*/
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

