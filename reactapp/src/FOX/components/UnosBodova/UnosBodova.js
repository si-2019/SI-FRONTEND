import React, { Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Button';
import TabelaUnosa from '../TabelaUnosa/TabelaUnosa';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

class UnosBodova extends  Component {
render() {

    return(
        <div>
          <Form>
              <Form.Row>
               </Form.Row>
               <Form.Row>
                    <Col md= {{ span: 5, offset : 4}}>
                    <TabelaUnosa/>
                    </Col>
               </Form.Row>
               <Form.Row>
                    <Col md={{ span: 5, offset: 6}}>
                    <Nav.Link > Nazad na listu ispita </Nav.Link>
                    </Col>
                </Form.Row>

          </Form>
          </div>
        );
    }
}

export default UnosBodova;






