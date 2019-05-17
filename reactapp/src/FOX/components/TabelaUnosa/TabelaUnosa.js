import React, {Component } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
class TabelaUnosa extends Component {
    render() {
        return(
           <Form>
                <Form.Row>
                    <Form.Label>  </Form.Label>
                </Form.Row>
                
                <Form.Row md = {{span: 8, offset: 6}}>
                    <Form.Label> Index: 
                     <input type="text" name="name" />
                    </Form.Label>
                    <Button> Pretrazi </Button>   
                </Form.Row>

                <Form.Row md={{span: 4, offset}}>
                
                </Form.Row>
           </Form>
        );
    }
}
export default TabelaUnosa;