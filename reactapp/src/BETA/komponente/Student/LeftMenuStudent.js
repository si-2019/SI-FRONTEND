import React from 'react';

class LeftMenuStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDivId: 1, 
        };
    };

    changeActiveId(id){
        this.props.triggerChangeActiveId(id)
    }

    render() {
        return (
            <div >
                <button 
                    type="button" 
                    className="btn btn-primary left-buttons" 
                    id = "moj"
                    onClick = {()=>this.changeActiveId(1)}>Prati upite
                </button>
                <button 
                    type="button" 
                    className="btn btn-primary left-buttons"
                    onClick = {()=>this.changeActiveId(2)}>Draftovi
                </button>
                <button 
                    type="button" 
                    className="btn btn-primary left-buttons"
                    onClick = {()=>this.changeActiveId(3)}>Arhiva
                </button>
                <button 
                    type="button" 
                    className="btn btn-primary left-buttons"
                    onClick = {()=>this.changeActiveId(4)}>Često postavljani upiti
                </button>
    
            </div>
            
        );
   }
};

export default LeftMenuStudent;