import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'

class KontaktPod extends Component {
    state = {  }
    render() { 
        return (  
    <Form style={{ border:'2px solid #A9A9A9', height:"170px",marginTop:"60px"}}>
        <Form.Group controlId="formGroupEmail" >
            <Form.Label style={{fontWeight: "bold"}}>Kontakt podaci: </Form.Label>
            <Form.Label>Email: neko1@hotmail.com </Form.Label>
            <Form.Label >Adresa:  Ulica b.b </Form.Label>
            <Form.Label style={{fontWeight: "normal"}}>Broj telefona: 062/873/532 </Form.Label>
        </Form.Group>
    </Form>
        );
    }
}
 
export default KontaktPod;