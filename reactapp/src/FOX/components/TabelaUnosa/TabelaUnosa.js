import React, {Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';

class TabelaUnosa extends Component {
    render() {
        return(
            
            <Form>
                <Form.Row>
                     <Form.Label style={{fontWeight: "bold", paddingLeft: '180px', fontSize: 18, marginTop:"30px"}}> Unos bodova za ispit  </Form.Label>  
                </Form.Row>
                <Form.Row>
                    <Col md= {{ span: 4, offset: 4}}>
                        <Dropdown> 
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Odaberite ispit
                                </Dropdown.Toggle>
                            </Dropdown>
                    </Col>
                </Form.Row>
            
            <Form style={{ border:'2px solid', height:"300px",marginTop:"20px", paddingLeft: '80px'}}>
                <Form.Row style={{padding: '30px'}}>
                    <Form.Label> Index: </Form.Label>
                     <input type="text" name="name" />
                    <Button style= {{paddingLeft: '10px', color: 'success'}}> Pretrazi </Button>   
                </Form.Row>
               
                <Form.Row style={{padding: '30px' }}>
                <Form.Label> Bodovi: </Form.Label>
                <input type= "text" name="name" />
                <Button> Unesi </Button>
                </Form.Row>
           </Form>
           </Form>
        );
    }
}
export default TabelaUnosa;