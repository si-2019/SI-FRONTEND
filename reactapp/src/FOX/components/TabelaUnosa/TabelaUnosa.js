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
           <Form style = {{justifyContent: 'center'}}>
                <Form.Row>
                    <Form.Label>  </Form.Label>
                </Form.Row>
                
           
                <Form.Row style={{padding: {20}}}>
                    <Form.Label> Index: </Form.Label>
                     <input type="text" name="name" />
                    <Button> Pretrazi </Button>   
                </Form.Row>
               
                <Form.Row md={{span: 4}}>
                <Form.Label> Bodovi: </Form.Label>
                <input type= "text" name="name" />
                <Button> Unesi </Button>
                </Form.Row>
           </Form>
        );
    }
}
export default TabelaUnosa;