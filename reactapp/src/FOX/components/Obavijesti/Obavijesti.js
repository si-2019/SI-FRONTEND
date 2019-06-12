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
          <div className="footerDno" style={{paddingBottom: "50px"}}>
            <Container fluid style={{padding:"0", margin: "0"}}>
                <Row noGutters>
                    <Col md="3">
                        <Header isPocetna={false}/>
                    </Col>
                    <Col>
                        <div style={{padding: "15px"}}>
                            <div class="card" style={{margin: "0px"}}>
                                <div class="card-body">
                                    <h4 class="card-title text-center" >Slanje obavijesti</h4>
                                    <h6 class="card-subtitle mb-2 text-muted text-center">Slanje obavijesti za sve studente na predmetu.</h6>
                                    <br/>
                                    <div>
                                        <Form>
                                            <Form.Row className="justify-content-center">
                                                <Col style={{textAlign: "left"}} lg="4" md="6" sm="8" xs="12">
                                                    <Form.Label> Naslov: </Form.Label>
                                                    <Form.Control type="text" name="name">
                                                    </Form.Control>
                                                </Col>
                                            </Form.Row>

                                            <br/>

                                            <Form.Row className="justify-content-center">
                                                <Col style={{textAlign: "left"}} lg="4" md="6" sm="8" xs="12"> 
                                                    <Form.Label> Sadržaj: </Form.Label>
                                                    <Form.Control as="textarea" rows="5">
                                                    </Form.Control>
                                                </Col>
                                                
                                            </Form.Row>

                                            <br/>

                                            <Form.Row className="justify-content-center">
                                                <Col lg="4" md="6" sm="8" xs="12" style={{textAlign: "right"}}>
                                                    <Button> Sačuvaj </Button>
                                                </Col>
                                            </Form.Row>
                                            </Form>
                                    </div>
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
