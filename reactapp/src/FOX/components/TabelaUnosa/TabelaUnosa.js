import React, {Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Poruka from '../Poruka/Poruka'

class TabelaUnosa extends Component {
    state = {
        validated: false,
        greskaBaza: 0
    }
    //this.ocjena=React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
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
           
            let reqBody = {
              /*  idStudent: 2, //pristup lokalnom storage-u
                idPredmet: 64,
                idAkademskaGodina: 11,
                ocjena: this.ocjena.current.value*/
            };
            
            //if(this.ocjena.current.value>10 || this.ocjena.current.value<6)   this.setState({ greskaBaza: 1 });
            
            axios.post('', reqBody)
            .then(() => {
                this.setState({greskaBaza: 2});
            })
            .catch(()=> {
                this.setState({greskaBaza: 1});
            });
        }
        this.setState({ validated: true });
    }
     
    render() {
        return(
            <div class="card" style={{margin: "0"}}>
                <div class="card-body">
                    <Poruka
                    greska={this.state.greskaBaza}
                    naslovUspjeh="Bodovi sačuvani!"
                    naslovGreska="Bodovi nisu sačuvani!"
                    opisUspjeh="Bodovi su dodani u bazu podataka."
                    opisGreska="Baza podataka nije dostupna."
                    />
                    <h4 class="card-title text-center" >Unos bodova ispita</h4>
                    <h6 class="card-subtitle mb-2 text-muted text-center">Omogućava pretraživanje studenata i unos bodova.</h6>
                    <br/>
                    <div>
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Row className="justify-content-center">
                                <Form.Group as={Col} lg="4" md="6" sm="8" xs="12" style={{textAlign: "left"}}>
                                    <select class="custom-select">
                                        <option selected="">Otvori za odabir ispita</option>
                                        <option value="1">I parcijalni, 20.4.2019.</option>
                                        <option value="2">II parcijalni, 20.6.2019.</option>
                                        <option value="3">Popravni I parcijalni, 1.7.2019.</option>
                                        <option value="3">Popravni II parcijalni, 1.7.2019.</option>
                                        <option value="3">Integralni ispit 1.9.2019.</option>
                                    </select>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row className="justify-content-center">
                                <Col style={{textAlign: "left"}} lg="4" md="6" sm="8" xs="12">
                                    <Form.Label> Index: </Form.Label>
                                    <Form.Control type="text" name="name">
                                    </Form.Control>
                                </Col>
                            </Form.Row>

                            <Form.Row style={{paddingTop: "10px"}} className="justify-content-center">
                                <Col lg="4" md="6" sm="8" xs="12" style={{textAlign: "right"}}>           
                                    <Button onClick={this.handleClick}> Pretraži </Button>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col style={{textAlign: "center"}}>
                                    <br/>
                                    {/* Ovdje ubaciti prikaz pretraživanja */}
                                </Col>
                            </Form.Row>

                            <hr/>

                            <Form.Row className="justify-content-center">
                                <Col style={{textAlign: "left"}} lg="4" md="6" sm="8" xs="12">
                                    <Form.Label> Bodovi: </Form.Label>
                                    <Form.Control type="text" name="name">
                                    </Form.Control>
                                </Col>
                            </Form.Row>

                            <Form.Row style={{paddingTop: "10px"}} className="justify-content-center">
                                <Col lg="4" md="6" sm="8" xs="12" style={{textAlign: "right"}}>
                                    <Button type="submit"> Unesi </Button>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col style={{textAlign: "center"}}>
                                    <br/>
                                    {/* Ovdje ubaciti prikaz unosa */}
                                </Col>
                            </Form.Row>
                    </Form>
                    </div>    
                </div>
            </div>
            
        );
    }
}
export default TabelaUnosa;