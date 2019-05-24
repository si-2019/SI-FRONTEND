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
          <Form>
              <Header/>
            <Form.Row>
              <Col md= {{span: 4, offset: 5 }}>
                <Form.Label style={{fontWeight: "bold", paddingLeft:'10px', fontSize: 18}}> Obavijesti </Form.Label>
              </Col>
            </Form.Row>
            <Form.Row  style={{marginTop:"10px",}}>
                <Col md= {{span: 3, offset: 4 }}>
                <Form.Label> Naslov: </Form.Label>
                      <input type="text" class="form-control"></input>
                </Col>
            </Form.Row>
            <Form.Row>
              <Col md= {{span: 3, offset: 4 }}>
              <Form.Label> Sadrzaj: </Form.Label>
              <Form.Control as="textarea" rows="5" />
              </Col>
              <Footer/>
            </Form.Row>
             
              <Form.Row>
              <Col md= {{span: 3, offset: 4 }}>
              <Button> Sadrzaj: </Button>
              </Col>
              </Form.Row>
          </Form>
        );
    }
}
export default Obavijesti;
