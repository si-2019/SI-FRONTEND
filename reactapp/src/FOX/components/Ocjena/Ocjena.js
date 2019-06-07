import React, { Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../ZajednickiCSS.css';
import Container from 'react-bootstrap/Container';

class Ocjena extends Component {
    constructor(props) {
        super();
        this.state = {
            greskaVis: "hidden",
            greska: "hidden"
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleCli = this.handleCli.bind(this);
    }

    handleClick() {
        if (this.state.temaId == null) {
           this.setState({
               greskaVis: "visible",
           })
        }
        else if (this.state.temaId != null) {
        }
    }
    
    handleCli() {
        if (this.state.temaId == null) {
           this.setState({
               greska: "visible",
           })
        }
        else if (this.state.temaId != null) {
        }
    }

    render() {
        return (
            <Container fluid>
                    <Row>
                        <Col sm={{span: 4}} style={{textAlign: "left"}}>
                            <Card>
                                <Card.Body>
                                    <Card.Title style={{ display: "inline-block", fontSize: '30px', textAlign: "center"}} >Unos ocjene </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">U ovoj formi možete unijeti ocjenu pojedinačnom studentu</Card.Subtitle>
                                    <Form.Group as={Row} controlId = "index">
                                        <Col lg="6" style={{textAlign: "left"}} > 
                                        <Form.Label>Index:</Form.Label>
                                            <Form.Control 
                                                required 
                                                type="text" 
                                                placeholder="Unesi index"
                                            />
                                        <br/>
                                        <Button variant="primary" type="submit" style ={{padding:'10px'}} onClick={this.handleClick} >Pretrazi</Button> 
                                        </Col>   
                                    </Form.Group>
                                    <Form.Row>
                                        <Col style={{textAlign: "center"}}>
                                            <label style={{ visibility: this.state.greskaVis}}>
                                                Pero Perić, 12345
                                            </label> 
                                        </Col>
                                    </Form.Row>
                                    <Form.Group as={Row} controlId = "formNoviOpis">
                                        <Col style={{textAlign: "left"}}>
                                                    <Form.Label>Ocjena:</Form.Label>
                                                    <Form.Control 
                                                        required 
                                                        type="text" 
                                                        placeholder="Unesi ocjenu"
                                                    />
                                                    <br/>
                                                    <Button variant="primary" type="submit" onClick={this.handleCli}>Unesi </Button> 
                                        </Col>
                                        <Col></Col>
                                    </Form.Group>
                                    <Form.Row>
                                        <Col style={{textAlign: "center"}}>
                                            <br/>
                                            <label style={{ visibility: this.state.greska}}>
                                                Uspješan unos
                                            </label>
                                            <br/>
                                            <label style={{ visibility: this.state.greska}}>
                                                Pero Perić, 12345
                                            </label>
                                            <br/>
                                            <label style={{ visibility: this.state.greska}}>
                                                10
                                            </label>
                                            <br/>
                                        </Col>
                                    </Form.Row>
                                </Card.Body>  
                            </Card>
                        </Col>
                    </Row>
            </Container>
        );
    }
}
export default Ocjena;