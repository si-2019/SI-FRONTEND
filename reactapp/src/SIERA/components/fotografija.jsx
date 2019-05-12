import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


class Fotografija extends Component {
    state = {
        StudentID: 1,
        fotografija: "null"
    }
    componentDidMount() {
        axios
          .get(
            `http://localhost:31918/studenti/` +
              this.state.StudentID
          )
          .then(res => {
            
            const fotka = res.data.map(obj => obj.fotografija);
            this.setState({fotografija: fotka });
          });
      }
    render() { 
        return ( 
        <div style={{
            display: "inline-block",
            width: "300px",
            height: "270px",
            marginLeft:"120px",
            backgroundColor: "grey"

        }}>
        <img src={this.state.fotografija}/>
        <button type="button" class="btn btn-secondary" style={{
            display: "inline-block",    
            marginTop: "250px",
            marginLeft: "50px",
            marginRight:"600px",
            width: "200px"

        }}>Odaberite sliku profila</button>
    
        </div> 
       
        
        );
    }
}

export default Fotografija;
