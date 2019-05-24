import React, {Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import  Row  from 'react-bootstrap/Row';
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
            <row>
                <Col md= {{span: 3, offset: 4 }}>
                <Form.Label style={{padding: '30px'}}> Naslov: </Form.Label>
                      <input type="text" class="form-control"></input>
                </Col>
            </row>
            <Footer/>
          </Form>
        );
    }
}
export default Obavijesti;
