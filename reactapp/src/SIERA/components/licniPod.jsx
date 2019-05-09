
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'

class LicniPod extends Component {
    state = {  }
    render() { 
        return ( 
            <Form style={{width:"400px", border:'2px solid #A9A9A9', height:"650px" }}>
            <Form.Group >
                <Form.Label style={{fontWeight: "bold"}}>Lični podaci:   </Form.Label>
            </Form.Group>
            <Form.Group >
                <Form.Label style={{fontWeight: "bold"}}>Ime i prezime:   </Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label>Neko Nekić</Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label style={{fontWeight: "bold"}}>Datum i mjesto rođenja:   </Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label>30.07.1997, Sarajevo</Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label style={{fontWeight: "bold"}}>JMBG:   </Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label>3007997135003</Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label style={{fontWeight: "bold"}}>Index:   </Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label>14567</Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label style={{fontWeight: "bold"}}>Ime i prezime roditelja:   </Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label>Nekila Nekić</Form.Label> 
            </Form.Group>
            <Form.Group >
            <Form.Label style={{fontWeight: "bold"}}>Državljanstvo:   </Form.Label>    
            </Form.Group>
            <Form.Group >
                <Form.Label>BiH</Form.Label>
            </Form.Group>
        </Form>
        );
    }
}
 
export default LicniPod;