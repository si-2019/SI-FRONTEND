import React, {Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
class Obavijesti extends Component {
    render() {
        return (
          <Form>
            <Header/>
          <Form.Row>
            <Col md= {{span: 4, offset: 6 }}>
              <Form.Label style={{fontWeight: "bold", paddingLeft:'20px', fontSize: '15px'}}> Obavijesti </Form.Label>
            </Col>
          </Form.Row>
            
     
          
               <form>
                    <label> Naslov: </label>
                    <input type="text" class="form-control"></input>
                </form>
          
            <div class="col-sm-6">
            </div>
          </Form>
            
        );
    }

}
export default Obavijesti;
