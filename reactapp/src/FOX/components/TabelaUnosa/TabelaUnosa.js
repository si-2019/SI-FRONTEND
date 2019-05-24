import React, {Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
class TabelaUnosa extends Component {
    constructor(props) {
        super();
        this.state = {
            greskaVis: "hidden"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.temaId == null) {
           this.setState({
               greskaVis: "visible"
           })
        }
        else if (this.state.temaId != null) {
        }
    }
 
    render() {
        return(
            
            <Form>
                <Form.Row>
                <Form.Label style={{fontWeight: "bold", paddingLeft: '180px', fontSize: 18, marginTop:"30px"}}> Unos bodova za ispit  </Form.Label>  
                </Form.Row>
            
            <Form style={{ border:'2px solid', height:"300px",marginTop:"20px", paddingLeft: '80px'}}>
                <Form.Row style={{padding: '30px'}}>
                    <Form.Label> Index: </Form.Label>
                     <input type="text" name="name" />
                    <Button style= {{paddingLeft: '10px', }} onClick={this.handleClick}> Pretrazi </Button>  
               
                </Form.Row>
                
               <Form.Row style={{paddingLeft: '100px'}}>
                <div style={{ visibility: this.state.greskaVis}}>
                    <label>Pero Perić, 12345</label>
                </div>
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