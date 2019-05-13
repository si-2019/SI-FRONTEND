import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import axios from 'axios';

class Stranice extends Component {
    state = {  
        StudentID: 1,
        LinkedIn : "la",
        Website: "bla"
    }
    componentDidMount() {
        axios
          .get(
            `http://localhost:31918/studenti/` +
              this.state.StudentID
          )
          .then(res => {
            
            const In = res.data.map(obj => obj.linkedin);
            this.setState({LinkedIn: In });

            
            const web = res.data.map(obj => obj.website);
            this.setState({Website: web });
          });
      }
    render() { 
        return (
            <Form style={{ border:'2px solid #A9A9A9', height:"120px",marginTop:"10px"}}>
            <Form.Group controlId="formGroupEmail" >
                <Form.Label style={{fontWeight: "bold"}}>LinkedIn:   </Form.Label>
                <Form.Label>{this.state.LinkedIn}</Form.Label>
            </Form.Group>
            <Form.Group controlId="formGroupEmail" >
                <Form.Label style={{fontWeight: "bold"}}>Website:   </Form.Label>
                <Form.Label>{this.state.Website} </Form.Label>
            </Form.Group>
        </Form>
      );
    }
}
 
export default Stranice;