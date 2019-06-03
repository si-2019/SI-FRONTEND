import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../ZajednickiCSS.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


function Poruka(props) {
    const greska = props.greska;
    if (greska==1) {
        return <Alert variant='danger'>
            <Alert.Heading>Nova tema nije kreirana!</Alert.Heading>
            <p>Došlo je do greške sa bazom</p>
        </Alert>
    }
    if (greska===2) {
        return <Alert variant='success'>
            <Alert.Heading>Uspješno kreirana nova tema!</Alert.Heading>
            <p>Kreirana je nova tema i uspješno dodana u bazu podataka.</p>
        </Alert>
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
                idProfesora: 246,
                idPredmeta: 4
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
            <div id="unosNoveTeme" className="footerDno">
                <Header isPocetna={false}/>
                    <Container fluid>
                        <Row>
                            <Col style={{textAlign: "center"}}>
                                <br/>
                                <h4>Nova tema za završni rad</h4>
                                <br/>
                            </Col>
                        </Row>

                        <Row>
                            <Col style={{textAlign: "center"}}>
                                <Poruka greska={greskaBaza} />
                                <Form 
                                    noValidate 
                                    validated={validated}
                                    onSubmit = {e => this.handleSubmit(e)}
                                >
                                    <Form.Group as={Row} controlId = "formNoviNaziv" style={{textAlign: "right"}}>
                                        <Col lg="4" style={{textAlign: "right"}}>
                                            <Form.Label>Naziv:</Form.Label>
                                        </Col>
                                        <Col lg="4">
                                            <Form.Control 
                                                ref={this.nazivNoveTeme}
                                                required 
                                                type="text" 
                                                placeholder="Naziv nove teme"
                                            />
                                        </Col>
                                        <Col lg="4">
                                            <Form.Control.Feedback>Validan naziv!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">Unesite naziv</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId = "formNoviOpis">
                                        <Col lg="4" style={{textAlign: "right"}}>
                                            <Form.Label>Opis:</Form.Label>
                                        </Col>
                                
                                        {/*  /* 2. Attach Ref to FormControl component */}

                                        <Col lg="4">
                                            <Form.Control 
                                                ref={this.opisNoveTeme} 
                                                required 
                                                type="text" 
                                                placeholder="Opis nove teme"
                                            />
                                        </Col>
                                        <Col lg="4">
                                            <Form.Control.Feedback>Validan opis!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">Unesite opis</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Row>
                                        <Col  style={{textAlign: "right"}}>
                                            <Button variant="primary" type="submit">Dodaj</Button> 
                                        </Col>
                                        <Col  style={{textAlign: "left"}}>
                                            <Button variant="secondary" href='unosTeme'>Nazad</Button> 
                                        </Col>
                                    </Form.Row>
                                                              
                                </Form>
                            </Col>
                        </Row>
                    
                </Container>
                <Footer />
            </div>
        );
    }
}

export default NovaTema;