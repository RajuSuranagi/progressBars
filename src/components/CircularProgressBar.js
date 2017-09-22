import React, { Component } from 'react';

const fastTimeout = 5, slowTimeout = 30;
export default class CircularProgressBar extends Component {


    constructor(props){
        super(props);
        this.state = { currPerc: 0, percentage: this.props.percentage }
    }

    componentDidMount(){
        setTimeout(()=>this.setState({currPerc: this.state.currPerc+1}), 30);
    }

    render(){
        const color = `${this.props.iconColor}`;
        return (
            <div>
                <div className="outer-ring" style={{border: `1px solid ${color}`}}>
                    <div style={{color: color, border: `10px solid ${color}`, margin:'2px'}} className='circle-bar'>
                        <div className='inset-data'>
                            <span className={this.props.iconClass} ></span><br/>
                            <span className='perc-text'>
                                <span style={{fontSize:'11px'}}>+</span>
                                <span style={{fontWeight:'bold',fontSize:'16px',padding:'3px'}}>{this.state.currPerc}</span>
                                <span style={{fontSize:'11px'}}>%</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="label-text">{this.props.labelText}</div>
            </div>
        );
    }

    componentDidUpdate(){
        let { currPerc, percentage } = this.state;
        if(currPerc < percentage){
            if(currPerc > (percentage - 0.15*percentage )) {
                setTimeout(() => this.setState({currPerc: currPerc + 1}), slowTimeout);
            }else{
                setTimeout(() => this.setState({currPerc: currPerc + 1}), fastTimeout);
            }
        }else{
            console.log(Date.now());
        }
    }
}

