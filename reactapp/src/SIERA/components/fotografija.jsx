import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Fotografija extends Component {
    render() { 
        return ( 
        <div style={{
            display: "inline-block",
            width: "300px",
            height: "270px",
            marginLeft:"120px",
            backgroundColor: "grey"

        }}>
        
        <button type="button" class="btn btn-secondary" style={{
            display: "inline-block",    
            marginTop: "290px",
            marginLeft: "50px",
            marginRight:"600px",
            width: "200px"

        }}>Odaberite sliku profila</button>
    
        </div> 
       
        
        );
    }
}

export default Fotografija;
