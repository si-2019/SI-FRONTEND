import React from 'react';

class LeftMenuStudent extends React.Component {
    constructor() {
        super();
        this.state = {
            activeDivId: 1,  //open pokazuje da li formu treba prikazati ili ne
            
        }
        this.changeActiveId = this.changeActiveId.bind(this);
    };

    changeActiveId(id){
        this.props.triggerChangeActiveId(id)
    }

    render() {
        return (
            <div>
            {this.props.btnList.map(x=>
                <button
                type="button"
                className="btn btn-primary left-buttons"
                onClick={()=>this.changeActiveId(x.changeId)}
                >
                    {x.naziv}
                </button>
                )}
            </div>
            
        );
   }
};

export default LeftMenuStudent;
