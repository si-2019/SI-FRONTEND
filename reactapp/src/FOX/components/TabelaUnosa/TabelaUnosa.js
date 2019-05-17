import React, {Component } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Form from 'react-bootstrap/Form';
class TabelaUnosa extends Component {


    render() {
        return(
           <Form>
                <Form.Row>
                </Form.Row>
                <Form.Row>
                    <Col md={{span: 2, offset: 4}} > 
                        <Form.Label> Index: 
                          <input type="text" name="name" />
                          </Form.Label>
                    </Col>
                </Form.Row>

           </Form>

        );

    }


}


export default TabelaUnosa;