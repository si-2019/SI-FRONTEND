import React, { Component} from 'react';
import Col from 'react-bootstrap/Col';
import TabelaUnosa from '../TabelaUnosa/TabelaUnosa';
import Form from 'react-bootstrap/Form';
import ReturnButton from '../ReturnButton/ReturnButton';
import Header from '../Header/Header';
import Nav from 'react-bootstrap/Nav';

class UnosBodova extends  Component {
render() {
    return(
        <div>
            <Header isPocetna={false}/>
          <Form>
              <Form.Row>
               </Form.Row>
               <Form.Row>
                    <Col md= {{ span: 5, offset : 4}}>
                    <TabelaUnosa/>
                    </Col>
               </Form.Row>
               <Form.Row>
                   <Col md= {{span: 8, offset: 6}}>
                        <Nav.Link href="/fox">Nazad na pocetnu </Nav.Link>
                   </Col>
                </Form.Row>
          </Form>
          </div>
     );
 }
}

export default UnosBodova;






