import React, { Component} from 'react';
import Form from 'react-bootstrap/Form';
import Ocjena from '../Ocjena/Ocjena';
import Col from 'react-bootstrap/Col';
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
                </Form.Row>
            </Form>
            </div>

        
         );
     }
}
export default UnosOcjene;