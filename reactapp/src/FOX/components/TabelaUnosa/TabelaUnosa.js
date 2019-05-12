import React, {Component } from 'react';
import Footer from './components/Footer/Footer';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
class TabelaUnosa extends Component {


    render() {
        return(
           <Container>
            <Form.Group>
                <Form.Row>
                </Form.Row>
                <Form.Row>
                    <Form.Col md={{span: 2, offset: 4}} > 
                        <label> Index: </label>
                        <input type="text" name="name" />
                        <Form.Button variant="primary">Pretrazi</Form.Button>
                    </Form.Col>
                </Form.Row>
                </Form.Group>
           </Container>

        );

    }


}


export default TabelaUnosa;