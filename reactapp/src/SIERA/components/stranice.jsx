import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'

class Stranice extends Component {
    state = {  }
    render() { 
        return (
            <Form style={{ border:'2px solid #A9A9A9', height:"120px",marginTop:"10px"}}>
            <Form.Group controlId="formGroupEmail" >
                <Form.Label style={{fontWeight: "bold"}}>LinkedIn:   </Form.Label>
                <Form.Label> nekoNekic1</Form.Label>
            </Form.Group>
            <Form.Group controlId="formGroupEmail" >
                <Form.Label style={{fontWeight: "bold"}}>Website:   </Form.Label>
                <Form.Label> nekoNekic1 </Form.Label>
            </Form.Group>
        </Form>
      );
    }
}
 
export default Stranice;