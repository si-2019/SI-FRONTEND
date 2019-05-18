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
                    <Form.Row>
                        <Form.Label> Index: </Form.Label>
                        <input type="text" name="name"/>
                        <Button > Pretrazi</Button>
                    </Form.Row>
                </Form>
            </Form>
        );
    }
}
export default Ocjena;