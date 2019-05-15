import React, {Component } from 'react';
import Footer from './components/Footer/Footer';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
class TabelaUnosa extends Component {


    render() {
        return(
           <Container>
                <Row>
                </Row>
                <Row>
                    <Col md={{span: 2, offset: 4}} > 
                        <Label> Index: </Label>
                        <Input type="text" name="name" />
                        <Button variant="primary">Pretrazi</Button>
                    </Col>
                </Row>
                
           </Container>

        );

    }


}


export default TabelaUnosa;