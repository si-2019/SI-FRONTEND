import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class KontaktPod extends Component {
    state = { 
        StudentID: 1,
        adresa: "lala",
        email:"isajdi",
        brTel:"98426"
     }
    componentDidMount() {
        axios
          .get(
            `http://localhost:31918/studenti/` +
              this.state.StudentID
          )
          .then(res => {
            
            const br = res.data.map(obj => obj.telefon);
            this.setState({brTel: br });

            
            const eml = res.data.map(obj => obj.email);
            this.setState({email: eml });

            
            const adr = res.data.map(obj => obj.adresa);
            this.setState({adresa: adr});
          });
      }
    render() { 
        return (  
    <Form style={{ border:'2px solid #A9A9A9', height:"170px",marginTop:"60px"}}>
        <Form.Group controlId="formGroupEmail" >
            <Form.Label style={{fontWeight: "bold"}}>Kontakt podaci: </Form.Label>
            <Form.Label>Email: {this.state.email} </Form.Label>
            <Form.Label >Adresa: {this.state.adresa}</Form.Label>
            <Form.Label style={{fontWeight: "normal"}}>Broj telefona: {this.state.brTel} </Form.Label>
        </Form.Group>
    </Form>
        );
    }
}
 
export default KontaktPod;