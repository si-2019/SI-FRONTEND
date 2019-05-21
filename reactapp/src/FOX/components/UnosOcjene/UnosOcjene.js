import React, { Component} from 'react';
import Form from 'react-bootstrap/Form';
import Ocjena from '../Ocjena/Ocjena';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

class UnosOcjene extends Component {
     render()
     {
         return (
            <div>
            <Form>
                <Form.Row>
                </Form.Row>
                <Form.Row>
                    <Col md={{span: 5, offset: 4}}>
                        <Ocjena/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md= {{span: 8, offset: 5}}>
                        <Nav.Link href="/fox/StranicaPredmeta" > Nazad na stranicu predmeta </Nav.Link>
                   </Col>     
                     <Col md={{span: 8, offset: 5}}>
                         <Nav.Link href=" "> Nazad na pocetnu </Nav.Link>
                     </Col>
                </Form.Row>
                <Form.Row>
                </Form.Row>
            </Form>
            </div>        
         );
     }
}
export default UnosOcjene;