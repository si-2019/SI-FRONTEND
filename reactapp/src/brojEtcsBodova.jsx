import React, { Component } from 'react';

var bgColors = { 
    "Siva": "#f2f2f2",
    "Plava": "#e6f2ff",
    
};

class BrojBodova extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="brojBod" style={{backgroundColor:bgColors.Plava, width : 300, height: 'fit-content', padding:3 }}>
               5 

            </div>
         );
    }
}
 
export default BrojBodova;