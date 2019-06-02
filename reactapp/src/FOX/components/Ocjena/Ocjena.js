import React, { Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class Ocjena extends Component {
    render() {
        return (
            <Form>
                <Form.Row>
                    <Col sm={{span: 8, offset: 2}} style={{textAlign: "center"}}>
                        <br/>
                        <h4>Unos ocjene</h4>
                        <br/>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col style={{textAlign: "right"}}>
                        <Form.Label> Index: </Form.Label>
                    </Col>
                    <Col lg="2">
                        <Form.Control type="text" name="name">
                        </Form.Control>
                    </Col>
                    <Col>
                        <Button style= {{paddingLeft: '10px' }} onClick={this.handleClick}> Pretrazi </Button>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col style={{textAlign: "center"}}>
                        <br/>
                        <label>
                            
                        </label> 
                    </Col>
                </Form.Row>

                <hr/>

                <Form.Row>
                    <Col style={{textAlign: "right"}}>
                        <Form.Label> Ocjena: </Form.Label>
                    </Col>
                    <Col lg="2">
                        <Form.Control type="text" name="name">
                        </Form.Control>
                    </Col>
                    <Col>
                    <Button> Unesi </Button>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col style={{textAlign: "center"}}>
                        <br/>
                        <label>
                            
                        </label>
                        <br/>
                        <label>
                            
                        </label>
                        <br/>
                        <label>
                            
                        </label>
                        <br/>
                    </Col>
                </Form.Row>
           </Form>
        );
    }
}
export default Ocjena;