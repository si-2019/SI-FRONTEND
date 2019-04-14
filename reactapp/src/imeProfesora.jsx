import React, { Component } from 'react';

var bgColors = { 
                    "Siva": "#f2f2f2",
                    "Plava": "#e6f2ff",
                    
};



class ImeProfesora extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{backgroundColor: bgColors.Siva, width:300, padding: 3}} className="imeProf" >
                    Novica Nosovic
            </div>
         );
    }

}
 
export default ImeProfesora;