import React, { Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

function Poruka(props) {
    const greska = props.greska;
    const student= props.student;
    if (greska === 1) {
        return (
            <div class="alert alert-dismissible alert-danger">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Nespješan unos!</strong> <br/> Došlo je do greške sa bazom.
            </div>
        );
    }
    if (greska === 2) {
        return (
            <div class="alert alert-dismissible alert-success">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Uspješno unesena ocjena!</strong> <br/> Ocjena je uspješno dodana u bazu podataka.
            </div>
        );
    }
    return ""
}

class Ocjena extends Component {
    constructor(props){
        super(props);
        this.state ={
            validated: false,
            greskaBaza: 0
        }
        this.ocjena=React.createRef();
        this.indeks=React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("Clicked");
        //Poziv apija /fox/getStudentInfo/:id
        axios.get("http://localhost:31906/fox/getStudentInfo/1").then((res)=> {
            this.setState({ student: res.data });
        })
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
                idStudent: 2, //pristup lokalnom storage-u
                idPredmet: window.localStorage.getItem("idPredmeta") != null ? window.localStorage.getItem("idPredmeta") : 64,
                idAkademskaGodina: 11,
                ocjena: this.ocjena.current.value
            };
            if(this.ocjena.current.value>10 || this.ocjena.current.value<6)   this.setState({ greskaBaza: 1 });
            console.log(this.ocjena.current.value);
            axios.post('http://localhost:31906/api/fox/ocjene/', reqBody)
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
        const {validated} = this.state.validated;
        const {greskaBaza}= this.state.greskaBaza;
        const student = this.state.student;
        let rezPretrage;
        if (student!=undefined) {
            rezPretrage = <div>
                <Col style={{textAlign: "center"}}>
                    <div class="alert alert-dismissible alert-success">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        Student sa indeksom {this.indeks.current.value} je pronađen! <br></br>
                        {student.ime + " " + student.prezime}
                    </div>
                </Col>
                
            </div>
        }
        return (
            <div class="card" style={{margin: "0", marginBottom: "50px"}}>
                <div class="card-body">
                    <h4 class="card-title text-center" >Unos ocjene</h4>
                    <h6 class="card-subtitle mb-2 text-muted text-center">Omogućava pretraživanje studenata i unos ocjene.</h6>
                    <br/>
                    <div>
                        <Form 
                            noValidate 
                            validated={validated}
                            onSubmit = {e => this.handleSubmit(e)}
                        >

                            <Form.Row className="justify-content-center">
                                <Col style={{textAlign: "left"}} lg="4" md="6" sm="8" xs="12">
                                    <Form.Label> Index: </Form.Label>
                                    <Form.Control  ref={ this.indeks } required type="text" name="name">
                                    </Form.Control>
                                    <Form.Control.Feedback> Validan indeks </Form.Control.Feedback> 
                                    <Form.Control.Feedback type= "invalid"> Indeks nije validan </Form.Control.Feedback>
                                </Col>
                            </Form.Row>

                            <Form.Row style={{paddingTop: "10px"}} className="justify-content-center">
                                <Col lg="4" md="6" sm="8" xs="12" style={{textAlign: "right"}} >
                                    <Button onClick={this.handleClick}> Pretrazi </Button>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col style={{textAlign: "center"}}>
                                    <br/>
                                    <label>
                                    {rezPretrage}
                                    </label> 
                                </Col>
                            </Form.Row>

                            <hr/>

                            <Form.Row className="justify-content-center">
                                <Col style={{textAlign: "left"}} lg="4" md="6" sm="8" xs="12">
                                    <Form.Label> Ocjena: </Form.Label>
                                    <Form.Control  ref={ this.ocjena } required type="text" name="name">
                                    </Form.Control>
                                    <Form.Control.Feedback> Validna ocjena </Form.Control.Feedback> 
                                    <Form.Control.Feedback type= "invalid"> Ocjena nije validna </Form.Control.Feedback> 
                                </Col>
                            </Form.Row>

                            <Form.Row style={{paddingTop: "10px"}} className="justify-content-center">
                                <Col lg="4" md="6" sm="8" xs="12" style={{textAlign: "right"}}>
                                <Button variant="primary" type="submit"> Unesi </Button>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col style={{textAlign: "center", padding: "10px"}}>
                                    <Poruka greska={greskaBaza} />
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
export default Ocjena;