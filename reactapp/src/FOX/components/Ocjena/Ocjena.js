import React, { Component} from 'react';
import Form from 'react-bootstrap/Form'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from 'react-bootstrap/Button'

class Ocjena extends Component {
    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Label style = {{ fontWeight: "bold", paddingLeft: '180px', fontSize: 18, marginTop:"20px"}}> Unos ocjene</Form.Label>
                </Form.Row>
                <Form style= {{border:'2px solid', height:"300px",marginTop:"70px", paddingLeft: '80px'}}>
                    <Form.Row style={{padding: '30px'}}>
                        <Form.Label> Index: </Form.Label>
                        <input type="text" name="name"/>
                        <Button style= {{paddingLeft: '10px'}}> Pretrazi</Button>
                    </Form.Row>
                    <Form.Row style= {{ padding: '30px'}}  >
                    <Form.Label> Ocjena: </Form.Label> 
                    <input type="text" name="name"/> 
                    <Button> Unesi </Button>
                    </Form.Row>
                </Form>
            </Form>
        );
    }
}
export default Ocjena;