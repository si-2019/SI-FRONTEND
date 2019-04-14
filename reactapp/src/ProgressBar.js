import React, { Component } from 'react';

const ProgressBar = (props) => {
    return (
    <div className="progressBar"> 
         <Filler percentage = {props.percentage}/>
    </div>
    )
}
const styleString= "width: " + props.percentage+"%";

const Filler = (props) => {
    return  (
    <div className="filler" style={{styleString}}>
    <label>{props.percentage}%</label> </div>)
}

class ProgressbarZadace extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            percentage: 50
        }
    }
    render(){
        return (
            <div className="bodovi-zadace">
                <label className="zadaceLabela"> Zadaće i projekti </label>
                <ProgressBar percentage={this.state.percentage} />
                <button className="zadaceButton"> Zadaće </button>
            </div>
        )
    }
}
export default ProgressbarZadace