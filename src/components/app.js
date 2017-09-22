import React, { Component } from 'react';
import CircularProgressBar from './CircularProgressBar.js';


class App extends Component {

    constructor(props){
        super(props);
    }

    /**
     * Generate as many progress bars as passed to this component
     * @returns {Array} of JSX tags to show circular progress bars
     */
    getProgressBars(){

        let { progressBars } = this.props;
        if(progressBars == null
            || !Array.isArray(progressBars)
            || progressBars.length == 0 ){
            return ;
        }
        return progressBars.map((bar,index)=>{
            return (
                <div className="col-md-4 progressbar">
                    <CircularProgressBar key={index} percentage={bar.perc} iconClass={bar.iconClass} iconColor={bar.iconColor}/>
                </div>
            );
        });
    }

    render(){
        return (
            <div className="row">
                {this.getProgressBars()}
            </div>
        );
    }
}

App.defaultProps = {
    progressBars: [
        {perc: 50, iconClass: 'glyphicon glyphicon-thumbs-up', iconColor:"red"},
        {perc: 27, iconClass: 'glyphicon glyphicon-bullhorn', iconColor:"cyan"},
        {perc: 76, iconClass: 'glyphicon glyphicon-user', iconColor:"yellow"}
    ]
}

export default App;