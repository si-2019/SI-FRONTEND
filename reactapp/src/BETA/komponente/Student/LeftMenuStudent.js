import React from 'react';

class LeftMenuStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDivId: 1,  //open pokazuje da li formu treba prikazati ili ne
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
                    onClick = {()=>this.changeActiveId(1)}>Track Issues
                </button>
                <button 
                    type="button" 
                    className="btn btn-primary left-buttons"
                    onClick = {()=>this.changeActiveId(2)}>Drafts
                </button>
                <button 
                    type="button" 
                    className="btn btn-primary left-buttons"
                    onClick = {()=>this.changeActiveId(3)}>Archived
                </button>
                <button 
                    type="button" 
                    className="btn btn-primary left-buttons"
                    onClick = {()=>this.changeActiveId(4)}>FAQ
                </button>
    
            </div>
            
        );
   }
};

export default LeftMenuStudent;
