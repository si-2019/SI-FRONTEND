import React, {Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import  Row  from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
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
                            <Card.Title style={{ display: "inline-block", fontSize: '30px', textAlign: "center"}} >Unos ocjene </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">U ovoj formi možete unijeti ocjenu pojedinačnom studentu</Card.Subtitle>
                            <Form.Group as={Row} controlId = "index">
                                <Col lg="6" style={{textAlign: "left"}} > 
                                <Form.Label>Naslov:</Form.Label>
                                    <Form.Control 
                                        required 
                                        type="text" 
                                        placeholder="Unesi index"
                                    />
                                <br/>
                                </Col>   
                            </Form.Group>
                            <Form.Group as={Row} controlId = "formNoviOpis">
                                <Col style={{textAlign: "left"}}>
                                            <Form.Label>Ocjena:</Form.Label>
                                            <Col lg="4">
                                                <Form.Control as="textarea" rows="5">
                                                </Form.Control>
                                            </Col>
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
