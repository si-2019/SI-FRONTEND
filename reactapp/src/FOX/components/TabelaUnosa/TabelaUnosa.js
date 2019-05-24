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
            this.otvori();
        }
    }
    otvori() {
        let trenutniProf = this.state.profesori.find(x => x.id == this.state.profId);

        let trenutnaTema = this.state.teme.find(x => x.id == this.state.temaId);

        this.setState({
            otvori: true,
            selProf: trenutniProf.ime + " " + trenutniProf.prezime,
            selTema: trenutnaTema.naziv
        });

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
                    <div style={{ visibility: this.state.greskaVis}}><p class="text-danger">Morate odabrati temu!</p></div>

                    <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.handleClick}>Prijavi završni</button> 
                </Form.Row>
                
                <Form.Row style={{paddingLeft: '100px'}}>
                //<label> Pero Perić, 12345 </label>
                //<div style={{ visibility: this.state.greskaVis}}><p class="text-danger">Morate odabrati temu!</p></div>
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