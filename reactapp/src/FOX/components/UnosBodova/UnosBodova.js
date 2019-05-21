import React, { Component} from 'react';
import Col from 'react-bootstrap/Col';
import TabelaUnosa from '../TabelaUnosa/TabelaUnosa';
import Form from 'react-bootstrap/Form';
import ReturnButton from '../ReturnButton/ReturnButton';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';

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
                        <ReturnButton style= {{color: "#2C3E50" }} />
                   </Col>
                </Form.Row>
                <Form.Row>
                    <Button href=" /fox/Ispiti"> Nazad na listu ispita </Button>

                </Form.Row>
                
          </Form>
          </div>
     );
 }
}

export default UnosBodova;






