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
          <div className="footerDno">
            <Container fluid style={{padding:"0", margin: "0"}}>
                <Row>
                    <Col md="3">
                        <Header isPocetna={false}/>
                    </Col>
                    <Col>
                    <br></br>
                    <h4>Obavijesti</h4>
                    <br></br>
                    
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title text-center" >Slanje obavijesti</h4>
                            <h6 class="card-subtitle mb-2 text-muted text-center">Slanje obavijesti za sve studente na predmetu.</h6>
                            <br/>
                            <div>
                                <Form>
                                    <Form.Row>
                                        <Col style={{textAlign: "right"}}>
                                            <Form.Label> Naslov: </Form.Label>
                                        </Col>
                                        <Col lg="4">
                                            <Form.Control type="text" name="name">
                                            </Form.Control>
                                        </Col>
                                        <Col></Col>
                                    </Form.Row>

                                    <br/>

                                    <Form.Row>
                                        <Col style={{textAlign: "right"}}>
                                            <Form.Label> Sadržaj: </Form.Label>
                                        </Col>
                                        <Col lg="4">
                                            <Form.Control as="textarea" rows="5">
                                            </Form.Control>
                                        </Col>
                                        <Col></Col>
                                        
                                    </Form.Row>

                                    <br/>

                                    <Form.Row>
                                        <Col style={{textAlign: "center"}}>
                                        <Button> Sačuvaj </Button>
                                        </Col>
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
