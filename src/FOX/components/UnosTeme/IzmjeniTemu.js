import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function Poruka(props) {
    const greska = props.greska;
    if (greska==1) {
        return <Alert variant='danger'>
            <Alert.Heading>Tema nije izmijenjena!</Alert.Heading>
            <p>Došlo je do greške sa bazom</p>
        </Alert>
    }
    if (greska===2) {
        return <Alert variant='success'>
            <Alert.Heading>Uspješno izmijenjena tema!</Alert.Heading>
            <p>Kreirana je nova tema i uspješno dodana u bazu podataka.</p>
        </Alert>
    }
    return ""
}

class IzmjeniTemu extends Component {
    constructor(props) {
        super(props);
        //this.handleSubmit = this.handleSubmit.bind(this);  
        this.state = { 
            validated: false,
            greskaBaza: 0,
            id: undefined,
            naziv: undefined,
            opis: undefined
         }
        /* 1. Initialize Ref */
        this.nazivTeme = React.createRef();
        this.opisTeme = React.createRef();
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        console.log(event.currentTarget.checkValidity());
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            //Poziv API-a
            //Promise
            /* 3. Get Ref Value here (or anywhere in the code!) */
            console.log(this.nazivTeme.current.value);
            console.log(this.opisTeme.current.value);
            let reqBody = {
                naziv: this.nazivTeme.current.value,
                opis: this.opisTeme.current.value
            };
            const {id} = this.state;
            axios.put('http://localhost:31906/api/fox/temeZavrsnih/izmjeniTemu/'+id, reqBody)
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

    componentDidMount() {
        const {id} = this.props.match.params;
        const {naziv} = this.props.match.params;
        const {opis} = this.props.match.params;
        console.log(id + " " + naziv + " " + opis);
        this.setState({naziv: naziv});
        this.setState({opis: opis});
        this.setState({id: id});
    }

    render() {
        const {validated} = this.state;
        const {greskaBaza} = this.state;
        const {naziv} = this.state;
        const {opis} = this.state;
        //console.log(greskaBaza);
        return (
            <div className="footerDno" style={{paddingBottom: "50px"}}>
                <Container fluid style={{padding:"0", margin: "0"}}>
                    
                <Row noGutters>
                    <Col md="3">
                        <Header isPocetna={false}/>
                    </Col>
                    
                    <Col style={{textAlign: "left"}}>
                        <div style={{padding: "15px"}}>
                            <Poruka greska={greskaBaza} />
                            <Card style={{margin: "0"}}>
                                <Card.Body>
                                    <Card.Title className="text-center">Izmjena teme za završni rad</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted text-center">U ovoj formi možete izmjeniti završni rad na predmetu </Card.Subtitle>
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
                                                    ref={this.nazivTeme}
                                                    required 
                                                    type="text" 
                                                    defaultValue={naziv}
                                                />
                                                <Form.Control.Feedback>Validan naziv!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">Unesite naziv</Form.Control.Feedback>
                                            </Col>
                                        </Form.Group> 

                                        <Form.Group as={Form.Row} controlId = "formNoviOpis" className="justify-content-center">
                                            <Col style={{textAlign: "left"}} lg="4" md="6" sm="8" xs="12">
                                                <Form.Label>Opis:</Form.Label>
                                                <Form.Control 
                                                    ref={this.opisTeme} 
                                                    required 
                                                    type="text" 
                                                    defaultValue={opis}
                                                />
                                                <Form.Control.Feedback>Validan opis!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">Unesite opis</Form.Control.Feedback>
                                            </Col>
                                        </Form.Group> 

                                        <Form.Row className="justify-content-center">
                                            <Col  style={{textAlign: "right"}} lg="4" md="6" sm="8" xs="12">
                                                <Button variant="primary" type="submit" style={{marginRight: "10px"}}>Izmjeni</Button>
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
        <Footer/>
    </div>);
    }
}

export default IzmjeniTemu;