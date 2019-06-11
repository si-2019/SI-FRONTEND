import React, {Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
class TabelaUnosa extends Component {
    constructor(props){
        super(props);
        this.state ={
            validated: false,
            greskaBaza: 0
        }
        this.ocjena=React.createRef();
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
           
            console.log(this.ocjena.current.value);
            let reqBody = {
              /*  idStudent: 2, //pristup lokalnom storage-u
                idPredmet: 64,
                idAkademskaGodina: 11,
                ocjena: this.ocjena.current.value*/
            };
            if(this.ocjena.current.value>10 || this.ocjena.current.value<6)   this.setState({ greskaBaza: 1 });
            console.log(this.ocjena.current.value);
            axios.post('', reqBody)
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
    }
     
    render() {
        return(
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title text-center" >Unos bodova ispita</h4>
                    <h6 class="card-subtitle mb-2 text-muted text-center">Omogućava pretraživanje studenata i unos bodova.</h6>
                    <br/>
                    <div>
                        <Form>

                            <Form.Row>
                                <Col></Col>
                                <Form.Group as={Col} sm={{span: 4}}>
                                    <select class="custom-select">
                                        <option selected="">Otvori za odabir ispita</option>
                                        <option value="1">I parcijalni, 20.4.2019.</option>
                                        <option value="2">II parcijalni, 20.6.2019.</option>
                                        <option value="3">Popravni I parcijalni, 1.7.2019.</option>
                                        <option value="3">Popravni II parcijalni, 1.7.2019.</option>
                                        <option value="3">Integralni ispit 1.9.2019.</option>
                                    </select>
                                </Form.Group>
                                <Col></Col>
                            </Form.Row>

                            <Form.Row>
                                <Col style={{textAlign: "left"}}>
                                    <Form.Label> Index: </Form.Label>
                                    <Form.Control type="text" name="name">
                                    </Form.Control>
                                </Col>
                            </Form.Row>

                            <Form.Row style={{paddingTop: "10px"}}>
                                <Col></Col>
                                <Col md="auto" style={{textAlign: "right"}}>           
                                    <Button onClick={this.handleClick}> Pretrazi </Button>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col style={{textAlign: "center"}}>
                                </Col>
                            </Form.Row>

                            <hr/>

                            <Form.Row>
                                <Col style={{textAlign: "left"}}>
                                    <Form.Label> Bodovi: </Form.Label>
                                    <Form.Control type="text" name="name">
                                    </Form.Control>
                                </Col>
                            </Form.Row>

                            <Form.Row style={{paddingTop: "10px"}}>
                                <Col></Col>
                                <Col md="auto" style={{textAlign: "right"}}>
                                    <Button onClick={this.handleCli}> Unesi </Button>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col style={{textAlign: "center"}}>
                                    <br/>
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