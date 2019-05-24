import React, {Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
class Obavijesti extends Component {
    render() {
        return (
          <Form>
          <Form.Row>
            <Col md= {{span: 4, offset: 6 }}>
              <Form.Label style={{fontWeight: "bold", paddingLeft:'20px'}}> Obavijesti </Form.Label>
            </Col>
          </Form.Row>
            
            <div class="col-sm-6">
               <h1> Obavijesti  </h1>
          
               <form>
                    <label> Naslov: </label>
                    <input type="text" class="form-control"></input>
                </form>
            </div>
            <div class="col-sm-6">
            </div>
          </Form>
            
        );
    }

}
export default Obavijesti;
