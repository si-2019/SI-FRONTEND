import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../ZajednickiCSS.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


function Poruka(props) {
    const greska = props.greska;
    if (greska==1) {
        return (
            <div class="alert alert-dismissible alert-danger">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Nova tema nije kreirana!</strong> <br/> Došlo je do greške sa bazom.
            </div>
        );
    }
    if (greska===2) {
        return (
            <div class="alert alert-dismissible alert-success">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Uspješno kreirana nova tema!</strong> <br/> Kreirana je nova tema i uspješno dodana u bazu podataka.
            </div>
        );
    }
    return ""
}

class NovaTema extends Component {
    constructor(props) {
        super(props);
        //this.handleSubmit = this.handleSubmit.bind(this);  
        this.state = { 
            validated: false,
            greskaBaza: 0
         }
        /* 1. Initialize Ref */
        this.nazivNoveTeme = React.createRef();
        this.opisNoveTeme = React.createRef();
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        console.log(event.currentTarget.checkValidity());
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            //Poziv API-a
            //Promise
            /* 3. Get Ref Value here (or anywhere in the code!) */
            console.log(this.nazivNoveTeme.current.value);
            console.log(this.opisNoveTeme.current.value);
            let reqBody = {
                naziv: this.nazivNoveTeme.current.value,
                opis: this.opisNoveTeme.current.value,
                idProfesora: 255, //Iz local storega treba!
                idPredmeta: 64
            };
            axios.post('http://localhost:31906/api/fox/temeZavrsnih/novaTema', reqBody)
            .then((res) => {
                console.log(res);
                this.setState({greskaBaza: 2});
            })
            .catch((err)=> {
                console.log("Greska:" + err);
                this.setState({greskaBaza: 1});
            });
        }
        this.setState({ validated: true });
        event.preventDefault();
        event.stopPropagation();


        
    }


    render() {
        const {validated} = this.state;
        const {greskaBaza} = this.state;
        //console.log(this.state);
        //console.log(greskaBaza);
        return (
            <div id="unosNoveTeme" className="footerDno" style={{paddingBottom: "50px"}}>
                    <Container fluid style={{padding:"0", margin: "0"}}>
                    
                        <Row noGutters>
                            <Col md="3">
                                <Header isPocetna={false}/>
                            </Col>

                            <Col style={{textAlign: "left"}}>
                                <div style={{padding: "15px"}}>
                                <Card style={{margin: "0"}}>
                                    <Card.Body>
                                            <Poruka greska={greskaBaza} />
                                            <Card.Title className="text-center">Nova tema za završni rad</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted text-center">U ovoj formi možete kreirati novu temu za završni rad na predmetu </Card.Subtitle>
                                            <br/>
                                            <Form 
                                                noValidate 
                                                validated={validated}
                                                onSubmit = {e => this.handleSubmit(e)}
                                            >
                                                <Form.Group as={Form.Row} controlId = "formNoviNaziv" className="justify-content-center">
                                                    <Col style={{textAlign: "left"}} lg="4" md="6" sm="8" xs="12">
                                                        <Form.Label>Naziv:</Form.Label>
                                                        <Form.Control 
                                                            ref={this.nazivNoveTeme}
                                                            required 
                                                            type="text" 
                                                            placeholder="Naziv nove teme"
                                                        />
                                                        <Form.Control.Feedback>Validan naziv!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">Unesite naziv</Form.Control.Feedback>
                                                    </Col>
                                                </Form.Group>
                                                
                                                <Form.Group as={Form.Row} controlId = "formNoviOpis" className="justify-content-center">
                                                    <Col style={{textAlign: "left"}} lg="4" md="6" sm="8" xs="12">
                                                        <Form.Label>Opis:</Form.Label>
                                                        <Form.Control 
                                                            ref={this.opisNoveTeme} 
                                                            required 
                                                            type="textarea" 
                                                            placeholder="Opis nove teme"
                                                        />
                                                        <Form.Control.Feedback>Validan opis!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">Unesite opis</Form.Control.Feedback>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Row className="justify-content-center">
                                                    <Col lg="4" md="6" sm="8" xs="12" style={{textAlign: "right"}}>
                                                        <Button variant="primary" type="submit" style={{marginRight: "10px"}}>Dodaj</Button> 
                                                        <Button variant="secondary" href='unosTeme'>Nazad</Button> 
                                                    </Col>
                                                </Form.Row>
                                                                        
                                            </Form>
                                        </Card.Body>  
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    
                </Container>
                <Footer />
            </div>
        );
    }
}

export default NovaTema;