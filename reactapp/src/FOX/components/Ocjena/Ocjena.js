import React, { Component} from 'react';
import Form from 'react-bootstrap/Form'

class Ocjena extends Components {
    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Label style = {{ fontWeight: "bold"}}> Unos ocjene</Form.Label>
                </Form.Row>
                <Form style= {{border: "2px solid" }}>
                    <Form.Row style={{padding: '30px'}}>
                        <Form.Label> Index: </Form.Label>
                        <input type="text" name="name"/>
                        <Button style= {{paddingLeft: '10px'}}> Pretrazi</Button>
                    </Form.Row>
                </Form>
            </Form>
        );
    }
}
export default Ocjena;