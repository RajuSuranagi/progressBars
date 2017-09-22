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

        return (
            progressBars.map((bar,index)=>{
                return (
                    <div key={index} className="col-md-4 progressbar">
                        <CircularProgressBar percentage={bar.perc}
                                             iconClass={bar.iconClass}
                                             iconColor={bar.iconColor}
                                             labelText={bar.labelText}/>
                    </div>
                );
            })
        );
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
        {perc: 100, iconClass: 'glyphicon glyphicon-thumbs-up', iconColor:"red", labelText: "User satisfaction"},
        {perc: 27, iconClass: 'glyphicon glyphicon-bullhorn', iconColor:"#3b7ab3", labelText:"Popularity"},
        {perc: 76, iconClass: 'glyphicon glyphicon-user', iconColor:"#c1c32d", labelText:"New users"}
    ]
}

export default App;