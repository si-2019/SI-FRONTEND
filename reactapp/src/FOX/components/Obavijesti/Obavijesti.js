import React, {Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import  Row  from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
class Obavijesti extends Component {
    render() {
        return (
          <div>
            <Header isPocetna={false}/>

            <Form>
            <Form.Row>
                <Col sm={{span: 8, offset: 2}} style={{textAlign: "center"}}>
                    <br/>
                    <h4>Obavijesti</h4>
                    <br/>
                </Col>
            </Form.Row>

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

            <Form.Row>
                <Col>
                  <Button> Sačuvaj </Button>
                </Col>
            </Form.Row>
            </Form>

            <Footer/>
          </div>
        );
    }
}
export default Obavijesti;
