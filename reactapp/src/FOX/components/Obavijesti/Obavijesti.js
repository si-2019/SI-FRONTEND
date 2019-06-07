import React, {Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import  Row  from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import '../../ZajednickiCSS.css';
import Container from 'react-bootstrap/Container';

class Obavijesti extends Component {
    render() {
        return (
            <Container fluid>
            <Row>
                <Col sm={{span: 4}} style={{textAlign: "left"}}>
                    <Card>
                        <Card.Body>
                            <Card.Title style={{ display: "inline-block", fontSize: '30px', textAlign: "center"}} >Obavijesti </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">U ovoj formi možete poslati obavijest </Card.Subtitle>
                            <Form.Group as={Row} controlId = "naziv">
                                <Col lg="6" style={{textAlign: "left"}} > 
                                <Form.Label>Naziv:</Form.Label>
                                    <Form.Control 
                                        required 
                                        type="text" 
                                        placeholder="Unesi naziv obavijesti"
                                    />
                                <br/>
                                </Col>   
                            </Form.Group>
                            <Form.Group as={Row} controlId = "formNovi">
                                <Col style={{textAlign: "left"}}>
                                    <Form.Label>Sadržaj:</Form.Label>
                                    <Form.Control as="textarea" rows="5">
                                    </Form.Control>
                                    <br/>
                                    <Button variant="primary" type="submit" >Pošalji </Button> 
                                </Col>
                                <Col></Col>
                            </Form.Group>
                        </Card.Body>  
                    </Card>
                </Col>
            </Row>
    </Container> 
        );
    }
}
export default Obavijesti;
