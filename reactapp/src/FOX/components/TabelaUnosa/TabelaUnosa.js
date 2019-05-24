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
            profesori: [],
            teme: [],
            studentId: 1,
            profId: 1,
            temaId: null,
            otvori: false,
            selProf: null,
            selTema: null,
            greskaVis: "hidden"
        }
    this.toggleVisibility=this.toggleVisibility.bind(this)
    }
    
    toggleVisibility(){
      if (this.state.visibility=true){
        this.setState = ({
          visibility: false
        });
    }
    else{
       this.setState = ({
          visibility: true
        })
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
                    <Button style= {{paddingLeft: '10px'}}> Pretrazi </Button>   
                </Form.Row>
                
                <Form.Row style={{paddingLeft: '100px'}}>
                <label> Pero Perić, 12345 </label>
                <div style={{ visibility: this.state.greskaVis}}><p class="text-danger">Morate odabrati temu!</p></div>
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