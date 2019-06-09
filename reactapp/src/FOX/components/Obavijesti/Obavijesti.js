import React, {Component } from 'react';
import Form from 'react-bootstrap/Form';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Obavijesti extends Component {
    render() {
        return (
          <div>
            <Container fluid style={{padding:"0", margin: "0"}}>
                <Row>
                    <Col md="3">
                        <Header isPocetna={false}/>
                    </Col>
                    <Col>
                    <br></br>

                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title text-center" >Slanje obavijesti</h4>
                            <h6 class="card-subtitle mb-2 text-muted text-center">Slanje obavijesti za sve studente na predmetu.</h6>
                            <br/>
                            <div>
                                <Form>
                                    <Form.Row>
                                        <Col style={{textAlign: "left"}}>
                                            <Form.Label> Naslov: </Form.Label>
                                            <Form.Control type="text" name="name">
                                            </Form.Control>
                                        </Col>
                                    </Form.Row>

                                    <br/>

                                    <Form.Row>
                                        <Col style={{textAlign: "left"}}>
                                            <Form.Label> Sadržaj: </Form.Label>
                                            <Form.Control as="textarea" rows="5">
                                            </Form.Control>
                                        </Col>
                                        
                                    </Form.Row>

                                    <br/>

                                    <Form.Row>
                                        <Col></Col>
                                        <Col md="auto" style={{textAlign: "right"}}>
                                        <Button> Sačuvaj </Button>
                                        </Col>
                                        <Col></Col>
                                    </Form.Row>
                                    </Form>
                            </div>
                        </div>
                    </div>
                    
                    </Col>
                </Row>
            </Container>

            <Footer/>
          </div>
        );
    }
}
export default Obavijesti;
